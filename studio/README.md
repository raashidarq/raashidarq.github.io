# studio

Source for the product marketing images and silent product films in
`public/products/<slug>/`. Nothing in here ships with the Astro site.

```
studio/
  lib/engine.js     deterministic timeline: easing, keyframes, kinetic text, camera, rings, callouts
  lib/engine.css    device frames (phone, browser, desktop window), rings, callouts, chips
  lib/stills.js     builders for still compositions
  lib/fonts.css     Instrument Serif + Manrope (Google Fonts)
  assets/           Tally logo (copied from the Tally repo)
  films/<slug>.html one film per product; exposes window.seek(t)
  stills/<slug>.html hero, feature-1..3 and og shots for each product
  render.mjs        renders everything with Playwright + ffmpeg + sharp
```

Slugs: `keepclose`, `cropcare`, `smartdrive`, `tally`. All UI comes from the real
screenshots in `public/images/`; the compositions only frame and animate them.

## Re-render

Requirements: Node, Python with `imageio-ffmpeg` (`pip install imageio-ffmpeg`), and
Playwright's Chromium (already cached in `%LOCALAPPDATA%\ms-playwright`).
`playwright-core` is not a dependency of this repo; the script falls back to
`F:/Projects/prod/node_modules/playwright-core`. Point `PLAYWRIGHT_CORE` at another
`playwright-core/index.mjs` if that path moves. `FFMPEG` overrides the ffmpeg binary.

```sh
node studio/render.mjs keepclose            # stills + film + poster
node studio/render.mjs all                  # every product
node studio/render.mjs cropcare --stills    # only hero/feature/og
node studio/render.mjs tally --film         # film.mp4 + film-poster.jpg
node studio/render.mjs tally --poster       # poster frame only
node studio/render.mjs smartdrive --sheet=4,10,16 --out=studio/.preview   # contact sheet for review (git-ignored)
```

Frames are piped straight into ffmpeg (libx264, crf 20, yuv420p, +faststart, no
audio), so no frame folders are left behind. A film takes about 5 minutes.

## Preview while editing

Open a film in a browser: `studio/films/keepclose.html#play` loops it in real time,
`#t=12.5` freezes it at a time. Stills: `studio/stills/tally.html?shot=hero`.
Fonts load from Google Fonts, so previews and renders need a network connection.

## Content rules

On-screen copy only states facts from `src/content/projects/<slug>.md`. No people,
faces or characters are drawn; the only photo used is the owner's TRACE photo in the
CropCare film. Status end cards: KeepClose and Tally "In development", CropCare
"Working MVP · Top 10, Ascentic AI Launchpad", SmartDrive "Prototype · Live demo
with fictional data".
