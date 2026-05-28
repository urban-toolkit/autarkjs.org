<script setup>
const getTablesCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

console.log(db.tables);
`

const getTableRowsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: true,
});

const rows = await db.getTables({
    tableName: 'noise',
    limit: 10,
    offset: 20,
});

console.log(rows.length);
`

const getLayerCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

const geojson = await db.getLayer('neighborhoods');
console.log(geojson.bbox);
`

const getLayerTablesCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

const renderableTables = db.getLayerTables();

for (const table of renderableTables) {
    console.log(table);
}
`

const getGeoTiffLayerCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeoTiff({
    geotiffFileUrl: '/data/temperature.tif',
    outputTableName: 'temperature',
});

const raster = await db.getGeoTiffLayer('temperature');
console.log(raster.features[0].properties);
`

const getLayerBboxCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
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

## Inspect registered tables

Use `db.tables` to inspect the tables registered in the current [workspace](./workspaces.md). Each entry is table metadata, not the table rows themselves. This is useful when you want to see what is available before calling [`getTables`](#get-table-data), [`getLayer`](#get-table-as-geojson), [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson), or [`getLayerTables`](#list-renderable-tables).

<ClientOnly>
  <CodePlayground :code="getTablesCode" out="console" />
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

## List renderable tables

[`getLayerTables()`](/api/autk-db/classes/AutkDb#getlayertables) returns only the tables that can be retrieved as layers. In practice, it filters [`db.tables`](#inspect-registered-tables) down to the entries that work with [`getLayer`](#get-table-as-geojson) or [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson).

<ClientOnly>
  <CodePlayground :code="getLayerTablesCode" out="console" />
</ClientOnly>

[`getLayerTables()`](/api/autk-db/classes/AutkDb#getlayertables)  is useful when a workspace contains many tables and you want to know which ones can be sent directly to visualization tools. Instead of checking each table manually, [`getLayerTables()`](/api/autk-db/classes/AutkDb#getlayertables) gives you the subset that is ready to be exported as vector or raster layers for use with tools such as [`autk-map`](../autk-map/index.md).

:::tip Layer and table names
The entries returned by [`getLayerTables()`](/api/autk-db/classes/AutkDb#getlayertables) are still DuckDB tables. In other words, a “layer” in this context is a table whose contents can be exported for rendering. The `name` property is therefore the table name you should pass to [`getLayer`](#get-table-as-geojson), [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson), or [`getBoundingBoxFromLayer`](#table-bounding-box).

For OSM data loaded with [`loadOsm`](./loading-data.md#openstreetmap), the names usually follow the `{outputTableName}_{layer}` pattern, such as `table_osm_roads` or `table_osm_buildings`.
:::

## Get table data

[`getTables`](/api/autk-db/classes/AutkDb#gettables) returns rows from any registered table as plain JavaScript objects. It works with CSV, JSON, vector, and raster tables.

<ClientOnly>
  <CodePlayground :code="getTableRowsCode" out="console" />
</ClientOnly>

For large tables, use [`limit`](/api/autk-db/interfaces/GetTablesParams#limit) and [`offset`](/api/autk-db/interfaces/GetTablesParams#offset) to paginate the result.

:::tip Try changing the previous example
Modify the previous code sample to explore more of `autk-db`. For example, try changing [`limit`](/api/autk-db/interfaces/GetTablesParams#limit), add [`offset`](/api/autk-db/interfaces/GetTablesParams#offset), or read a different table by changing [`tableName`](/api/autk-db/interfaces/GetTablesParams#tablename).
:::

#### List of `getTables` parameters

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
      <td><a href="/api/autk-db/interfaces/GetTablesParams#tablename"><code>tableName</code></a></td>
      <td><code>string</code></td>
      <td>Table name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/GetTablesParams#limit"><code>limit</code></a></td>
      <td><code>number</code></td>
      <td>Row limit.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/GetTablesParams#offset"><code>offset</code></a></td>
      <td><code>number</code></td>
      <td>Row offset.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/GetTablesParams#workspace"><code>workspace</code></a></td>
      <td><code>string</code></td>
      <td>Workspace name.</td>
    </tr>
  </tbody>
</table>

## Get vetor tables

[`getLayer`](/api/autk-db/classes/AutkDb#getlayer) exports a renderable vector table as a GeoJSON `FeatureCollection`. Use [`getLayerTables`](#list-renderable-tables) to see which tables qualify.

<ClientOnly>
  <CodePlayground :code="getLayerCode" out="console" />
</ClientOnly>

The returned `FeatureCollection` includes a `bbox` property. The bounding box is resolved from the workspace bounds when available, then from the layer geometry itself.

:::warning Vector tables only
Calling [`getLayer`](/api/autk-db/classes/AutkDb#getlayer) on a non-vector table throws an error. Use [`getLayerTables`](#list-renderable-tables) to inspect the available vector tables, and use [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson) for raster tables.
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

## Get raster tables

[`getGeoTiffLayer`](/api/autk-db/classes/AutkDb#getgeotifflayer) exports a loaded GeoTIFF table as a packed raster `FeatureCollection`. Pass the result to `autk-map` with `loadRasterCollection()`.

<ClientOnly>
  <CodePlayground :code="getGeoTiffLayerCode" out="console" />
</ClientOnly>

:::tip Try changing the previous example
Modify the previous code sample to explore more of `autk-db`. For example, try loading a different raster table or inspect the returned packed properties before passing the result to `autk-map`.
:::

#### List of `getGeoTiffLayer` parameters

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

Bounding boxes are useful for camera framing, clipping rasters, and defining grid extents.

### Table bounding box

[`getBoundingBoxFromLayer()`](/api/autk-db/classes/AutkDb#getboundingboxfromlayer) computes the bounding box from the geometry of a specific renderable table.

<ClientOnly>
  <CodePlayground :code="getLayerBboxCode" out="console" />
</ClientOnly>

The returned object contains `minLon`, `minLat`, `maxLon`, and `maxLat` properties.

#### List of `getBoundingBoxFromLayer` parameters

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
      <td><code>layerName</code></td>
      <td><code>string</code></td>
      <td>Layer table name.</td>
    </tr>
  </tbody>
</table>

:::warning Missing or non-geometric layers
[`getBoundingBoxFromLayer()`](/api/autk-db/classes/AutkDb#getboundingboxfromlayer) throws an error if the database is not initialized, the layer table is missing, or the table does not have a geometry column.
:::

## Choosing a getter

| Method | Returns | Use for |
|---|---|---|
| [`getTables`](#get-table-data)({ tableName }) | `Record<string, unknown>[]` | Plain rows for tables, charts, or custom logic |
| [`getLayer`](#get-table-as-geojson)(name) | `FeatureCollection` | Vector tables for [`autk-map`](../autk-map/index.md) or [`autk-plot`](../autk-plot/index.md) |
| [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson)(name) | `FeatureCollection` | Raster tables for `autk-map.loadRasterCollection()` |
| [`getLayerTables`](#list-renderable-tables)() | Table metadata array | Listing renderable tables before export |
| [`getBoundingBoxFromLayer`](#table-bounding-box)(name) | `BoundingBox` object | Bounds of one renderable table |

</div>
