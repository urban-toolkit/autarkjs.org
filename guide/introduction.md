<style scoped>
.introduction-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

<div class="introduction-page">

# Introduction

Autark provides a client-side platform for implementing urban visual analytics software. It supports loading, storing, querying, joining, and exporting physical and thematic urban data using standard formats such as OpenStreetMap, GeoJSON, and GeoTIFF. By using GPU acceleration, Autark enables the implementation of algorithms for sophisticated urban analyses, such as shadow and visibility analysis, as well as classic machine learning algorithms such as regression and clustering. Finally, it provides a collection of interactive plots and a 3D map for visualizing urban data.

## Packages

Autark is available as a single package or as individual modules:

| Package                           | Purpose |
| ----------------------------------| ------- |
| **[@urban-toolkit/autk](/autk-db/)**           | Complete package that re-exports the toolkit modules |
| **[@urban-toolkit/autk-db](/autk-db/)**        | A spatial database that handles physical and thematic urban datasets |
| **[@urban-toolkit/autk-compute](/autk-compute/)**   | A WebGPU-based computation engine for implementing general-purpose algorithms using physical and thematic data |
| **[@urban-toolkit/autk-map](/autk-map/)**       | A WebGPU-based vector map visualization library for exploring 2D and 3D physical and thematic layers |
| **[@urban-toolkit/autk-plot](/autk-plot/)**      | A D3.js-based plot library designed to consume urban data in standard formats and facilitate linked views |

For demonstration and documentation purposes, we provide a large collection of examples illustrating the core functionality of each module in the examples and usecases sections.

## Installation

Autark packages are available on [npm](https://www.npmjs.com/package/@urban-toolkit/autk). To install the complete package run:

```bash
npm install @urban-toolkit/autk
```

Or install individual modules when you only need part of the toolkit:

```bash
npm install @urban-toolkit/autk-db
npm install @urban-toolkit/autk-compute
npm install @urban-toolkit/autk-plot
npm install @urban-toolkit/autk-map
```

## Serverless by Design

All Autark packages run in the browser without a backend. Data is fetched directly from public APIs such as the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) or from static file servers. Queries run inside a [DuckDB](https://duckdb.org/docs/current/clients/wasm/overview) instance in the browser. Map visualization and analytical compute workloads use WebGPU. Interactive plots are built using [D3.js](https://d3js.org/).

:::tip Browser requirements
`autk-map` and `autk-compute` require a browser with **WebGPU** support.

| Browser | Support Status | Minimum Version |
|---|---|---|
| Chrome | Full | 113+  |
| Edge | Full | 113+ |
| Safari | Full | 26+  |
| Firefox | Full | 141+ |
| Opera | Full | 99+ |

 `autk-db` and `autk-plot` work in any modern browser.
:::


## Minimal Example

The playground below loads OpenStreetMap data for the Financial District in New York and renders it as a full 3D city map — with surface, parks, water and roads. 

Try to add `"buildings"` to the `layers` list and click **Run** to test changes.

<script setup>
const introCode = `
import { AutkMap } from "@urban-toolkit/autk-map";
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

await db.loadOsm({
  queryArea: {
    geocodeArea: "New York",
    areas: ["Financial District"]
  },
  outputTableName: "osm",
  autoLoadLayers: {
    coordinateFormat: "EPSG:3395",
    layers: ["surface", "parks", "water", "roads"],
  },
  onProgress: (phase) => console.log(phase),
});

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayerTables()) {
  const geojson = await db.getLayer(layer.name);
  map.loadCollection(layer.name, { collection: geojson, type: layer.type });
}

map.draw();
`
</script>

<ClientOnly>
  <CodePlayground :code="introCode" out="dom" />
</ClientOnly>

The `canvas` argument used in the autk-map constructor must be a reference to a DOM node containing a HTML canvas.

</div>
