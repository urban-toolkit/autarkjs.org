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

### 2. Static assets (`guide/public/`)

Static files served by VitePress. These include gallery screenshots, datasets, logos,
and runtime assets. The gallery examples themselves are VitePress pages in
`guide/gallery/`, not standalone HTML files.

- `guide/public/imgs/` — Gallery screenshots and logos
- `guide/public/data/` — Data used by tutorials and live examples
- `guide/public/assets/` — Runtime assets copied during the site build

---

## Dev server

The dev server is powered by **VitePress (which uses Vite internally)**:

```bash
npm run dev
# starts VitePress dev server at localhost:5173
# serves both the .md docs and the static files in guide/public/
```

Other scripts:

```bash
npm run build    # build the full VitePress static site
npm run preview  # preview the built site locally
```

---

## Dependency security

`package.json` overrides only VitePress's Vite dependency to `^6.4.4` because
VitePress 1.6.4 still declares vulnerable Vite 5. Its Vue plugin supports Vite 6;
the standalone Vite dependency and Autark versions are unchanged. Remove the
override when stable VitePress declares a patched Vite version. Validate security
updates with `npm ci`, `npm audit`, the site build, and browser playground checks.

---

## Gallery examples

Gallery examples are Markdown pages in `guide/gallery/`. Their runnable code is
usually defined inline and executed by `CodePlayground.vue`; shared gallery cards
are defined in `HomeGallery.vue` and `GalleryPageGrid.vue`. Update the page, its
card metadata, screenshot, and any required `guide/public/data/` together.

---

## Key files at a glance

| File | Purpose |
|---|---|
| `package.json` | Site scripts, including `release:prepare` |
| `guide/.vitepress/config.ts` | VitePress site config (nav, sidebar, theme) |
| `guide/.vitepress/theme/components/CodePlayground.vue` | Runtime for interactive gallery code |
| `guide/.vitepress/theme/components/HomeGallery.vue` | Home-page gallery cards |
| `guide/.vitepress/theme/components/GalleryPageGrid.vue` | Full gallery cards and filters |
| `guide/gallery/` | Gallery pages and runnable example source |
| `guide/public/` | Static data, screenshots, and runtime assets |
