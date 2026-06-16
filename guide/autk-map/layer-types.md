<script setup>
const semanticLayersCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadOsm({
  pbfFileUrl: "/data/lower_mnt.osm.pbf",
  queryArea: {
    geocodeArea: "New York",
    areas: ["Financial District"]
  },
  outputTableName: "osm",
  autoLoadLayers: {
    coordinateFormat: "EPSG:3395",
    layers: ["water", "roads", "buildings"]
  }
});

const map = new AutkMap(canvas);
await map.init();

for (const layerName of ["osm_water", "osm_roads", "osm_buildings"]) {
  const geojson = await db.getLayer(layerName);
  const type = layerName.replace("osm_", "");
  map.loadCollection(layerName, { collection: geojson, type });
}

map.draw();
`

const vectorLayersCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const [neighborhoods, roads, points] = await Promise.all([
  fetch("/data/mnt_neighs_proj.geojson").then((res) => res.json()),
  fetch("/data/mnt_roads.geojson").then((res) => res.json()),
  fetch("/data/mnt_points_test_proj.geojson").then((res) => res.json())
]);

map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});

map.loadCollection("roads", {
  collection: roads,
  type: "polylines"
});

map.loadCollection("points", {
  collection: points,
  type: "points"
});

map.draw();
`

const rasterLayersCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadGeoTiff({
  geotiffFileUrl: "/data/temperature.tif",
  outputTableName: "temperature"
});

const raster = await db.getRaster("temperature");

const map = new AutkMap(canvas);
await map.init();

map.loadCollection("temperature", {
  collection: raster,
  type: "raster",
  property: "properties.band_1"
});

map.draw();
`

const inferTypeCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const [neighborhoods, roads] = await Promise.all([
  fetch("/data/mnt_neighs_proj.geojson").then((res) => res.json()),
  fetch("/data/mnt_roads.geojson").then((res) => res.json())
]);

map.loadCollection("neighborhoods", { collection: neighborhoods });
map.loadCollection("roads", { collection: roads });
map.draw();

console.log("Inferred types: neighborhoods → polygons, roads → polylines");
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

Every `autk-map` layer has a type. The type tells the renderer how to interpret the input data, which styling rules apply, and whether the layer should behave like a semantic map layer, a generic vector dataset, or a raster grid.

## Semantic layers

Semantic layers are specialized layer types designed for common OpenStreetMap map components. They are useful when the dataset already represents streets, buildings, parks, water, or ground surface and you want `autk-map` to apply the corresponding rendering behavior directly.

| Type | Geometry | Description |
|---|---|---|
| `surface` | Polygon | Ground or land-cover surface |
| `parks` | Polygon | Parks and green areas |
| `water` | Polygon | Water bodies |
| `roads` | Polyline | Road network |
| `buildings` | Polygon | Buildings rendered with extrusion |

`buildings` is the only semantic layer type rendered as 3D extruded geometry.

<ClientOnly>
  <CodePlayground :code="semanticLayersCode" out="dom" />
</ClientOnly>

## Vector layers

Vector layers are the generic layer types used for custom GeoJSON data. They map directly to the three main geometry families, so they are the right choice when the data is not meant to be interpreted as one of the semantic OpenStreetMap layers.

| Type | Geometry |
|---|---|
| `points` | `Point` / `MultiPoint` |
| `polylines` | `LineString` / `MultiLineString` |
| `polygons` | `Polygon` / `MultiPolygon` |

<ClientOnly>
  <CodePlayground :code="vectorLayersCode" out="dom" />
</ClientOnly>

## Raster layers

Raster layers represent gridded data such as temperature, density, or any other cell-based surface. In practice, `autk-map` renders a raster layer from a `FeatureCollection` whose cell values are stored in feature properties, together with a property path telling the renderer which band or attribute to read.

| Type | Description |
|---|---|
| `raster` | Grid-based data such as heatmaps or GeoTIFF-derived collections |

Raster layers require a property path so the renderer knows which numeric value to read from each cell feature.

<ClientOnly>
  <CodePlayground :code="rasterLayersCode" out="dom" />
</ClientOnly>

## Automatic inference

When `type` is omitted, `loadCollection()` tries to infer the vector layer type from the collection geometry. This is convenient for plain point, line, and polygon datasets, but it only works when all non-null geometries belong to the same geometry family.

| Geometry family | Inferred type |
|---|---|
| `Point` / `MultiPoint` | `points` |
| `LineString` / `MultiLineString` | `polylines` |
| `Polygon` / `MultiPolygon` | `polygons` |

<ClientOnly>
  <CodePlayground :code="inferTypeCode" out="both" />
</ClientOnly>

OSM semantic types such as `roads`, `buildings`, `surface`, `parks`, and `water` are **not** inferred automatically. Pass them explicitly when you need semantic rendering behavior.

:::tip Mixed geometry collections
If a collection mixes geometry families, pass `type` explicitly. Mixed collections cannot be inferred safely.
:::

</div>
