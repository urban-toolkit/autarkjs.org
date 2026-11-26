<script setup>
const introCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

console.log(db.getTablesMetadata())
`

const workflowCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods'
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


<style scoped>
.introduction-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

<div class="introduction-page">

<h1 id="autk-db" class="package-title">autk-db <a class="pkg-badge" href="https://www.npmjs.com/package/@urban-toolkit/autk-db"><img alt="autk-db npm version" src="https://img.shields.io/npm/v/@urban-toolkit/autk-db?color=f59e0b&logo=npm&labelColor=111827"></a></h1>

`autk-db` is a browser-native spatial database powered by [DuckDB](https://duckdb.org/docs/current/clients/wasm/overview). It lets you load, query, and transform urban data entirely on the browser.

**Key capabilities:**

- Load [OpenStreetMap](https://www.openstreetmap.org/) from the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) or a local `.pbf` extract, plus **GeoJSON**, **CSV**, **JSON** (coordinates or WKT), and **GeoTIFF** imagery, including color-coded rasters.
- Keep each project in its own **workspace**, with its own coordinate system and precision grid, and reproject incoming data on load.
- Query and combine tables with **DuckDB SQL**: spatial joins, distance predicates, aggregation, and joins against compact rasters.
- Build **heatmaps** with independent bands, normalization, and Gaussian smoothing.
- Select custom **OSM tag sets** and export individual OSM elements when their provenance is intact.
- Export any table as GeoJSON for `autk-map`, `autk-plot`, `autk-compute`, or another tool.

## Package installation

To install `autk-db`, you must install its [NPM pakage](https://www.npmjs.com/package/@urban-toolkit/autk-db). 

```bash
npm install @urban-toolkit/autk-db
```

You can also have access to the library by installing the complete Autark package.

```bash
npm install @urban-toolkit/autk
```

## Initialization

The entry point of `autk-db` is the `AutkDb` class. To use it, you must create a database instance and await `init()` seting up DuckDB and loading its official spatial extension.


<ClientOnly>
  <CodePlayground :code="introCode" out="console" :auto-run="true" />
</ClientOnly>


## Basic workflow

Most `autk-db` workflows follow a simple three-step pattern. First, you load one or more datasets into DuckDB tables. Then you use `autk-db` methods to inspect, filter, join, or transform those tables. Finally, you bring the result back into JavaScript as GeoJSON, so use it in `autk-map`, `autk-plot`, `autk-compute` or any other software:

1. **Load data** into named DuckDB tables.
2. **Query, analyze, or transform** those tables inside DuckDB.
3. **Retrieve the result** back into JavaScript when needed.

<ClientOnly>
  <CodePlayground :code="workflowCode" out="console" :auto-run="true" />
</ClientOnly>

</div>