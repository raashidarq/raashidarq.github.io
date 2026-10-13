// Prints the /resume/ page to public/resume.pdf (A4, one page).
// Usage: start the site (npm run dev or npm run preview), then:
//   node studio/resume-pdf.mjs [http://localhost:4321/resume/]
import { existsSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

async function chromium() {
  try { return (await import("playwright-core")).chromium; } catch {}
  const fallback = process.env.PLAYWRIGHT_CORE || "F:/Projects/prod/node_modules/playwright-core/index.mjs";
  if (!existsSync(fallback)) throw new Error("playwright-core not found. Set PLAYWRIGHT_CORE to its index.mjs, or install playwright-core.");
  return (await import(pathToFileURL(fallback).href)).chromium;
}

const url = process.argv[2] || "http://localhost:4321/resume/";
const browser = await (await chromium()).launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
const pdf = await page.pdf({ format: "A4", preferCSSPageSize: true, printBackground: true, tagged: true });
await browser.close();
writeFileSync(new URL("../public/resume.pdf", import.meta.url), pdf);
console.log(`Wrote public/resume.pdf (${pdf.length} bytes) from ${url}`);
