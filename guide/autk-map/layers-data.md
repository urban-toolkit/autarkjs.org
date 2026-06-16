<script setup>
const physicalLayersCode = `
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
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads", "buildings"]
  }
});

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayersMetadata()) {
  const { name, type } = layer;
  const geojson = await db.getLayer(name);
  map.loadCollection(name, { collection: geojson, type });
}

map.draw();
`;

const vectorLayersCode = `
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
`;

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
`;

const dbLayersCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadOsm({
  pbfFileUrl: "/data/lower_mnt.osm.pbf",
  queryArea: {
    geocodeArea: "New York",
    areas: ["Battery Park City"]
  },
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads", "buildings"]
  }
});

const map = new AutkMap(canvas);
await map.init();

for (const { name, type } of db.getLayersMetadata()) {
  const geojson = await db.getLayer(name);
  map.loadCollection(name, { collection: geojson, type });
}

map.draw();
console.log(db.getLayersMetadata());
`;
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

# Layers data

Layers are the main data units rendered by `autk-map`. Each layer combines a dataset with a rendering type, allowing the map to interpret the input geometry, apply the appropriate visual rules, and compose multiple datasets in the same view. In practice, layers are loaded with `loadCollection()` and then rendered according to the selected type.

:::warning Projected coordinates required
`autk-map` expects data in projected coordinates. You may use any projected coordinate system, but all loaded layers must use the same selected system.
:::

## Physical layers

Physical layers are specialized layer types designed for common map components such as streets, buildings, parks, water, and ground surface. They are used to build the map context and are useful when the dataset already represents those physical urban elements. In most cases, physical layers should be loaded with `type` passed explicitly.

| Type | Geometry | Description |
|---|---|---|
| `surface` | Polygon | Ground or land-cover surface |
| `parks` | Polygon | Parks and green areas |
| `water` | Polygon | Water bodies |
| `roads` | Polyline | Road network |
| `buildings` | Polygon | 3D buildings rendered with extrusion |

<ClientOnly>
  <CodePlayground :code="physicalLayersCode" out="dom" />
</ClientOnly>

:::tip Physical layers are not limited to OSM
Physical layers are used to build the map context, but they are not restricted to OpenStreetMap data. You can also load GeoJSON files as `surface`, `parks`, `water`, `roads`, or `buildings` when your own data already matches those physical categories.
:::

## Vector layers

Vector layers are the generic layer types used for custom GeoJSON data. They map directly to the three main geometry families, so they are the right choice when the data is not meant to be interpreted as one of the physical layers. `loadCollection()` is the standard entry point for these collections.

| Type | Geometry |
|---|---|
| `points` | `Point` / `MultiPoint` |
| `polylines` | `LineString` / `MultiLineString` |
| `polygons` | `Polygon` / `MultiPolygon` |

<ClientOnly>
  <CodePlayground :code="vectorLayersCode" out="dom" />
</ClientOnly>

:::tip Automatic inference
When `type` is omitted, `loadCollection()` can infer vector layer types from geometry: `Point` and `MultiPoint` become `points`, `LineString` and `MultiLineString` become `polylines`, and `Polygon` and `MultiPolygon` become `polygons`. Physical types such as `roads`, `buildings`, `surface`, `parks`, and `water` are not inferred automatically. If a collection mixes geometry families, pass `type` explicitly.
:::

## Raster layers

Raster layers represent gridded data such as temperature, density, or any other cell-based surface. In practice, `autk-map` renders a raster layer from a `FeatureCollection` whose cell values are stored in feature properties, together with a property path telling the renderer which band or attribute to read.

| Type | Description |
|---|---|
| `raster` | Grid-based data such as heatmaps or GeoTIFF-derived collections |

Raster layers require a property path so the renderer knows which numeric value to read from each cell feature. Raster collections are commonly produced by `autk-db.getRaster()`, and `updateRaster()` can be used later to swap the active values or property path while keeping the same layer id.

<ClientOnly>
  <CodePlayground :code="rasterLayersCode" out="dom" />
</ClientOnly>

## Loading behavior

`loadCollection(layerId, params)` is the standard method for adding layers to the map. The `layerId` must be unique and is later used to update thematic data, visibility, picking, or other rendering properties.

The first loaded layer defines the initial map bounding box and camera framing. If the collection already includes a `bbox`, `autk-map` reuses it. Otherwise, the bounding box is computed from the geometries. You can also set the bounding box manually before loading any layer with `map.boundingBox = [minLon, minLat, maxLon, maxLat]`.

## Loading layers from `autk-db`

A common workflow is to prepare layers in `autk-db` and then load each exported GeoJSON layer into `autk-map` using the type metadata returned by the database.

<ClientOnly>
  <CodePlayground :code="dbLayersCode" out="both" />
</ClientOnly>

## Prebuilt meshes

`autk-map` also supports `loadMesh()` for pre-triangulated geometry. This is useful when your application already has local mesh coordinates and aligned component metadata. At the moment, mesh loading is intended for `buildings`-style geometry. See [`AutkMap.loadMesh()`](/api/autk-map/classes/AutkMap#loadmesh).

</div>
