<script setup>
const mapStyleCode = `
import { AutkMap, MapStyle } from "@urban-toolkit/autk-map";

MapStyle.setPredefinedStyle("light");

const map = new AutkMap(canvas);
await map.init();

const surface = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.013, 40.705],
        [-74.002, 40.705],
        [-74.002, 40.713],
        [-74.013, 40.713],
        [-74.013, 40.705]
      ]]
    }
  }]
};

const parks = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.0115, 40.708],
        [-74.009, 40.708],
        [-74.009, 40.711],
        [-74.0115, 40.711],
        [-74.0115, 40.708]
      ]]
    }
  }]
};

const buildings = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: { height: 50 },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.0075, 40.7075],
        [-74.006, 40.7075],
        [-74.006, 40.709],
        [-74.0075, 40.709],
        [-74.0075, 40.7075]
      ]]
    }
  }]
};

map.loadCollection("surface", { collection: surface, type: "surface" });
map.loadCollection("parks", { collection: parks, type: "parks" });
map.loadCollection("buildings", { collection: buildings, type: "buildings" });
map.updateRenderInfo("buildings", { opacity: 0.65 });
map.draw();
`

const colorMapCode = `
import { AutkMap } from "@urban-toolkit/autk-map";
import { ColorMapInterpolator } from "@urban-toolkit/autk-core";

const map = new AutkMap(canvas);
await map.init();

const blocks = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { value: 0.1 },
      geometry: { type: "Polygon", coordinates: [[[-74.012, 40.706], [-74.008, 40.706], [-74.008, 40.71], [-74.012, 40.71], [-74.012, 40.706]]] }
    },
    {
      type: "Feature",
      properties: { value: 0.5 },
      geometry: { type: "Polygon", coordinates: [[[-74.008, 40.706], [-74.004, 40.706], [-74.004, 40.71], [-74.008, 40.71], [-74.008, 40.706]]] }
    },
    {
      type: "Feature",
      properties: { value: 0.9 },
      geometry: { type: "Polygon", coordinates: [[[-74.01, 40.71], [-74.006, 40.71], [-74.006, 40.7125], [-74.01, 40.7125], [-74.01, 40.71]]] }
    }
  ]
};

map.loadCollection("blocks", { collection: blocks, type: "polygons" });
map.updateColorMap("blocks", {
  colorMap: { interpolator: ColorMapInterpolator.SEQUENTIAL_BLUES }
});
map.updateThematic("blocks", { collection: blocks, property: "properties.value" });
map.updateRenderInfo("blocks", { isColorMap: true });
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

# Styling

`autk-map` styling happens at two levels:

1. **Base layer colors** controlled by `MapStyle`
2. **Per-layer render settings** controlled by `updateRenderInfo()` and `updateColorMap()`

## Base map styles

`MapStyle` controls the default semantic colors used by the renderer for layers such as `surface`, `parks`, `roads`, and `buildings`.

<ClientOnly>
  <CodePlayground :code="mapStyleCode" out="dom" />
</ClientOnly>

Built-in presets currently include:

- `default`
- `light`
- `google`
- `apple`
- `osm`

For full control, use `MapStyle.setCustomStyle()` with a complete semantic color object. See [`MapStyle`](/api/autk-map/classes/MapStyle).

## Opacity and visibility

Use `updateRenderInfo()` to adjust layer-level render flags:

- `opacity` — number from `0` to `1`
- `isSkip` — hide or show a full layer
- `isPick` — enable or disable picking on that layer
- `isColorMap` — toggle thematic rendering

This makes `updateRenderInfo()` the main styling entry point for per-layer state.

## Color-map configuration

Thematic rendering uses a color map. You can change the palette independently from the data values:

<ClientOnly>
  <CodePlayground :code="colorMapCode" out="dom" />
</ClientOnly>

Use sequential or diverging interpolators for numeric data. Use categorical palettes such as `OBSERVABLE10` for class labels.

For the full thematic workflow, continue to [Thematic data](./thematic).

</div>
