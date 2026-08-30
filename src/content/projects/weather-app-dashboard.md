---
title: "Weather Intelligence Dashboard"
shortDescription: "A full-stack meteorological dashboard integrating Auth0 multi-factor authentication, OpenWeatherMap telemetry, and server-side in-memory caching."
fullDescription: "A responsive weather analytics dashboard designed to explore production authentication patterns, third-party API rate-limit management, and caching strategies."
date: "2024"
role: "Full-Stack Developer"
status: "live"
featured: true
order: 3
technologies:
  - "React"
  - "Vite"
  - "Express.js"
  - "Node.js"
  - "Auth0 / MFA"
  - "Tailwind CSS"
  - "REST API"
category: "Full-Stack Weather Dashboard with In-Memory Caching & MFA"
pastelTheme: "indigo"
githubUrl: "https://github.com/raashidarq/weather-app-fe"
liveUrl: "https://raashidarq.github.io/weather-app-fe/"
problemSummary: "Demonstrating enterprise authentication standards, API cost containment, and rapid data visualization across global weather feeds."
solutionSummary: "An Express.js proxy with TTL-based response caching, secure Auth0 JWT verification with MFA, and an interactive frontend dashboard."
architectureHighlights:
  - "Server-side caching layer reducing upstream weather API invocations by over 70%."
  - "Auth0 enterprise authentication with Multi-Factor Authentication (MFA) and JWT verification."
  - "Normalized metrics display supporting historical trends and unit conversions."
---

## Overview

While weather applications are common introductory projects, this dashboard was deliberately engineered as an exploration of **production security and caching architectures**. Rather than invoking third-party APIs directly from client browsers (exposing private API credentials in network inspection), this project implements a secured backend proxy with caching and token-based access control.

---

## Technical Highlights

### 1. Reverse Proxy & Caching Strategy
To protect upstream API keys and prevent aggressive rate-limiting costs, the Express backend serves as a reverse proxy. Repeated queries for identical geographical coordinates within a 15-minute window are served directly from an in-memory TTL cache, resulting in sub-10ms response times and drastically reducing external network calls.

### 2. Multi-Factor Authentication (MFA)
Integrated Auth0 OpenID Connect (OIDC) protocols with mandatory Multi-Factor Authentication. The backend inspects and cryptographically validates JSON Web Tokens (JWT) using asymmetric RS256 key pairs prior to fulfilling weather telemetry requests.

### 3. Responsive Data Visualization
Built with React and Tailwind CSS, featuring dark mode telemetry charts, wind vector indicators, humidity gauges, and 7-day probabilistic precipitation forecasts.
