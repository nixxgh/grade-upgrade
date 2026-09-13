# Web Project Template (Astro + Tailwind CSS)

A production-ready, batteries-included template for building high-performance, 100% client-side web tools and static websites deployed on **Cloudflare Pages**.

---

## Features

* ⚡ **Astro v7 + Tailwind CSS v4**: Instant compile times, zero-JS by default, and pure static HTML output.
* ❄️ **NixOS Flake DevShell**: Isolated development environment with Node.js 22 and pnpm (`nix develop`).
* 📊 **Built-in Analytics & Search Console**: Pre-wired for Google Analytics 4 (GA4) and Google Search Console (GSC) via environment variables.
* 🎯 **SEO & Rich Snippets**: Pre-configured for OpenGraph, Twitter Cards, canonical URLs, and Schema.org JSON-LD.
* 📱 **Mobile-First & Accessible**: Designed for touch targets, dark mode, and WCAG AA compliance.
* 🚀 **Zero-Cost Edge Deployment**: 100% client-side architecture ($0/mo hosting on Cloudflare Pages with unlimited bandwidth).

---

## Quick Start

```bash
# 1. Enter isolated Nix development environment
nix develop

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev

# 4. Build for production (outputs to dist/)
npm run build
```

---

## Configuration

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

```env
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_GSC_VERIFICATION=your_verification_string
```
