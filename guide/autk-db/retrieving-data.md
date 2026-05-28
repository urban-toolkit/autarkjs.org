<style scoped>
.introduction-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

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


const getTableDataCode = `
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
    console.log(table.name, table.type);
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

<div class="introduction-page">

# Retrieving Data

After loading and analyzing data, use getter methods to move results from DuckDB back into JavaScript. These methods let you inspect what data is available, export table rows as plain objects, convert tables to GeoJSON, and query layer bounding boxes.

## Inspect Registered Tables

Use `db.tables` to inspect the tables registered in the current [workspace](./workspaces.md). Each entry is table metadata, not the table rows themselves. This is useful when you want to see what's available before calling [`getTables`](#get-table-data), [`getLayer`](#get-table-as-geojson), [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson), or [`getLayerTables`](#list-renderable-tables).

<ClientOnly>
  <CodePlayground :code="getTablesCode" out="console" />
</ClientOnly>

The table metadata contains:

- `name` — the table name used by `autk-db` methods
- `source` — the table source, such as `'csv'`, `'osm'`, or `'geojson'`
- `type` — the table kind, such as `'pointset'`, `'polygons'`, `'roads'`, `'raster'`, etc.
- `columns` — the DuckDB column names and types


## Get Table Data

`getTables` returns rows from any registered table as plain JavaScript objects. It works with all table types — CSV, JSON, layer tables, and raster tables.

For large tables, use `limit` and `offset` to paginate through results.


<ClientOnly>
  <CodePlayground :code="getTableDataCode" out="console" />
</ClientOnly>

#### `getTables` Parameters

| Option | Type | Description |
|---|---|---|
| `tableName` | `string` | Table name. |
| `limit?` | `number` | Row limit. |
| `offset?` | `number` | Row offset. |

## Get Table as GeoJSON

`getLayer` exports a renderable vector table as a GeoJSON `FeatureCollection`. Use [`getLayerTables`](#list-renderable-tables) to see which tables qualify.

<ClientOnly>
  <CodePlayground :code="getLayerCode" out="console" />
</ClientOnly>

:::tip Bounding Box in GeoJSON
The returned `FeatureCollection` includes a `bbox` property. The bounding box is resolved from the workspace bounds when available, then from the layer geometry itself.
:::

#### `getLayer` Parameters

| Option | Type | Description |
|---|---|---|
| `layerTableName` | `string` | Name of the layer table to export. |

:::warning Non-Renderable Tables
Calling `getLayer` on a non-vector table will throw an error. Use [`getLayerTables`](#list-renderable-tables) first to check which tables can be exported, and use [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson) for raster tables.
:::

## Get GeoTIFF as Raster GeoJSON

`getGeoTiffLayer` exports a loaded GeoTIFF table as a packed raster `FeatureCollection`. Pass the result to `autk-map` with `loadRasterCollection()`.

<ClientOnly>
  <CodePlayground :code="getGeoTiffLayerCode" out="console" />
</ClientOnly>

#### `getGeoTiffLayer` Parameters

| Option | Type | Description |
|---|---|---|
| `tableName` | `string` | GeoTIFF table name. |

## List Renderable Tables

`getLayerTables()` returns the subset of [`db.tables`](#inspect-registered-tables) that can be exported with [`getLayer`](#get-table-as-geojson) or [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson). This is useful when you want to inspect all renderable tables without knowing their names in advance.

<ClientOnly>
  <CodePlayground :code="getLayerTablesCode" out="console" />
</ClientOnly>

#### `getLayerTables` Parameters

| Option | Type | Description |
|---|---|---|
| — | — | No parameters. Returns all renderable tables in the current workspace. |

:::tip Return Type
Returns an array of table metadata objects with `name`, `source`, `type`, and `columns` properties.
:::

## Get Bounding Boxes

Bounding boxes are useful for camera framing, clipping rasters, and setting grid extents.

### Table Bounding Box

`getBoundingBoxFromLayer()` computes the bounding box from the geometry of a specific renderable table. Returns a `BoundingBox` object with `minLon`, `minLat`, `maxLon`, and `maxLat` properties.

<ClientOnly>
  <CodePlayground :code="getLayerBboxCode" out="console" />
</ClientOnly>

#### `getBoundingBoxFromLayer` Parameters

| Option | Type | Description |
|---|---|---|
| `layerName` | `string` | Name of the layer table to compute bounds from. |

:::warning Throws on Missing or Non-Geometric Layers
Throws an error if the database is not initialized, the layer table is not found, or the table does not have a geometry column.
:::

## Choosing a Getter

| Method | Returns | Use for |
|---|---|---|
| [`getTables`](#get-table-data)({ tableName }) | `Record<string, unknown>[]` | Plain rows for tables, charts, or custom logic |
| [`getLayer`](#get-table-as-geojson)(name) | `FeatureCollection` | Vector tables for [`autk-map`](../autk-map/index.md) or [`autk-plot`](../autk-plot/index.md) |
| [`getGeoTiffLayer`](#get-geotiff-as-raster-geojson)(name) | `FeatureCollection` | Raster tables for `autk-map.loadRasterCollection()` |
| [`getLayerTables`](#list-renderable-tables)() | Table metadata array | Listing renderable tables before export |
| [`getBoundingBoxFromLayer`](#table-bounding-box)(name) | `BoundingBox` object | Bounds of one renderable table |

</div>
