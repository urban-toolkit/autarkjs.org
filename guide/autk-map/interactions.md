<script setup>
const pickingCode = `
import { AutkMap, MapEvent } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "n1",
      properties: { name: "West" },
      geometry: { type: "Polygon", coordinates: [[[-74.0125, 40.706], [-74.008, 40.706], [-74.008, 40.712], [-74.0125, 40.712], [-74.0125, 40.706]]] }
    },
    {
      type: "Feature",
      id: "n2",
      properties: { name: "East" },
      geometry: { type: "Polygon", coordinates: [[[-74.008, 40.706], [-74.0035, 40.706], [-74.0035, 40.712], [-74.008, 40.712], [-74.008, 40.706]]] }
    }
  ]
};

map.loadCollection("neighborhoods", { collection: neighborhoods, type: "polygons" });
map.updateRenderInfo("neighborhoods", { isPick: true });

map.events.on(MapEvent.PICKING, ({ selection, layerId }) => {
  console.log({ layerId, selection });
});

map.draw();
`

const highlightCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const roads = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "r1",
      properties: { name: "Main" },
      geometry: { type: "LineString", coordinates: [[-74.012, 40.708], [-74.004, 40.708]] }
    },
    {
      type: "Feature",
      id: "r2",
      properties: { name: "Broad" },
      geometry: { type: "LineString", coordinates: [[-74.009, 40.706], [-74.009, 40.712]] }
    }
  ]
};

map.loadCollection("roads", { collection: roads, type: "roads" });
map.draw();

setTimeout(() => {
  map.setHighlightedIds("roads", [0]);
  console.log("Highlighted component 0.");
}, 800);

setTimeout(() => {
  map.setSkippedIds("roads", [1]);
  console.log("Temporarily skipped component 1.");
}, 1600);
`

const layerVisibilityCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const parks = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.0115, 40.7075],
        [-74.006, 40.7075],
        [-74.006, 40.7115],
        [-74.0115, 40.7115],
        [-74.0115, 40.7075]
      ]]
    }
  }]
};

map.loadCollection("parks", { collection: parks, type: "parks" });
map.draw();

setTimeout(() => map.updateRenderInfo("parks", { isSkip: true }), 800);
setTimeout(() => map.updateRenderInfo("parks", { isSkip: false }), 1600);
setTimeout(() => map.removeLayer("parks"), 2400);
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

# Interactions

## Picking

Enable picking on a layer with `isPick`, then subscribe to `MapEvent.PICKING` through `map.events.on()`:

<ClientOnly>
  <CodePlayground :code="pickingCode" out="both" />
</ClientOnly>

The payload contains:

- `selection` — selected component ids
- `layerId` — the layer that produced the event

An empty `selection` means the user clicked outside any pickable feature.

## Programmatic highlighting and filtering

Besides pointer picking, `autk-map` also lets you control the visible selection directly:

<ClientOnly>
  <CodePlayground :code="highlightCode" out="both" />
</ClientOnly>

- `setHighlightedIds()` highlights specific components
- `setSkippedIds()` hides specific components without removing the whole layer
- `clearHighlightedIds()` and `clearSkippedIds()` reset those states

## Show, hide, and remove layers

For layer-level visibility, use `updateRenderInfo()` with `isSkip`. To fully remove a layer, call `removeLayer()`:

<ClientOnly>
  <CodePlayground :code="layerVisibilityCode" out="dom" />
</ClientOnly>

:::tip Linked views
The picking payload can be forwarded directly to other Autark views. A common pattern is to connect `selection` to `autk-plot` so the same features are highlighted across map and chart views.
:::

</div>
