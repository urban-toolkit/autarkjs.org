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

Once data is loaded into DuckDB, `autk-db` provides methods for spatial analysis and custom SQL queries. Analysis methods update existing tables or create new ones. To inspect the results, use one of the [retrieving data](./retrieving-data.md) methods.

<script setup>
const spatialQueryCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: true,
});

const res = await db.spatialQuery({
    tableRootName: 'neighborhoods',
    tableJoinName: 'noise',
});

console.log(res)
`

const groupQueryCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: true,
});

const res = await db.spatialQuery({
    tableRootName: 'neighborhoods',
    tableJoinName: 'noise',
    groupBy: [
        {
            column: '*',
            aggregateFn: 'count',
        },
    ],
});

console.log(res)
`

const heatmapCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
    layerType: 'polygons',
});

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: true,
});

const res = await db.buildHeatmap({
    tableJoinName: 'noise',
    outputTableName: 'heatmap',
    near: { distance: 250 },
    grid: { rows: 20, columns: 20 },
    groupBy: [
        {
            column: '*',
            aggregateFn: 'count'
        },
    ],
});

console.log(res)
`

const rawQueryCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

const result = await db.rawQuery({
    query: \`SELECT properties.ntaname, CAST(properties.shape_area AS DOUBLE) AS shape_area
             FROM neighborhoods
             WHERE CAST(properties.shape_area AS DOUBLE) > 1000\`,
    output: { type: 'RETURN_OBJECT' },
});

console.log(result)
`
</script>

## Spatial Queries

`spatialQuery` performs a spatial join between two tables. The root table is always modified in place, and the joined values are written into `properties.sjoin`.

The most important parameters are:

1. `tableRootName` and `tableJoinName` — The two tables involved in the join. The root table receives the result; the join table provides the matching features.
2. `near` — Optional NEAR predicate configuration. If omitted, `spatialQuery` uses `INTERSECT`.
3. `groupBy` — Optional aggregation rules applied to the join-side data.

<ClientOnly>
  <CodePlayground :code="spatialQueryCode" out="console" />
</ClientOnly>

:::warning Units depend on projection
`near.distance` uses the native units of the loaded geometries. With `EPSG:3395`, the unit is meters.
:::

#### List of `spatialQuery` Parameters

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
      <td><a href="/api/autk-db/interfaces/SpatialQueryParams#tablerootname"><code>tableRootName</code></a></td>
      <td><code>string</code></td>
      <td>Root table name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/SpatialQueryParams#tablejoinname"><code>tableJoinName</code></a></td>
      <td><code>string</code></td>
      <td>Join table name.</td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/interfaces/SpatialQueryParams#near"><code>near</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">distance</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">number</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>NEAR distance.</span>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/interfaces/SpatialQueryParams#groupby"><code>groupBy</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">column</code>
            <code style="display:inline-block; line-height:1;">aggregateFn</code>
            <code style="display:inline-block; line-height:1;">normalize</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">AggregateFunction</code>
          <code style="display:inline-block; line-height:1;">boolean</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Column to aggregate.</span>
          <span>Aggregation function.</span>
          <span>Normalize to 0–1.</span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

### `groupBy` output

Grouping summarizes the matched features instead of returning one join result per match. Aggregated values are written into `properties.sjoin.<aggregateFn>.<key>`.

<ClientOnly>
  <CodePlayground :code="groupQueryCode" out="console" />
</ClientOnly>

Without `groupBy`, each matched feature is written directly under `properties.sjoin`, which can produce multiple rows for the same root feature.

```json
{
  "properties": {
    "sjoin": { "key": 1, "date": "03/31/2025 11:17:00 PM" }
  }
}
```

With `groupBy`, root features are deduplicated and the aggregated values are grouped by function name.

```json
{
  "properties": {
    "sjoin": {
      "count": { "noise": 42 }
    }
  }
}
```

:::tip Normalization
When `normalize: true` is set on a `groupBy` entry, the aggregated value is normalized between 0 and 1.
:::

## Build Heatmap

`buildHeatmap` creates a grid over the current [workspace](./workspaces.md) bounds and aggregates values from a source table into each grid cell. The result is a grid layer table suitable for raster rendering.

<ClientOnly>
  <CodePlayground :code="heatmapCode" out="console" />
</ClientOnly>

:::warning Workspace bounds
`buildHeatmap` requires a valid workspace bounding box. In practice, this usually comes from previously loaded OSM or GeoJSON layers.
:::

#### List of `buildHeatmap` Parameters

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
      <td><a href="/api/autk-db/interfaces/BuildHeatmapParams#tablejoinname"><code>tableJoinName</code></a></td>
      <td><code>string</code></td>
      <td>Source table name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/BuildHeatmapParams#outputtablename"><code>outputTableName</code></a></td>
      <td><code>string</code></td>
      <td>Output table name.</td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/interfaces/BuildHeatmapParams#near"><code>near</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">distance</code>
          </div>
        </div>
      </td>
      <td><code>number</code></td>
      <td>NEAR distance.</td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/interfaces/BuildHeatmapParams#grid"><code>grid</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">rows</code>
            <code style="display:inline-block; line-height:1;">columns</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">number</code>
          <code style="display:inline-block; line-height:1;">number</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Grid rows.</span>
          <span>Grid columns.</span>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/interfaces/BuildHeatmapParams#groupby"><code>groupBy</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">column</code>
            <code style="display:inline-block; line-height:1;">aggregateFn</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">HeatmapAggregateFunction</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Column to aggregate.</span>
          <span>Band aggregation.</span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Raw SQL {#raw-sql}

While `spatialQuery` and `buildHeatmap` cover common spatial analysis patterns, `rawQuery` gives you direct access to DuckDB SQL for custom logic.

`rawQuery` executes SQL against the current [workspace](./workspaces.md).

<ClientOnly>
  <CodePlayground :code="rawQueryCode" out="console" />
</ClientOnly>

#### List of `rawQuery` Parameters

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
      <td><code>query</code></td>
      <td><code>string</code></td>
      <td>SQL query.</td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><code>output</code></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">type</code>
            <code style="display:inline-block; line-height:1;">tableName</code>
            <code style="display:inline-block; line-height:1;">source</code>
            <code style="display:inline-block; line-height:1;">tableType</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">"CREATE_TABLE" | "RETURN_OBJECT"</code>
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">TableSource</code>
          <code style="display:inline-block; line-height:1;">LayerType</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Output mode.</span>
          <span>New table name.</span>
          <span>Result source metadata.</span>
          <span>Result table type.</span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

:::warning Raw query limitations
- Queries run against the **current workspace** only.
- `rawQuery` supports `SELECT` and `WITH` queries. Statements such as `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, and `REPLACE` are rejected.
:::

</div>
