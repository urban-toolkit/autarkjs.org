<script setup>
const introCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const surface = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: { name: "study-area" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.0135, 40.7048],
        [-74.0015, 40.7048],
        [-74.0015, 40.7128],
        [-74.0135, 40.7128],
        [-74.0135, 40.7048]
      ]]
    }
  }]
};

const roads = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "west-east" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-74.013, 40.7085],
          [-74.002, 40.7085]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "south-north" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-74.008, 40.7052],
          [-74.008, 40.7122]
        ]
      }
    }
  ]
};

const buildings = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "A", height: 45 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.0118, 40.7060],
          [-74.0107, 40.7060],
          [-74.0107, 40.7072],
          [-74.0118, 40.7072],
          [-74.0118, 40.7060]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "B", height: 75 },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.0065, 40.7090],
          [-74.0050, 40.7090],
          [-74.0050, 40.7104],
          [-74.0065, 40.7104],
          [-74.0065, 40.7090]
        ]]
      }
    }
  ]
};

map.loadCollection("surface", { collection: surface, type: "surface" });
map.loadCollection("roads", { collection: roads, type: "roads" });
map.loadCollection("buildings", { collection: buildings, type: "buildings" });
map.draw();
`

const dbWorkflowCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
  geojsonFileUrl: "/data/mnt_neighs.geojson",
  outputTableName: "neighborhoods"
});

const geojson = await db.getLayer("neighborhoods");

const map = new AutkMap(canvas);
await map.init();
map.loadCollection("neighborhoods", { collection: geojson });
map.draw();

console.log(db.getLayersMetadata());
`
</script>

<style scoped>
.package-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

# autk-map

`autk-map` is Autark's WebGPU renderer for 2D and 3D geospatial layers. It renders GeoJSON directly on an HTML `<canvas>`, supports semantic OSM layer types, and can display thematic values without a tile server.

## Package installation

Install the package from npm:

```bash
npm install @urban-toolkit/autk-map
```

You can also install the full toolkit:

```bash
npm install @urban-toolkit/autk
```

## Initialization

The entry point is the `AutkMap` class. Create it with a canvas, await `init()`, load one or more layers, and then call `draw()`.

<ClientOnly>
  <CodePlayground :code="introCode" out="dom" />
</ClientOnly>

:::warning WebGPU required
`autk-map` requires a browser with WebGPU support. See the browser support table in the [Introduction](/introduction).
:::

## Basic workflow

Most `autk-map` workflows follow the same pattern:

1. **Create and initialize** an `AutkMap` instance.
2. **Load layers** with `loadCollection()` or `loadMesh()`.
3. **Adjust rendering** with `updateRenderInfo()`, `updateColorMap()`, or `updateThematic()`.
4. **Handle interaction** through `map.events` when picking or linked views are needed.

`autk-map` works especially well with `autk-db`, which can prepare and export layers as GeoJSON:

<ClientOnly>
  <CodePlayground :code="dbWorkflowCode" out="both" />
</ClientOnly>

## Core concepts

- **Layer ids** — each loaded layer has a unique string id.
- **Layer types** — rendering depends on the layer type, such as `buildings`, `roads`, `points`, or `raster`.
- **Bounding box and origin** — the first loaded layer defines the shared map extent unless you set it manually.
- **Render info** — visibility, opacity, picking, and thematic display are controlled per layer.
- **Map styles** — base colors come from `MapStyle`; thematic colors come from color maps.

## Documentation sections

The current `autk-map` guide is organized around the package's main feature groups:

- [Layer Types](./layer-types) — supported semantic and geometric layer kinds
- [Loading Layers](./loading-layers) — GeoJSON, raster collections, `autk-db` integration, and mesh loading
- [Styling](./styling) — base map styles, opacity, and color-map configuration
- [Thematic Mapping](./thematic-mapping) — coloring features by attributes
- [Interactions](./interactions) — picking, highlighting, filtering, and layer visibility

For constructor options and lower-level APIs, use the [API Reference](/api/autk-map/globals).

</div>
