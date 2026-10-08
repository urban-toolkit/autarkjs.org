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
| `params.loadConfig` | Optional geometry settings such as road width and missing-height building fallback; see [Load-time geometry options](#load-time-geometry-options). |

`autk-map` also assumes a few basic rules about how layer data is organized and loaded:

- **Projected coordinates** — `autk-map` expects projected coordinates. You may use any projected coordinate system, but all loaded layers must use the same selected system.
- **Initial framing** — the first loaded layer defines the initial map bounding box and camera framing.
- **Existing bounds** — if the collection already includes a `bbox`, `autk-map` uses it instead of recomputing bounds.
- **Explicit framing bounds** — set a valid projected GeoJSON `bbox: [minX, minY, maxX, maxY]` on the first collection before loading it. There is no `map.boundingBox` property; the collection establishes the shared origin.

## Physical layers

Physical layers are specialized layer types designed for common map components such as streets, buildings, parks, water, and ground surface. They are used to build the map context and are useful when the dataset already represents those physical urban elements. In most cases, physical layers should be loaded with `type` passed explicitly.

| Type | Geometry | Description |
|---|---|---|
| `surface` | Polygon | Ground or land-cover surface |
| `parks` | Polygon | Parks and green areas |
| `water` | Polygon | Water bodies |
| `roads` | Polyline | Road network |
| `buildings` | Polygonal components / `GeometryCollection` | 3D buildings rendered with extrusion |

<ClientOnly>
  <CodePlayground :code="physicalLayersCode" out="dom" :auto-run="true" />
</ClientOnly>

:::tip Physical layers are not limited to OSM
Physical layers are used to build the map context, but they are not restricted to OpenStreetMap data loaded using [autk-db](/autk-db/). You can also load GeoJSON files as `surface`, `parks`, `water`, `roads`, or `buildings` when your own data already matches those physical categories.
:::

### Building geometry and parts

In v4, one logical building is represented by **one feature** whose canonical geometry is a `GeometryCollection`. Coordinates live only in `geometry.geometries`; `properties.parts` stores attributes, not duplicate coordinates. Each part's `geometryIndex` identifies the corresponding component geometry.

The example uses projected coordinates in meters, matching the other layers in the map:

```ts
import { normalizeBuildingFeature } from '@urban-toolkit/autk-core';

const building = normalizeBuildingFeature({
  type: 'Feature',
  id: 'building-a',
  geometry: {
    type: 'GeometryCollection',
    geometries: [
      { type: 'Polygon', coordinates: [[[0, 0], [20, 0], [20, 20], [0, 20], [0, 0]]] },
      { type: 'Polygon', coordinates: [[[20, 0], [30, 0], [30, 20], [20, 20], [20, 0]]] },
    ],
  },
  properties: {
    height: 12,
    parts: [
      { geometryIndex: 0, height: 30 },
      { geometryIndex: 1, height: 12 },
    ],
  },
});

map.loadCollection('custom-buildings', {
  collection: { type: 'FeatureCollection', features: [building] },
  type: 'buildings',
});
```

Common building attributes are inherited by parts; part-specific height/level tags override the corresponding common tags. A component without part metadata uses the common attributes.

[`normalizeBuildingFeature()`](/api/autk-core/functions/normalizeBuildingFeature) also wraps a single polygonal or supported ring geometry in a `GeometryCollection`. It does **not** union footprints, repair geometries, clone coordinates, or combine independent features. Legacy positional `parts` metadata is accepted, but must not be mixed with indexed metadata. Duplicate/out-of-range indices, nested geometry collections, and unsupported geometries are rejected.

### Load-time geometry options

Pass [`loadConfig`](/api/autk-map/interfaces/LoadCollectionConfig) when creating a layer:

```ts
map.loadCollection('wide-roads', {
  collection: roads,
  type: 'roads',
  loadConfig: { polylinesWidth: 8 },
});

map.loadCollection('buildings-with-fallback', {
  collection: buildings,
  type: 'buildings',
  loadConfig: { buildingsZeroHeight: true },
});
```

- `polylinesWidth` sets the **full visual width** of buffered `roads`/`polylines` in projected coordinate units. It is baked into the mesh at load time; changing render state does not change it. To change width, remove and reload the layer.
- Despite its name, `buildingsZeroHeight: true` gives parts **without height metadata** a random fallback height. It does not replace explicitly zero or invalid heights. For reproducible building heights, provide height/level metadata yourself; missing-height parts are skipped by default.

## Vector layers

Vector layers are the generic layer types used for custom GeoJSON data. They map directly to the three main geometry families, so they are the right choice when the data is not meant to be interpreted as one of the physical layers. `loadCollection()` is the standard entry point for these collections.

| Type | Geometry |
|---|---|
| `points` | `Point` / `MultiPoint` |
| `polylines` | `LineString` / `MultiLineString` |
| `polygons` | `Polygon` / `MultiPolygon` |

<ClientOnly>
  <CodePlayground :code="vectorLayersCode" out="dom" :auto-run="true" />
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
  <CodePlayground :code="rasterLayersCode" out="dom" :auto-run="true" />
</ClientOnly>

### Updating raster values

[`updateRaster()`](/api/autk-map/classes/AutkMap#updateraster) changes the values of an existing raster layer without removing it. For a loaded multi-band GeoTIFF, switch bands like this:

```ts
const raster = await db.getRaster('multiband');
map.loadCollection('raster-view', {
  collection: raster,
  type: 'raster',
  property: 'band_1',
});

// Later, select another band present in this raster.
map.updateRaster('raster-view', { collection: raster, property: 'band_2' });
```

The property path must resolve to a flat numeric array on `collection.features[0].properties`. The color domain is recomputed using the layer's current color-map configuration. Use `updateColorMap()` to choose a palette/domain strategy, and `updateRaster()` to refresh the values. An optional `transferFunction` controls opacity; see [`UpdateRasterParams`](/api/autk-map/interfaces/UpdateRasterParams).

Keep the raster's extent and grid resolution unchanged: `updateRaster()` replaces values, not the layer geometry. Remove and reload the layer if its grid changes. Missing/non-raster layers are ignored; invalid payloads are reported in the console.

## Prebuilt 3D meshes

[`loadMesh()`](/api/autk-map/classes/AutkMap#loadmesh) bypasses GeoJSON triangulation when you already have triangle buffers. It currently supports only `type: 'buildings'`.

Load a context collection first to establish the shared origin. Every mesh XY coordinate must be relative to `map.layerManager.origin`, not an absolute projected coordinate. For example, the shared core triangulator produces compatible local-space buffers:

```ts
import { TriangulatorBuildings } from '@urban-toolkit/autk-core';

map.loadCollection('context', { collection: surface, type: 'surface' });
const [geometry, components] = TriangulatorBuildings.buildMesh(
  buildings,
  map.layerManager.origin,
);
map.loadMesh('building-mesh', { geometry, components, type: 'buildings' });
```

Custom mesh generators should supply [`LayerGeometry`](/api/autk-core/interfaces/LayerGeometry) position/index buffers and [`LayerComponent`](/api/autk-core/interfaces/LayerComponent) vertex/triangle counts and source feature metadata that describe those buffers in rendering order. A component can span multiple geometry chunks; their array lengths need not match. Optional `thematic` entries must correspond one-to-one with the components so picking and colors refer to the correct parts. Calling `loadMesh()` before the origin is initialized throws.

</div>
