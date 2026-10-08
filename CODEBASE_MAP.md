# Portfolio codebase map

Astro static site with TypeScript content collections, Tailwind utilities, and editorial CSS. GitHub Pages deployment remains in .github/workflows/deploy.yml.

## Pages
- src/pages/index.astro: introduction, selected products, services, earlier work, actual experiences.
- src/pages/work/index.astro: featured products and secondary archive.
- src/pages/work/[...slug].astro: collection-driven project pages.
- src/pages/services.astro: scoped service offers and intended delivery process.
- src/pages/contact.astro: email and prefilled enquiry prompts; no backend form.
- src/pages/about.astro: personal story, working method, background.
- src/pages/writing: retained routes; existing articles remain drafts.
- src/pages/404.astro: recovery page.

## Shared presentation
BaseLayout supplies metadata, font loading, theme initialization, skip link, navigation and footer. Navbar uses native details for its mobile menu. ThemeToggle updates theme and accessible state with optional localStorage persistence.

ProductCover renders abstract, typographic covers for KeepClose and CropCare. ProjectCard renders collection entries. ContactBanner provides the shared contact invitation. CaseStudyLayout renders metadata, story content, and static image galleries linking to full-size assets.

## Content and styling
src/content/projects contains Markdown project stories. Featured entries are KeepClose, CropCare, and SmartDrive. Earlier projects are available through the archive. Content schemas are in src/content.config.ts.

src/styles/tokens.css owns semantic light/dark colours. src/styles/global.css owns the editorial layout, type scale and breakpoints. tailwind.config.mjs remains for utility classes and legacy writing pages.

Assignment-Answers.md is user-owned source material. design.md describes the new direction. REDESIGN-NOTES.md records factual questions, assets and validation limits.

## Assets
public/images retains existing project images and portrait. portfolio-social.svg is editable source; portfolio-social.png is the broadly compatible social preview. KeepClose UI and approved event media are still to be supplied.

## Commands
npm run dev -- --host 127.0.0.1 starts a local preview.
npm run build performs Astro diagnostics and builds dist.
No new packages are required for the redesign.

## Second editorial revision

- Notes collection: src/content/notes; index and article routes: src/pages/notes. Preview entries have no dates, noindex metadata, and are excluded from RSS/sitemap.
- src/styles/editorial.css contains the second pass layout and responsive rules; BaseLayout imports it after global.css.
- SmartDrive uses actual sandbox screenshots and a CSS screenshot cover, with fictional-data labels.
- Legacy unused presentation components were removed.
- CONTENT-QUESTIONS.md tracks unverified facts; REVISION-STATUS.md records the remaining review and validation.
