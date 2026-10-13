// Render product films and stills from the HTML compositions in studio/.
//
//   node studio/render.mjs <slug|all> [--film] [--stills] [--poster] [--sheet=t1,t2 --out=dir]
//
// With no flags it renders everything for the slug. Frames are piped straight
// into ffmpeg, so no frame folders are left behind.
import { spawn, execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..");
const require = createRequire(join(repo, "package.json"));
const sharp = require("sharp");

async function loadChromium() {
  try { return (await import("playwright-core")).chromium; } catch {}
  const fallback = process.env.PLAYWRIGHT_CORE || "F:/Projects/prod/node_modules/playwright-core/index.mjs";
  if (!existsSync(fallback)) throw new Error("playwright-core not found. Set PLAYWRIGHT_CORE to its index.mjs, or install playwright-core.");
  return (await import(pathToFileURL(fallback).href)).chromium;
}

function ffmpegPath() {
  if (process.env.FFMPEG) return process.env.FFMPEG;
  return execFileSync("python", ["-c", "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"]).toString().trim();
}

const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith("--"));
const flags = new Set(args.filter((a) => a.startsWith("--")));
const all = !flags.size;
const want = (f) => all || flags.has(f);
const slugs = target === "all" || !target ? ["keepclose", "cropcare", "smartdrive", "tally"] : [target];

const kb = (p) => `${(statSync(p).size / 1024).toFixed(0)} KB`;

async function openComp(browser, file, w, h, query = "") {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  page.on("pageerror", (e) => console.error("  page error:", e.message));
  await page.goto(pathToFileURL(file).href + query);
  await page.waitForFunction(() => window.studioReady !== undefined);
  await page.evaluate(() => window.studioReady);
  return page;
}

async function renderFilm(browser, slug, { square = false } = {}) {
  const file = join(here, "films", `${slug}.html`);
  if (!existsSync(file)) return console.log(`  (no film for ${slug})`);
  const [W, H] = square ? [1080, 1080] : [1920, 1080];
  const page = await openComp(browser, file, W, H, square ? "?square" : "");
  const { duration, fps, poster } = await page.evaluate(() => ({ duration: window.DURATION, fps: window.FPS, poster: window.POSTER }));
  const outDir = join(repo, "public", "products", slug);
  mkdirSync(outDir, { recursive: true });
  const out = join(outDir, square ? "film-square.mp4" : "film.mp4");
  const frames = Math.round(duration * fps);
  const ff = spawn(ffmpegPath(), [
    "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-",
    "-an", "-c:v", "libx264", "-preset", "slow", "-crf", process.env.CRF || "20", "-tune", "animation",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-r", String(fps), out,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  const done = new Promise((r, j) => ff.on("close", (c) => (c === 0 ? r() : j(new Error("ffmpeg exited " + c)))));
  const t0 = Date.now();
  for (let i = 0; i < frames; i++) {
    await page.evaluate((t) => window.seek(t), i / fps);
    const buf = await page.screenshot({ type: "png" });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (i % 150 === 0) process.stdout.write(`  ${slug}${square ? " square" : ""}: frame ${i}/${frames}\r`);
  }
  ff.stdin.end();
  await done;
  console.log(`  ${out}  ${kb(out)}  (${frames} frames, ${((Date.now() - t0) / 1000).toFixed(0)}s)`);
  if (!square && want("--poster")) {
    await page.evaluate((t) => window.seek(t), poster);
    const png = await page.screenshot({ type: "png" });
    const p = join(outDir, "film-poster.jpg");
    await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(p);
    console.log(`  ${p}  ${kb(p)}`);
  }
  await page.close();
}

async function renderPoster(browser, slug) {
  const file = join(here, "films", `${slug}.html`);
  if (!existsSync(file)) return;
  const page = await openComp(browser, file, 1920, 1080);
  const poster = await page.evaluate(() => window.POSTER);
  await page.evaluate((t) => window.seek(t), poster);
  const png = await page.screenshot({ type: "png" });
  const p = join(repo, "public", "products", slug, "film-poster.jpg");
  mkdirSync(dirname(p), { recursive: true });
  await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(p);
  console.log(`  ${p}  ${kb(p)}`);
  await page.close();
}

async function renderStills(browser, slug) {
  const file = join(here, "stills", `${slug}.html`);
  if (!existsSync(file)) return console.log(`  (no stills for ${slug})`);
  const outDir = join(repo, "public", "products", slug);
  mkdirSync(outDir, { recursive: true });
  const probe = await openComp(browser, file, 1200, 800);
  const shots = await probe.evaluate(() => [...document.querySelectorAll(".shot")].map((s) => ({ id: s.id, w: +s.dataset.w, h: +s.dataset.h })));
  await probe.close();
  for (const s of shots) {
    const page = await openComp(browser, file, s.w, s.h, `?shot=${s.id}`);
    const png = await page.screenshot({ type: "png" });
    await page.close();
    if (s.id === "og") {
      const p = join(outDir, "og.jpg");
      let q = 86;
      do { await sharp(png).jpeg({ quality: q, mozjpeg: true }).toFile(p); q -= 6; } while (statSync(p).size > 245 * 1024 && q > 50);
      console.log(`  ${p}  ${kb(p)}`);
      continue;
    }
    const pngPath = join(outDir, `${s.id}.png`);
    await sharp(png).png({ compressionLevel: 9, palette: false }).toFile(pngPath);
    const webp = join(outDir, `${s.id}.webp`);
    await sharp(png).webp({ quality: 86, effort: 6 }).toFile(webp);
    console.log(`  ${pngPath}  ${kb(pngPath)}  |  webp ${kb(webp)}`);
  }
}

// --sheet=2,6,10 [--out=dir]: contact sheet of film frames at those times (for review)
async function renderSheet(browser, slug, times, outDir) {
  const page = await openComp(browser, join(here, "films", `${slug}.html`), 1920, 1080);
  const tiles = [];
  for (const t of times) {
    await page.evaluate((t) => window.seek(t), t);
    tiles.push(await sharp(await page.screenshot({ type: "png" })).resize(960, 540).png().toBuffer());
  }
  await page.close();
  const cols = 2, rows = Math.ceil(tiles.length / cols);
  const out = join(outDir, `${slug}-sheet.png`);
  mkdirSync(outDir, { recursive: true });
  await sharp({ create: { width: cols * 960 + 10, height: rows * 540 + (rows - 1) * 10, channels: 3, background: "#000" } })
    .composite(tiles.map((b, i) => ({ input: b, left: (i % cols) * 970, top: Math.floor(i / cols) * 550 })))
    .png().toFile(out);
  console.log("  sheet:", out);
}

const chromium = await loadChromium();
const browser = await chromium.launch();
const sheetArg = args.find((a) => a.startsWith("--sheet="));
if (sheetArg) {
  const outArg = args.find((a) => a.startsWith("--out="));
  await renderSheet(browser, slugs[0], sheetArg.slice(8).split(",").map(Number), outArg ? outArg.slice(6) : join(here, ".preview"));
  await browser.close();
  process.exit(0);
}
try {
  for (const slug of slugs) {
    console.log(`\n${slug}`);
    if (want("--stills")) await renderStills(browser, slug);
    if (want("--film")) await renderFilm(browser, slug);
    else if (flags.has("--poster")) await renderPoster(browser, slug);
  }
} finally {
  await browser.close();
}
