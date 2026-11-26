# Learn: Guide + Tutorial in one place

Plan for publishing the Autark tutorial on autarkjs.org, without turning the Guide into a course. No code has been changed yet.

## 1. Information architecture

The site keeps three tracks, now with a single entry point:

```
Learn
├── Guide      → /introduction, /autk-db/, /autk-map/, /autk-compute/, /autk-plot/
└── Tutorial   → /tutorial/, /tutorial/formats, /tutorial/db, /tutorial/map, /tutorial/plot, /tutorial/compute
Gallery        → /gallery/ (unchanged)
API Reference  → /api/* (unchanged)
```

- **Top bar:** replace `Guide` with a `Learn` dropdown holding **Guide** and **Tutorial**. Everything else stays: `Gallery`, `API Reference`, `autk-grammar`, `pyautark (soon)`.
- **Guide URLs stay put.** Moving them under `/learn/` would break every existing link and the API pages' cross-references. `Learn` is a menu, not a URL prefix.
- **`/tutorial/` is its own collection**, with its own sidebar.
- **Urbane stays in the Gallery.** The tutorial links to `/usecases/live/urbane.html`; no tutorial copy of that app is published.

### Sidebar

On `/tutorial/*`, the sidebar has two collapsible groups:

| Group | Default | Items |
| --- | --- | --- |
| **Guide** | collapsed | Introduction, Workspaces/Loading/Analyzing/Retrieving/Updating (db), Layers/Imagery/Terrain/Thematic/Interactions/Styling (map), Property computation/Render analysis/Patterns (compute), Overview/Chart types/Transformations/Interactivity/Extending (plot) |
| **Tutorial** | open | Overview, Formats, Database, Map, Plot, Compute |

Guide pages keep today's sidebar, with one addition: a **Tutorial** link at the top of *Getting Started*, so the two are one click apart in both directions.

### Entry points

- `/tutorial/` landing page: abstract, audience, what you will build, chapter cards, credits and data licenses.
- Home page: a small *Learn* block under Quick Start, linking to the tutorial and the Guide.
- Introduction: a callout — "New to Autark? Start with the tutorial."

## 2. How the tutorial gets here

Mirror the gallery strategy: **vendor the source, build it with the site, publish under the site prefix.**

- **Vendored:** `../autark/tutorial` → `tutorial/` (`*.html`, `*.js`, `vite.config.mjs`, `assets/`, `vendor/codemirror.js`, `data/`), with `manifest.json` recording the commit and content hash, exactly like `gallery/manifest.json`.
- **Build:** a site-owned `tutorial/vite.config.mjs` sets `base: '/tutorial/apps/'` and multi-entry input for `formats`, `db`, `map`, `plot`, `compute` (skip upstream `index.html`; the site owns the landing page). Output goes to ignored `guide/public/tutorial/apps/`, like `usecases/apps/`.
- **No gate:** the site now pins Autark 5.0.0 locally, so the tutorial builds against the same packages as the Guide. `predev`/`prebuild` run `tutorial:build` next to `usecases:build`.
- **Data:** 29 MB upstream. Reuse byte-identical files already in `guide/public/data`; vendor only what is missing. `vite` copies `tutorial/public` into the output.
- **Overpass:** keep the bundled recordings and the `?overpass=offline|down` switches. Default the embedded pages to the recorded path; a live query stays an explicit choice.

### Site wrapper per chapter

One VitePress page per chapter (`/tutorial/formats`, …), matching how a gallery example is presented:

- The page shows the chapter's title and a one-line summary, then an iframe of the built app with `?embed=1`.
- The tutorial shell hides its own header, footer, and theme toggle in embed mode, the same way the gallery hides theirs; the iframe fills the space below the site nav and scrolls internally (no height messaging — chapters are long).
- Editing stays inside the app (CodeMirror), so the Guide's `CodePlayground` is untouched; the tutorial is not converted cell by cell.

Why not port the cells to `CodePlayground`: chapters share `ctx` across cells, keep edits in `localStorage`, and need CodeMirror's highlighting. Re-implementing that is a rewrite, and the gallery shows the iframe approach already holds up visually.

## 3. Tasks

| # | Task | Acceptance | Verify |
| --- | --- | --- | --- |
| **L1** | **Vendor the tutorial.** Copy source from the recorded commit, write `tutorial/manifest.json`, add site `vite.config.mjs`, reuse shared datasets. | `npm run tutorial:build` publishes `formats/db/map/plot/compute` under `/tutorial/apps/`, no sibling checkout needed. | Build output has five pages plus data; `npm run build` copies them. |
| **L2** | **Embed mode.** `?embed=1` hides the tutorial header/footer/toggles and the page padding, and inherits the site's light/dark palette. | In the wrapper, only the site nav is visible above a chapter; the chapter scrolls on its own. | Browser check, both themes, 1440 and 390 px. |
| **L3** | **Landing and wrapper pages.** `/tutorial/` course landing; wrapper pages with title, summary, and iframe. | Five chapters reachable from the landing and the sidebar; each shows its full chapter. | `npm run build`; every route returns 200. |
| **L4** | **Sidebar and nav.** `Learn` dropdown; two-group sidebar on `/tutorial/*`; Guide sidebar gains a Tutorial link. | Menu shows Learn → Guide, Tutorial; sidebar groups collapse independently; Guide pages unchanged apart from the link. | Browser check at desktop and mobile widths. |
| **L5** | **Entry points.** Home *Learn* block, Introduction callout, Gallery link. | Each link lands on `/tutorial/`. | Manual check. |
| **L6** | **Tests and docs.** `.scripts/test-tutorial.mjs` for structure (five chapters, data intact, no `.ts` served), keep the existing suites green; update `AGENTS.md` and the skills. | `npm run test:tutorial` passes against a built site; `build`, `test:gallery`, `test:usecases` still pass. | Commands run locally. |

Suggested order: L1 → L2 (prove one chapter) → L3 → L4/L5 → L6.

## 4. Risks

- **Two editing engines.** The Guide uses `CodePlayground`, the tutorial uses CodeMirror. Accepted: the tutorial is a vendored app, and unifying it is a rewrite of 45 cells with shared state.
- **Duplication with the Gallery.** Both embed a vendored app. Mitigation: extract one `EmbeddedApp` wrapper component used by `GalleryExample` and the tutorial pages.
- **Repo size.** Tutorial data adds up to ~29 MB; reuse identical files first, and record the remainder in the manifest.
- **Licensing.** Tutorial data/diagrams come from a repository without a root license; credits, ODbL notices, and `vendor/LICENSE.txt` stay, and redistribution must be confirmed before publishing.
- **Staleness.** Two manifests (gallery, tutorial) now track upstream commits; both need updating in the release checklist.

## 5. Open questions

1. Chapter URLs: `/tutorial/formats` (my pick) or `/tutorial/01-formats`?
2. Landing page content: keep the upstream abstract verbatim, or rewrite for the site?
3. Should `/tutorial/` appear in the home *Learn* block as a card, or as a single link?
