<script setup>
const introCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const res = await fetch("/data/mnt_neighs_proj.geojson");
const geojson = await res.json();

const map = new AutkMap(canvas);
await map.init();

map.loadCollection("neighborhoods", { collection: geojson });

map.draw();
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

`autk-map` is a browser-native geospatial renderer powered by [WebGPU](https://webgpu.org/). It renders [GeoJSON](https://geojson.org/) directly on an HTML `<canvas>`, supports semantic [OpenStreetMap](https://www.openstreetmap.org/) layer types, and can display thematic values without a tile server.

**Key capabilities:**

- Render **2D and 3D geospatial layers** directly from [GeoJSON](https://geojson.org/) in the browser.
- Support [OpenStreetMap](https://www.openstreetmap.org/) layers such as **surface**, **parks**, **water**, **roads**, and **buildings**.
- Display **thematic data** using configurable color maps.
- Handle **interactive exploration** through picking, highlighting, and filtering features.
- Integrate directly with [`autk-db`](/autk-db/), [`autk-compute`](/autk-compute/), and [`autk-plot`](/autk-plot/).

## Package installation

To install `autk-map`, you must install its [NPM package](https://www.npmjs.com/package/@urban-toolkit/autk-map).

```bash
npm install @urban-toolkit/autk-map
```

You can also install the full toolkit:

```bash
npm install @urban-toolkit/autk
```

## Initialization

The entry point of **autk-map** is the `AutkMap` class. To create a map, you must pass to the constructor a HTML canvas as paramenter. After instantiating the map, you must await `init()`, load one or more layers, and finally call `draw()`.

:::tip Coordinate system
`autk-map` expects data in projected coordinates. Any projected CRS may be used. For example, the default [`autk-db` workspace](/autk-db/workspaces) uses [`EPSG:3395`](/api/autk-db/variables/DEFAULT_WORKSPACE_COORDINATE_FORMAT), also known as **World Mercator**.
:::

<ClientOnly>
  <CodePlayground :code="introCode" out="dom" />
</ClientOnly>

:::warning WebGPU required
`autk-map` requires a browser with WebGPU support. We recommend using recent versions of **Chrome**, **Edge**, or **Safari**. See the browser support table in the [Introduction](/introduction).
:::

## Core concepts

- **Layer ids** — each loaded layer is registered under a unique string id. This id is used later to update thematic values, change visibility, enable picking, highlight components, or remove the layer entirely. See [Loading Layers](./loading-layers) and [Interactions](./interactions).
- **Layer types** — rendering behavior depends on the layer type. Semantic types such as `surface`, `parks`, `water`, `roads`, and `buildings` use specialized rendering rules, while generic types such as `points`, `polylines`, `polygons`, and `raster` support custom datasets. See [Layer Types](./layer-types).
- **Bounding box** — the first loaded layer defines the shared map extent and internal spatial reference used to frame the camera and place subsequent layers, unless you set the bounding box manually beforehand. See [Loading Layers](./loading-layers).
- **Render state** — each layer has render state controlling properties such as opacity, visibility, picking, and whether thematic coloring is active. These properties can be updated dynamically without reloading the layer. See [Styling](./styling) and [Interactions](./interactions).
- **Thematic data** — thematic data rendering maps numeric or categorical feature attributes to colors. In practice, you configure a color map, point to a property path, and enable thematic display for the layer. See [Thematic Data](./thematic-mapping) and [Styling](./styling).
- **Map styles** — default base colors for semantic layers come from `MapStyle`, which provides built-in presets and custom styles for controlling the overall visual appearance of the map. See [Styling](./styling).

## Documentation sections

The current `autk-map` guide is organized around the package's main feature groups:

- [Layer Types](./layer-types) — supported semantic and geometric layer kinds
- [Loading Layers](./loading-layers) — GeoJSON, raster collections, `autk-db` integration, and mesh loading
- [Thematic Data](./thematic-mapping) — coloring features based on thematic data
- [Interactions](./interactions) — picking, highlighting, filtering, and layer visibility
- [Styling](./styling) — base map styles, opacity, and color-map configuration

For lower-level APIs and details, please use the [API Reference](/api/autk-map/globals).

</div>
