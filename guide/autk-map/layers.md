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
  const collection = await db.getLayer(name);
  map.loadCollection(name, { collection, type });
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

await db.loadGeojson({
  geojsonFileUrl: "/data/mnt_neighs.geojson",
  outputTableName: "neighborhoods"
});
await db.loadCsv({
  csvFileUrl: "/data/mnt_noise.csv",
  outputTableName: "noise",
  geometryColumns: true
});
await db.buildHeatmap({
  tableJoinName: "noise",
  outputTableName: "heatmap",
  near: { distance: 500 },
  grid: { rows: 50, columns: 50 },
  groupBy: [{ column: "key", aggregateFn: "count" }]
});
await db.removeLayer("noise");

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getTablesMetadata()) {
  const { name, type } = layer;
  const collection = await db.getLayer(name);
  const params = type === "raster"
    ? { collection, type, property: "band_1" }
    : { collection, type };

  map.loadCollection(name, params);
}
map.draw();
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

Layers are the main data units rendered by `autk-map`. Each layer combines a dataset with a rendering type, allowing the map to interpret the input geometry, apply the appropriate visual rules, and compose multiple datasets in the same view. 
## Layer basics

Layers are loaded with `loadCollection()` and then rendered according to the selected type. The basic call has the following shape:

```ts
map.loadCollection(layerId, {
  collection,
  type,      // optional for inferred vector layers
  property,  // required for raster layers
});
```

| Part | Description |
|---|---|
| `layerId` | Unique layer identifier used later to update thematic data, visibility, picking, and other rendering properties. |
| `params.collection` | Source `FeatureCollection` to load. |
| `params.type` | Optional when the geometry can be inferred for vector layers. Physical layers should usually pass `type` explicitly. |
| `params.property` | Required for raster layers so the renderer knows which numeric value to read from each cell. |

`autk-map` also assumes a few basic rules about how layer data is organized and loaded:

- **Projected coordinates** — `autk-map` expects projected coordinates. You may use any projected coordinate system, but all loaded layers must use the same selected system.
- **Initial framing** — the first loaded layer defines the initial map bounding box and camera framing.
- **Existing bounds** — if the collection already includes a `bbox`, `autk-map` uses it instead of recomputing bounds.
- **Manual bounds** — you can set the bounding box before loading any layer with `map.boundingBox = [minLon, minLat, maxLon, maxLat]`.

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
Physical layers are used to build the map context, but they are not restricted to OpenStreetMap data loaded using [autk-db](/autk-db/). You can also load GeoJSON files as `surface`, `parks`, `water`, `roads`, or `buildings` when your own data already matches those physical categories.
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
* When `type` is omitted, `loadCollection()` can infer vector layer types from geometry: `Point` and `MultiPoint` become `points`, `LineString` and `MultiLineString` become `polylines`, and `Polygon` and `MultiPolygon` become `polygons`. 

* Physical types such as `roads`, `buildings`, `surface`, `parks`, and `water` are not inferred automatically. If a collection mixes geometry families, pass `type` explicitly.
:::

## Raster layers

Raster layers represent gridded data such as temperature, density, or any other cell-based surface. In practice, `autk-map` renders a raster layer from a `FeatureCollection` whose cell values are stored in feature properties, together with a property path telling the renderer which band or attribute to read.

| Type | Description |
|---|---|
| `raster` | Grid-based data such as heatmaps or GeoTIFF-derived collections |

Raster layers need a property path that tells the renderer which numeric value to use in each cell. The example below builds a heatmap raster from Manhattan noise events with `autk-db` and renders the result in `autk-map`. GeoTIFF files can also be loaded with `autk-db`. For now, `autk-map` renders raster collections returned by `autk-db`, including heatmaps created with `buildHeatmap()`.

<ClientOnly>
  <CodePlayground :code="rasterLayersCode" out="dom" />
</ClientOnly>

</div>
