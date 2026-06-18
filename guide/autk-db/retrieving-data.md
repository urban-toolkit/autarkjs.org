<script setup>
const getTablesMetadataCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods'
});

console.log(db.getTablesMetadata());
`

const getTableRowsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: true
});

const rows = await db.getTable('noise');
console.log(rows[0]);
`

const getLayerCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods'
});

const geojson = await db.getLayer('neighborhoods');
console.log(geojson.bbox);
`

const getLayersMetadataCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods'
});

const layerTables = db.getLayersMetadata();

for (const table of layerTables) {
    console.log(table.name, table.type);
}
`

const getRastersMetadataCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeoTiff({
    geotiffFileUrl: '/data/temperature.tif',
    outputTableName: 'temperature'
});

const rasterTables = db.getRastersMetadata();

for (const table of rasterTables) {
    console.log(table.name, table.type);
}
`

const getRasterCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeoTiff({
    geotiffFileUrl: '/data/temperature.tif',
    outputTableName: 'temperature'
});

const raster = await db.getRaster('temperature');
console.log(raster.features[0].properties);
`

const getLayerBboxCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods'
});

const bbox = await db.getBoundingBoxFromLayer('neighborhoods');
console.log(bbox);
`
</script>

<style scoped>
.introduction-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

<div class="introduction-page">

# Retrieving data

Once data is loaded or analyzed, `autk-db` provides getter methods to move results from DuckDB back into JavaScript. These methods let you inspect registered tables, read rows as plain objects, export vector layers as GeoJSON, export raster tables in a map-friendly format, and query layer bounding boxes.

## Tables metadata

Use [`getTablesMetadata()`](/api/autk-db/classes/AutkDb#gettablesmetadata) to inspect the tables registered in the current [workspace](./workspaces.md). Each entry is table metadata, not the table rows themselves. This is useful when you want to see what is available before calling [`getTable`](#get-table-data), [`getLayer`](#get-vector-layers), [`getRaster`](#get-raster-tables), or [`getLayersMetadata`](#get-layer-metadata).

<ClientOnly>
  <CodePlayground :code="getTablesMetadataCode" out="console" :auto-run="true" />
</ClientOnly>

The returned metadata includes:

- `name` — table name used by `autk-db` methods
- `columns` — DuckDB column names and types
- `source` — table origin, such as `'csv'`, `'osm'`, `'geojson'`, or `'geotiff'`
- `type` — table type such as `'pointset'`, `'polygons'`, `'roads'`, or `'raster'`

:::info OSM layer types
When a table comes from OSM auto-loading, its `type` usually reflects one of the predefined thematic layers:

- `surface` — base land polygons used as the workspace surface
- `parks` — green and recreational areas
- `water` — rivers, lakes, coastlines, and other water features
- `roads` — line features representing the street network
- `buildings` — polygon features representing building footprints
:::

## Layers metadata

[`getLayersMetadata()`](/api/autk-db/classes/AutkDb#getlayersmetadata) returns only the vector tables that can be exported with [`getLayer`](#get-vector-layers). This is useful when a workspace contains many tables and you want to know which ones are ready for map rendering or layer export.

<ClientOnly>
  <CodePlayground :code="getLayersMetadataCode" out="console" :auto-run="true" />
</ClientOnly>

:::info Layer versus table
The entries returned by [`getLayersMetadata()`](/api/autk-db/classes/AutkDb#getlayersmetadata) are still DuckDB tables. In other words, a **layer** in this context is a table whose contents can be exported as a vetor layer. 
:::

## Raster metadata

[`getRastersMetadata()`](/api/autk-db/classes/AutkDb#getrastersmetadata) returns only the raster tables that can be exported with [`getRaster`](#get-raster-tables). This is useful when a workspace contains many tables and you want to know which raster datasets are ready for map rendering or raster export.

<ClientOnly>
  <CodePlayground :code="getRastersMetadataCode" out="console" :auto-run="true" />
</ClientOnly>

:::info Layer versus raster table
The entries returned by [`getRastersMetadata()`](/api/autk-db/classes/AutkDb#getrastersmetadata) are also DuckDB tables. The difference is that a **layer** usually refers to vector geometries that can be exported with [`getLayer`](#get-vector-layers), while a **raster table** stores pixel-based data that must be exported with [`getRaster`](#get-raster-tables).
:::

## Get table data

[`getTable`](/api/autk-db/classes/AutkDb#gettable) returns all rows from a registered table as plain JavaScript objects. It works with CSV, JSON, vector, and raster tables.

<ClientOnly>
  <CodePlayground :code="getTableRowsCode" out="console" :auto-run="true" />
</ClientOnly>

:::tip Try changing the code above
Use the live code box to experiment with [`getTable`](/api/autk-db/classes/AutkDb#gettable). For example, try changing `tableName`, logging `rows.length`, or inspecting different properties from the returned objects.
:::

#### List of `getTable` parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>tableName</code></td>
      <td><code>string</code></td>
      <td>Table name.</td>
    </tr>
  </tbody>
</table>

## Get layer data 

[`getLayer`](/api/autk-db/classes/AutkDb#getlayer) exports a renderable vector table as a GeoJSON `FeatureCollection`. Use [`getLayersMetadata`](#get-layer-metadata) to see which tables qualify.

<ClientOnly>
  <CodePlayground :code="getLayerCode" out="console" :auto-run="true" />
</ClientOnly>

The returned `FeatureCollection` includes a `bbox` property. The bounding box is resolved from the workspace bounds when available, then from the layer geometry itself.

:::warning Vector tables only
Calling [`getLayer`](/api/autk-db/classes/AutkDb#getlayer) on a non-vector table throws an error. Use [`getLayersMetadata`](#get-layer-metadata) to inspect the available vector tables, and use [`getRaster`](#get-raster-tables) for raster tables.
:::

#### List of `getLayer` parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>layerTableName</code></td>
      <td><code>string</code></td>
      <td>Layer table name.</td>
    </tr>
  </tbody>
</table>

## Get raster data

[`getRaster`](/api/autk-db/classes/AutkDb#getraster) exports a loaded GeoTIFF table as a packed raster `FeatureCollection`. Pass the result to `autk-map` with `loadRasterCollection()`.

<ClientOnly>
  <CodePlayground :code="getRasterCode" out="console" :auto-run="true" />
</ClientOnly>

If you need metadata for raster tables before exporting them, use [`getRastersMetadata()`](/api/autk-db/classes/AutkDb#getrastersmetadata).

:::tip Try changing the previous example
Modify the previous code sample to explore more of `autk-db`. For example, try loading a different raster table or inspect the returned packed properties before passing the result to `autk-map`.
:::

#### List of `getRaster` parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>tableName</code></td>
      <td><code>string</code></td>
      <td>GeoTIFF table name.</td>
    </tr>
  </tbody>
</table>

## Get bounding boxes

Bounding boxes are useful for camera framing, clipping rasters, and defining grid extents. [`getBoundingBoxFromLayer()`](/api/autk-db/classes/AutkDb#getboundingboxfromlayer) computes the bounding box from the geometry of a specific renderable table.

<ClientOnly>
  <CodePlayground :code="getLayerBboxCode" out="console" :auto-run="true" />
</ClientOnly>

The returned object contains `minLon`, `minLat`, `maxLon`, and `maxLat` properties. However, these values are not always expressed in latitude and longitude. They are returned in the coordinate system used by the current workspace.

:::warning Missing or non-geometric layers
[`getBoundingBoxFromLayer()`](/api/autk-db/classes/AutkDb#getboundingboxfromlayer) throws an error if the database is not initialized, the layer table is missing, or the table does not have a geometry column.
:::

## Choosing a getter

| Method | Returns | Use for |
|---|---|---|
| [`getTablesMetadata`](#registered-tables)() | Table metadata array | All table metadata |
| [`getLayersMetadata`](#get-layer-metadata)() | Table metadata array | Vector layer metadata |
| [`getRastersMetadata`](/api/autk-db/classes/AutkDb#getrastersmetadata)() | Table metadata array | Raster table metadata |
| [`getTable`](#get-table-data)(name) | `Record<string, unknown>[]` | Plain rows |
| [`getLayer`](#get-vector-layers)(name) | `FeatureCollection` | Vector layer export |
| [`getRaster`](#get-raster-tables)(name) | `FeatureCollection` | Raster layer export |
| [`getBoundingBoxFromLayer`](#get-bounding-boxes)(name) | `BoundingBox` | Layer bounds |

</div>
