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

# Analyzing Data

Once data is loaded into DuckDB, `autk-db` provides methods for spatial analysis and custom SQL queries. Analysis methods transform data and store results as new or updated tables. To access the result data, use one of the [retrieving data](./retrieving-data.md) methods.

<script setup>
const spatialQueryCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

await db.loadCustomLayer({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
    coordinateFormat: 'EPSG:3395',
});

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:3395',
    },
});

const res = await db.spatialQuery({
    tableRootName: 'neighborhoods',
    tableJoinName: 'noise',
    spatialPredicate: 'INTERSECT',
    output: { type: 'MODIFY_ROOT' }
});

console.log(res)
`

const groupQueryCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

await db.loadCustomLayer({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
    coordinateFormat: 'EPSG:3395',
});

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:3395',
    },
});

const res = await db.spatialQuery({
    tableRootName: 'neighborhoods',
    tableJoinName: 'noise',
    spatialPredicate: 'INTERSECT',
    output: { type: 'MODIFY_ROOT' },
    groupBy: {
        selectColumns: [
            {
                tableName: 'noise',
                column: 'key',
                aggregateFn: 'count',
            },
        ],
    },
});

console.log(res)
`


const heatmapCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

await db.loadCustomLayer({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
    coordinateFormat: 'EPSG:3395',
});

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:3395',
    },
});

const res = await db.buildHeatmap({
    tableJoinName: 'noise',
    outputTableName: 'heatmap',
    nearDistance: 250,
    grid: { rows: 20, columns: 20 },
    groupBy: {
        selectColumns: [
            {
                tableName: 'noise',
                column: 'key',
                aggregateFn: 'count'
            },
        ],
    },
});

console.log(res)
`

const rawQueryCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

// Return data as plain objects
const result = await db.rawQuery({
    query: "SELECT name, area FROM neighborhoods WHERE area > 1000",
    output: { type: 'RETURN_OBJECT' },
});

console.log(result)
`
</script>

## Spatial Queries

`spatialQuery` is the main method for spatial analysis. It can perform spatial joins between layers or compute features within a given radius. The method requires these parameters:

1. `tableRootName` and `tableJoinName` — The two tables involved in the query. The root table receives the results; the join table provides the data to match against.

2. `spatialPredicate`—  Defines how features are matched: `'INTERSECT'` for geometry-based joins, or `'NEAR'` for proximity-based queries within a given radius.

3. `output` — Controls where results go. Use `'MODIFY_ROOT'` to update the root table in-place, or `'CREATE_NEW'` with a `tableName` to create a new table.

4. `nearDistance` — Required when using `'NEAR'`. Distance threshold.

<ClientOnly>
  <CodePlayground :code="spatialQueryCode" out="console" />
</ClientOnly>

:::warning Units Depend on Projection
`nearDistance` operates in the native units of your geometries. When using `EPSG:3395`, the unit is **meters**. If you use a different projection, units will differ.
:::

#### `spatialQuery` Parameters

| Option | Type | Description |
|---|---|---|
| `tableRootName` | `string` | The root table to join into. |
| `tableJoinName` | `string` | The table to join from. |
| `output.type` | `'MODIFY_ROOT'` \| `'CREATE_NEW'` | Modify the root table in-place or create a new table. |
| `output.tableName` | `string` | Required when `output.type` is `'CREATE_NEW'`. Name for the new table. |
| `spatialPredicate` | `'INTERSECT'` \| `'NEAR'` | How features are matched spatially. |
| `nearDistance` | `number` | Distance threshold for `'NEAR'`. |
| `groupBy` | `object` | Optional aggregation config. See details below. |

### `groupBy` columns

Grouping is one of the most important operations in spatial analysis because it turns many individual feature matches into summaries that can be mapped, compared, and reused. Instead of inspecting every joined point, line, or polygon separately, `groupBy` lets you compute counts, totals, averages, ranges, and normalized values for each root feature.

<ClientOnly>
  <CodePlayground :code="groupQueryCode" out="console" />
</ClientOnly>

When `groupBy` is provided, `spatialQuery` aggregates matched features instead of producing one row per match. Each entry in `selectColumns` defines a resulting summary column, including which source column to aggregate, which aggregate function to apply, and whether to normalize the result.

| Option | Type | Description |
|---|---|---|
| `tableName` | `string` | Which table to select the column from. |
| `column` | `string` | Column name to aggregate. |
| `aggregateFn` | `'sum'` \| `'avg'` \| `'count'` \| `'min'` \| `'max'` | Aggregate function to apply. |
| `aggregateFnResultColumnName` | `string` | Custom key name in the output JSON. Defaults to the table name for `count` or `tableName.column` (for others). |
| `normalize` | `boolean` | If `true`, adds a min-max normalized version of the column (0–1 range) as `<resultColumnName>_norm`. |

### Output structure

All `spatialQuery` results are written into the **`properties`** column of the root table, nested under a `sjoin` key.

1. **Without `groupBy`** the join table's properties are merged flat into `properties.sjoin`. This produces **multiple rows per root feature**, one for each matched join feature.

```json
{
  "properties": {
    "sjoin": { "key": 1, "date": "03/31/2025 11:17:00 PM" }
  }
}
```

2. **With `groupBy`** results are nested by aggregate function name into `properties.sjoin`. Root features are **deduplicated**, only one row per feature is produced.

```json
{
  "properties": {
    "sjoin": {
      "count": { "noise_count": 42 }
    }
  }
}
```
:::tip Normalization
When `normalize: true` is set on a column, an additional key is added with a `_norm` suffix.
:::

## Build Heatmap

`buildHeatmap` creates a grid over the current [workspace](./workspaces.md) bounding box and aggregates values from a source table into each grid cell using a proximity-based spatial query. The result is a grid layer table suitable for raster rendering.

<ClientOnly>
  <CodePlayground :code="heatmapCode" out="console" />
</ClientOnly>

:::warning Workspace Bounding Box
If OSM data is loaded, the grid extent defaults to the OSM bounding box. When no OSM data is available, the grid is computed from the GeoJSON layers.
:::

#### `buildHeatmap` Parameters

| Option | Type | Description |
|---|---|---|
| `tableJoinName` | `string` | Source table to aggregate (must have geometry). |
| `outputTableName` | `string` | Name for the resulting grid table. |
| `nearDistance` | `number` | Distance threshold. Each grid cell captures features within this radius. |
| `grid.rows` | `number` | Number of rows in the grid. |
| `grid.columns` | `number` | Number of columns in the grid. |
| `groupBy` | `object` | Aggregation config — same `selectColumns` format as [spatialQuery](#groupby-columns). |

## Raw SQL {#raw-sql}

While `spatialQuery` and `buildHeatmap` cover the most common spatial analysis patterns, complex or ad-hoc queries often require the flexibility of raw SQL. `rawQuery` gives you direct access to DuckDB's full SQL engine — window functions, CTEs, custom aggregations, or cross-table joins that don't fit the structured API. It's the escape hatch when the higher-level methods aren't expressive enough.

`rawQuery` executes arbitrary DuckDB SQL against your loaded tables. The [workspace](workspaces.md) schema prefix is applied automatically.

<ClientOnly>
  <CodePlayground :code="rawQueryCode" out="console" />
</ClientOnly>

You can also create a new table from a query result:

```typescript
await db.rawQuery({
  query: `
    CREATE TABLE summary AS
    SELECT building_id, COUNT(*) AS floor_count
    FROM buildings GROUP BY building_id
  `,
  output: {
    type: 'CREATE_TABLE',
    tableName: 'summary',
    source: 'user',
    tableType: 'pointset',
  },
});
```

#### `rawQuery` Parameters

| Option | Type | Description |
|---|---|---|
| `query` | `string` | SQL query to execute. |
| `output.type` | `'CREATE_TABLE'` \| `'RETURN_OBJECT'` | `CREATE_TABLE` registers the result as a named table; `RETURN_OBJECT` returns rows as plain objects. |
| `output.tableName` | `string` | Required when `type` is `'CREATE_TABLE'`. Name for the new table. |
| `output.source` | `'csv'` \| `'osm'` \| `'geojson'` \| `'user'` | Optional. Sets the table's source metadata when creating a table. |
| `output.tableType` | `LayerType` \| `'pointset'` | Optional. Sets the table's type metadata (e.g. `'polygons'`, `'pointset'`). |

:::warning Raw Query Limitations
- `rawQuery` **only allows `SELECT` and `WITH` (CTE)** queries. Statements like `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, and `REPLACE` are rejected with a `NonSelectQueryError`.
- The result rows are returned as plain JavaScript objects (keyed by column name) — no geometry helpers, GeoJSON conversion, or spatial column inference is applied.
- Queries run against the **current workspace** only — tables from other workspaces are not visible.
:::

</div>