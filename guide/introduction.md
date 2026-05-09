# Introduction

Autark provides a client-side platform for implementing urban visual analytics software. It supports loading, storing, querying, joining, and exporting physical and thematic urban data using standard formats such as OpenStreetMap, GeoJSON, and GeoTIFF. By using GPU acceleration, Autark enables the implementation of algorithms for sophisticated urban analyses, such as shadow and visibility analysis, as well as classic machine learning algorithms such as regression and clustering. Finally, it provides a collection of interactive plots and a 3D map for visualizing urban data.

## Packages

Autark is available as a single package or as individual modules:

| Package                       | Purpose |
| ----------------------------- | ------- |
| **@urban-toolkit/autk**       | Complete package that re-exports the toolkit modules |
| **@urban-toolkit/autk-db**    | A spatial database that handles physical and thematic urban datasets |
| **@urban-toolkit/autk-compute** | A WebGPU-based computation engine for implementing general-purpose algorithms using physical and thematic data |
| **@urban-toolkit/autk-map**   | A WebGPU-based vector map visualization library for exploring 2D and 3D physical and thematic layers |
| **@urban-toolkit/autk-plot**  | A D3.js-based plot library designed to consume urban data in standard formats and facilitate linked views |

For demonstration and documentation purposes, we provide a large collection of examples illustrating the core functionality of each module in the examples and usecases sections of this site.

## Installation

Autark packages are available on npm. Install the complete package when you want the full toolkit:

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

All packages run in the browser without a backend. Data is fetched directly from public APIs such as the OpenStreetMap Overpass API or from static file servers. Queries run inside a DuckDB instance in the browser. Rendering and compute workloads use WebGPU where available.

:::tip Browser requirements
`autk-map` and `autk-compute` require a browser with **WebGPU** support (Chrome 113+, Edge 113+). `autk-db` and `autk-plot` work in any modern browser.
:::

## Minimal End-to-End Example

The following loads OpenStreetMap data for the Financial District in New York and renders it as a full 3D city map — with surface, parks, water, roads, and buildings. Loading progress is reported via `onProgress` as named phase strings while data is fetched and processed.

```typescript
import { AutkSpatialDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

async function main() {
  const canvas = document.querySelector("canvas")!;

  const db = new AutkSpatialDb();
  await db.init();

  // Load OSM data — creates tables for surface, parks, water, roads, and buildings
  await db.loadOsm({
    queryArea: { 
        geocodeArea: "New York", 
        areas: ["Battery Park City", "Financial District"] 
    },
    outputTableName: "osm",
    autoLoadLayers: {
      coordinateFormat: "EPSG:3395",
      layers: ["surface", "parks", "water", "roads", "buildings"],
      dropOsmTable: true,
    },
    onProgress: (phase) => console.log(phase),
  });

  // Render — getLayer() retrieves each layer from DuckDB as GeoJSON
  const map = new AutkMap(canvas);
  await map.init();

  for (const layer of db.getLayerTables()) {
    const geojson = await db.getLayer(layer.name);
    map.loadCollection(layer.name, { collection: geojson, type: layer.type });
  }

  map.draw();
}

main();
```

**Live result:**

<ClientOnly>
  <AutkMapExample />
</ClientOnly>

Continue to the [autk-db overview](/autk-db/) to learn more about loading and querying data.
