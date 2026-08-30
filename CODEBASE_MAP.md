# Codebase Map (`CODEBASE_MAP.md`)

> **Persistent Architecture Reference**: This document describes the structure, components, data flows, routing, and deployment workflow for Raashid Arquil's developer portfolio and case study platform.

---

## 1. Architectural Overview

- **Framework**: [Astro 5](https://astro.build) (Static output, islands architecture)
- **Language**: TypeScript (Strict type checking, Zod schemas)
- **Styling**: Tailwind CSS + Custom CSS Design Tokens (`src/styles/tokens.css`)
- **Content Engine**: Astro Content Collections (`src/content.config.ts`)
- **Deployment**: Static HTML/CSS hosting (GitHub Pages)

---

## 2. Directory Structure

```
portfolio-redesign/
├── .github/                     # GitHub Actions CI/CD workflows
├── public/                      # Static assets served at root
│   ├── images/                  # Project screenshots, portraits, and SVGs
│   ├── cv.pdf                   # Downloadable CV PDF
│   └── robots.txt               # Search engine directives
├── src/
│   ├── assets/                  # Bundled assets (processed by Vite)
│   ├── components/              # Modular UI components
│   │   ├── FlagshipHero.astro   # High-impact launch showcase for CropCare
│   │   ├── Footer.astro         # Understated semantic footer
│   │   ├── Navbar.astro         # Sticky header with mobile drawer & theme switcher
│   │   ├── NowWidget.astro      # Current engineering focus widget
│   │   ├── ProjectCard.astro    # Editorial project card with status indicators
│   │   ├── StatusBadge.astro    # Semantic status badge (In Development, Live, etc.)
│   │   ├── TechPill.astro       # Monospace technology badge
│   │   ├── ThemeToggle.astro    # Client-side theme switcher (zero layout shift)
│   │   └── YouTubeEmbed.astro   # Zero-runtime click-to-load video facade
│   ├── content/
│   │   ├── projects/            # Markdown case studies with structured frontmatter
│   │   │   ├── cropcare.md      # Flagship mobile + ML case study
│   │   │   ├── smartdrive.md
│   │   │   ├── weather-app-dashboard.md
│   │   │   ├── grifindo-payroll.md
│   │   │   └── malcolm-photography.md
│   │   └── writing/             # Technical articles & architecture logs
│   │       ├── on-device-ml-cropcare.md
│   │       ├── flutter-bloc-architecture.md
│   │       └── practical-web-performance.md
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Base document layout with SEO, OpenGraph, JSON-LD
│   │   ├── CaseStudyLayout.astro# Editorial layout for deep project case studies
│   │   └── WritingLayout.astro  # Longform typography layout for articles
│   ├── pages/
│   │   ├── 404.astro            # Custom 404 recovery page
│   │   ├── about.astro          # About narrative, values, credentials & CV
│   │   ├── index.astro          # Homepage (Hero, Flagship, Selected, Writing)
│   │   ├── rss.xml.ts           # Auto-generated RSS feed endpoint
│   │   ├── work/
│   │   │   ├── [...slug].astro  # Dynamic project case study router
│   │   │   └── index.astro      # Work & case studies archive
│   │   └── writing/
│   │       ├── [...slug].astro  # Dynamic article router
│   │       └── index.astro      # Technical writing archive
│   ├── styles/
│   │   ├── global.css           # Base styles, focus states, reduced-motion
│   │   └── tokens.css           # Semantic color tokens for light & dark themes
│   └── content.config.ts        # Content Collections schema definition
├── astro.config.mjs             # Astro configuration (Tailwind, Sitemap)
├── design.md                    # Authoritative visual design specification
├── package.json                 # Project dependencies & build scripts
├── README.md                    # Developer setup & publishing instructions
├── tailwind.config.mjs          # Tailwind theme mapping to CSS variables
└── tsconfig.json                # TypeScript strict configuration & path aliases
```

---

## 3. Content Architecture & Schemas

Defined in `src/content.config.ts`:

### `projects` Collection
- `title` (string)
- `shortDescription` (string)
- `fullDescription` (optional string)
- `date` (string, e.g. "2025–2026")
- `role` (string)
- `status` (`'concept' | 'in-development' | 'beta' | 'live' | 'archived'`)
- `featured` (boolean)
- `order` (number)
- `technologies` (string array)
- `category` (string)
- `githubUrl` / `liveUrl` / `productUrl` / `demoUrl` (optional URLs)
- `youtubeId` (optional YouTube video ID for click-to-load embed)
- `thumbnail` / `heroImage` (optional image paths)
- `architectureHighlights` (optional string array)

### `writing` Collection
- `title` (string)
- `description` (string)
- `date` (string)
- `updatedDate` (optional string)
- `tags` (string array)
- `readingTime` (string)
- `draft` (boolean)
- `featured` (boolean)

---

## 4. How to Add New Content

### Adding a New Project
Create a Markdown file under `src/content/projects/your-project-slug.md` with the required frontmatter. It will automatically appear in `/work`, on the homepage (if `featured: true`), and generate a dedicated case study page at `/work/your-project-slug`.

### Adding a New Article
Create a Markdown file under `src/content/writing/your-article-slug.md` with the required frontmatter. It will automatically generate `/writing/your-article-slug` and update the RSS feed at `/rss.xml`.

---

## 5. Development & Deployment

```bash
# Start local development server (port 4321)
npm run dev

# Run TypeScript & schema verification
npm run check

# Build static production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```
