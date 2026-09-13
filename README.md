# GradeUPgrade — Academic Coaching Landing Page & Portal

A high-performance, concept-first landing page and admissions portal for **GradeUPgrade** (Suraj Sir & Dhiraj Sir's Coaching Institute), located in Vikhroli, Mumbai. Built with **Astro**, **Tailwind CSS**, and backed by a declarative **Nix Flake** development environment.

---

## 🌟 Overview & Features

- ⚡ **Ultra-Fast & Zero-JS Core**: Built on Astro for high Lighthouse scores, instant mobile load times, and minimal client-side bundle size.
- 🎓 **Comprehensive Curricula Showcase**:
  - **Class 8 – 10**: Foundation & Board prep for ICSE, CBSE, and Maharashtra State Board.
  - **Class 11 – 12 (Science)**: Physics, Chemistry, Mathematics & Biology (PCMB) with board & competitive exam focus.
  - **Class 11 – 12 (Commerce)**: Accountancy, Economics, OCM, SP, and Mathematics.
- 📍 **Verified Campus & Interactive Google Maps**:
  - Verified Google Business Profile (4.9 ★★★★★ with 129+ reviews).
  - Main Campus: Shop No. 234, Gurudarshan CHSL, Tagore Nagar, Vikhroli East, Mumbai - 400083.
  - Interactive embedded Google Map iframe with mobile one-tap directions.
- 💬 **Direct WhatsApp Lead Automation**: Pre-filled admissions inquiry generator and direct call integration (`+91 90044 52071`).
- 📱 **Dedicated Student App Showcase**: Highlighting live attendance and test mark tracking features.
- 🎨 **Bespoke Design System**: Custom dark-navy `#0A1142` and electric cyan `#00D8FF` palette inspired by modern Vercel-grade aesthetics.
- ❄️ **Reproducible Nix DevShell**: Fully isolated development environment with Node.js 22 via `flake.nix`.

---

## 🚀 Quick Start

### Using Nix Flake (Recommended)

```bash
# 1. Enter the isolated development shell
nix develop

# 2. Install dependencies (if not already cached)
npm install

# 3. Start local development server on all interfaces
npm run dev -- --host 0.0.0.0

# 4. Build for static production (outputs to dist/)
npm run build
```

### Standard Node.js

```bash
npm install
npm run dev
npm run build
```

---

## 📁 Project Architecture

```
grade-upgrade/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.webp             # 80x80 (2x Retina) WebP brand logo
│   └── logo-40.webp          # 40x40 (1x) WebP brand logo
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Sticky navigation with admission badge
│   │   ├── Hero.astro             # Dynamic hero with academic year calculation
│   │   ├── Stats.astro            # Verified success metrics
│   │   ├── BentoGrid.astro        # 4-pillar methodology & student app
│   │   ├── Courses.astro          # Curricula streams (Class 8-10, Science, Commerce)
│   │   ├── Testimonials.astro     # Student & parent reviews
│   │   ├── FaqSection.astro       # Interactive accordion FAQ
│   │   ├── ContactCta.astro       # Admissions inquiry form & WhatsApp lead gen
│   │   ├── LocationSection.astro  # Google Business Profile badge, address & Map embed
│   │   └── Footer.astro           # Brand links, verified contact & copyright
│   ├── layouts/
│   │   └── BaseLayout.astro       # SEO metadata, OpenGraph, JSON-LD Schema
│   ├── styles/
│   │   └── global.css             # Tailwind CSS imports & animations
│   ├── utils/
│   │   └── academicYear.ts        # Dynamic Indian academic year generator
│   └── pages/
│       └── index.astro            # Main page assembly
├── flake.nix                  # Isolated Nix development environment
└── package.json
```

---

## 📄 License

MIT License. Designed and developed as a college project for GradeUPgrade.
