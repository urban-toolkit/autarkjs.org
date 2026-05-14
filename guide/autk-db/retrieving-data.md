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
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

await db.loadCustomLayer({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
    coordinateFormat: 'EPSG:3395',
});

console.log(db.tables);
`


const getTableDataCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

const res = await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:3395',
    },
});

const page = await db.getTableData({
    tableName: 'noise',
    limit: 10,
    offset: 20,
});

console.log(page.length);
`

const getLayerCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

// Export a layer as GeoJSON for autk-map
const geojson = await db.getLayer('buildings');

// The FeatureCollection includes a bbox property
console.log(geojson.bbox); // [minLon, minLat, maxLon, maxLat]

// Pass directly to autk-map
// map.loadCollection('buildings', { collection: geojson, type: 'buildings' });
`

const getLayerTablesCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

// List all renderable tables
const renderableTables = db.getLayerTables();

for (const table of renderableTables) {
    console.log(table.name, table.type);

    // Export each as GeoJSON for autk-map
    const geojson = await db.getLayer(table.name);
    // map.loadCollection(table.name, { collection: geojson, type: table.type });
}
`



const getOsmBboxCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

// Get the OSM bounding box (if loaded)
const bbox = db.getOsmBoundingBox();

// [minLon, minLat, maxLon, maxLat] or null
console.log(bbox);

// Use for camera framing in autk-map
// map.setCamera({ bounds: bbox, padding: [50, 50, 50, 50] });
`

const getLayerBboxCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

// Get the bounding box of a specific layer
const bbox = await db.getBoundingBoxFromLayer('neighborhoods');

// { minLon, minLat, maxLon, maxLat }
console.log(bbox);
`
</script>

<div class="introduction-page">

# Retrieving Data

After loading and analyzing data, use getter methods to move results from DuckDB back into JavaScript. These methods let you inspect what data is available, export table rows as plain objects, convert tables to GeoJSON, and query layer bounding boxes.

## Inspect Registered Tables

Use `db.tables` to inspect the tables registered in the current [workspace](./workspaces.md). Each entry is table metadata, not the table rows themselves. This is useful when you want to see what's available before calling [`getTableData`](#get-table-data), [`getLayer`](#get-a-renderable-table-as-geojson), or [`getLayerTables`](#list-renderable-tables).

<ClientOnly>
  <CodePlayground :code="getTablesCode" out="console" />
</ClientOnly>

The the table metadata contains:

- `name` — the table name used by `autk-db` methods
- `source` — the table source, such as `'csv'`, `'osm'`, or `'geojson'`
- `type` — the table kind, such as `'pointset'`, `'polygons'`, `'roads'`, `'raster'`, etc.
- `columns` — the DuckDB column names and types


## Get Table Data

`getTableData` returns rows from any registered table as plain JavaScript objects. It works with all table types — CSV, JSON, layer tables, grid layers, and more.

For large tables, use `limit` and `offset` to paginate through results.


<ClientOnly>
  <CodePlayground :code="getTableDataCode" out="console" />
</ClientOnly>

#### `getTableData` Parameters

| Option | Type | Description |
|---|---|---|
| `tableName` | `string` | Name of the table to retrieve data from. |
| `limit?` | `number` | Maximum number of rows to return. Use for pagination. |
| `offset?` | `number` | Number of rows to skip before returning results. Use for pagination. |
| `workspace?` | `string` | Optional workspace name. Defaults to the current workspace. |

## Get Table as GeoJSON

`getLayer` exports a table as a GeoJSON `FeatureCollection`. Only layer tables (OSM-derived and GeoJSON) and grid layers can be exported as GeoJSON. Use [`getLayerTables`](#list-renderable-tables) to see which tables qualify.

<ClientOnly>
  <CodePlayground :code="getLayerCode" out="console" />
</ClientOnly>

:::tip Bounding Box in GeoJSON
The returned `FeatureCollection` includes a `bbox` property. If OSM data is loaded in the workspace, the OSM bounding box is used; otherwise, the table's own geometry bounds are computed.
:::

#### `getLayer` Parameters

| Option | Type | Description |
|---|---|---|
| `layerTableName` | `string` | Name of the layer table to export. |

:::warning Non-Renderable Tables
Calling `getLayer` on a non-layer table (e.g., a CSV or JSON table) will throw an error. Use [`getLayerTables`](#list-renderable-tables) first to check which tables can be exported.
:::

## List Renderable Tables

`getLayerTables()` returns the subset of [`db.tables`](#inspect-registered-tables) that can be exported with [`getLayer`](#get-a-renderable-table-as-geojson). This is useful when you want to load all available renderable tables into a map without knowing their names in advance.

<ClientOnly>
  <CodePlayground :code="getLayerTablesCode" out="console" />
</ClientOnly>

#### `getLayerTables` Parameters

| Option | Type | Description |
|---|---|---|
| — | — | No parameters. Returns all renderable tables in the current workspace. |

:::tip Return Type
Returns an array of `LayerTable` and `CustomLayerTable` objects, each with `name`, `source`, `type`, and `columns` properties.
:::

## Get Bounding Boxes

Bounding boxes are useful for camera framing, clipping rasters, and setting grid extents. `autk-db` provides two methods:

### OSM Bounding Box

`getOsmBoundingBox()` returns the geographic extent of the loaded OSM area in `[minLon, minLat, maxLon, maxLat]` format. Returns `null` if no OSM data has been loaded in the current workspace.

<ClientOnly>
  <CodePlayground :code="getOsmBboxCode" out="console" />
</ClientOnly>

#### `getOsmBoundingBox` Parameters

| Option | Type | Description |
|---|---|---|
| — | — | No parameters. Returns the OSM bounding box or `null`. |

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
| [`getTableData`](#get-table-data)({ tableName }) | `Record<string, unknown>[]` | Plain rows for charts, tables, or custom JS logic |
| [`getLayer`](#get-a-renderable-table-as-geojson)(name) | `FeatureCollection` | Renderable tables for [`autk-map`](../autk-map/index.md) or [`autk-plot`](../autk-plot/index.md) |
| [`getLayerTables`](#list-renderable-tables)() | Table metadata array | Listing renderable tables before bulk export |
| [`getOsmBoundingBox`](#osm-bounding-box)() | `[minLon, minLat, maxLon, maxLat]` \| `null` | Framing the loaded OSM area |
| [`getBoundingBoxFromLayer`](#table-bounding-box)(name) | `BoundingBox` object | Bounds of one renderable table |

</div>
