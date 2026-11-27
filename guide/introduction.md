<style scoped>
.introduction-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}

/* The CRS table only names two values, so its first column stays narrow. */
.introduction-page .coordinate-table table th:first-child,
.introduction-page .coordinate-table table td:first-child {
  width: 14%;
}
</style>

<div class="introduction-page">

# Introduction

Autark is a serverless toolkit for urban visual analytics. Maps, charts, data, and computation all live in the browser—no server, no uploads, no round trips.

Put your data together. OpenStreetMap extracts and Overpass queries, GeoJSON, CSV, JSON, and GeoTIFF imagery. Give each project its own workspace and coordinate system, then use DuckDB-powered SQL to query, spatially join, aggregate, and export.

Then bring it to life. Explore buildings, roads, terrain, imagery, rasters, and thematic layers in 2D and 3D maps powered by WebGPU. Analyze the scene itself: sky exposure, shadows, visibility, view scores, regression-style models, or any metric you can write in WGSL. Linked D3 charts keep the conversation going—a click, hover, or brush moves between chart and map.

The city is your dataset. The browser is your lab. One street or an entire city. Raw data to insight. One browser tab.

## Packages

Autark is available as a single package or as individual modules:

| Package                           | Purpose |
| ----------------------------------| ------- |
| **[@urban-toolkit/autk](/autk-db/)**           | Complete package that re-exports the toolkit modules |
| **[@urban-toolkit/autk-core](/api/autk-core/)** | Core shared definitions used by all other Autark libraries |
| **[@urban-toolkit/autk-db](/autk-db/)**        | A spatial database that handles physical and thematic urban datasets |
| **[@urban-toolkit/autk-map](/autk-map/)**       | A WebGPU-based vector map visualization library for exploring 2D and 3D physical and thematic layers |
| **[@urban-toolkit/autk-compute](/autk-compute/)**   | A WebGPU-based computation engine for implementing general-purpose algorithms using physical and thematic data |
| **[@urban-toolkit/autk-plot](/autk-plot/)**      | A D3.js-based plot library designed to consume urban data in standard formats and facilitate linked views |

For demonstration and documentation purposes, we provide a large collection of examples illustrating the core functionality of each module in the examples and usecases sections.

## Installation

Autark packages are available on [npm](https://www.npmjs.com/package/@urban-toolkit/autk). To install the complete package run:

```bash
npm install @urban-toolkit/autk
```

Or install individual modules when you only need part of the toolkit:

```bash
npm install @urban-toolkit/autk-core
npm install @urban-toolkit/autk-db
npm install @urban-toolkit/autk-map
npm install @urban-toolkit/autk-compute
npm install @urban-toolkit/autk-plot
```

:::info autk-core is automatically bundled
`autk-core` contains the shared low-level primitives (color maps, triangulators, geometry utilities, and more) used by `autk-db`, `autk-map`, `autk-compute`, and `autk-plot`. You do not normally install it directly. It is already included as a dependency of those packages.
:::

## Serverless by Design

All Autark packages run in the browser without a backend. Data is fetched directly from public APIs such as the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) or from static file servers. Queries run inside a [DuckDB](https://duckdb.org/docs/current/clients/wasm/overview) instance in the browser. Map visualization and analytical compute workloads use [WebGPU](https://webgpu.org/). Interactive plots are built using [D3.js](https://d3js.org/).

:::info Browser requirements
`autk-map` and `autk-compute` require a browser with **WebGPU** support. `autk-db` and `autk-plot` work in any modern browser. The table below shows the compatible browser versions.

| Browser | Support Status | Minimum Version |
|---|---|---|
| Chrome | Full | 113+  |
| Edge | Full | 113+ |
| Safari | Full | 26+  |
| Firefox | Full | 141+ |
| Opera | Full | 99+ |
:::


## Coordinate systems

In Autark’s APIs, `crs` is the notation used for the workspace’s coordinate system. The notation `sourceCrs` refers to the original coordinate system of a dataset and is provided to the data-loading functions when importing it.

<div class="coordinate-table">

| Name | Where it appears | Meaning |
| --- | --- | --- |
| `crs` | `new AutkMap(canvas, { crs })`, `db.setWorkspace(name, { crs })` | The **workspace** coordinate system: where tables are stored and where the map draws. |
| `sourceCrs` | `db.loadGeojson`, `db.loadCsv`, `db.loadJson`, `db.loadGeoTiff`, `db.loadOsm`, `map.loadCollection` | The coordinate system of the **incoming** data, transformed into the workspace on load. |

</div>

Both database and map default to `DEFAULT_WORKSPACE_CRS` (`EPSG:3395`, World Mercator in meters), and every database loader defaults `sourceCrs` to `EPSG:4326`. A map layer without `sourceCrs` is assumed to already be in the workspace CRS, so pass `sourceCrs` for raw longitude/latitude GeoJSON:

```ts
import { DEFAULT_WORKSPACE_CRS } from '@urban-toolkit/autk-core'

const map = new AutkMap(canvas, { crs: DEFAULT_WORKSPACE_CRS })
map.loadCollection('neighborhoods', { collection, sourceCrs: 'EPSG:4326' })
```

On the map, only `map.loadCollection` takes `sourceCrs`, and only for vector layers: a raster collection must already use the workspace CRS. Imagery and terrain have no CRS option of their own, and `map.loadMesh` expects workspace coordinates; the constructor's `crs` is the single source of truth for all of them.

Keep the database and the map on the same CRS, otherwise features land in the wrong place. Data exported by `db.getLayer()` is already projected, so load it **without** `sourceCrs`. Any horizontal CRS known to [Proj4js](https://github.com/proj4js/proj4js) works; register custom definitions first:

```ts
import { registerCrs } from '@urban-toolkit/autk-core'

registerCrs('MY:UTM23S', '+proj=utm +zone=23 +south +datum=WGS84 +units=m +no_defs')
```

Reprojection is horizontal only: it does not densify geometry, resample rasters, or convert vertical datums. Terrain works in projected, linear coordinates, so a geographic workspace cannot display it.

## Minimal Example

The **interactive playground** below loads OpenStreetMap data for the Financial District in New York and renders it as a full 3D city map — with surface, parks, water and roads. 

<script setup>
const introCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadOsm({
  pbfFileUrl: "/data/lower_mnt.osm.pbf",
  queryArea: {
    geocodeArea: "New York",
    areas: ["Battery Park City", "Financial District"],
  },
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads", "buildings"],
  }
});

const map = new AutkMap(canvas, { showUi: false });
await map.init();

for (const layerData of db.getLayersMetadata()) {
  const geojson = await db.getLayer(layerData.name);
  map.loadCollection(layerData.name, { collection: geojson, type: layerData.type });
}

map.fitBounds();
map.draw();
`
</script>

<ClientOnly>
  <CodePlayground :code="introCode" out="dom" :auto-run="true" />
</ClientOnly>

:::tip Make changes to the examples
Try removing `"buildings"` from the `layers` list, then click **Run** or press **⌘/Ctrl + Enter**. Edits are saved in this browser. Use **Copy** to copy the current file or **Reset** to restore the original.
:::

:::info The `canvas`
The `canvas` argument used in the autk-map constructor must be a reference to a DOM node containing a HTML canvas. The second argument is an options object; `showUi: false` hides the built-in layer menu, and `crs` sets the workspace coordinate system.
:::


## Where to go next

<div class="learn-tracks">
  <a class="learn-track" href="/tutorial/">
    <span class="learn-track-kicker">Tutorial</span>
    <span class="learn-track-title"> Learn urban data analysis with Autark.</span>
    <span class="learn-track-text">Urban data analysis tutorial covering from raw data to GPU-powered analysis.i Edit and run the cells as you go.</span>
    <span class="learn-track-link">Start the tutorial →</span>
  </a>
  <a class="learn-track" href="/autk-db/">
    <span class="learn-track-kicker">User Guide</span>
    <span class="learn-track-title">Learn how to use Autark’s packages and APIs.</span>
    <span class="learn-track-text">Reference pages for autk-db, autk-map, autk-plot, and autk-compute, with runnable examples.</span>
    <span class="learn-track-link">Open the User Guide →</span>
  </a>
</div>

</div>
