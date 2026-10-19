# studio

Build helpers that don't ship with the site.

```
studio/
  resume-pdf.mjs   prints the /resume/ page to public/resume.pdf (A4, one page)
```

## Regenerate the résumé PDF

Start the site (`npm run dev` or `npm run preview`), then:

```sh
node studio/resume-pdf.mjs                                # uses http://localhost:4321/resume/
node studio/resume-pdf.mjs http://127.0.0.1:4330/resume/  # or pass the URL
```

`playwright-core` isn't a dependency of this repo; the script falls back to
`F:/Projects/prod/node_modules/playwright-core`. Point `PLAYWRIGHT_CORE` at another
`playwright-core/index.mjs` if that path moves.
