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

`autk-map` is a geospatial data renderer powered by [WebGPU](https://webgpu.org/). It can handle [GeoJSON](https://geojson.org/), semantic [OpenStreetMap](https://www.openstreetmap.org/) layer types, and can display thematic values without a tile server.

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

Autark is built over some core concepts, that guides data data loading, rendering and interactions. Next you can find a brief description of each concept and a reference to their detailed description in this guide.

- **Layer ids** — each layer is identified by an unique string id. This id must be used when the user wants to update rendering properties such as the layer's thematic data, rendering state, etc. See [Layers](./layers) for details.
- **Layer types** — each layer has a type that can be either a semantic type or a generic type. Semantic types such as `surface`, `parks`, `water`, `roads`, and `buildings` use specialized types used to build the map context, while generic types such as `points`, `polylines`, `polygons`, and `raster` support custom datasets. See [Layers](./layers).
- **Render state** — each layer has render state controlling properties such as opacity, visibility, picking, and whether thematic coloring is active. These properties can be updated dynamically without reloading the layer. See [Styling](./styling).
- **Thematic data** — thematic data rendering maps numeric or categorical feature attributes to colors. In practice, you configure a color map, point to a property path, and enable thematic display for the layer. See [Thematic Data](./thematic-mapping).
- **Interactions** — interactions let users explore layers through picking, highlighting, filtering, and visibility control without changing the underlying data. See [Interactions](./interactions).

</div>
