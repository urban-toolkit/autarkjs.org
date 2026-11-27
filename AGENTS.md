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
and runtime assets. Gallery examples are VitePress pages in `guide/gallery/examples/`
that embed the mirrored application from `gallery/` (see below).

- `guide/public/imgs/` — Gallery screenshots and logos
- `guide/public/data/` — Data used by tutorials and live examples
- `guide/public/assets/` — Runtime assets copied during the site build
- `guide/public/schema/`: autk-grammar's JSON Schema at its `$id` (`/schema/autk-grammar/v1.json`), copied from the pinned package by `.scripts/sync-grammar-schema.cjs` before each build and dev run; ignored in git

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

## Local Autark packages (temporary)

Until Autark 5.0.0 is published to npm, the site depends on the six tarballs in
`vendor/autark-5.0.0/`:

```json
"@urban-toolkit/autk": "file:vendor/autark-5.0.0/urban-toolkit-autk-5.0.0.tgz"
```

They were packed from the reviewed candidate commit recorded in
`vendor/autark-5.0.0/manifest.json`. `npm ci` installs them like any other
dependency, so a fresh clone and CI need no sibling checkout.

When 5.0.0 is published, switch back to the registry and remove the vendored files:

```bash
npm run release:prepare -- --version 5.0.0
rm -rf vendor/autark-5.0.0
```

Replace the `file:` entries with exact registry versions if `release:prepare`
does not do it, then reinstall, rebuild the gallery, and rerun `npm run build`,
`npm run test:gallery`, and `npm run test:usecases`.

## Dependency security

`package.json` overrides only VitePress's Vite dependency to `^6.4.4` because
VitePress 1.6.4 still declares vulnerable Vite 5. Its Vue plugin supports Vite 6;
the standalone Vite dependency and Autark versions are unchanged. Remove the
override when stable VitePress declares a patched Vite version. Validate security
updates with `npm ci`, `npm audit`, the site build, and browser playground checks.

---

## Learn area and the tutorial

`/learn/` presents the two tracks; the top bar reaches them through the **Learn**
menu. `guide/tutorial/` holds one page per chapter (`chapter01` … `chapter05`)
that embeds the tutorial app with `<TutorialChapter>` and `?embed=1`.

The tutorial is vendored like the gallery, from `../autark/tutorial` into
`tutorial/`, and built by `tutorial/vite.config.ts` into the ignored
`guide/public/tutorial/apps/` under `/tutorial/apps/`. Its own header, theme
toggle, and chapter list are hidden in embed mode; the VitePress sidebar
navigates instead.

- `npm run tutorial:build` builds the chapters; `predev`/`prebuild` run it too.
- `npm run test:tutorial` checks the built chapters and datasets.
- Datasets live in `tutorial/data/`; the cells fetch them relative to the page,
  and the Overpass fallback resolves recordings from the page URL.
- Urbane is **not** part of the tutorial build; the Gallery keeps
  `/usecases/live/urbane.html`, and the tutorial links there.

When syncing, copy the upstream source (keeping the site `vite.config.ts`, the
`embed` hook in `shell.js`, the `data/osm` URL in `overpass-fallback.js`, and the
embed rules in `tutorial.css`), update the manifest, rebuild, and rerun
`npm run build && npm run test:tutorial`.

## Gallery examples

The gallery mirrors the upstream Autark gallery instead of maintaining a second
catalog. `gallery/` is vendored from a recorded commit (`gallery/manifest.json`)
and built by `gallery/vite.config.ts` into the committed
`guide/public/gallery/apps/` (datasets and DuckDB runtime are copied at build time). Page entries come from `gallery/catalog.ts`, so a new
upstream example requires no hand-written route.

- `npm run gallery:build` builds the app; `predev`/`prebuild` run it too. Until the
  site pins Autark 5, `.scripts/gallery-gate.mjs` skips it with a warning.
- `npm run gallery:pages` rewrites `guide/gallery/examples/*.md` from the catalog.
  Each page hosts its example with `<GalleryExample>` and the `?embed=1` flag. Embed
  mode hides only the app's own top navigation and back link, so its title,
  controls, "API in focus" section, and related examples stay visible inside the page.
- `npm run test:gallery:layout` checks every built map panel's rounded border and
  clipping in standalone/embed mode, light/dark themes, and desktop/mobile widths
  against a running preview (`PLAYGROUND_URL` overrides the URL).
- `npm run gallery:shots` recaptures the card illustrations from a preview. The
  capture hides the page chrome, so cards show only the map and its side panel.
- Sidebar entries and cards use the example names from the catalog; the `D01`/`I01`
  identifiers stay in the catalog for maintenance, not in the UI.
- `guide/.vitepress/theme/components/GalleryCatalog.vue` renders the cards from the
  vendored catalog; the sidebar groups come from the same source.

Sync `gallery/` from an Autark commit, update `gallery/manifest.json`, then run
`gallery:build`, `gallery:pages`, `npm run build`, `npm run test:gallery`, and
`gallery:shots`. Never fetch `main` during a site build. When editing the vendored
app, keep the diff limited to documented files (`vite.config.ts`, embed hooks in
`src/example.ts` and `example.css`) and prefer an upstream fix.

---

## Full-page use cases

`usecases/src/` and `usecases/public/data/` are vendored from the Autark 4.1.1
coordinated tag. `npm run usecases:build` uses the site's pinned npm packages and
builds them into ignored `guide/public/usecases/apps/`; both `dev` and `build`
run this first. No sibling Autark checkout is required.

VitePress wrappers in `guide/usecases/live/` publish `urbane.html`, `shadows.html`,
and `heat.html` (the upstream Niteroi app), retaining only the top navigation.
The Examples menu and sidebar link to Gallery (`/gallery/`) and Demo Apps
(`/demo-apps/`). Both indexes use `GalleryCatalog.vue`; the demo app metadata
lives in `guide/.vitepress/theme/data/demoApps.ts`. Run `npm run test:usecases`
after a site build to check navigation, routes, bundles, DuckDB assets, and datasets. See
`usecases/README.md` for cross-machine review and the explicit release gate.

## Key files at a glance

| File | Purpose |
|---|---|
| `package.json` | Site scripts, including `release:prepare` |
| `guide/.vitepress/config.ts` | VitePress site config (nav, sidebar, theme) |
| `playground/` | Shared editor, controls, persistence, and runner for editable site examples |
| `guide/.vitepress/theme/components/CodePlayground.vue` | User Guide and Grammar playground adapter |
| `guide/.vitepress/theme/components/HomeGallery.vue` | Home-page gallery cards |
| `guide/.vitepress/theme/components/GalleryPageGrid.vue` | Full gallery cards and filters |
| `guide/gallery/` | Gallery pages; `examples/` embeds the mirrored apps |
| `tutorial/` | Vendored Autark tutorial app and its datasets |
| `gallery/` | Vendored upstream gallery app and its catalog |
| `guide/public/` | Static data, screenshots, and runtime assets |
