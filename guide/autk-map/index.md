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
const renderModeCode = `
import { AutkMap } from '@urban-toolkit/autk-map';

const neighborhoods = await fetch('/data/mnt_neighs_proj.geojson').then(res => res.json());
const map = new AutkMap(canvas);
await map.init();
map.loadCollection('neighborhoods', { collection: neighborhoods });
map.draw(); // On demand: an idle map does not schedule continuous frames.

output('<button type="button" data-mode="demand">On demand</button> <button type="button" data-mode="continuous">Continuous (30 fps)</button> <button type="button" data-action="borders">Toggle borders</button>');
mount.querySelector('[data-mode="demand"]').addEventListener('click', () => map.draw());
mount.querySelector('[data-mode="continuous"]').addEventListener('click', () => map.draw({ fps: 30 }));
let borders = true;
mount.querySelector('[data-action="borders"]').addEventListener('click', () => {
  borders = !borders;
  // Supported setters request a frame automatically, even in on-demand mode.
  map.updateRenderInfo('neighborhoods', { showBorders: borders });
});
`

const lifecycleCode = `
import { AutkMap } from '@urban-toolkit/autk-map';

const neighborhoods = await fetch('/data/mnt_neighs_proj.geojson').then(res => res.json());
const map = new AutkMap(canvas, false);
await map.init();
map.loadCollection('neighborhoods', { collection: neighborhoods });
map.draw();

output('<button type="button">Destroy map</button><p>The floating map UI is disabled.</p>');
const button = mount.querySelector('button');
button.addEventListener('click', () => {
  // Call this in your component unmount callback as well.
  map.destroy();
  button.disabled = true;
  button.textContent = 'Map destroyed — click Run to create another';
});
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

[![npm version](https://img.shields.io/npm/v/@urban-toolkit/autk-map?color=0ea5e9&logo=npm&labelColor=111827)](https://www.npmjs.com/package/@urban-toolkit/autk-map)

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
  <CodePlayground :code="introCode" out="dom" :auto-run="true" />
</ClientOnly>

:::warning WebGPU required
`autk-map` requires a browser with WebGPU support. We recommend using recent versions of **Chrome**, **Edge**, or **Safari**. See the browser support table in the [Introduction](/introduction).
:::

## Rendering mode

In v4.1, `map.draw()` renders once and then renders again only when the map observes a change. Camera navigation, resize, layer loading/removal, supported render-state updates, styles, picking, and terrain changes all request the next frame automatically.

Run this example and switch between on-demand rendering and a continuous 30 fps loop. **Toggle borders** demonstrates a supported update that redraws automatically in either mode:

<ClientOnly>
  <CodePlayground :code="renderModeCode" out="dom" :auto-run="false" />
</ClientOnly>

Use `map.draw(30)` or `map.draw({ fps: 30 })` for a continuous 30 fps loop; `map.draw({ onDemand: false })` uses 60 fps. Calling `draw()` again replaces the active mode. Continuous rendering is useful for animation or other work that changes every frame.

Direct writes to GPU resources are not observed; call [`map.requestRender()`](/api/autk-map/classes/AutkMap#requestrender) afterward. Direct edits to cached uniforms/render state or CPU geometry also need `layer.makeLayerRenderInfoDirty()` or `layer.makeLayerDataDirty()`, respectively. These dirty marks already request a frame for attached layers. `requestRender()` alone does not upload CPU buffers or refresh cached uniforms; prefer the public update methods.

:::warning Migrating from 4.0
`map.draw()` no longer starts a continuous loop. Applications with unobserved per-frame mutations must request frames explicitly or opt into continuous rendering. Numeric FPS calls retain their previous continuous behavior.
:::

## Initialization and lifecycle

The optional second constructor argument controls the floating map UI. Pass `false` when your application provides its own controls:

<ClientOnly>
  <CodePlayground :code="lifecycleCode" out="dom" :auto-run="false" />
</ClientOnly>

`showUi` is a read-only property reflecting that constructor choice. Hiding the UI does not disable programmatic layer, selection, or camera controls. Every map still includes the bottom-right text-only **made with autark** watermark; it follows canvas resizing, does not intercept input, and is removed by `destroy()`.

When removing the canvas, changing routes, or replacing the visualization, call [`destroy()`](/api/autk-map/classes/AutkMap#destroy):

The **Destroy map** button above demonstrates disposal. After destroying the map, click **Run** to create a new instance.

This cancels the render loop, removes event bindings and floating UI, and releases layer/renderer GPU resources. Calling it again is safe, but a destroyed map should not be reused: create a new instance for the next mount. Also destroy the instance if initialization fails. If a component can unmount while `init()` is pending, defer final cleanup until that promise settles and do not load layers or start rendering after unmount.

For navigation and resetting the view, see [Camera controls](./interactions#camera-controls).

## Core concepts

Autark is built over some core concepts, that guides data data loading, rendering and interactions. Next you can find a brief description of each concept and a reference to their detailed description in this guide.

- **Layer ids** — each layer is identified by an unique string id. This id must be used when the user wants to update rendering properties such as the layer's thematic data, rendering state, etc. See [Layers data](./layers) for details.
- **Layer types** — each layer has a type that can be either a physical type or a generic type. Physical types such as `surface`, `parks`, `water`, `roads`, and `buildings` are used to build the map context, while generic types such as `points`, `polylines`, `polygons`, and `raster` support custom datasets. See [Layers data](./layers).
- **Render state** — each layer has render state controlling properties such as opacity, visibility, picking, and whether thematic coloring is active. These properties can be updated dynamically without reloading the layer. See [Styling](./styling).
- **Thematic data** — thematic data rendering maps numeric or categorical feature attributes to colors. In practice, you configure a color map, point to a property path, and enable thematic display for the layer. See [Thematic data](./thematic).
- **Interactions** — interactions let users explore layers through picking, highlighting, filtering, and visibility control without changing the underlying data. See [Interactions](./interactions).
- **Terrain data** — terrain mode replaces the flat ground plane with a heightfield built from an elevation raster, draping the loaded layers over real topography. See [Terrain data](./terrain).

</div>
