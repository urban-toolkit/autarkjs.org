# autk-db

`autk-db` is a browser-native spatial database powered by [DuckDB-WASM](https://duckdb.org/). It lets you load, query, and transform geospatial data without a server — all processing runs in the browser.

The main entry point is the `AutkSpatialDb` class.

## Package Installation
To install autk-db, run:

```bash
npm install @urban-toolkit/autk-db
```
You can also use `autk-db` installing the complete `@urban-toolkit/autk` package.

## Initialization

Before calling any `autk-db` method, it is necessary to call the `init()` method to set up the DuckDB instance and load the spatial extension. `init()` is async and must be awaited.

```typescript
import { AutkSpatialDb } from "autk-db";

const db = new AutkSpatialDb();
await db.init();
```

## Core Concepts

Understanding how data flows through `autk-db` is the key to using it correctly.

### Tables

Every `load*` call creates one or more **named tables** inside DuckDB-WASM. A table is identified by a string name and exists in-browser for the duration of the session. You can inspect registered tables via `db.tables`, which returns metadata (name, type, columns) — not the actual row data.

```typescript
await db.loadCsv({
  csvFileUrl: "/data/incidents.csv",
  outputTableName: "incidents",
});

console.log(db.tables);
// [{ name: 'incidents', source: 'csv', columns: [...] }]
```

### Layers

Layers are tables that have a **geometry column**. They are created by OSM and GeoJSON load methods. What distinguishes layers from plain tables is that they can be rendered by `autk-map` and exported as GeoJSON.

Each layer has a **type** (`'buildings'`, `'roads'`, `'polygons'`, etc.) that maps directly to `LayerType` in `autk-map`. Use `getLayerTables()` to filter the table list to geometry-bearing tables only.

### Load Operations

`loadOsm`, `loadCsv`, `loadCustomLayer`, `loadGridLayer`, and the others are **write-only**. They:

- Are all `async` and must be awaited
- Register data as a named DuckDB table
- **Do not return row data into JavaScript memory** — they return table metadata
- Data stays inside DuckDB until you call a getter

Think of them as `INSERT INTO` / `CREATE TABLE` statements: after they complete, the data is in the database, not in a JS variable.

### Query & Analysis Operations

`spatialJoin`, `buildHeatmap`, and `rawQuery` transform data that is already in DuckDB. Their outputs are saved as new or updated DuckDB tables — they also keep data inside the database (except `rawQuery` with `output: { type: 'RETURN_OBJECT' }`).

### Getters

Getters are the only way to move data from DuckDB into JavaScript memory:

| Method                          | Returns                                      | Use for                                       |
| ------------------------------- | -------------------------------------------- | --------------------------------------------- |
| `getLayer(name)`                | `FeatureCollection`                          | Passing geometry to `autk-map` or `autk-plot` |
| `getTableData({ tableName })`   | `Record<string, unknown>[]`                  | Inspecting rows, feeding charts               |
| `getLayerTables()`              | Layer table metadata array                   | Iterating all geometry layers                 |
| `getOsmBoundingBox()`           | `[minLon, minLat, maxLon, maxLat]` \| `null` | Camera framing                                |
| `getBoundingBoxFromLayer(name)` | Bounding box object                          | Bounds of any geometry layer                  |

The typical flow looks like this:

```typescript
await db.loadOsm({ ... });                      // data → DuckDB
await db.spatialJoin({ ... });                 // transform inside DuckDB

const geojson = await db.getLayer('osm_buildings'); // DuckDB → JS memory
map.loadCollection('buildings', { collection: geojson });  // JS memory → GPU
```

## What's Next

- [Loading Data](./loading-data) — load OSM, GeoJSON, CSV, and JSON into the database
- [Querying & Analyzing](./querying) — spatial joins, heatmaps, and raw SQL
- [Retrieving Data](./retrieving-data) — export tables back as GeoJSON or plain arrays
- [Updating Tables](./updating-tables) — modify existing tables in place
- [Workspaces](./workspaces) — isolate multiple OSM datasets or independent analyses

---

[API Reference →](/api/autk-db/globals)
