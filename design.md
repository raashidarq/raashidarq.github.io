# Design System Specification (`design.md`)

> **Authoritative Design Contract**: This document defines the exact visual and experiential standards for Raashid Arquil's personal engineering portfolio. Any modification or addition of components, pages, and typography must adhere strictly to the rules documented here.

---

## 1. Design Philosophy

The website operates as an **editorial technical monograph meets modern software product showcase**. It is not a standard developer resume or template. It communicates technical maturity, clarity of thought, system-level curiosity, and high engineering craftsmanship.

The visual tone is calm, precise, content-first, and distraction-free.

---

## 2. Brand Personality

- **Technical**: Demonstrates practical depth, architectural understanding, and system trade-offs.
- **Calm & Confident**: No shouting, no visual gimmickry, no unearned superlatives.
- **Thoughtful & Editorial**: Clean typographic hierarchy, generous white space, comfortable reading line-lengths.
- **Precise**: Strict alignment, purposeful borders, clear data points, honest project maturity statuses.
- **Modern & Human**: High-contrast, warm undertones, accessible, fast, and respectful of the reader's time.

---

## 3. Design Principles

1. **Content Before Decoration**: Every visual element must serve comprehension or navigational clarity.
2. **Evidence Over Claims**: Detailed case studies with architectural trade-offs, schemas, and lessons learned replace bulleted boast lists.
3. **Typography-Driven Hierarchy**: Headings, body text, metadata, and code blocks establish immediate visual structure without relying on colored boxes.
4. **Subtle Motion Only**: Animation is restricted to micro-transitions (under 200ms) for hover states, theme switches, and layout collapses. No background particle fields or looping scroll gimmicks.
5. **Zero Layout Shift & Aggressive Performance**: Static-first rendering, no unnecessary client JavaScript, lazy YouTube embeds, optimized responsive imagery.
6. **Accessibility by Default**: High contrast (WCAG AAA for text), full keyboard navigable flows, visible focus rings, explicit screen reader attributes, and `prefers-reduced-motion` compliance.

---

## 4. Color System & Design Tokens

The system uses CSS custom properties defined in `src/styles/tokens.css` with semantic light and dark themes.

### Light Mode (Warm Editorial Slate)
- **Background Base (`--color-bg`)**: `#fafaf9` (Stone 50)
- **Background Surface (`--color-bg-surface`)**: `#ffffff` (Pure White)
- **Background Elevated (`--color-bg-elevated`)**: `#f5f5f4` (Stone 100)
- **Background Code (`--color-bg-code`)**: `#f1f5f9` (Slate 100)
- **Foreground Primary (`--color-fg`)**: `#0f172a` (Slate 900 - high contrast)
- **Foreground Secondary (`--color-fg-secondary`)**: `#334155` (Slate 700)
- **Foreground Muted (`--color-fg-muted`)**: `#64748b` (Slate 500)
- **Foreground Inverse (`--color-fg-inverse`)**: `#ffffff`
- **Border Subtle (`--color-border-subtle`)**: `#e2e8f0` (Slate 200)
- **Border Strong (`--color-border-strong`)**: `#cbd5e1` (Slate 300)
- **Accent (`--color-accent`)**: `#2563eb` (Royal Blue - deliberate & technical)
- **Accent Hover (`--color-accent-hover`)**: `#1d4ed8`
- **Accent Muted (`--color-accent-muted`)**: `#eff6ff` (Blue 50)
- **Accent Subtle (`--color-accent-subtle`)**: `#dbeafe` (Blue 100)

### Dark Mode (Deep Technical Graphite)
- **Background Base (`--color-bg`)**: `#090d16` (Deep Midnight Slate)
- **Background Surface (`--color-bg-surface`)**: `#111827` (Gray 900)
- **Background Elevated (`--color-bg-elevated`)**: `#1e293b` (Slate 800)
- **Background Code (`--color-bg-code`)**: `#0d1117` (GitHub Dark Dimmed)
- **Foreground Primary (`--color-fg`)**: `#f8fafc` (Slate 50)
- **Foreground Secondary (`--color-fg-secondary`)**: `#cbd5e1` (Slate 300)
- **Foreground Muted (`--color-fg-muted`)**: `#94a3b8` (Slate 400)
- **Foreground Inverse (`--color-fg-inverse`)**: `#0f172a`
- **Border Subtle (`--color-border-subtle`)**: `#1e293b` (Slate 800)
- **Border Strong (`--color-border-strong`)**: `#334155` (Slate 700)
- **Accent (`--color-accent`)**: `#60a5fa` (Soft Sky Blue)
- **Accent Hover (`--color-accent-hover`)**: `#93c5fd`
- **Accent Muted (`--color-accent-muted`)**: `rgba(37, 99, 235, 0.15)`
- **Accent Subtle (`--color-accent-subtle`)**: `rgba(37, 99, 235, 0.25)`

### Status Indicator Colors
- **Live**: `#10b981` (Emerald) — Production deployments with real users.
- **Beta**: `#8b5cf6` (Purple) — Functional application in active testing.
- **In Development**: `#3b82f6` (Blue) — Actively being engineered.
- **Concept / Exploring**: `#f59e0b` (Amber) — Early architecture or research stage.
- **Archived**: `#64748b` (Slate) — Completed or paused historical projects.

---

## 5. Typography

- **Primary Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `Roboto`, `sans-serif`
- **Monospace**: `'JetBrains Mono'`, `ui-monospace`, `Menlo`, `Monaco`, `monospace`

### Scale
- **H1 (Page Display)**: `2.25rem` (36px) mobile / `3.0rem` (48px) desktop, `font-bold`, `-0.03em` tracking, `line-height: 1.15`
- **H2 (Section Header)**: `1.5rem` (24px) mobile / `1.875rem` (30px) desktop, `font-bold`, `-0.02em` tracking
- **H3 (Sub-section)**: `1.25rem` (20px), `font-semibold`, `-0.015em` tracking
- **Body Large (Intro / Lead)**: `1.125rem` (18px), `line-height: 1.65`
- **Body Regular**: `1.0rem` (16px) or `1.0625rem` (17px for longform writing), `line-height: 1.7`
- **Small / Metadata / Tags**: `0.8125rem` (13px) to `0.875rem` (14px), `font-medium`
- **Code Snippets**: `0.875rem` (14px), `font-mono`

---

## 6. Layout & Grid

- **Page Max Width**: `max-w-content` (68rem / 1088px) for balanced multi-column and listing views.
- **Longform Reading Width**: `max-w-reading` (44rem / 704px) for optimal line lengths (65–75 characters per line).
- **Wide Container**: `max-w-wide` (78rem / 1248px) for rich case study architecture breakdowns.
- **Gutters**: `px-4 sm:px-6 lg:px-8`
- **Vertical Rhythm**:
  - Section spacing: `py-16 sm:py-24`
  - Component spacing: `space-y-6` to `space-y-12`

---

## 7. Component Rules

### Navigation (`Navbar`)
- Fixed at top with subtle backdrop blur (`backdrop-blur-md bg-bg/85 border-b border-border-subtle`).
- Clean brand link (`Raashid Arquil` + subtle indicator).
- Primary links: `Home`, `Work`, `Writing`, `About`.
- Right action: Theme toggle and direct `Contact` link.
- Mobile: Clean dropdown menu with accessible disclosure button.

### Project Cards (`ProjectCard`)
- Distinctive editorial layout: Title, status badge, one-line problem-solution summary, tech stack pills, and direct case study link.
- Flagship projects (like **CropCare**) feature an expanded hero presentation with architecture highlights, launch CTA, and screenshot preview.

### Status Indicators (`StatusBadge`)
- Small pill (`px-2.5 py-0.5 text-xs font-medium rounded-full`).
- Includes a subtle pulsing indicator dot for active statuses (`in-development`, `live`).

### YouTube Embeds (`YouTubeEmbed`)
- Performance-first: Never load YouTube `iframe` on page load.
- Render thumbnail poster with custom Play button overlay.
- Loads live embed only on user click.

### Case Study Layout (`CaseStudyLayout`)
- Structured editorial sections:
  1. Metadata header (Role, Timeline, Status, Stack, Live/Repo links).
  2. The Problem (Context & Friction).
  3. The Solution (Product Concept & UX Flow).
  4. System Architecture (Diagrams, data flow, ML pipeline).
  5. Engineering Challenges & Trade-offs (Specific technical hurdles solved).
  6. Key Decisions (`Decision -> Rationale -> Trade-offs` matrix).
  7. Lessons Learned & Retrospective.
  8. Future Roadmap.

### Technical Writing Layout (`WritingLayout`)
- Clean header with published date, reading time estimate, and topic tags.
- High-readability typography with syntax-highlighted code blocks, numbered diagrams, callout blocks, and copy-code functionality.

---

## 8. Anti-Patterns (Strictly Prohibited)

- ❌ No floating 3D objects or WebGL spheres.
- ❌ No animated gradient blobs or particle dust.
- ❌ No skill percentage progress bars (e.g. "Python 85%").
- ❌ No giant walls of 30+ technology logos without context.
- ❌ No fake testimonials, fabricated user counts, or fictitious achievements.
- ❌ No non-functional form buttons or dead links.
- ❌ No heavy client JavaScript UI frameworks for static content.

---

## 9. Content & Tone Rules

- **Honest & Direct**: Explain what works, what is currently in progress, and what limitations exist.
- **Specific**: Use concrete numbers and technical terminology accurately (e.g. "TFLite INT8 quantization on-device" instead of "cutting-edge AI").
- **Focused**: Highlight deep problem solving rather than superficial feature checklists.
