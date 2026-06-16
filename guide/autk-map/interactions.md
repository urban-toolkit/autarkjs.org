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

// Mark a layer as pickable. Only layers with isPick set to true
// emit picking events.
map.updateRenderInfo("neighborhoods", { isPick: true });

map.events.on(MapEvent.PICKING, ({ selection, layerId }) => {
  console.log({ layerId, selection });
});

map.draw();
`;

const highlightCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});

map.draw();

// Programmatically emphasize or hide specific components
// without changing the underlying collection.
setTimeout(() => {
  map.setHighlightedIds("neighborhoods", [0, 1]);
  console.log("Highlighted neighborhoods 0 and 1.");
}, 800);

setTimeout(() => {
  map.clearHighlightedIds("neighborhoods");
  map.setSkippedIds("neighborhoods", [5, 6, 7]);
  console.log("Temporarily skipped neighborhoods 5, 6, 7.");
}, 1600);

setTimeout(() => {
  map.clearSkippedIds("neighborhoods");
  console.log("Restored all neighborhoods.");
}, 2400);
`;

const visibilityCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});

map.draw();

// Layer-level visibility is controlled with isSkip.
// Use updateRenderInfo to toggle it and removeLayer to
// fully detach the layer from the map.
setTimeout(() => map.updateRenderInfo("neighborhoods", { isSkip: true }), 800);
setTimeout(() => map.updateRenderInfo("neighborhoods", { isSkip: false }), 1600);
setTimeout(() => map.removeLayer("neighborhoods"), 2400);
`;

const linkedViewsCode = `
import { AutkMap, MapEvent } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});

map.updateRenderInfo("neighborhoods", { isPick: true });

map.draw();

// Forward the picking selection to a console payload
// shaped like an autk-plot input. A typical linked-view
// setup pipes selection into PlotBaseData or a chart
// filter, so the same features light up across views.
map.events.on(MapEvent.PICKING, ({ selection, layerId }) => {
  const plotInput = {
    filter: { layerId, ids: selection }
  };
  console.log({ plotInput });
});
`;
</script>

<style scoped>
.package-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
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

`autk-map` exposes three complementary interaction mechanisms. They share the same render-info flags and the same event bus, so they can be combined in any order:

1. **Picking** — pointer-driven selection that emits events through `map.events.on()`.
2. **Programmatic highlight and skip** — direct control over which components stand out or are hidden, useful for cross-view coordination.
3. **Layer visibility** — show, hide, or fully remove an entire layer.

All examples below load the same neighborhood polygons as projected Mercator data, so each section focuses on a single interaction concern.

## Picking

Enable picking on a layer with `isPick` and subscribe to `MapEvent.PICKING` through `map.events.on()`. The handler receives the picking payload for the current frame. Click on a feature to see the payload appear in the console.

<ClientOnly>
  <CodePlayground :code="pickingCode" out="both" />
</ClientOnly>

| Field | Description |
|---|---|
| `layerId` | The layer that produced the event. Layers without `isPick: true` never emit. |
| `selection` | Selected component ids in that layer. An empty array means the user clicked outside any pickable feature. |

:::tip
Picking works on the rendered geometry. For 3D buildings, picking hits the building footprint or its extruded surface depending on the layer type.
:::

## Programmatic highlight and skip

Besides pointer picking, `autk-map` lets you control the visible selection directly. This is the main hook for cross-view coordination: a chart, a filter, or any external state can push which components should stand out or be hidden.

<ClientOnly>
  <CodePlayground :code="highlightCode" out="both" />
</ClientOnly>

- `setHighlightedIds()` emphasizes specific components while keeping them visible.
- `setSkippedIds()` hides specific components without removing the whole layer.
- `clearHighlightedIds()` and `clearSkippedIds()` reset those states.

## Layer visibility

For layer-level visibility, use `updateRenderInfo()` with `isSkip`. To fully detach a layer from the map, call `removeLayer()`. The latter also frees its GPU resources.

<ClientOnly>
  <CodePlayground :code="visibilityCode" out="dom" />
</ClientOnly>

## Linked views

A common pattern is to forward the picking payload directly to another Autark view. The `selection` and `layerId` from `MapEvent.PICKING` are enough to drive an `autk-plot` filter or a linked chart, so the same features light up across map and chart views. Click on a neighborhood to see the forwarded payload in the console.

<ClientOnly>
  <CodePlayground :code="linkedViewsCode" out="both" />
</ClientOnly>

See [`AutkMap`](/api/autk-map/classes/AutkMap) for the full list of interaction methods.

</div>
