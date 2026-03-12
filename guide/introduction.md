# Introduction

Autark is a modular toolkit for building urban data visualization applications that run entirely in the browser. It is composed of four independent packages that you can use together or separately.

## Packages

| Package          | Purpose                                                        |
| ---------------- | -------------------------------------------------------------- |
| **autk-db**      | Load and query geospatial data using DuckDB-WASM               |
| **autk-map**     | Render 2D/3D maps on a `<canvas>` using WebGPU                 |
| **autk-compute** | Run GPU-accelerated computations on GeoJSON feature properties |
| **autk-plot**    | Build linked D3 charts that react to map interactions          |

A typical pipeline looks like this:

```
autk-db  ──▶  autk-compute  ──▶  autk-map
                                     ▲
autk-plot  ◀──────────────────────────
```

1. **autk-db** loads and joins data (OSM, GeoJSON, CSV)
2. **autk-compute** enriches feature properties with GPU computations
3. **autk-map** renders the result as a map layer
4. **autk-plot** provides linked charts that share selection state with the map

## Installation

Install only the packages you need:

```bash
npm install autk-db
npm install autk-map
npm install autk-compute
npm install autk-plot
```

## Serverless by Design

All packages run in the browser without a backend. Data is fetched directly from public APIs (like the OpenStreetMap Overpass API) or from static file servers. Queries run inside a DuckDB-WASM instance in the browser. Rendering uses WebGPU.

:::tip Browser requirements
`autk-map` and `autk-compute` require a browser with **WebGPU** support (Chrome 113+, Edge 113+). `autk-db` and `autk-plot` work in any modern browser.
:::

## Minimal End-to-End Example

The following loads OpenStreetMap data for the Financial District in New York and renders it as a full 3D city map — with surface, parks, water, roads, and buildings. Loading progress is reported via `onProgress` as named phase strings while data is fetched and processed.

```typescript
import { SpatialDb } from "autk-db";
import { AutkMap, LayerType } from "autk-map";

async function main() {
  const canvas = document.querySelector("canvas")!;

  const db = new SpatialDb();
  await db.init();

  // Load OSM data — creates tables for surface, parks, water, roads, and buildings
  await db.loadOsmFromOverpassApi({
    queryArea: { geocodeArea: "New York", areas: ["Battery Park City", "Financial District"] },
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
    map.loadGeoJsonLayer(layer.name, geojson, layer.type as LayerType);
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
