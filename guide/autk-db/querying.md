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
| `nearDistance` | number | Distance threshold when using `'NEAR'`, in **meters** (assumes `EPSG:3395` projection) |

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

## Build Heatmap

`buildHeatmap` aggregates point data into a grid and returns a raster-compatible table:

```typescript
await db.buildHeatmap({
  sourceTableName: 'incidents',
  outputTableName: 'heatmap',
  cellSize: 300,
  aggregation: { column: 'severity', fn: 'sum' },
});
```

The resulting table can be passed to `autk-map` as a raster layer.

## Raw SQL {#raw-sql}

`rawQuery` executes arbitrary DuckDB SQL against your loaded tables. The workspace schema prefix is applied automatically.

```typescript
// Return data as plain objects
const result = await db.rawQuery({
  query: `SELECT name, area FROM neighborhoods WHERE area > 1000`,
  output: { type: 'RETURN_DATA' },
});

// Or create a new table from the query result
await db.rawQuery({
  query: `
    CREATE TABLE summary AS
    SELECT building_id, COUNT(*) AS floor_count
    FROM buildings GROUP BY building_id
  `,
  output: { type: 'CREATE_TABLE', tableName: 'summary' },
});
```

:::tip DuckDB spatial functions
DuckDB's spatial extension is loaded automatically. You can use functions like `ST_Intersects`, `ST_Area`, `ST_Distance` directly in raw queries.
:::
