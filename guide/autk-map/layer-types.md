<script setup>
const inferTypeCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: { name: "North" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.012, 40.706],
        [-74.004, 40.706],
        [-74.004, 40.712],
        [-74.012, 40.712],
        [-74.012, 40.706]
      ]]
    }
  }]
};

map.loadCollection("neighborhoods", { collection: neighborhoods });
map.draw();
console.log("Layer type inferred from polygon geometry.");
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

# Layer Types

Every `autk-map` layer has a type. The type controls how features are triangulated, colored, and rendered.

## OSM semantic layers

These types match the layers commonly produced by `autk-db.loadOsm()`:

| Type | Geometry | Description |
|---|---|---|
| `surface` | Polygon | Ground or land-cover surface |
| `parks` | Polygon | Parks and green areas |
| `water` | Polygon | Water bodies |
| `roads` | Polyline | Road network |
| `buildings` | Polygon | Buildings rendered with extrusion |

`buildings` is the only semantic layer type rendered as 3D extruded geometry.

## Generic geometry layers

Use these for your own GeoJSON collections:

| Type | Geometry |
|---|---|
| `points` | `Point` / `MultiPoint` |
| `polylines` | `LineString` / `MultiLineString` |
| `polygons` | `Polygon` / `MultiPolygon` |

## Raster layers

| Type | Description |
|---|---|
| `raster` | Grid-based data such as heatmaps or GeoTIFF-derived collections |

Raster layers require a property path so the renderer knows which numeric value to read from each cell feature.

## Automatic inference

When `type` is omitted, `loadCollection()` tries to infer the layer type from the collection geometry:

<ClientOnly>
  <CodePlayground :code="inferTypeCode" out="both" />
</ClientOnly>

Inference works when all non-null geometries belong to the same family:

- `Point` / `MultiPoint` → `points`
- `LineString` / `MultiLineString` → `polylines`
- `Polygon` / `MultiPolygon` → `polygons`

OSM semantic types such as `roads` and `buildings` are **not** inferred automatically. Pass them explicitly when you need OSM-specific rendering behavior.

:::tip Mixed geometry collections
If a collection mixes geometry families, pass `type` explicitly. Mixed collections cannot be inferred safely.
:::

</div>
