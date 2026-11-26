---
package: autk-map
title: Interactions
---

<script setup>
const pickingCode = `
import { AutkMap, MapEvent } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});

map.updateRenderInfo("neighborhoods", { isClick: true });

map.events.on(MapEvent.CLICK, ({ selection, layerId }) => {
  console.log({ layerId, selection });
});

map.draw();
`;

const hoverCode = `
import { AutkMap, MapEvent } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas, { showUi: false });
await map.init();

const neighborhoods = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", { collection: neighborhoods });
map.updateRenderInfo("neighborhoods", { isHover: true, isClick: true });

map.events.on(MapEvent.HOVER, ({ selection, layerId, source }) => {
  if (source === "pointer") console.log("hover", layerId, selection);
});

map.events.on(MapEvent.CLICK, ({ selection }) => {
  console.log("click selection", selection);
});

// A tooltip provider receives the hovered component id.
map.setTooltip("neighborhoods", (id) => "Feature " + id);
map.draw();
`;

const highlightCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const collection = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", { collection });
map.draw();

setTimeout(() => {
  map.setSkipped("neighborhoods", [5, 8, 13, 18, 20, 25]);
  console.log("Skipping....");
}, 800);

setTimeout(() => {
  map.setSelection("neighborhoods", [10, 12, 15]);
  console.log("Selecting....");
}, 1600);

setTimeout(() => {
  map.setHover("neighborhoods", [30]);
}, 2400);
`;

const visibilityCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const [neighborhoods, points] = await Promise.all([
  fetch("/data/mnt_neighs_proj.geojson").then((res) => res.json()),
  fetch("/data/mnt_noise_proj.geojson").then((res) => res.json())
]);

map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});
map.loadCollection("points", {
  collection: points,
  type: "points"
});
map.updateRenderInfo("points", { renderInfo: { pointSize: 120 } });
map.draw();

setTimeout(() => map.updateRenderInfo("points", { isSkip: true }), 800);
setTimeout(() => map.updateRenderInfo("points", { isSkip: false }), 1600);
`;

const cameraCode = `
import { AutkMap } from '@urban-toolkit/autk-map';

const neighborhoods = await fetch('/data/mnt_neighs_proj.geojson').then(res => res.json());
const map = new AutkMap(canvas);
await map.init();
map.loadCollection('neighborhoods', { collection: neighborhoods });
map.fitBounds();
map.draw();

output('<button type="button" data-action="rotate">Rotate and tilt</button> <button type="button" data-action="ortho">Orthographic</button> <button type="button" data-action="save">Save and restore</button> <button type="button" data-action="reset">Reset camera</button>');
mount.querySelector('[data-action="rotate"]').addEventListener('click', () => {
  map.camera.yaw(Math.PI / 4);
  map.camera.pitch(-0.2);
  map.camera.update();
});
let saved = null;
mount.querySelector('[data-action="ortho"]').addEventListener('click', () => {
  map.camera.setProjection('orthographic');
});
mount.querySelector('[data-action="save"]').addEventListener('click', () => {
  if (saved) {
    map.camera.restoreState(saved);
    saved = null;
  } else {
    saved = map.camera.saveState();
    map.camera.zoom(4, 0.5, 0.5);
  }
});
mount.querySelector('[data-action="reset"]').addEventListener('click', () => {
  map.resetCamera();
});
`
</script>

<style scoped>
.package-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page > p:first-of-type {
  font-size: 1.05em;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

# Interactions

`autk-map` separates transient pointer feedback from persistent state. Clicking selects, hovering previews, and both can target different layers without overwriting each other. Programmatic selection and skipping reuse the same state, so a chart, a filter, or any external store can drive the map.

1. **Click and hover** — pointer events through `map.events.on()`.
2. **Programmatic selection, hover, and skip** — direct control over which components stand out or are hidden.
3. **Layer visibility and order** — show, hide, restack, or fully remove a layer.

## Click

Enable clicking on a layer with `isClick` and subscribe to `MapEvent.CLICK`. The event keeps the established **double-click** gesture, and only the enabled layer emits:

<ClientOnly>
  <CodePlayground :code="pickingCode" out="both" :auto-run="true" />
</ClientOnly>

| Field | Description |
|---|---|
| `layerId` | The layer that produced the event. Layers without `isClick: true` never emit. |
| `selection` | Selected component ids in that layer; an empty array means the user clicked outside any clickable feature. |

`map.activeClickLayer` reports the layer currently configured for clicking. Clicking and hovering can target different layers, and each is exclusive: enabling a second layer moves the capability there. `isClick: false` stops clicking and clears that layer's selection.

:::tip Migrating from 4.x
`MapEvent.PICKING` is now `MapEvent.CLICK`, `isPick` is now `isClick`, and `activePickingLayer` is now `activeClickLayer`. The gesture is unchanged: a double click.
:::

## Hover and tooltips

Hover is independent of selection: it highlights one feature temporarily and leaves the click selection intact. Enable it with `isHover` and listen to `MapEvent.HOVER`:

<ClientOnly>
  <CodePlayground :code="hoverCode" out="both" :auto-run="true" />
</ClientOnly>

The payload is `{ layerId, selection, source }`. `source` is `pointer` for pointer movement and `api` for `setHover()`; a view that mirrors pointer hover should ignore `api` echoes to avoid a feedback loop. `selection` holds one id on a hit and `[]` when the pointer leaves.

Add tooltips with `map.setTooltip(layerId, id => string)`. They appear only while that layer is hovered, and `setTooltip(layerId, null)` removes them without disabling hover. Use `map.style.setHighlightColor()` and `map.style.setHoverColor()` to change the selection and hover colors.

## Selection and skip

`setSelection(id, ids)` replaces the highlighted components and `[]` clears them. `setSkipped(id, ids)` hides components, including point layers, and also takes the **full set** of ids to hide; it is not a toggle. Hidden components cannot be clicked or hovered.

<ClientOnly>
  <CodePlayground :code="highlightCode" out="both" :auto-run="true" />
</ClientOnly>

- `setSelection()` emphasizes components while keeping them visible.
- `setSkipped()` hides components without removing the layer; `[]` shows all of them again.
- `setHover()` highlights components as hovered and emits `MapEvent.HOVER` with `source: 'api'`; `[]` clears it.

Selection, hover, and skip all use the same component ids as the loaded collection, which is why a plot selection can be passed straight to `map.setSelection()` and vice versa.

## Layer visibility

For layer-level visibility, use `updateRenderInfo()` with `isSkip`. To fully detach a layer from the map, call `removeLayer()`. The latter also frees its GPU resources.

<ClientOnly>
  <CodePlayground :code="visibilityCode" out="dom" :auto-run="true" />
</ClientOnly>

Use `map.setLayerOrder(ids)` to restack the visible 2D layers, bottom first, and `map.getLayerOrder()` to read the result. A partial list is enough; buildings are drawn separately in 3D, and hidden layers are excluded.

## Camera controls

Use `setView({ center, zoom })` to position the camera independently of loading data. The center is always WGS84, with named `latitude`/`longitude` fields, and zoom uses a 256-pixel Web Mercator reference tile. On an empty map it also establishes the projected origin; later calls preserve it. Pass `projection: 'orthographic' | 'perspective'` to choose the mode, or omit it to keep the current one.

`fitBounds(bounds?)` frames a rectangle, by default the first loaded collection, looking straight down. Loading layers does **not** fit automatically: a map without `fitBounds()` starts at a fixed height over the middle of the first layer, and a tile-only or terrain-only map starts from `setView()`.

<ClientOnly>
  <CodePlayground :code="cameraCode" out="dom" :auto-run="false" />
</ClientOnly>

[`map.camera`](/api/autk-core/classes/Camera) extends the shared `autk-core` camera and exposes translation, zoom, projection, and framing controls. With on-demand rendering, its navigation methods and supported map updates request the next frame automatically; there is no need for a render loop. `camera.update()` rebuilds matrices but does not itself request a frame. Prefer the navigation methods over directly mutating camera arrays.

A camera can be stored and restored: `camera.saveState()` returns a serializable snapshot and `camera.restoreState(state)` restores the projection, pose, framing scale, near distance, minimum far distance, and fixed orthographic bounds together. The receiving camera keeps its viewport and uses its own aspect ratio, so restore into the same map origin and coordinate system. `camera.setProjection('orthographic')` keeps zoom, pan, tilt, and `resetCamera()` working; `setOrthographicBounds(l, r, b, t)` is a separate fixed-rectangle view until reset.

See [Initialization and lifecycle](./#initialization-and-lifecycle) for hiding the floating map interface and cleaning up a map when its component is removed.

</div>
