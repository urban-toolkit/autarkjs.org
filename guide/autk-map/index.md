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
const map = new AutkMap(canvas, { showUi: false });
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
.package-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

<h1 id="autk-map" class="package-title">autk-map <a class="pkg-badge" href="https://www.npmjs.com/package/@urban-toolkit/autk-map"><img alt="autk-map npm version" src="https://img.shields.io/npm/v/@urban-toolkit/autk-map?color=0ea5e9&logo=npm&labelColor=111827"></a></h1>

`autk-map` is a geospatial data renderer powered by [WebGPU](https://webgpu.org/). It can handle [GeoJSON](https://geojson.org/), semantic [OpenStreetMap](https://www.openstreetmap.org/) layer types, and can display thematic values without a tile server.

**Key capabilities:**

- Render **2D and 3D layers** with WebGPU: buildings, roads, parks, water, surface, points, lines, polygons, and rasters.
- Load [GeoJSON](https://geojson.org/) in any coordinate system and reproject it into the map's **workspace CRS**.
- Color layers by attribute with **sequential, diverging, or categorical** maps, legends, and custom palettes.
- Explore with **click, hover, tooltips, selection, and skipping**, all using the same feature ids as charts.
- Add **satellite or street imagery**, **streamed elevation**, and true-color **RGB rasters** to the scene.

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
Each map has one workspace CRS, set in the constructor and shared by every layer, imagery and terrain source. It defaults to [`EPSG:3395`](/api/autk-db/variables/DEFAULT_WORKSPACE_CRS) (World Mercator), the same default as `autk-db`. Pass `{ crs }` to use another horizontal CRS. Data loaded with `sourceCrs` is reprojected on load; data without it is assumed to already be in the workspace CRS. See [Coordinate systems](/introduction#coordinate-systems).
:::

<ClientOnly>
  <CodePlayground :code="introCode" out="dom" :auto-run="true" />
</ClientOnly>

:::warning WebGPU required
`autk-map` requires WebGPU. Use a recent **Chrome**, **Edge**, or **Safari**. See the browser support table in the [Introduction](/introduction).
:::

## Rendering mode

`map.draw()` renders once, then again only when something changes. Camera moves, resizes, layer loads, render-state updates, styles, clicking, hovering, and terrain changes each request the next frame.

Run it to switch between on-demand rendering and a continuous 30 fps loop. **Toggle borders** redraws automatically in either mode:

<ClientOnly>
  <CodePlayground :code="renderModeCode" out="dom" :auto-run="false" />
</ClientOnly>

Use `map.draw(30)` or `map.draw({ fps: 30 })` for a continuous 30 fps loop; `map.draw({ onDemand: false })` uses 60 fps. Calling `draw()` again replaces the active mode. Continuous rendering is useful for animation or other work that changes every frame.

Direct writes to GPU resources are not observed; call [`map.requestRender()`](/api/autk-map/classes/AutkMap#requestrender) afterward. Direct edits to cached uniforms/render state or CPU geometry also need `layer.makeLayerRenderInfoDirty()` or `layer.makeLayerDataDirty()`, respectively. These dirty marks already request a frame for attached layers. `requestRender()` alone does not upload CPU buffers or refresh cached uniforms; prefer the public update methods.

:::warning Migrating from 4.0
`map.draw()` no longer starts a continuous loop. Applications with unobserved per-frame mutations must request frames explicitly or opt into continuous rendering. Numeric FPS calls retain their previous continuous behavior.
:::

## Initialization and lifecycle

The optional second constructor argument is an options object: `{ showUi, crs }`. Pass `showUi: false` when your application provides its own controls:

<ClientOnly>
  <CodePlayground :code="lifecycleCode" out="dom" :auto-run="false" />
</ClientOnly>

`showUi` is a read-only property reflecting that constructor choice. Hiding the UI does not disable programmatic layer, selection, or camera controls. Every map still includes a bottom-left credit strip, even with `showUi: false`: a text-only **Made with Autark** link, plus the attribution of any visible tile imagery. The strip follows canvas resizing, and only its links intercept pointer events; `destroy()` removes it.

When removing the canvas or leaving the page, call [`destroy()`](/api/autk-map/classes/AutkMap#destroy):

The **Destroy map** button above demonstrates disposal. After destroying the map, click **Run** to create a new instance.

This cancels the render loop, removes event bindings and floating UI, and releases layer/renderer GPU resources. Calling it again is safe, but a destroyed map should not be reused: create a new instance for the next mount. Also destroy the instance if initialization fails. If a component can unmount while `init()` is pending, defer final cleanup until that promise settles and do not load layers or start rendering after unmount.

For navigation and resetting the view, see [Camera controls](./interactions#camera-controls).

## Core concepts

Autark rests on a few core concepts.

- **Layer ids** — a unique string identifies each layer, and later updates to thematic data or render state address it by that id.
- **Layer types** — physical types such as `surface`, `parks`, `water`, `roads`, and `buildings` build the map context; generic types such as `points`, `polylines`, `polygons`, and `raster` carry custom datasets.
- **Render state** — opacity, visibility, clicking, hovering, point size, line width, borders, and thematic coloring live in each layer's render state and change without reloading it.
- **Thematic data** — a color map and a property path turn attributes into colors.
- **Interactions** — clicking, hovering, selecting, and skipping explore a layer without changing its data.
- **Terrain data** — a heightfield from an elevation raster or streamed tiles drapes the loaded layers over real topography.
- **Imagery** — a tile basemap can sit under the vector layers.

Each concept has its own page: [Layers data](./layers), [Styling](./styling), [Thematic data](./thematic), [Interactions](./interactions), [Terrain data](./terrain), and [Imagery](./imagery).

</div>
