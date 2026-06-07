<script setup>
const numericThematicCode = `
import { AutkMap } from "@urban-toolkit/autk-map";
import { ColorMapInterpolator } from "@urban-toolkit/autk-core";

const map = new AutkMap(canvas);
await map.init();

const buildings = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "b1",
      properties: { height: 20 },
      geometry: { type: "Polygon", coordinates: [[[-74.012, 40.706], [-74.0105, 40.706], [-74.0105, 40.7075], [-74.012, 40.7075], [-74.012, 40.706]]] }
    },
    {
      type: "Feature",
      id: "b2",
      properties: { height: 55 },
      geometry: { type: "Polygon", coordinates: [[[-74.0095, 40.707], [-74.008, 40.707], [-74.008, 40.7085], [-74.0095, 40.7085], [-74.0095, 40.707]]] }
    },
    {
      type: "Feature",
      id: "b3",
      properties: { height: 90 },
      geometry: { type: "Polygon", coordinates: [[[-74.007, 40.709], [-74.0052, 40.709], [-74.0052, 40.7108], [-74.007, 40.7108], [-74.007, 40.709]]] }
    }
  ]
};

map.loadCollection("buildings", { collection: buildings, type: "buildings" });
map.updateColorMap("buildings", {
  colorMap: { interpolator: ColorMapInterpolator.SEQUENTIAL_REDS }
});
map.updateThematic("buildings", { collection: buildings, property: "properties.height" });
map.updateRenderInfo("buildings", { isColorMap: true });
map.draw();
`

const categoricalThematicCode = `
import { AutkMap } from "@urban-toolkit/autk-map";
import { ColorMapInterpolator } from "@urban-toolkit/autk-core";

const map = new AutkMap(canvas);
await map.init();

const roads = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "r1",
      properties: { highway_class: "primary" },
      geometry: { type: "LineString", coordinates: [[-74.0125, 40.707], [-74.003, 40.707]] }
    },
    {
      type: "Feature",
      id: "r2",
      properties: { highway_class: "secondary" },
      geometry: { type: "LineString", coordinates: [[-74.011, 40.7095], [-74.0045, 40.711]] }
    },
    {
      type: "Feature",
      id: "r3",
      properties: { highway_class: "other" },
      geometry: { type: "LineString", coordinates: [[-74.009, 40.7055], [-74.009, 40.7122]] }
    }
  ]
};

map.loadCollection("roads", { collection: roads, type: "roads" });
map.updateColorMap("roads", {
  colorMap: { interpolator: ColorMapInterpolator.OBSERVABLE10 }
});
map.updateThematic("roads", { collection: roads, property: "properties.highway_class" });
map.updateRenderInfo("roads", { isColorMap: true });
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

# Thematic Data

Thematic mapping colors features according to an attribute. In `autk-map`, the usual workflow is:

1. Load the layer
2. Configure the color map
3. Call `updateThematic()` with the source collection and property path
4. Enable thematic rendering with `isColorMap`

## Numeric attributes

Use sequential or diverging interpolators for continuous values such as height, density, score, or temperature:

<ClientOnly>
  <CodePlayground :code="numericThematicCode" out="dom" />
</ClientOnly>

The renderer normalizes numeric values to the active color-map domain and updates legend labels automatically.

## Categorical attributes

For class labels or categories, use a categorical palette such as `OBSERVABLE10`:

<ClientOnly>
  <CodePlayground :code="categoricalThematicCode" out="dom" />
</ClientOnly>

## Updating thematic values

Call `updateThematic()` again whenever the property path or source collection changes, for example with `collection: updatedCollection` and `property: "properties.compute.score"`.

## Alignment rules

Thematic values are matched back to rendered components using feature ids when possible. If ids are missing, the renderer falls back to feature order. For reliable updates, keep stable `feature.id` values or preserve collection ordering.

</div>
