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

# autk-db

`autk-db` is a browser-native spatial database powered by [DuckDB](https://duckdb.org/docs/current/clients/wasm/overview). It lets you load, query, and transform geospatial data entirely on the client — no server required.

**Key capabilities:**

- Load data from **OpenStreetMap** (using Overpass API or static `.pbf` files), **CSV**, **JSON**, **GeoJSON**, and **GeoTIFF**.
- Run **spatial joins** and **custom SQL** queries inside the browser.
- Isolate multiple datasets in independent **workspaces**.
- Export tables as **GeoJSON** for `autk-map`, `autk-compute`, `autk-plot` or any software.

## Package Installation

To install `autk-db`, you must install its npm pakage. 

```bash
npm install @urban-toolkit/autk-db
```

You can also have access to the library functionalities by installing the complete `@urban-toolkit/autk` package.

```bash
npm install @urban-toolkit/autk
```

## Initialization

The main entry point is the `AutkSpatialDb` class. Before calling any `autk-db` method, create a database instance and await `init()`. This command sets up DuckDB and loads its official spatial extension.

<script setup>
const introCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

console.log(db.tables)
`

const workflowCode = `
import { AutkSpatialDb } from "@urban-toolkit/autk-db";

const db = new AutkSpatialDb();
await db.init();

await db.loadCustomLayer({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
    coordinateFormat: 'EPSG:3395'
});

await db.rawQuery({
  query: "SELECT * FROM neighborhoods LIMIT 10",
  output: {
    type: "CREATE_TABLE",
    tableName: "first10Neigs",
    tableType: "polygons"
  },
});

const geojson = await db.getLayer('first10Neigs');
console.log(geojson)
`
</script>

<ClientOnly>
  <CodePlayground :code="introCode" out="console" />
</ClientOnly>


## Basic Workflow

Most `autk-db` workflows follow a simple three-step pattern. First, you load one or more datasets into DuckDB tables. Then you use `autk-db` methods to inspect, filter, join, or transform those tables. Finally, you bring the result back into JavaScript as GeoJSON, so use it in `autk-map`, `autk-plot`, `autk-compute` or any other software:

1. **Load data** into named DuckDB tables.
2. **Query, analyze, or transform** those tables inside DuckDB.
3. **Retrieve the result** back into JavaScript when needed.

<ClientOnly>
  <CodePlayground :code="workflowCode" out="console" />
</ClientOnly>

## Next Steps

- [Loading Data](./loading-data) — load OSM, GeoJSON, CSV, JSON, grids, and rasters
- [Tables](./tables) — understand named tables, metadata, and renderable tables
- [Querying and Analysis](./querying) — spatial joins, heatmaps, and raw SQL
- [Retrieving Data](./retrieving-data) — get rows, GeoJSON, and bounding boxes back into JavaScript
- [Updating Tables](./updating-tables) — modify existing tables in place
- [Workspaces](./workspaces) — isolate multiple datasets or scenarios

---

[API Reference →](/api/autk-db/globals)

</div>
