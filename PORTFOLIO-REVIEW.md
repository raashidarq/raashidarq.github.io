# Portfolio review — 13 Oct 2026

> **Note (13 Oct 2026):** §1 "Positioning" is superseded by FREELANCE-REVIEW.md. You are intentionally positioned as an indie developer and freelancer. Everything else stands.

Build: `npm run build` passes (0 errors/warnings, 16 pages, no broken internal links). The problems are positioning, content and asset hygiene, not compilation.

## 1. Positioning (fix first)
- **The hero reads as freelancer, not job candidate.** `src/pages/index.astro:13`: "I build web and mobile applications… I'm also open to freelance projects". CTAs are "Explore the work" / "Discuss a project". "Engineering roles" only appears in small print (`index.astro:17`, `contact.astro:19`).
- **Strongest signals are absent above the fold.** These are the First-Class degree, the Top 10 finish in AI Launchpad, the hackathon win and the stack.
- **No CV button anywhere above the footer.** LinkedIn only appears in the footer and on Contact.

Proposed hero:
> **Raashid Arquil — software engineer building mobile and web products.**
> First-Class Computer Science graduate. I build offline-first Android, Flutter and React apps; my crop-disease app CropCare placed Top 10 in Ascentic's AI Launchpad.
> Open to graduate / junior engineering roles — Kandy, remote or hybrid.
> [View projects] [Download CV] · GitHub · LinkedIn
> *Currently: building KeepClose (Kotlin/Compose) · collaborating on a Next.js platform.*

## 2. Logical inconsistencies
| Where | Problem |
|---|---|
| `about.astro:9` | "alongside continuing study". You've graduated. |
| `about.astro:8` | Degree shown without "First Class" or a date; CIM shown as "Also studied". The CV says PG Diploma, Merit. |
| `smartdrive.md:9` vs `:60` | Lists Node.js and Supabase, then says the demo is browser-local state with no server-enforced anything. The CV claims PayPal and auth. Pick one truth. |
| `cropcare.md` vs CV | The CV says you trained MobileNetV3; the site never says so. The site says "native share sheet" and the CV says "WhatsApp escalation". |
| KeepClose | Leads the site, absent from the CV. The cover says "A personal project" (`ProductCover.astro:9`); the frontmatter says "Independent product". |
| Grifindo | A C# desktop project, while you say you haven't built desktop apps. Built at `/work/grifindo-payroll` but linked from nowhere. |
| Weather dashboard | Marked `archived` but has a live URL; noindexed. |
| `public/documents/` | Holds a "Hackathon *Participation* Cert" while the site claims a category win. The PDFs are public but unlinked. |
| Dates | "19th Sep (2026)" next to "14 October 2023". Pick one format, e.g. "19 Sep 2026". |

## 3. Review notes leaked into public copy
These read like an auditor's notes, not a portfolio:
- `notes/index.astro:9,11`: "Preview collection… preview content for the Notes design… Publication dates remain unconfirmed."
- `index.astro:19`: every note card is labelled "/ Preview".
- `smartdrive.md:60`: "does not establish server-enforced booking conflicts, production authorization…"
- `cropcare.md:57,59,61,69,71,87,89`: limitations are restated about seven times.
- `services.astro:12`: "These describe how I intend to structure an engagement."
- `keepclose.md:67`: "**The exported ZIP is not encrypted.**" (in bold).

**Fix:** keep honesty, change the register. Give each project one short "Limitations & next steps" section written as engineering judgement. For example: "Next: encrypt ZIP exports with a user passphrase."

## 4. Projects
**Order:** CropCare → KeepClose → SmartDrive, then eHab as a credential line. Archive the weather and photography projects as GitHub links only, and drop Grifindo.

- **CropCare** is your best evidence: an outside result, ML and a repo.
  - Add the 1-minute video, the architecture diagram (`cropcare-architecture.png` exists but is unused) and the class list.
  - If you trained the model, add the dataset and validation accuracy.
- **KeepClose** is the best-written page, with directional relationship edges, the SQLCipher/media split and FTS escaping.
  - Add a 30–60s screen recording; you don't need a public repo.
  - A missing repo is fine, but say "private repo — happy to walk through it in interview".
- **SmartDrive** is thin, and "Why I want to revisit it" reads as an apology.
  - Rewrite it around what *you* built: problem, roles, data model, one hard decision.
  - Link the backend repo if it exists.
- **Writing:** three `draft: true` articles over-claim ("production Flutter apps", "background telemetry") in a voice unlike the site. Delete them, or fact-check the on-device ML one and publish it as a Note.

## 5. Information architecture
- **Nav order.** It is now Work, Services, Notes, About, Contact. Recommended: **Work · About · Notes · Resume · Contact**.
- **Services.** With no client history, the page invites scrutiny and splits the job-seeking message. Take it out of the nav and leave one line on Contact: "Also available for small freelance builds."
- **Notes.** Only show them once they are dated and non-preview. `rss.xml` is currently an empty feed.

## 6. Design
- The editorial direction is tasteful: warm paper, copper, Manrope and Instrument Serif. Keep it.
- **Typographic covers hide your work.** The KeepClose and CropCare cards show no app, so recruiters judge quality from a placeholder. Real screenshots already exist, so put one in a phone frame on each card. (`design.md:12` forbids this; reconsider.)
- **The H1 spends up to 7rem on your name.** Shrink it and give the space to the pitch.
- **Small type at 10–12px** for eyebrows and metadata (`global.css:38,239,266,426`). Raise it to at least 13px.
- **Internal links use "↗",** so every link looks external and identical. Use one primary button style for CTAs, and keep ↗ for external links.
- **Contrast** (`tokens.css`):
  - Light-mode muted text on the elevated background is 4.31:1, below the AA threshold of 4.5:1.
  - The strong border is 2.11:1, below the 3:1 needed for input borders.
- Add `<meta name="color-scheme" content="light dark">` to `BaseLayout.astro`.

## 7. Technical / hygiene
**High**
- **Every image ships twice (~18 MB dist).** `OptimizedImage.astro:14` globs all of `public/images`, so every original is bundled into `_astro/` and also copied to `/images`. Unused images are bundled too.
  - Fix: move the sources to `src/assets/` and glob there.
  - Delete the unused images: `malcom-gallery.png` (1.9 MB), `launchpad-venue.jpg`, `smartdrive-landing/thumbnail/roadmap/student-portal/instructor-portal.png`, `SmartDrive-landingpage.png`, `Grifindo-salarydetails-UI.png`, `linkedin-pic.jpg`, `logo.png`, `RA-Logo-1.svg`. Use `cropcare-architecture.png` on the CropCare page instead.
- **Delete `public/404.html`.** It is a leftover React SPA redirect script.
- **Delete `public/_redirects`.** GitHub Pages ignores it.
- **`public/documents/*.pdf` (4 MB)** is public and unlinked. Link it on purpose or remove it.
- **Delete `public/cv.pdf`.** It is identical to `resume.pdf`.

**Medium**
- **`contact.astro:51`:** `URLSearchParams` re-encodes the mailto body, so spaces become `+` ("Hello+Raashid"). Use `encodeURIComponent`.
- **Trailing slashes:** links use `/work` but canonicals use `/work/`, so every click is a 301 on GitHub Pages. Set `trailingSlash: 'always'` and update the links.
- **OG images exceed 1 MB** (`portfolio-sharing-thumbnail.png`, `launchpad-presenting.jpg`). Export at 1200×630 and under 300 KB.
- **`notes/[...slug].astro:13`:** the image alt text, size and caption are hard-coded. Add `imageAlt` and `imageCaption` to the schema.
- **`ProjectGallery.astro`:**
  - The modal loads the full PNG, not the WebP.
  - The arrow-key handler calls `preventDefault` even when a link has focus.
- **Unused Tailwind setup:** the typography plugin, the `Inter` font config and the `require()` in the ESM config.
- **Legacy files:** the writing collection, `WritingLayout`, `/writing` and the orphaned archive detail pages.
