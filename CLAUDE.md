# autarkjs.org — Project Context

## What is this project?

**autarkjs.org** is the documentation and examples website for **Autark**, a modular urban toolkit for geospatial data visualization on the web. It covers four packages:

- `autk-map` — Map rendering and layer management
- `autk-db` — In-browser spatial database
- `autk-compute` — Spatial computations
- `autk-plot` — Charts and linked views

---

## Two distinct parts of the site

The site is composed of two separate but co-deployed parts:

### 1. VitePress Documentation (`guide/`)

The main documentation site built with [VitePress](https://vitepress.dev/). Content is written in Markdown (`.md`) and organized by package.

Key locations:
- `guide/index.md` — Home page (includes the gallery via `<HomeGallery />` Vue component)
- `guide/introduction.md` — Getting started
- `guide/autk-db/`, `guide/autk-map/`, `guide/autk-compute/`, `guide/autk-plot/` — Per-package narrative docs
- `guide/api/autk-db/`, `guide/api/autk-map/`, `guide/api/autk-compute/`, `guide/api/autk-plot/` — API Reference (TypeDoc-generated markdown)
- `guide/.vitepress/config.ts` — VitePress config (nav, sidebar, theme)
- `guide/.vitepress/theme/` — Custom theme with Vue components

### 2. Raw HTML/CSS/JS Pages (`guide/public/`)

Standalone pages **not processed by VitePress** — served as static files. These include:

- `guide/public/examples/` — Gallery example pages (`ex1.html`, `ex2.html`, `ex3.html`, ...)
  - Each example has a two-panel layout: interactive canvas on the left, source code on the right
  - JS is loaded via `<script type="module" src="dist/exN.js">` (compiled by Vite separately)
- `guide/public/imgs/` — Gallery screenshots and logos
- `guide/public/styles.css` — Shared CSS used by all example pages

---

## Dev server

The dev server is powered by **VitePress (which uses Vite internally)**:

```bash
npm run dev
# starts VitePress dev server at localhost:5173
# serves both the .md docs and the static files in guide/public/
```

For editing examples, you also need to compile the TypeScript:

```bash
npm run examples:build
# runs: tsc && vite build && cp -r examples/dist guide/public/examples/dist
# compiles examples/exN.ts → examples/dist/exN.js → guide/public/examples/dist/
```

Other scripts:

```bash
npm run build    # build the full VitePress static site
npm run preview  # preview the built site locally
```

---

## Examples build pipeline

TypeScript example sources live in `examples/`. Vite compiles each one as a separate ES module entry point (configured in `vite.config.js`). The compiled output is copied to `guide/public/examples/dist/` so the HTML pages can load them.

`examples/dist/` is gitignored — CI runs `examples:build` automatically on deploy.

---

## Adding a new gallery example

See [.claude/tasks/add-new-example.md](.claude/tasks/add-new-example.md) for a complete step-by-step guide on:
- Creating the TypeScript logic
- Creating the HTML wrapper page
- Registering the entry in `vite.config.js`
- Adding the gallery screenshot
- Updating `HomeGallery.vue`

---

## Key files at a glance

| File | Purpose |
|---|---|
| `vite.config.js` | Vite build config for compiling examples |
| `tsconfig.json` | TypeScript config (targets `examples/`) |
| `guide/.vitepress/config.ts` | VitePress site config (nav, sidebar) |
| `guide/.vitepress/theme/components/HomeGallery.vue` | Gallery grid component |
| `guide/public/styles.css` | Shared CSS for all example HTML pages |
| `examples/exN.ts` | TypeScript source for each example |
| `guide/public/examples/exN.html` | Deployed HTML wrapper for each example |
