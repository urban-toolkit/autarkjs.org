# Querying & Analyzing

Once data is loaded, `autk-db` provides methods for spatial analysis directly in the browser.

## Spatial Join

`spatialJoin` joins two tables based on their geometric relationship. The result adds columns from the joined table into the root table (or creates a new table).

```typescript
await db.spatialJoin({
  tableRootName: 'buildings',
  tableJoinName: 'incidents',
  output: { type: 'MODIFY_ROOT' },
  spatialPredicate: 'INTERSECT',
  joinType: 'LEFT',
  groupBy: {
    selectColumns: [
      {
        tableName: 'incidents',
        column: 'severity',
        aggregateFn: 'count',
        aggregateFnResultColumnName: 'incident_count',
      },
    ],
  },
});
```

**Key parameters:**

| Parameter | Options | Description |
|-----------|---------|-------------|
| `spatialPredicate` | `'INTERSECT'`, `'NEAR'` | How features are matched |
| `joinType` | `'INNER'`, `'LEFT'`, `'RIGHT'`, `'FULL'` | SQL join type |
| `output.type` | `'MODIFY_ROOT'`, `'CREATE_NEW'` | Modify the root table in-place or create a new table |
| `output.tableName` | string | Required when `output.type` is `'CREATE_NEW'`. Name for the new table |
| `nearDistance` | number | Distance threshold when using `'NEAR'`, in **meters** (assumes `EPSG:3395` projection) |
| `nearUseCentroid` | `true` / `false` | When using `'NEAR'`, measures centroid-to-centroid distance instead of geometry-to-geometry. Automatically set to `true` when the root table contains polygons |

For proximity-based joins, use `'NEAR'` with a `nearDistance` in meters:

```typescript
await db.spatialJoin({
  tableRootName: 'buildings',
  tableJoinName: 'bus_stops',
  output: { type: 'MODIFY_ROOT' },
  spatialPredicate: 'NEAR',
  nearDistance: 200, // 200 meters
  joinType: 'LEFT',
});
```

:::warning Units depend on projection
`nearDistance` uses `ST_Distance` internally, which operates in the native units of your geometries. When using `EPSG:3395` (the standard for `autk-db`), the unit is **meters**. If you use a different projection, units will differ.
:::

### groupBy columns

When using `groupBy`, each entry in `selectColumns` supports the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `tableName` | `string` | Which table to select the column from |
| `column` | `string` | Column name to aggregate |
| `aggregateFn` | `'sum'` \| `'avg'` \| `'count'` \| `'min'` \| `'max'` \| `'weighted'` | Aggregate function to apply |
| `aggregateFnResultColumnName` | `string` (optional) | Custom key name in the output JSON. Defaults to the table name (for `count`/`weighted`) or `tableName.column` (for others) |
| `normalize` | `boolean` (optional) | If `true`, adds a min-max normalized version of the column (0–1 range) as `<resultColumnName>_norm` |

The `weighted` aggregate computes an **inverse-distance weighted score**: `SUM(1.0 / distance)`. Features that are closer to the root feature contribute more to the score. It is most useful in combination with `'NEAR'`:

```typescript
await db.spatialJoin({
  tableRootName: 'buildings',
  tableJoinName: 'bus_stops',
  output: { type: 'MODIFY_ROOT' },
  spatialPredicate: 'NEAR',
  nearDistance: 500,
  joinType: 'LEFT',
  groupBy: {
    selectColumns: [
      {
        tableName: 'bus_stops',
        column: 'id',
        aggregateFn: 'weighted',
        aggregateFnResultColumnName: 'bus_accessibility',
        normalize: true, // also adds bus_accessibility_norm (0–1)
      },
    ],
  },
});
```

### Output structure

All `spatialJoin` results are written into the **`properties`** column of the root table, nested under a `sjoin` key.

**Without `groupBy`** (simple join — no aggregation):

The join table's properties are merged flat into `properties.sjoin`. Note that this produces **multiple rows per root feature** — one for each matched join feature.

```json
{
  "properties": {
    "sjoin": { "name": "Bus Stop A", "line": "42" }
  }
}
```

**With `groupBy`** (aggregated join):

Results are nested by aggregate function name. Root features are **deduplicated** — one row per feature.

```json
{
  "properties": {
    "sjoin": {
      "count": { "incident_count": 7 },
      "sum":   { "incidents.severity": 23.5 },
      "weighted": { "bus_accessibility": 0.034 }
    }
  }
}
```

When `normalize: true` is set on a column, an additional key is added with a `_norm` suffix:

```json
{
  "properties": {
    "sjoin": {
      "count": {
        "incident_count": 7,
        "incident_count_norm": 0.63
      }
    }
  }
}
```

To access these values after retrieving a layer, use standard property access:

```typescript
const geojson = await db.getLayer('buildings');
geojson.features.forEach((f) => {
  const count = f.properties?.sjoin?.count?.incident_count;
  const norm  = f.properties?.sjoin?.count?.incident_count_norm;
});
```

## Build Heatmap

`buildHeatmap` creates a grid over the bounding box and aggregates values from a source table into each grid cell using a proximity-based spatial join (`NEAR`). The result is a grid layer table suitable for raster rendering.

```typescript
await db.buildHeatmap({
  tableJoinName: 'incidents',
  outputTableName: 'heatmap',
  nearDistance: 300,
  grid: { rows: 20, columns: 20 },
  groupBy: {
    selectColumns: [
      {
        tableName: 'incidents',
        column: 'severity',
        aggregateFn: 'sum',
        aggregateFnResultColumnName: 'total_severity',
      },
    ],
  },
});
```

**Key parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tableJoinName` | `string` | Source table to aggregate (must have geometry). |
| `outputTableName` | `string` | Name for the resulting grid table. |
| `nearDistance` | `number` | Distance threshold in **meters** (assumes `EPSG:3395`). Each grid cell captures features within this radius. |
| `grid.rows` | `number` | Number of rows in the grid. |
| `grid.columns` | `number` | Number of columns in the grid. |
| `groupBy` | `object` | Optional. Aggregation config — same `selectColumns` format as [spatialJoin](#groupby-columns). Supports `'sum'`, `'avg'`, `'count'`, `'min'`, `'max'`. |

If OSM data is loaded, the grid extent defaults to the OSM bounding box. The resulting table can be passed to `autk-map` as a raster layer.

## Raw SQL {#raw-sql}

`rawQuery` executes arbitrary DuckDB SQL against your loaded tables. The workspace schema prefix is applied automatically.

```typescript
// Return data as plain objects
const result = await db.rawQuery({
  query: `SELECT name, area FROM neighborhoods WHERE area > 1000`,
  output: { type: 'RETURN_OBJECT' },
});

// Or create a new table from the query result
await db.rawQuery({
  query: `
    CREATE TABLE summary AS
    SELECT building_id, COUNT(*) AS floor_count
    FROM buildings GROUP BY building_id
  `,
  output: {
    type: 'CREATE_TABLE',
    tableName: 'summary',
    source: 'user',            // metadata: table source
    tableType: 'pointset',     // metadata: table type
  },
});
```

**Output options:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | `'CREATE_TABLE'` \| `'RETURN_OBJECT'` | `CREATE_TABLE` registers the result as a named table; `RETURN_OBJECT` returns rows as plain objects. |
| `tableName` | `string` | Required when `type` is `'CREATE_TABLE'`. Name for the new table. |
| `source` | `'csv'` \| `'osm'` \| `'geojson'` \| `'user'` | Optional. Sets the table's source metadata when creating a table. |
| `tableType` | `LayerType` \| `'pointset'` | Optional. Sets the table's type metadata (e.g. `'polygons'`, `'pointset'`). |

:::tip DuckDB spatial functions
DuckDB's spatial extension is loaded automatically. You can use functions like `ST_Intersects`, `ST_Area`, `ST_Distance` directly in raw queries.
:::
