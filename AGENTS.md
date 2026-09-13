# AI Agent Instructions: Production Web Standards

Welcome! This repository was scaffolded from `web-template`. It is an AI-first, high-performance static web application built with **Astro + Tailwind CSS v4**, designed for zero-maintenance, zero-cost deployment on **Cloudflare Pages**.

Whenever you write or refactor code in this project, you **MUST** adhere to the following architectural, SEO, and performance standards.

---

## 1. Core Architecture & Mental Model

- **100% Client-Side / Zero-Server**: All computation, user interaction, and data transformations happen strictly in the browser. Never write backend server code, Node-only APIs, or database connections.
- **Separation of Concerns**:
  - `src/utils/`: Pure logic, calculations, and algorithms. **Zero HTML, zero UI**.
  - `src/types/` or `src/utils/types.ts`: TypeScript contracts and data models. Always write types before implementation.
  - `src/components/`: Reusable UI widgets (inputs, cards, modals, FAQ accordions).
  - `src/layouts/`: Page shells, metadata, SEO schemas, and analytics.
  - `src/pages/`: Routing only. Pages stitch together components and pass data down.
- **Astro Islands Principle**: HTML is static by default. Only ship JavaScript when interactivity is strictly required.

---

## 2. Mandatory Layout & Dashboard Tracking

- **Every page** in `src/pages/` MUST be wrapped in `src/layouts/BaseLayout.astro`. Never emit raw `<html>` or `<body>` tags in page files.
- **Google Analytics 4 (GA4)**: Configured via `PUBLIC_GA_ID` in `.env` (e.g. `G-XXXXXXXXXX`). `BaseLayout` automatically injects the official Google Tag script into `<head>` when present.
- **Google Search Console (GSC)**: Configured via `PUBLIC_GSC_VERIFICATION` in `.env`. `BaseLayout` automatically renders the verification `<meta>` tag into `<head>`.
- **Clean Local Development**: If analytics environment variables are not provided, no tracking scripts are rendered.

---

## 3. SEO & Rich Snippets (Schema.org JSON-LD)

To guarantee high Google rankings and rich SERP snippets:

1. **Semantic HTML Structure**:
   - Exactly **one** `<h1>` per page (containing the primary high-intent search keyword).
   - Hierarchical `<h2>` and `<h3>` tags (no skipping levels).
   - Meaningful HTML elements (`<main>`, `<header>`, `<footer>`, `<section>`, `<article>`).
2. **Schema.org Structured Data**:
   - For interactive tools/calculators, always inject a `WebApplication` or `SoftwareApplication` JSON-LD schema into `<head>`.
   - For FAQ sections, always inject a `FAQPage` JSON-LD schema so Google displays expandable rich snippets in search results.
3. **Metadata Hygiene**:
   - `title`: Under 60 characters, format: `Primary Keyword | Brand/Site Name`.
   - `description`: 120–160 characters with clear user value proposition.
   - `canonicalUrl`: Absolute URL automatically resolved by `BaseLayout`.
   - `OpenGraph` & `Twitter Cards`: Fully configured in `BaseLayout` for high-CTR social sharing.

---

## 4. Performance & Core Web Vitals (The 100/100 Rule)

Every page must maintain a **100/100 Google Lighthouse score**:

- **Zero Layout Shift (CLS = 0)**:
  - Always provide explicit `width` and `height` (or aspect ratios) on all images and visual blocks.
  - Never dynamically insert content above the fold without reserving space.
- **Main Thread Protection (FID / INP < 50ms)**:
  - Fast math (financial formulas, basic conversions) runs directly on client input events.
  - If an operation takes $> 15\text{ms}$ (e.g. heavy image processing, large CSV parsing, WASM), **it must be offloaded to a Web Worker**.
- **Zero Icon / Font Bloat**:
  - Do not install heavy icon libraries (like `lucide-react` or `font-awesome` bundles).
  - Use inline SVG icons with clean Tailwind classes (`class="w-5 h-5 text-emerald-400"`).

---

## 5. UI/UX & Tailwind CSS Standards

- **Mobile-First Responsive Design**:
  - Every interface must be designed for 360px mobile screens first, scaling up with `sm:`, `md:`, and `lg:`.
  - Touch targets (buttons, inputs, sliders) must be at least **44x44px** on mobile.
- **Modern Dark/Light Aesthetics**:
  - Default to clean, modern slate dark mode: `bg-slate-950`, cards `bg-slate-900`, borders `border-slate-800`.
  - High-contrast accents for action elements (e.g. emerald, cyan, or indigo).
- **Accessibility (a11y)**:
  - Every input element must have an associated `<label>` or `aria-label`.
  - Interactive controls must have clear `:focus-visible` rings (`focus-visible:ring-2 focus-visible:ring-emerald-500`).
  - Text contrast must comply with WCAG AA standards.

---

## 6. Development & Build Workflow (NixOS)

```bash
# 1. Enter isolated development shell (Node.js 22 + pnpm)
nix develop

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Compile static distribution (verifies build without errors)
npm run build
```

- **Deployment Target**: Cloudflare Pages (distributes `/dist` directory globally across edge CDNs with $0 hosting cost).
