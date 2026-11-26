# Urban data analytics with Autark

Runnable SIBGRAPI 2026 notebooks and the extra Urbane application, adapted from
[ctsilva/autark-tutorial](https://github.com/ctsilva/autark-tutorial) at commit
`4d5a6e37962f0fb343bd5a7f7d8d504fc88b730d`.

## On autarkjs.org

Run `npm run dev` from the site repository and open `/tutorial/`. The five
chapters use the same VitePress document layout as the Guide: sidebar, sticky
outline, headings, and browser scrolling. The site chapter pages in
`guide/tutorial/` reuse the notebook HTML and mount `notebook.js`, which adds
chapter context and output helpers to the [shared playground](../playground/README.md).
Edit cell source and chapter prose in `tutorial/*.html`. Use
`dataUrl()` in cells to resolve paths relative to `tutorial/data/` in both builds.
`npm run build` also publishes the standalone notebooks. Run
`npm run test:tutorial` for publication checks. With `npm run preview` running,
`npm run test:tutorial:browser` executes every cell in Chrome with WebGPU and
uses bundled Overpass recordings. Set `PLAYGROUND_URL` for a different server
and `CHROME_BIN` for a nonstandard Chrome executable.

## Run in the upstream Autark checkout

Use the upstream repository's documented Node.js/npm versions. From the repository root:

```sh
npm ci                   # once, or after dependency changes
make tutorial            # builds Autark, then starts Vite
make tutorial OPEN=/map.html
```

Open the URL printed by Vite (normally http://localhost:5173). Stop with Ctrl+C.
After editing Autark itself, run `make build` again; the tutorial consumes workspace
builds through package imports, like `gallery` and `usecases`. It is not a separate
npm project and needs no additional install, dependency manifest, or lockfile.

Read `index.html`, `formats.html`, `db.html`, `map.html`, `plot.html`, and
`compute.html` in order. Cells share `ctx`; use **Run** or **Run all above**.
The runner supplies `autk`, `d3`, and `GeoTIFF` from Vite-resolved package imports
because executable cell strings are not processed by Vite. Edits persist in
`localStorage`; **Reset** restores the original cell.

The map notebook passes raw WGS 84 neighborhoods and noise points to
`loadCollection()` with `sourceCrs: "EPSG:4326"`. Data returned by `autk-db` is
already projected to its workspace CRS. Use the same CRS for the map and load
those layers without a `sourceCrs` override.

Maps, compute examples, and `urbane.html` require a WebGPU-enabled browser and GPU
adapter. Urbane parses its local OSM extract and can take a minute or more to load;
its sky-exposure results are cached in `localStorage`. Use `urbane.html?fresh` to
recompute them.

## Appearance

The tutorial uses the Autark website's indigo/neutral palette, local brand marks,
and documentation-style chapter navigation. The header's appearance switch supports
light/dark themes, follows the system preference until changed, and saves the choice
locally when storage is available. On narrow screens the in-page outline collapses
without hiding chapter navigation. Charts and maps retain their own visualization
palettes. The standalone shell and notebook output styles live in `tutorial/`;
the editor and its styles come from `playground/`.

## Data and dependencies

All sample data is under `tutorial/data/`; nothing reads from `gallery` or
`usecases`. The identical neighborhood GeoJSON used by maps, plots, and Urbane is
stored once in `data/shared/`. Keep `data/osm/manifest.json` as recording provenance.
One additional parks/water response was recorded during integration because the
upstream map notebook did not include that required fallback.

Overpass requests fall back to the bundled query recordings. Add
`?overpass=offline` to skip live Overpass requests or `?overpass=down` to simulate
an outage. Edited queries without a matching recording need the live server.
DuckDB extensions may require network access on first use, so this is **not a
promise of fully offline operation**.

Autark, DuckDB, D3, and GeoTIFF are not part of the vendored tutorial.
The playground uses the tutorial's original CodeMirror bundle at
`playground/vendor/codemirror.js`; license notices live beside it.

## Verification

```sh
node --test tutorial/test/*.test.mjs
make lint
# Optional browser smoke test (requires installed Chrome and WebGPU):
node tutorial/test/browser.mjs
```

The browser check uses real cells, bundled Overpass responses, fresh browser state,
and time limits. Map cells must also produce non-background pixels in canvas
screenshots; successful execution alone does not prove that geometry is visible. Set `CHROME_BIN` if Chrome is not in its standard location.

## Credits and provenance

Tutorial authors: João Rulff, Lucas Alexandre, Talisson Souza, Gustavo Moreira,
Daniel Oliveira, Harish Doraiswamy, Fabio Miranda, Claudio Silva, and Marcos Lage.
Original notebooks: https://observablehq.com/@autarkjs/01-urban-data-analytics-with-autark.

OpenStreetMap data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright),
[ODbL 1.0](https://opendatacommons.org/licenses/odbl/). This includes the OSM extract,
recorded responses, and derived building sample. Other sample datasets and diagrams
are preserved from the source repository. The source has no repository-level license
file; this adaptation does not assign a new license to that material. Confirm
redistribution permission before publishing it independently.
