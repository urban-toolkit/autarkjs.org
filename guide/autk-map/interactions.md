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

const collection = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", { collection });
map.updateRenderInfo("neighborhoods", { isPick: true });
map.draw();

setTimeout(() => {
  map.setSkippedIds("neighborhoods", [5, 8, 13, 18, 20, 25]);
  console.log("Skipping....");
}, 800);

setTimeout(() => {
  map.setHighlightedIds("neighborhoods", [10, 12, 15]);
  console.log("Highlighting....");
}, 1600);
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
map.draw();

setTimeout(() => map.updateRenderInfo("points", { isSkip: true }), 800);
setTimeout(() => map.updateRenderInfo("points", { isSkip: false }), 1600);
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

All examples below use projected Mercator data already prepared for the docs site, so each section focuses on a single interaction concern.

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

## Highlight and skip

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

</div>
