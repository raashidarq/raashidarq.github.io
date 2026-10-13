---
title: "Tally"
shortDescription: "A local-first desktop app for habits, focus sessions, tasks, reflection, and energy, with everything kept on your own device."
date: "In active development"
role: "Product scope, design & implementation"
status: "in-development"
featured: true
order: 3
technologies: ["Tauri v2 / Rust", "React 19 / TypeScript", "Dexie (IndexedDB)", "Tailwind CSS v4", "Vitest / Playwright"]
category: "Independent product"
heroImage: "/images/tally/tally-today-light-1x.png"
gallery:
  - url: "/images/tally/tally-today-light.webp"
    width: 2880
    height: 1800
    title: "Today dashboard"
    caption: "Today: what is on now and next, priorities, routines, an energy check-in and a running focus timer. Development build with fictional demo data."
    alt: "Tally Today view with a running focus session, task priorities, routines and energy check-in"
  - url: "/images/tally/tally-habits-dark.webp"
    width: 2880
    height: 1800
    title: "Habit history (dark)"
    caption: "Routines over the last 30 days and a year-long completion heatmap. Development build with fictional demo data."
    alt: "Tally Insights habits view with per-habit streak strips and a yearly heatmap, dark theme"
  - url: "/images/tally/tally-tasks-board-light.webp"
    width: 2880
    height: 1800
    title: "Task board"
    caption: "Tasks grouped by workflow status on a board, with projects, tags and estimates. Development build with fictional demo data."
    alt: "Tally task board with Not started, In progress and Done columns"
  - url: "/images/tally/tally-calendar-day-light.webp"
    width: 2880
    height: 1800
    title: "Planned vs recorded"
    caption: "Calendar day view comparing planned blocks with recorded focus, next to energy and mood lanes. Development build with fictional demo data."
    alt: "Tally calendar day view with planned and recorded time side by side"
  - url: "/images/tally/tally-journal-light.webp"
    width: 2880
    height: 1800
    title: "Daily notes"
    caption: "Rich-text daily note with mood, sleep, checklists and a calendar of past entries. Development build with fictional demo data."
    alt: "Tally journal daily note with headings, lists, checkboxes and a quote"
  - url: "/images/tally/tally-time-report-light.webp"
    width: 2880
    height: 1800
    title: "Time report"
    caption: "Focus time report: totals, sessions and a per-day breakdown, filterable by tag and project. Development build with fictional demo data."
    alt: "Tally Insights time report with focus totals and per-day bars"
  - url: "/images/tally/tally-insights-overview-light.webp"
    width: 2880
    height: 1800
    title: "Insights overview"
    caption: "Insights overview: summary figures and plain-language observations across features. Development build with fictional demo data."
    alt: "Tally Insights overview with summary cards and observations"
  - url: "/images/tally/tally-command-palette-dark.webp"
    width: 2880
    height: 1800
    title: "Command palette (dark)"
    caption: "Command palette (Ctrl+K): navigate, run commands and search everything. Development build with fictional demo data."
    alt: "Tally command palette open over the Today view, dark theme"
---
## One place for the day

Habits in one app, a focus timer in another, tasks somewhere else, and a journal in a notebook. Each one wants its own account, and none of them sees the whole day.

Tally brings them into a single desktop dashboard that opens instantly, works offline, and doesn't ask you to sign up. Everything stays on your device.

It's also my first desktop application. I defined the scope and features, designed the flows, and built it with AI assistance throughout.

## What's in it

| Area | What it does |
| --- | --- |
| Habits | Daily habits with a streak heatmap. |
| Tasks | List, board, and week views, an inbox, projects, quick add, and a morning review. |
| Focus | A focus timer, time log, and reports, plus a small always-available timer window. |
| Energy & mood | Quick check-ins and a timeline across the day. |
| Journal | Daily notes, prompts, and bookmarks. |
| Goals & planning | Weekly goals and a workload bar for planning the week. |
| Analytics | An overview and trends across the other areas. |

A command palette, a dashboard you can rearrange, a global quick-capture shortcut, and a system-tray menu tie it together.

## Why Tauri, not Electron

Electron ships a full browser with every app. Tauri uses the system's webview with a small Rust shell, so the Windows installer is around 2.5 MB.

The Rust side handles what a desktop app needs and a website can't do: the tray menu, closing to the tray, the global capture shortcut, the mini timer window, and keeping a single instance running. The app's content security policy blocks external connections, so "your data stays on your device" is enforced by the app, not just promised.

## Local-first, built to last

Data lives in IndexedDB through Dexie, with versioned database migrations and tests that check each upgrade path. The app's identifier is deliberately fixed, so an update never moves where your data lives.

Changes apply instantly and can be undone, rather than asking for confirmation every time. If two windows are open, they stay in sync. Backups, a trash, and CSV, Markdown, and JSON export mean the data is never locked in.

## Features that don't tangle

Each area is a self-contained module with its own manifest. A lint rule stops one feature from importing another, so changing the journal can't quietly break the timer. Turning a feature off hides it; it never deletes its data.

## Testing, and what's next

The project has 73 unit test files (Vitest), 24 end-to-end specs (Playwright) including automated accessibility checks, a desktop smoke test, and budgets for bundle size and timing. A CI workflow is set up to build for Windows, macOS, and Linux.

Next: hands-on checks of the tray, notifications, and shortcuts on each platform, proper screenshots with demo data, and then a first public release.
