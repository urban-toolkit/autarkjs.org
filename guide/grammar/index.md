---
title: autk-grammar
---

<script setup>
const introCode = `
import { AutkGrammar } from '@urban-toolkit/autk-grammar'

const spec = {
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs_proj.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    },
  ],
  map: {
    layerRefs: [{ dataRef: 'neighborhoods', isPick: true }],
  },
  plot: {
    dataRef: 'neighborhoods',
    mark: 'scatter',
    axis: ['shape_area', 'shape_leng'],
    title: 'Neighborhood area and perimeter',
    width: 600,
    events: ['brush'],
    mapRef: 'neighborhoods',
  },
}

const grammar = new AutkGrammar({ map: 'quick-start-map', plot: 'quick-start-plot' })
await grammar.run(spec)
`
</script>

<style scoped>
.package-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 30%;
}
</style>

<div class="package-page">

# autk-grammar

[![npm version](https://img.shields.io/npm/v/@urban-toolkit/autk-grammar?color=f43f5e&logo=npm&labelColor=111827)](https://www.npmjs.com/package/@urban-toolkit/autk-grammar)

`autk-grammar` lets you build an urban visual analytics application from a single declarative **spec**. Instead of calling [`autk-db`](/autk-db/), [`autk-compute`](/autk-compute/), [`autk-map`](/autk-map/), and [`autk-plot`](/autk-plot/) yourself, you describe the data to load, the computations to run, and the maps and plots to draw, and the grammar wires them together, including linked selections between maps and plots.

**Key capabilities:**

- Load **OpenStreetMap**, **GeoJSON**, **CSV**, **JSON**, and **GeoTIFF** data, derive tables with **spatial joins**, **heatmaps**, and **SQL queries**, update or drop tables along the way, and keep areas apart in **workspaces**, in the coordinate system you choose.
- Run **GPU computations** written in WGSL over feature attributes, **render passes** that measure what can be seen from each viewpoint, and passes that place the **windows** of buildings and find the **clusters** of features that touch. A pass can keep its result in the database, for the joins, heatmaps, and SQL queries that run **after the passes**.
- Draw **2D and 3D maps**, on a **terrain** raised from an elevation raster, with categorical, sequential, and diverging colormaps, in **styles** of your own, seen from a **camera** you can point, tilt, and turn, or take on a **tour**.
- Draw **linked plots** (bar charts, scatterplots, histograms, parallel coordinates, tables, heat matrices, and time series) that select features on the map, colored in the map's schemes, with your own axis titles and tick formats.
- React to selections and drive highlights **from your own code**.

The grammar itself is tool-agnostic: `autk-grammar` is the adapter that runs it on Autark. The source code is on [GitHub](https://github.com/urban-toolkit/autk-grammar).

## Package installation

To install `autk-grammar`, you must install its [NPM package](https://www.npmjs.com/package/@urban-toolkit/autk-grammar). It brings the Autark packages it needs as dependencies.

```bash
npm install @urban-toolkit/autk-grammar
```

## Quick start

Create an `AutkGrammar` with the ids of the elements it should draw into, then `await grammar.run(spec)`. The example below loads Manhattan neighborhoods, draws them on a map, and links a scatterplot to the map: brush the plot to select neighborhoods.

<ClientOnly>
  <CodePlayground grammar :code="introCode" out="dom" :auto-run="true" />
</ClientOnly>

:::warning WebGPU required
Maps and computations run on WebGPU. We recommend recent versions of **Chrome**, **Edge**, or **Safari**. See the browser support table in the [Introduction](/introduction).
:::

## Spec structure

A spec is a plain object. Its four main sections are optional and run in this order, and later sections refer to tables created earlier by name; only a data source with [`after: 'compute'`](#sources-after-compute) runs after the compute passes. Three more keys set up the workspaces before any data loads (`workspaces`), and connect and arrange the views (`links` and `layout`).

| Key | Purpose |
|---|---|
| [`data`](#data) | Array of data sources. Each one creates or changes a table in the in-browser database. |
| [`compute`](#compute) | Array of passes, run on the GPU or the CPU. Each one adds columns to a table or writes a new one. |
| [`map`](#map) | One map spec, or an array of map specs for several maps. |
| [`plot`](#plot) | One plot spec, or an array of plot specs. |
| [`workspaces`](#workspaces) | Array of workspace settings: the coordinate system each workspace stores its tables in, and the grid their coordinates are rounded to. Applied before the first data source loads. |
| [`links`](#links) | Array of links between plots and map layers, wired once the maps and plots are drawn. |
| [`layout`](#layout) | How the page arranges the maps and plots. |

A spec kept in a JSON file may name the grammar's JSON Schema in `$schema`, so an editor checks the spec as you type. The schema is served at its `$id`, `"$schema": "https://autarkjs.org/schema/autk-grammar/v1.json"`, the version this site runs. The npm package also ships it as `build/autk-grammar-schema.json`, the version a project installs: a spec file at the root of the project names it as `"$schema": "./node_modules/@urban-toolkit/autk-grammar/build/autk-grammar-schema.json"`. A run does not read `$schema`.

A map or a plot can have an `id`, unique among the maps and plots of the spec. Links name the plot and the map they join by these ids. A plot without an `id` is known by its `dataRef`, so two plots of one table need ids: a run refuses two plots known by one name.

The constructor receives the targets to draw into, as element ids:

| Target | Element |
|---|---|
| `map` | Id of a `<canvas>`, or an array of ids, one per map, when `map` is an array. |
| `plot` | Id of a `<div>` that holds the plot. When `plot` is an array, an array of ids gives each plot its own `<div>`, in order; a single id holds every plot. |
| `db` | Optional id of a `<div>` that lists the loaded tables, useful while debugging. |

### Layout

`layout` describes how the maps and plots are arranged on the page. A run does not read it: `AutkGrammar` draws into the elements you give it, and the page that creates those elements arranges them with [`arrangeViews(spec)`](#arranging-the-views), so every host arranges a spec's views alike, as the playgrounds on this site do. Each view has its own pane: the maps first, in the order of `map`, then the plots, in the order of `plot`.

| Field | Description |
|---|---|
| `type` | `'vertical'` stacks the views, `'horizontal'` puts them side by side, and `'grid'` fills `columns` columns, row by row. Defaults to `'vertical'`. |
| `columns` | Number of columns of a `'grid'`, a whole number. Defaults to 2. |
| `gap` | Space between the views, in pixels. Defaults to 0. |

## Data

Every source has a `type` and, except for `join`, `update`, and `drop` sources, which change a table already loaded, an `outputTableName`. Any source can also name the [workspace](#workspaces) its table belongs to, and run after the compute passes with [`after: 'compute'`](#sources-after-compute).

| Type | Main fields |
|---|---|
| `osm` | `queryArea` for named boundaries or a box, read from OpenStreetMap or from a local extract named by `pbfFileUrl`. `autoLoadLayers.layers` creates one table per layer (`surface`, `parks`, `water`, `roads`, `buildings`), named `<outputTableName>_<layer>`, and `tagSets` one table per set of features chosen by their tags. See [OpenStreetMap sources](#openstreetmap-sources). |
| `geojson` | `geojsonFileUrl` or `geojsonObject`. Set `coordinateFormat` (for example `'EPSG:3395'`) when the data is not in WGS84. `layerType` sets how the map draws the table, for example `'polylines'` for lines or `'buildings'` for polygons; without it, the type is read from the first feature's geometry. `boundingBox: { minLon, minLat, maxLon, maxLat }` keeps only the features that cross the box, cut to it (a buildings table keeps them whole); despite their names, its bounds are in the workspace's coordinate system, not in degrees. |
| `csv` | `csvFileUrl` or `csvObject`, optional `delimiter`, and `geometryColumns: { latColumnName, longColumnName }` to build points (`geometryColumns: true` reads the `Latitude` and `Longitude` columns), or `geometryColumns: { wktColumnName }` to read each row's geometry from a column of WKT text such as `POLYGON((...))`. Either object takes a `coordinateFormat` when the coordinates are not in WGS84. |
| `json` | `jsonFileUrl` or `jsonObject`, with the same optional `geometryColumns`. |
| `geotiff` | `geotiffFileUrl`, loaded as a raster table: each band of the file's first image becomes a band of the table (`band_1`, `band_2`, ...), and the file's no-data value reads as no value. Set `coordinateFormat` when the file is not in WGS84 (`'EPSG:4326'`, the default). A raster with more than `maxRasterCells` cells (1,000,000 by default) is downsampled to fit, by `resampleMethod`: `'bilinear'`, the default, or `'nearest'`. On the map, `getFnv` names the band to draw, `'band_1'` by default, and a run refuses one that names none of the bands of a raster of several. A map's [`terrain`](#terrain) raises the ground to a band's heights. |
| `join` | `dataRef`, the table that receives the joined columns, and `joinDataRef`, the table whose rows are joined onto it. Features intersect by default; add `near: { distance }` to match within a distance, measured from centroid to centroid unless `near.useCentroid` is `false`, which measures between the geometries themselves. `groupBy` aggregates the matches (`count`, `sum`, `avg`, `min`, `max`, `weighted`, `collect`) into `sjoin.<aggregateFn>.<table>`; see [Normalized values](#normalized-values) for `normalize`. |
| `heatmap` | `joinDataRef`, the table to aggregate, `grid: { rows, columns }`, cells over the workspace's extent, `near: { distance }`, the radius around each cell's center (with `useCentroid` as in a join), and `groupBy`, each entry with an `aggregateFn`, any but `collect`, since a cell holds one value; without `groupBy`, one band counts the rows near each cell. Creates a grid table whose values are read with `<aggregateFn>.<table>`; see [Heatmap bands](#heatmap-bands), and [Normalized values](#normalized-values) for `normalize`. |
| `sql` | `query`, a `SELECT` over the workspace's tables, whose rows are saved as a new table, and `layerType`, how the map draws it. See [SQL sources](#sql-sources). |
| `update` | `dataRef`, the table to change, `strategy`, `'replace'` or `'update'`, `idColumn`, and the rows, in `geojsonObject` or `jsonObject`. See [Update sources](#update-sources). |
| `drop` | `dataRef`, the table to drop. See [Drop sources](#drop-sources). |

A run refuses a source of any other `type`, with a message that names the type.

Data is stored in the World Mercator projection (`EPSG:3395`), unless the spec's [`workspaces`](#workspaces) sets another coordinate system. Distances, such as a join's `near.distance`, are in the coordinate system's planar units, which in World Mercator are about meters: Mercator stretches distances away from the equator, so at Chicago one meter on the ground spans about 1.34 units. See [Loading Data](/grammar/examples/load-csv), [OpenStreetMap](/grammar/examples/osm-layers-api), and [Joins and Heatmaps](/grammar/examples/spatial-join) examples, [GeoTIFF Raster](/grammar/examples/geotiff-raster) for a `geotiff` source, and [Heatmap: Park Access](/grammar/examples/heatmap-centroids) for `useCentroid`.

### OpenStreetMap sources

An `osm` source loads OpenStreetMap data for an area, from the Overpass API or from a local `.osm.pbf` extract.

| Field | Description |
|---|---|
| `queryArea` | `{ geocodeArea, areas }` for the boundaries named in `areas` inside the region `geocodeArea`, or `{ bbox: [west, south, east, north] }` for a box in degrees (WGS84), never both. A box is the whole area: each layer is cut to it, except buildings, which are kept or dropped whole (see [OpenStreetMap](/autk-db/loading-data#openstreetmap)). |
| `pbfFileUrl` | URL of a `.osm.pbf` extract to read instead of querying the Overpass API. |
| `autoLoadLayers` | `layers` creates one table per layer, named `<outputTableName>_<layer>`. `coordinateFormat` is the coordinate system of the OpenStreetMap data, `'EPSG:4326'` by default (see below). `dropOsmTable` is read by no adapter. |
| `tagSets` | Up to 8 sets of features chosen by their tags, each a table of its own (see below). Read from the Overpass API only. |
| `forceRefresh` | `true` queries the Overpass API again (see below). |

**`tagSets`.** Each tag set becomes a table of one geometry type, named `<outputTableName>_<name>_<type>` and cut to the source's area, whose features have their tags as properties. A set that matches no feature in the area makes no table. A source with tag sets may leave out `autoLoadLayers` and load its sets alone.

| Field | Description |
|---|---|
| `name` | Names the set's table: a lowercase letter, then up to 31 lowercase letters, digits, or `_`. No two sets of a source share a name. |
| `type` | `'points'`, the tagged nodes; `'polylines'`, the open ways and the ways tagged as lines (`highway`, `barrier`, `railway`, `waterway`, or `area=no`); or `'polygons'`, the other closed ways and the multipolygon relations. |
| `tags` | 1 to 64 tags, each `{ key, value }`: a feature is in the set when it has any one of them. Without `value`, the key with any value matches. |

Tag sets are read from the Overpass API only, so a source with `pbfFileUrl` cannot take them: a run refuses one that names both, with a message that names the source.

```ts
const spec = {
  data: [{
    type: 'osm',
    outputTableName: 'downtown',
    queryArea: { bbox: [-74.0125, 40.705, -74.008, 40.7085] },
    tagSets: [
      { name: 'cafes', type: 'points', tags: [{ key: 'amenity', value: 'cafe' }] },
      { name: 'paths', type: 'polylines', tags: [{ key: 'highway', value: 'footway' }, { key: 'highway', value: 'path' }] },
    ],
  }],
  map: { layerRefs: [{ dataRef: 'downtown_paths_polylines' }, { dataRef: 'downtown_cafes_points', color: '#8c564b' }] },
}
```

**`forceRefresh`.** The browser keeps the Overpass API's answer for an `osm` source for 24 hours, by its area, its layers, and its tag sets, and a later run of the same source reads it from there. `forceRefresh: true` queries the API again, and caches the new answer. A source with `pbfFileUrl` reads its file each time, and ignores it.

```ts
{ type: 'osm', outputTableName: 'loop', queryArea: { geocodeArea: 'Chicago', areas: ['Loop'] }, autoLoadLayers: { layers: ['roads'] }, forceRefresh: true }
```

**`autoLoadLayers.coordinateFormat`.** The coordinate system of an `osm` source's data, as an EPSG string. It defaults to `'EPSG:4326'`, the degrees the Overpass API and OpenStreetMap's extracts give, so a source sets it only for an extract in another coordinate system. The layers and the tag sets are read in it, and stored in the workspace's.

```ts
{ type: 'osm', outputTableName: 'area', pbfFileUrl: 'area-nad83.osm.pbf', queryArea: { bbox: [-74.02, 40.70, -74.00, 40.72] }, autoLoadLayers: { layers: ['roads'], coordinateFormat: 'EPSG:4269' } }
```

### Heatmap bands

A heatmap's grid has one band per entry of `groupBy`, in order, each read on the map as `<aggregateFn>.<joinDataRef>`. A layer that names no band with `getFnv` draws the first.

- **Without `groupBy`,** the grid has one band, which counts the rows near each cell, as `groupBy: [{ column: '*', aggregateFn: 'count' }]` does: it is read as `count.<joinDataRef>`.
- **An entry of `groupBy` without `aggregateFn` is refused,** as `collect` is, since nothing would combine the rows near a cell into its one value. The message names the heatmap and the entry's column.
- **`count` and `weighted` bands** hold their values on every autk-db release.
- **`avg`, `sum`, `min`, and `max` bands read 0 in every cell, for any column,** on autk-db 4.1.1, which this site runs. [urban-toolkit/autark#132](https://github.com/urban-toolkit/autark/pull/132) fixes it for Autark's next autk-db release.

```ts
data: [
  { type: 'geojson', outputTableName: 'neighborhoods', geojsonFileUrl: '/data/mnt_neighs.geojson' },
  { type: 'csv', outputTableName: 'noise', csvFileUrl: '/data/noise.csv', geometryColumns: { latColumnName: 'Latitude', longColumnName: 'Longitude' } },
  { type: 'heatmap', outputTableName: 'heat', joinDataRef: 'noise', near: { distance: 1000 }, grid: { rows: 20, columns: 20 } },
],
map: { layerRefs: [{ dataRef: 'neighborhoods' }, { dataRef: 'heat', getFnv: 'count.noise' }] },
```

### Normalized values

An entry of a join's or a heatmap's `groupBy` can add `normalize: true`.

- A join then also writes the value rescaled from 0 to 1 across the features, under its key with `_norm` added: `sjoin.count.noise_norm` beside `sjoin.count.noise`.
- A heatmap asks for its band's values rescaled from 0 to 1 across the cells, read as `<aggregateFn>.<table>_norm`. This needs an autk-db with [urban-toolkit/autark#132](https://github.com/urban-toolkit/autark/pull/132). autk-db 4.1.1, which this site runs, builds the band from the values as they are, under the name it has without `normalize`. A layer can also name a band by its id, `band_1`, `band_2`, and so on, one per entry of `groupBy`, in order.

```ts
{ type: 'join', dataRef: 'neighborhoods', joinDataRef: 'noise', groupBy: [{ column: 'Unique Key', aggregateFn: 'count', normalize: true }] }
{ type: 'heatmap', outputTableName: 'heat', joinDataRef: 'noise', near: { distance: 1000 }, grid: { rows: 20, columns: 20 },
  groupBy: [{ column: 'Unique Key', aggregateFn: 'count', normalize: true }] }
```

### SQL sources

A `sql` source saves the rows of a query over the tables of its workspace as a new table, `outputTableName`.

| Field | Description |
|---|---|
| `query` | A `SELECT`, or a `WITH` query that ends in one, in DuckDB's SQL, naming the workspace's tables by their names. A run refuses any other statement, and any query in which `insert`, `update`, `delete`, `create`, `alter`, `drop`, `truncate`, or `replace` appears as a word, even inside a string, with a message that names the source. |
| `layerType` | How the map draws the new table, for example `'polygons'`. The query then returns the geometry in a column named `geometry`, as the workspace's tables hold it, in the workspace's coordinate system. Without `layerType`, the table has no layer type: a plot draws its rows, but a map does not draw it, and `grammar.data` does not list it. |

A GeoJSON table keeps each feature's properties in a JSON column, `properties`, which `properties->>'name'` reads as text; a CSV or JSON table keeps a column per field. A query that returns `properties` gives each feature those properties; otherwise each column but `geometry` becomes a property. Saving under a table's own name replaces it.

This spec counts the noise complaints in each Manhattan neighborhood with a join, then saves the ten neighborhoods with the most as a table of their own:

```ts
const spec = {
  data: [
    { type: 'geojson', outputTableName: 'neighborhoods', geojsonFileUrl: '/data/mnt_neighs.geojson' },
    { type: 'csv', outputTableName: 'noise', csvFileUrl: '/data/noise.csv', geometryColumns: { latColumnName: 'Latitude', longColumnName: 'Longitude' } },
    { type: 'join', dataRef: 'neighborhoods', joinDataRef: 'noise', groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }] },
    {
      type: 'sql',
      outputTableName: 'noisiest',
      query: "SELECT properties->>'ntaname' AS name, CAST(properties->'sjoin'->'count'->>'noise' AS INTEGER) AS complaints, geometry FROM neighborhoods ORDER BY complaints DESC NULLS LAST LIMIT 10",
      layerType: 'polygons',
    },
  ],
  map: { layerRefs: [{ dataRef: 'neighborhoods', color: '#d9d9d9' }, { dataRef: 'noisiest', getFnv: 'complaints' }] },
}
```

See the [SQL: The Ten Noisiest Neighborhoods](/grammar/examples/sql-source) example.

### Update sources

An `update` source replaces or changes the rows of a table already loaded, `dataRef`, with rows given in the spec.

| Field | Description |
|---|---|
| `dataRef` | The table to change. |
| `strategy` | `'replace'` swaps every row of the table for the given rows. `'update'` changes the rows whose `idColumn` value a given row has: in a table with a geometry, each takes the given row's geometry and properties, and no row is added; in a table without one, the given rows replace them, and those that match no row are added. |
| `idColumn` | With `'update'`, the column that matches a given row to the table's rows: a column such as `month`, or a feature property as `properties.<name>`, such as `properties.parcel_id`. |
| `geojsonObject` | The rows of a table with a geometry, as a FeatureCollection. They are stored as they come, so their coordinates are in the workspace's coordinate system, as `grammar.data` gives a table's features. |
| `jsonObject` | The rows of a table without a geometry, such as a CSV or JSON table loaded without `geometryColumns`, as an array of objects. |

A source gives its rows in `geojsonObject` or in `jsonObject`, not both. The maps and plots after it draw the table's rows as they are then. When autk-db refuses an update, the run's message names the table.

```ts
const spec = {
  data: [
    { type: 'csv', outputTableName: 'sales', csvObject: [['month', 'total'], ['Jan', 3], ['Feb', 5]] },
    { type: 'update', dataRef: 'sales', strategy: 'update', idColumn: 'month', jsonObject: [{ month: 'Feb', total: 9 }, { month: 'Mar', total: 4 }] },
  ],
  plot: { dataRef: 'sales', mark: 'bar', axis: ['month', 'total'] }, // Jan 3, Feb 9, Mar 4
}
```

### Drop sources

A `drop` source drops a table, `dataRef`, from its workspace: the sources, compute passes, maps, and plots after it no longer find it, and `grammar.data` no longer lists it. It suits a table a spec needs only on the way, such as the rows a join aggregates. A run refuses a drop of a table the workspace does not hold, with a message that names the table.

```ts
data: [
  { type: 'geojson', outputTableName: 'neighborhoods', geojsonFileUrl: '/data/mnt_neighs.geojson' },
  { type: 'csv', outputTableName: 'noise', csvFileUrl: '/data/noise.csv', geometryColumns: { latColumnName: 'Latitude', longColumnName: 'Longitude' } },
  { type: 'join', dataRef: 'neighborhoods', joinDataRef: 'noise', groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }] },
  { type: 'drop', dataRef: 'noise' },
],
```

### Sources after compute

A source with `after: 'compute'` runs once every compute pass has run, instead of before them, so it reads what the passes kept in autk-db with [`writeBack`](#results-kept-in-autk-db): a join or a heatmap over a pass's result, a `sql` source that queries it, an update, or a drop. Every type of source takes it. The sources with it run in the order of `data`, after all the sources without it, wherever they stand in `data`, and the maps and plots are drawn once they have run.

- **A source after compute that reads a table a pass of its workspace writes without `writeBack` is refused** before anything runs, with a message that names the source, the table, and the pass, since autk-db holds that table without the pass's result. The tables a source reads are a join's `dataRef` and `joinDataRef`, a heatmap's `joinDataRef`, and an update's or a drop's `dataRef`; a `sql` source's query is not checked.
- **A source that writes a table a pass wrote,** such as a join into it, an update, a `sql` source saved under its name, or a drop, changes autk-db's table, and the maps, the plots, and `grammar.data` then read that table: the pass's columns and the source's together.
- **A join's or a heatmap's `groupBy` reads a compute column by its path,** `compute.<column>`. A join writes an aggregate of it under the key `<joinDataRef>.<column>`, which `getFnv` reads as a path, such as `sjoin.max.fidi_blocks.compute.block`.

A run refuses an `after` other than `'compute'`, with a message that names the source.

This spec gives each building of the Financial District the id of its block of touching buildings, keeps the blocks in autk-db, then counts the buildings of each block with a `sql` source after compute, and plots the ten largest blocks:

```ts
const spec = {
  data: [
    { type: 'osm', outputTableName: 'fidi', pbfFileUrl: '/data/lower_mnt.osm.pbf', queryArea: { bbox: [-74.015, 40.703, -74.006, 40.711] }, autoLoadLayers: { layers: ['buildings'] } },
    {
      type: 'sql',
      outputTableName: 'largest_blocks',
      query: "SELECT CAST(properties->'compute'->>'block' AS INTEGER) AS block, CAST(count(*) AS INTEGER) AS buildings FROM fidi_blocks GROUP BY block ORDER BY buildings DESC, block LIMIT 10",
      after: 'compute',
    },
  ],
  compute: [{ type: 'clusters', dataRef: 'fidi_buildings', outputColumnName: 'block', outputTableName: 'fidi_blocks', writeBack: true }],
  plot: { dataRef: 'largest_blocks', mark: 'bar', axis: ['block', 'buildings'], tickFormats: [',~f', ',~f'] },
}
```

A join after compute into the blocks adds its columns to them, so a layer of `fidi_blocks` reads both the pass's `compute.block` and the join's `sjoin.count.noise`:

```ts
{ type: 'join', dataRef: 'fidi_blocks', joinDataRef: 'noise', near: { distance: 100 }, groupBy: [{ column: '*', aggregateFn: 'count' }], after: 'compute' }
```

See the [Compute, Then SQL: The Ten Largest Blocks](/grammar/examples/largest-blocks) example, which also draws the blocks on a map.

### Workspaces

A workspace is an isolated set of tables with its own extent. The first source loaded into a workspace sets its extent and later sources are cut to it, so two areas that must not clip each other go in two workspaces. An `osm` source comes before the other sources of its workspace: autk-db refuses OpenStreetMap data loaded after a table that is not OpenStreetMap's (see [OpenStreetMap](/autk-db/loading-data#openstreetmap)). A table is found by its name inside its workspace, so two workspaces may hold tables of the same name.

Data sources, compute passes, maps, and plots each take an optional `workspace`; an entry without one uses the default workspace. This spec loads two neighborhoods into two workspaces, under the same table names, and draws each in its own map:

```ts
const spec = {
  data: [
    {
      type: 'osm',
      workspace: 'battery',
      outputTableName: 'osm',
      queryArea: { geocodeArea: 'New York', areas: ['Battery Park City'] },
      autoLoadLayers: { layers: ['roads', 'buildings'] },
    },
    {
      type: 'osm',
      workspace: 'fidi',
      outputTableName: 'osm',
      queryArea: { geocodeArea: 'New York', areas: ['Financial District'] },
      autoLoadLayers: { layers: ['roads', 'buildings'] },
    },
  ],
  map: [
    { workspace: 'battery', layerRefs: [{ dataRef: 'osm_roads' }, { dataRef: 'osm_buildings' }] },
    { workspace: 'fidi', layerRefs: [{ dataRef: 'osm_roads' }, { dataRef: 'osm_buildings' }] },
  ],
}

const grammar = new AutkGrammar({ map: ['map0', 'map1'] })
await grammar.run(spec)
```

See the [Workspaces](/grammar/examples/workspaces) example, which draws Manhattan and the whole city from two workspaces.

A spec's `workspaces` sets how each workspace stores its tables, one entry per workspace, before the first source loads:

| Field | Description |
|---|---|
| `name` | The workspace, by the name its sources, compute passes, maps, and plots give as their `workspace`. Without it, the default workspace. |
| `coordinateFormat` | The coordinate system the workspace stores its tables in, as an EPSG string such as `'EPSG:3857'`. Each source is transformed to it as it loads, and the workspace's maps draw in its units. |
| `precisionGrid` | The grid every stored coordinate is rounded to, in the coordinate system's units, greater than 0. A geometry the grid collapses is refused as it loads. |

Both `coordinateFormat` and `precisionGrid` are required, and a run refuses two entries for one workspace. A workspace without an entry stores its tables in World Mercator (`'EPSG:3395'`), in meters, rounded to 0.01, a centimeter. The lengths given in workspace units are in the coordinate system's units: a `near.distance`, a layer's `width`, a camera's `zoom`. A layer's `pointSize`, in meters, is converted for World Mercator and Web Mercator, and read as planar units in any other coordinate system.

```ts
const spec = {
  workspaces: [{ coordinateFormat: 'EPSG:3857', precisionGrid: 1 }], // the default workspace, in Web Mercator to the meter
  data: [{ type: 'geojson', outputTableName: 'neighborhoods', geojsonFileUrl: '/data/mnt_neighs.geojson' }],
  map: { layerRefs: [{ dataRef: 'neighborhoods' }] },
}
```

## Compute

Each `compute` entry is a pass. Passes run in order once the data sources without [`after: 'compute'`](#sources-after-compute) are loaded, and a pass can read a table an earlier pass wrote. A pass's `type` is `'gpgpu'`, the default, or [`'render'`](#render-passes), which run on the GPU, or [`'windows'`](#windows-passes) or [`'clusters'`](#clusters-passes), which run on the CPU. A run refuses a pass of any other `type`, with a message that names the type.

A GPGPU pass runs a WGSL function on the GPU once per feature of `dataRef`:

| Field | Description |
|---|---|
| `type` | `'gpgpu'`, the default, which can be left out. |
| `dataRef` | Table to compute over. |
| `attributes` | Maps WGSL variable names to feature properties, for example `{ x: 'shape_area' }`. |
| `attributeArrays` | Array lengths for attributes that hold arrays. The function also receives `<name>_length`. |
| `attributeMatrices` | `{ rows, cols }` for attributes that hold matrices. The function also receives `<name>_rows` and `<name>_cols`. |
| `uniforms`, `uniformArrays`, `uniformMatrices` | Values shared by every feature. An entry of `uniforms` or `uniformMatrices` can also read its value from a feature of a table: see [Uniforms from a feature](#uniforms-from-a-feature). |
| `wgslFunction` | Body of the WGSL function. It must `return` the result. An array of strings is joined with newlines. |
| `outputColumnName`, `outputColumns` | Name of the new column, read on the map as `compute.<outputColumnName>`, or the columns of a result of several values. |
| `outputTableName` | Name of a new table that receives the result, so the source table stays as it is and later passes, maps, and plots can read both. Without it, the pass writes into the `dataRef` table. |
| `layerType` | How the map draws the new table, for example `'points'`. Defaults to the type of the table it was computed from. Only used with `outputTableName`. |
| `writeBack` | `true` also keeps the result in autk-db. See [Results kept in autk-db](#results-kept-in-autk-db). |
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

See the [Compute](/grammar/examples/compute-function) examples, and [Compute into a New Table](/grammar/examples/compute-output-table) for `outputTableName`.

### Uniforms from a feature

An entry of `uniforms` or `uniformMatrices` can read its value from a feature of a loaded table instead of writing it inline, as `{ fromFeature: { layer, path }, default }`:

| Field | Description |
|---|---|
| `fromFeature.layer` | Table to read from: as an earlier pass wrote it; else, when a GeoJSON source loaded it with its coordinates in its workspace's coordinate system, as the source gave its features, each building part with its own outline; else as autk-db keeps it, a buildings table's geometry inside a GeometryCollection. See [Passes run by a host](#passes-run-by-a-host). |
| `fromFeature.path` | Dot path from the feature's root, for example `properties.height` or `geometry.coordinates.0`. |
| `fromFeature.index` | Position of the feature to read. Defaults to 0. |
| `fromFeature.iterate` | `'all'` runs the pass once per feature of `layer` and sums the outputs. `'batched'` packs every feature's value into a uniform array named after the entry (a `uniformMatrices` entry becomes each feature's bounding box, as four corners), adds a `num_features` uniform, and runs the pass once. |
| `fromFeature.required` | With `'batched'`, leaves out the features whose `path` does not resolve to a finite value. |
| `default` | Value used when `path` does not resolve. Without it, the entry is left out. |
| `cols` | Number of columns, for an entry of `uniformMatrices`. |

```ts
uniforms: { tallest: { fromFeature: { layer: 'landmarks', path: 'properties.height', index: 0 }, default: 100 } }
```

### Render passes

A pass with `type: 'render'` draws `layers` from each viewpoint of a table, in several directions, on the GPU, and counts what each frame shows, for a visibility or sky-view measure. The result is a new table, `outputTableName`: the viewpoints' features, with the measures in `compute.render`: `sampleCount`, the frames rendered from the feature, and `classes` or `objects`.

| Field | Description |
|---|---|
| `outputTableName` | Name of the table that receives the result. Required. |
| `layerType` | How the map draws the new table. Defaults to the type of the viewpoints table, or to `'points'` with the `building-windows` strategy, whose result holds one point per window. |
| `layers` | Tables drawn into the frames. Each has an `id` (letters, digits, and underscores, not starting with a digit), a `dataRef`, a `type` (`'surface'`, `'parks'`, `'water'`, `'roads'`, `'buildings'`, `'polygons'`, or `'polylines'`; a render pass draws no points, and a run refuses any other type), and, for `objects` aggregation, an `objectIdProperty`: the property that holds each object's id. |
| `viewpoints` | `dataRef`, the table whose features the frames are rendered from. `strategy` places the viewpoints: `{ type: 'centroid' }`, the default, one at each feature's centroid, or `{ type: 'building-windows', floors }`, windows along each building's facades, `floors` rows of them up its height. With `centroid`, `sampling: { directions, azimuthOffsetDeg, pitchDeg }` sets where each viewpoint looks: `directions` evenly spaced around the horizon (1 by default), the first `azimuthOffsetDeg` degrees counterclockwise from east, all `pitchDeg` degrees above the horizontal (both 0 by default). |
| `aggregation` | `{ type: 'classes' }` writes the share of each feature's frame pixels that each layer `type` covers, from 0 to 1, in `compute.render.classes.<type>`; with `includeBackground: true`, the pixels no layer covers, such as the sky, count as one more class, `backgroundLayerType` (`'background'` by default). `{ type: 'objects' }` writes, for each object seen, the share of the feature's frames that show it, in `compute.render.objects`. |
| `camera` | `{ fov, clip: { near, far } }`: the field of view of each square frame, in degrees (90 by default), and the nearest and farthest distances drawn, in planar units (1 and 5000 by default). |
| `tileSize` | Frame size in pixels, a multiple of 8. Defaults to 64. |
| `writeBack` | `true` also keeps the result in autk-db. See [Results kept in autk-db](#results-kept-in-autk-db). |
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

See the [Render Pass](/grammar/examples/compute-render) example, which colors streets by the share of sky seen from them.

### Windows passes

A pass with `type: 'windows'` places the windows of a buildings table in a new table, one point a window, as a render pass's `building-windows` strategy places its viewpoints: the same autk-core code, on the table read the same way, so the two hold the same points in the same order. It runs on the CPU, with no GPU.

| Field | Description |
|---|---|
| `dataRef` | The buildings table, read as an earlier pass wrote it, else as autk-db keeps it. |
| `floors` | Rows of windows on each facade, spread evenly up each building's height, as the `building-windows` strategy's `floors` places them. autk-core rounds it down and places at least one row. |
| `outputTableName` | Name of the new table. Required. |
| `layerType` | How the map draws the new table. Defaults to `'points'`. |
| `writeBack` | `true` also keeps the windows in autk-db. See [Results kept in autk-db](#results-kept-in-autk-db). |
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

The windows are about 6 planar units apart along each facade, one row a floor, each a point `[x, y, z]` at the middle of its window, `z` its height above the ground. A building without a height is taken as 20 units high. Each window is a feature whose id is the window's own, with these properties:

| Property | Value |
|---|---|
| `sourceFeatureIndex` | The building's row in `dataRef`. |
| `geometryIndex`, `polygonIndex`, `ringIndex`, `edgeIndex` | Where its facade is in the building's geometry: its part, its polygon, its ring (0 the outer one), and its edge. |
| `floorIndex`, `windowIndex` | Its floor, from 0 at the bottom, and its place along the edge. |
| `center`, `normal` | Its middle, and the direction its facade faces. |
| `width`, `height`, `buildingHeight` | Its size, and its building's height. |

A run refuses a `floors` that is not a number, and a table in which autk-core finds no facades, such as a table of points, with a message that names the pass.

```ts
compute: [{ type: 'windows', dataRef: 'wall_st_buildings', floors: 3, outputTableName: 'wall_st_windows' }],
map: { layerRefs: [{ dataRef: 'wall_st_surface' }, { dataRef: 'wall_st_windows', getFnv: 'buildingHeight', pointSize: 1.5 }] },
```

See the [Building Windows](/grammar/examples/building-windows) example, which colors every window around Wall Street by its building's height.

### Clusters passes

A pass with `type: 'clusters'` gives each row of a table the id of its cluster: rows whose geometries intersect or touch, directly or through other rows, share one. Buildings that share walls fall in one cluster, and so do roads that meet. It runs on the CPU, with no GPU.

| Field | Description |
|---|---|
| `dataRef` | Table to compute over, read as an earlier pass wrote it, else as autk-db keeps it. |
| `outputColumnName` | Name of the column the ids are written to, read on the map as `compute.<outputColumnName>`, as a GPGPU pass writes its result. |
| `outputTableName` | Name of a new table that receives the rows with their ids, so the source table stays as it is. Without it, the pass writes into the `dataRef` table. |
| `layerType` | How the map draws the new table. Defaults to the type of the table it was computed from. Only used with `outputTableName`. |
| `writeBack` | `true` also keeps the result in autk-db. See [Results kept in autk-db](#results-kept-in-autk-db). |
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

The ids are whole numbers from 0: the first row's cluster is 0, and each other cluster takes the next number, in the order of its first row. A row without a geometry, or with an empty one, as a GeoJSON source loads a row whose geometry is null, is in no cluster: its id is `null`. Rows are told apart by their place in the table, not by their feature ids.

```ts
compute: [{ type: 'clusters', dataRef: 'fidi_buildings', outputColumnName: 'block', outputTableName: 'fidi_blocks' }],
map: { layerRefs: [{ dataRef: 'fidi_blocks', getFnv: 'compute.block', colorMapInterpolator: 'interpolateTurbo' }] },
```

See the [Building Clusters](/grammar/examples/building-clusters) example, which colors the buildings of the Financial District by the block of touching buildings they are in.

### Results kept in autk-db

The grammar keeps each pass's result where the maps, the plots, and the later passes read it. A pass of any type with `writeBack: true` also keeps its result in autk-db, in the pass's workspace, where autk-db's own operations read it: the [sources after compute](#sources-after-compute), such as a join, a heatmap, a `sql` source, or an update, and a host that reads autk-db after the run. The maps, the plots, and the later passes read the result as they do without it.

- **As a new table,** the pass's `outputTableName`, which a render or windows pass always has: autk-db holds every row of the result, with its feature id and its properties, as a layer of the type the map draws it as. autk-db cuts each source it loads to the workspace's extent, but not a result kept this way, so the windows of a building that reaches past the extent stay.
- **In place,** for a GPGPU or clusters pass without `outputTableName`: each row of autk-db's table takes the result's properties, matched by its feature id. The table keeps its other columns, and each building its parts. autk-db clears its records of an OpenStreetMap table's elements, as it does on any update, so [`osmElements`](#openstreetmap-elements) then reads the table row by row, with the pass's columns.
- **On the grid:** autk-db puts each coordinate on the workspace's precision grid, as it does for every table, and keeps a point's height. A polygon's ring may then start at another of its vertices.

A run refuses `writeBack` on a raster, such as a heatmap's grid, and on a new table whose layer type the grammar cannot tell (set the pass's `layerType`), with a message that names the pass. It also refuses a result that autk-db does not then hold row for row, since autk-db's copy and the one the maps draw would differ.

```ts
compute: [{ type: 'clusters', dataRef: 'fidi_buildings', outputColumnName: 'block', outputTableName: 'fidi_blocks', writeBack: true }],
```

See [Sources after compute](#sources-after-compute) for a source that reads the blocks, and the [Compute, Then SQL: The Ten Largest Blocks](/grammar/examples/largest-blocks) example.

## Map

A map spec has a `layerRefs` array, drawn in order, bottom first, apart from surface, parks, water, and roads layers, which autk-map draws below every other layer (see [Layer types](#layer-types)).

| Field | Description |
|---|---|
| `id` | Name of the map, which a [link](#links) uses as its `target`. Unique among the ids of the maps and plots. |
| `style` | Map style: the name of one of autk-map's styles, for example `'light'`, or the colors of a style of your own. See [Map styles](#map-styles). |
| `highlightColor`, `invalidValueColor` | Colors of the picked features and of the features whose value cannot be colored, each map its own. See [Map colors](#map-colors). |
| `showUi` | `false` hides the map's menu of layers and its legend. See [Map controls](#map-controls). |
| `terrain` | Raises the ground to the heights of a raster band. See [Terrain](#terrain). |
| `camera` | Where the map looks from, and a tour the view takes: see [Camera](#camera). |
| `workspace` | [Workspace](#workspaces) the map reads its layers' tables from. |
| `layerRefs` | Layers to draw, with the fields below. |

Each layer in `layerRefs` takes:

| Field | Description |
|---|---|
| `dataRef` | Table to draw. |
| `title` | Layer name: its id in the map and the title of its legend. Without it the id is the `dataRef`, and two layers of one map cannot share an id. |
| `opacity` | Layer opacity, from 0 to 1. |
| `color` | Fixed color, `'#rrggbb'`. The layer is drawn in it instead of by `getFnv`, unless `isColorMap` is `true`. |
| `stroke` | Outline of a polygon layer: a color, `'#rrggbb'`, or `false` for none. |
| `width` | Line width of a polylines or roads layer, in the map's planar units (about meters). |
| `widthBy` | Roads layers: the property that gives each line its own width. See [Line widths](#line-widths). |
| `pointSize` | Radius of each point of a points layer, in meters on the ground. The grammar converts it to the map's planar units at the middle of the layer's extent, in World Mercator and Web Mercator; in another coordinate system it is read as planar units. Without it, points have autk-map's default radius of 64 planar units. |
| `layerType` | How the map draws the layer's table, in place of the table's own type. See [Layer types](#layer-types). |
| `getFnv` | Property that drives the colormap. Supports dot paths such as `sjoin.count.noise` or `compute.result`. On a raster layer, the band to draw, by its id (`band_1`, ...) or its label, the first band without it; a run refuses one that names none of the bands of a raster of several. |
| `getFnvType` | `'categorical'` or `'quantitative'`, how the grammar's deck.gl adapter reads the value. autk-grammar ignores it. |
| `defaultFnv` | Value the grammar's deck.gl adapter uses when a feature has no value. autk-grammar ignores it. |
| `colorMapInterpolator` | A `ColorMapInterpolator` value, for example `ColorMapInterpolator.SEQ_REDS` or `ColorMapInterpolator.CAT_OBSERVABLE10`. |
| `colorMapDomain`, `catchAllCategory` | For categorical data: the categories to keep, and the label for everything else. |
| `normalization` | `{ mode: NormalizationMode.PERCENTILE, lowerPercentile, upperPercentile }` or `{ mode: NormalizationMode.MIN_MAX }`. |
| `colorMapRange` | `[low, high]`, with low less than high: the ends of the colormap, in place of the layer's own lowest and highest values, so layers and maps that share a range color the same value alike. Raster and vector layers. On a raster layer, `colorMapCenter` sits between the ends and `colorMapReverse` runs from high to low. Not with `colorMapDomain`. |
| `colorMapCenter` | Raster layers: the value at the middle of the colormap, which then reaches as far below it as above it. |
| `colorMapReverse` | Raster layers: runs the colormap from the highest value to the lowest. |
| `transferFunction` | Raster layers: how opaque the cells are by value (`mode`, `opacityMin`, `opacityMax`, `gamma`, `zeroCenter`). `{ opacityMin: 1, opacityMax: 1 }` makes every cell with a value opaque. |
| `legend` | `true` shows this layer's color scale in the map's legend. See [Legend](#legend). |
| `isPick` | Enables picking, so the layer can take part in linked selections. autk-map lets one layer of a map pick: the last layer that sets `isPick`, unless a link or a plot's `mapRef` makes another layer of the map pick. |
| `pickedComps` | Features drawn as picked as the map is drawn. See [Picked features](#picked-features). |
| `skippedComps` | Features the layer hides. See [Hidden features](#hidden-features). |
| `buildingsZeroHeight` | Buildings layers: `true` draws the parts that have no height, each at a random height. See [Buildings without a height](#buildings-without-a-height). |
| `isSkip` | Loads the layer into the map without drawing it. |
| `osmElements` | `true` draws an OpenStreetMap layer table as one feature per OpenStreetMap element: see [OpenStreetMap elements](#openstreetmap-elements). |

One more layer field, `colorMapLabels`, is read by no adapter.

See the [Map Layers](/grammar/examples/geojson-vis) examples, and [Points at True Size](/grammar/examples/points-true-size) for `pointSize`.

### OpenStreetMap elements

A map layer or a plot with `osmElements: true` reads an OpenStreetMap layer table as one feature per OpenStreetMap element it was built from, rather than one per row. Each feature's properties are the element's tags, its `osm_type` (`node`, `way`, or `relation`), and its `osm_id`; in a buildings table, whose parts are elements of their own, also the `building_id` of its building. A part takes only its own tags, so a buildings layer draws only the parts whose tags give their height. A compute pass that changes the table in place leaves autk-db's elements as they were, so they are read without the pass's columns. A table that is not an OpenStreetMap layer, a surface, and an OpenStreetMap table that an `update` source or an in-place [`writeBack`](#results-kept-in-autk-db) changed are read row by row, as without it.

```ts
map: { layerRefs: [{ dataRef: 'downtown_roads', osmElements: true, getFnv: 'highway', colorMapInterpolator: 'schemeTableau10' }] },
plot: { dataRef: 'downtown_roads', mark: 'table', axis: ['osm_id', 'highway', 'name'], osmElements: true },
```

### Camera

`camera` moves the map from the view that fits its layers, or its [terrain](#terrain), for example `camera: { pitch: 50, bearing: 30 }` to tilt and turn it. Each field is optional, and an omitted field keeps that view.

| Field | Description |
|---|---|
| `zoom` | Zoom level, 0 or more: the eye sits `10000 / 2^(zoom - 10)` planar units from the point the map looks at, so each step doubles the scale. |
| `pitch` | Tilt from straight down, in degrees, at least 0 and less than 90. At 90 the eye would sit on the ground, edge-on to the flat layers, and the map could not pan, so a run refuses a `pitch` of 90 or more, with a message that names the map. |
| `bearing` | Compass heading the view faces, clockwise from north, in degrees from 0 to 360. |
| `center` | The point the view looks at, `[longitude, latitude]` in degrees. See [Camera center](#camera-center). |
| `motion` | A tour the view takes once the map is drawn. See [Camera tours](#camera-tours). |

The camera turns around the point the map looks at, `center`, or else the point the view that fits the layers looks at: the eye moves on a sphere around it, so the layers stay in view at any pitch and bearing.

See the [Map Camera](/grammar/examples/map-camera) example.

#### Camera center

`center` is the point the view looks at, `[longitude, latitude]` in degrees (WGS84). The run puts it in the coordinate system of the map's workspace with autk-db's own transform, as autk-db puts a source's coordinates there, so it names the same place in World Mercator, the default, and in any coordinate system a [`workspaces`](#workspaces) entry sets. The eye then turns around it as `zoom`, `pitch`, and `bearing` say; with `center` alone, it looks straight down on it, from the height of the view that fits the layers. A run refuses a `center` that is not a longitude from -180 to 180 and a latitude from -90 to 90, and one the transform gives no point for.

```ts
map: {
  camera: { center: [-74.011, 40.7069], zoom: 15, pitch: 50, bearing: 30 }, // the New York Stock Exchange
  layerRefs: [{ dataRef: 'fidi_surface' }, { dataRef: 'fidi_buildings' }],
}
```

#### Camera tours

`motion` is a camera tour: steps the view takes one after another once the map is drawn, from the view the rest of `camera` sets. Each step is `{ type, amount, seconds }`, and its `amount` is in the unit of the camera field of the same name:

| `type` | `amount` |
|---|---|
| `'zoom'` | Zoom levels: each halves the eye's distance from the point the view looks at, and a negative one doubles it. |
| `'pitch'` | Degrees of tilt, away from straight down when positive. The step can also take a `pan`, which moves the point the view turns around by that many planar units during the step, toward the top of the view when positive. |
| `'bearing'` | Degrees of heading, clockwise when positive: the view turns around the point it looks at. |
| `'roll'` | Degrees the view turns around its line of sight, the top of the view clockwise when positive. Looking straight down, a roll turns the heading, as a `'bearing'` step does; on a tilted view, it banks the horizon. |

Each step takes its `seconds`, more than 0, easing in and out, and the map draws the view at every animation frame. A drag, a scroll, or a key on the map stops the tour, and the map's own pan, tilt, and zoom take over from where the tour had the view. `run()` does not wait for the tour: `grammar.tours` holds the tour of each map, in the order of `grammar.maps`, `undefined` for a map without one, and a tour's `done` settles once its last step ends or once its `stop()` or a user's input stops it. `destroy()`, and so the next run, stops the tours of its maps.

A run refuses a tour before it draws the map when a step has another `type`, no `amount`, no `seconds` greater than 0, or a `pan` on a step other than `'pitch'`. The camera's `pitch` and the tour's `'pitch'` steps add up, in order, to a tilt that stays at least 0 and less than 90 degrees, as `pitch` does. A `'pitch'` step turns the view around its side, so after a `'roll'` of a tilted view it would also turn the heading: a run refuses a `'pitch'` step of a banked view until rolls undo the bank.

```ts
map: {
  camera: {
    center: [-74.011, 40.7069], // the New York Stock Exchange
    zoom: 13,
    motion: [
      { type: 'zoom', amount: 1.5, seconds: 2 },
      { type: 'pitch', amount: 55, seconds: 2.5, pan: 150 },
      { type: 'bearing', amount: 90, seconds: 4 },
    ],
  },
  layerRefs: [{ dataRef: 'fidi_surface' }, { dataRef: 'fidi_roads' }, { dataRef: 'fidi_buildings' }],
}
```

```ts
await grammar.run(spec)
await grammar.tours[0]?.done // the first map's tour has ended, or was stopped
```

See the [Camera Tour](/grammar/examples/camera-tour) example.

### Terrain

A map's `terrain` raises its ground to the heights of a raster band, through autk-map's terrain mode: the ground the raster covers rises to its heights, the map's flat layers are draped over it, and its buildings stand on it. The view fits the raster, and the map's `camera` moves from there.

| Field | Description |
|---|---|
| `dataRef` | Raster table of the heights, in the workspace's units: a `geotiff` source of an elevation model in meters, for example. It is a table of the map's workspace. A cell without a value lies at height 0. |
| `band` | Band of the heights, by its id (`band_1`, ...) or its label, as a raster layer's `getFnv` names one. Defaults to the first band. |

A run refuses a `dataRef` that names no raster table of the map's workspace, and a `band` that names none of the bands of a raster of several.

```ts
data: [
  { type: 'geojson', outputTableName: 'neighborhoods', geojsonFileUrl: '/data/mnt_neighs.geojson' },
  { type: 'geotiff', outputTableName: 'elevation', geotiffFileUrl: '/data/mnt_dem.tif', coordinateFormat: 'EPSG:3857' },
],
map: { terrain: { dataRef: 'elevation' }, camera: { zoom: 10, pitch: 60, bearing: 30 }, layerRefs: [{ dataRef: 'neighborhoods' }] },
```

See the [Terrain](/grammar/examples/map-terrain) example, which raises Manhattan to its elevation.

### Map styles

A map's `style` names one of autk-map's styles, `'apple'` by default. autk-map 4.1.1, which this site runs, has `'apple'`, `'default'`, `'light'`, `'google'`, `'osm'`, and `'poster'`, and draws a name it does not know in `'apple'`. A `style` can also give the colors of a style of your own, each `'#rrggbb'`. autk-map takes a style only whole, so a run refuses one that lacks any of the nine colors:

| Color | Description |
|---|---|
| `background` | The map's background, where no layer is drawn. |
| `surface`, `parks`, `water`, `roads`, `buildings` | Layers of each of those types, such as the tables of an `osm` source's `autoLoadLayers`. |
| `points`, `polylines`, `polygons` | Layers of each of those types, such as the tables of a GeoJSON source. |

A layer with a `color` is drawn in it instead, and a layer colored by value in its colormap.

```ts
map: {
  style: {
    background: '#0b1a2a', surface: '#13263a', parks: '#1f4d3a', water: '#08121d', roads: '#4a6584',
    buildings: '#c9a96e', points: '#f2c14e', polylines: '#7f97ad', polygons: '#2a3d52',
  },
  layerRefs: [{ dataRef: 'fidi_surface' }, { dataRef: 'fidi_roads' }, { dataRef: 'fidi_buildings' }],
}
```

See the [Map Style](/grammar/examples/map-style) example, which draws the Financial District at night.

### Map colors

| Field | Description |
|---|---|
| `highlightColor` | Color of the features the map draws as picked: by the user, by a layer's `pickedComps`, by a link, or by a call such as `highlightOnMap`, `'#rrggbb'`. autk-map's is `#5dade2`. |
| `invalidValueColor` | Color of the features of a layer colored by value whose value autk-map cannot color: one without a value, or with one that is not on the layer's scale, `'#rrggbb'`. autk-map's is `#ffffff`. |

autk-map keeps both colors for each map, so each map of a spec draws in its own, unlike a plot's [mark and highlight colors](#mark-and-highlight-colors), which are the whole page's.

```ts
map: { highlightColor: '#ff7f0e', invalidValueColor: '#bfbfbf', layerRefs: [{ dataRef: 'neighborhoods', getFnv: 'shape_area', isPick: true }] }
```

### Map controls

autk-map puts a menu of the map's layers at the map's top left, and a legend at its bottom right. A map with `showUi: false` has neither; its "made with autark" credit stays. Without it, or with `true`, the map shows both.

```ts
map: { showUi: false, layerRefs: [{ dataRef: 'neighborhoods', getFnv: 'shape_area' }] }
```

### Layer types

A layer draws its table as the table's own type, which its source or compute pass gave it. A layer's `layerType` draws the table as another type of its kind of geometry, in that type's color of the map's style and the way autk-map draws that type:

| Table | `layerType` |
|---|---|
| Polygons, and the surface, parks, water, and buildings tables | `'polygons'`, `'surface'`, `'parks'`, `'water'`, or `'buildings'`, which raises each feature by its height |
| Lines, and the roads tables | `'polylines'`, or `'roads'`, which draws each line as wide as its kind of road |
| Points | `'points'` |
| A raster | `'raster'` |

A run refuses a type of another kind of geometry, for which autk-map would draw nothing. autk-map draws surface, parks, water, and roads layers below every other layer, in that order, whatever the order of `layerRefs`.

```ts
map: {
  layerRefs: [
    { dataRef: 'neighborhoods', layerType: 'parks' }, // a table of polygons, in the style's parks color
    { dataRef: 'fidi_buildings', layerType: 'polygons' }, // the footprints, flat
  ],
}
```

### Line widths

A roads layer draws each line as wide as autk-map draws its kind of road, and `width` gives every line one width. A roads layer's `widthBy` is the dot path to each line's own width, relative to the feature's properties, in the map's planar units. A line without a positive number there keeps the width of its kind of road.

autk-map draws every line of a polylines layer at one width, which wins over widths by feature, so a run refuses `widthBy` on a polylines layer: draw the table as roads, with `layerType: 'roads'`. A run also refuses `widthBy` with `width`, and a path that gives no line of the layer a width.

```ts
compute: [{ dataRef: 'fidi_roads', attributes: { lanes: 'lanes' }, outputColumnName: 'width', wgslFunction: 'return max(lanes, 1.0) * 3.5;' }],
map: { layerRefs: [{ dataRef: 'fidi_roads', widthBy: 'compute.width' }] },
```

### Legend

A map's legend shows the color scale of one layer: the last layer whose colors autk-map set, about the last layer colored by value. A layer with `legend: true` is the one it shows, and on a raster layer, whose legend autk-map hides without a scale of its own, it shows it. Picking stays as the layers' `isPick` sets it.

A run refuses `legend` on two layers of a map, on a layer drawn in one color, and on a map whose `showUi` is `false`, which has no legend.

```ts
map: {
  layerRefs: [
    { dataRef: 'neighborhoods', title: 'Area', getFnv: 'shape_area', legend: true },
    { dataRef: 'neighborhoods', title: 'Perimeter', getFnv: 'shape_leng', opacity: 0.5 },
  ],
}
```

### Picked features

A layer's `pickedComps` lists the features drawn as picked as the map is drawn, in the map's highlight color, as if the user had picked them: their positions among the features the layer draws, as `map:picking` events and `highlightOnMap` give them. The run applies it once the plots and their links exist, as `highlightOnMap` does for that one layer: the layer highlights the features, and the plots linked to it select the same rows. No `map:picking` event reports it.

autk-map draws picked features only on the layer of a map that picks, and lets one layer of a map pick: the last that sets `isPick`, unless a link or a plot's `mapRef` makes another layer pick. So a layer with `pickedComps` sets `isPick: true`, and a run refuses `pickedComps` on a layer without it, or on a layer that a later layer of its map, a link, or a plot's `mapRef` takes picking from. A run also refuses it on a raster layer, on a layer linked to a plot that sets `selection`, and a position that is not a whole number from 0 or is past the last feature the layer draws.

```ts
map: { layerRefs: [{ dataRef: 'neighborhoods', isPick: true, pickedComps: [0, 4] }] }
```

### Hidden features

A layer's `skippedComps` lists the features it hides, by their positions among the features it draws, as `map:picking` events and `highlightOnMap` give them: a filter the map applies as it is drawn. It hides features of every layer of polygons, lines, points, or buildings. A run refuses it on a raster layer, and a position that is not a whole number from 0 or is past the last feature the layer draws. With autk-map 4.1.1, which this site runs, a hidden feature of a polygons or buildings layer can still be picked.

```ts
map: { layerRefs: [{ dataRef: 'neighborhoods', skippedComps: [2, 5] }] }
```

### Buildings without a height

autk-map leaves out a building part that has no height: none of `height`, `building:height`, `levels`, and `building:levels`. A buildings layer with `buildingsZeroHeight: true` draws each such part at a random height of 3 to 7 floors of 3.4 m, from 10.2 to 23.8 m, so a city whose map data gives few heights is not left half empty. The heights are drawn again at each run. A part with one of those keys whose height is not above its minimum, such as `height: 0`, is still left out. Other layers ignore it.

```ts
map: { layerRefs: [{ dataRef: 'fidi_surface' }, { dataRef: 'fidi_buildings', buildingsZeroHeight: true }] }
```

## Plot

| Field | Description |
|---|---|
| `id` | Name of the plot, which a [link](#links) uses as its `source`. Unique among the ids of the maps and plots. Without it, the plot is known by its `dataRef`. |
| `dataRef` | Table to plot. |
| `workspace` | [Workspace](#workspaces) the table is read from. |
| `mark` | `'bar'`, `'scatter'`, `'linechart'` (or `'line'`), `'parallel-coordinates'`, `'table'`, or `'heatmatrix'`. |
| `axis` | Properties for the axes. Use `'@transform'` for a value produced by `transform`, whose axis is titled `value` unless `axisLabels` titles it. |
| `transform` | `{ preset, options }`, with presets such as `binning-1d`, `binning-2d`, `binning-events`, and `sort`. |
| `color` | Column whose values color the marks. See [Plot colors](#plot-colors). |
| `colorMapInterpolator`, `categoricalColorMapInterpolator` | Color schemes of the marks colored by numbers and of those colored by categories. See [Plot colors](#plot-colors). |
| `colorMapRange`, `colorMapDomain`, `normalization` | Domain of the color scale, named and shaped as a map layer's. See [Plot colors](#plot-colors). |
| `tickFormats` | d3-format specifiers of the tick labels, `[x, y]`. See [Axes](#axes). |
| `axisLabels` | Titles of the axes, in the order of `axis`. See [Axes](#axes). |
| `markColor`, `highlightColor` | Colors of the marks and of the selected marks, one of each for the whole page. See [Mark and highlight colors](#mark-and-highlight-colors). |
| `events` | Selections the plot emits: `'click'`, `'brush'`, `'brushX'`, `'brushY'`. |
| `selection` | Rows selected as the plot is drawn. See [Selected rows](#selected-rows). |
| `mapRef` | Table of the map layers linked to the plot: the plot is linked to every layer that draws it, in every map. Selections in either one highlight the other. A shorthand for [`links`](#links). |
| `osmElements` | `true` plots an OpenStreetMap layer table as one row per OpenStreetMap element, with its tags, `osm_type`, and `osm_id`: see [OpenStreetMap elements](#openstreetmap-elements). |
| `title`, `width`, `height`, `margins` | Presentation. `margins` is `{ left, right, top, bottom }`. |

To draw several plots, give `plot` an array of plot specs and the constructor's `plot` target an array of ids, one `<div>` per plot, in order. A plot reads only its table's properties, so it also draws a table without geometry, such as a CSV or JSON table loaded without `geometryColumns`.

See the [Plots](/grammar/examples/barchart-click) examples.

### Plot colors

A plot colors its marks by the values of its `color` column: a scatter plot's points, a bar chart's bars, and the lines of parallel coordinates, which a click on an axis's title colors by that axis instead. A heat matrix colors its cells by their values, with `color: '@transform'`. Line charts and tables color no mark by value. When every value is a number, or a string that reads as one, the marks take the scheme of numbers; otherwise the values are categories, and take the scheme of categories.

| Field | Description |
|---|---|
| `colorMapInterpolator` | Scheme of numbers: a sequential or diverging `interpolate*` scheme, `'interpolateReds'` by default. The low end of the scale takes its first color, and the high end its last. |
| `categoricalColorMapInterpolator` | Scheme of categories: a `scheme*` scheme, `'schemeObservable10'` by default. The categories take its colors in the order they first appear, or in the order of `colorMapDomain`, and those past its last color take that one. |
| `colorMapRange` | `[low, high]`, with low less than high: the ends of the scale of numbers, in place of the plot's own lowest and highest values. A plot colored by categories ignores it, as a layer with a categorical scheme does. Not with `colorMapDomain`. |
| `colorMapDomain` | Categories the plot is colored over, in order: the first takes the scheme's first color, and so on. The values are read as categories, numbers too, and a mark whose value it does not name is drawn in the mark color. |
| `normalization` | How the ends of the scale of numbers are found: `{ mode: 'minMax' }`, the default, takes the lowest and highest values, and `{ mode: 'percentile', lowerPercentile, upperPercentile }` the values at those percentiles, 2 and 98 when it gives neither, else 0 and 100 for the one it leaves out. |

A run refuses a `scheme*` name in `colorMapInterpolator` and an `interpolate*` name in `categoricalColorMapInterpolator`, with a message that names the plot. `colorMapRange`, `colorMapDomain`, and `normalization` are named and shaped as a map layer's, so a plot and a layer that set the same scheme and the same range color a value alike. Parallel coordinates read them for their `color` column, and keep them for any axis a click on its title colors the lines by: under a `colorMapRange`, an axis of categories colors no line.

```ts
map: { id: 'noiseMap', layerRefs: [{ dataRef: 'noisiest', getFnv: 'complaints', colorMapInterpolator: 'interpolateReds', colorMapRange: [0, 80] }] },
plot: { dataRef: 'noisiest', mark: 'bar', axis: ['name', 'complaints'], color: 'complaints', colorMapInterpolator: 'interpolateReds', colorMapRange: [0, 80] },
```

```ts
plot: { dataRef: 'neighborhoods', mark: 'bar', axis: ['ntaname', 'shape_area'], color: 'landuse', categoricalColorMapInterpolator: 'schemeSet2', colorMapDomain: ['Residential', 'Mixed', 'Commercial'] }
```

```ts
plot: { dataRef: 'neighborhoods', mark: 'scatter', axis: ['shape_area', 'shape_leng'], color: 'shape_area', colorMapInterpolator: 'interpolateViridis', normalization: { mode: 'percentile', lowerPercentile: 5, upperPercentile: 95 } }
```

See [Plot Colors](/grammar/examples/plot-colors), whose map and bar chart color the ten noisiest neighborhoods alike.

### Axes

**`tickFormats`** gives the d3-format specifiers of the tick labels, `[x, y]`, such as `'~s'`, `',d'`, `'.2f'`, or `'.0%'`. Without it, `['~s', '~s']`. A run refuses a list that is not two specifiers d3-format reads.

| Mark | Reads |
|---|---|
| `scatter` | x for the x axis, and y for the y axis. |
| `bar` | x for the labels of the x axis that read as numbers, and y for the y axis. |
| `linechart` | x for the buckets of the x axis that read as numbers, and y for the y axis. |
| `parallel-coordinates` | x for every axis of numbers. |
| `heatmatrix`, `table` | Neither. |

```ts
plot: { dataRef: 'neighborhoods', mark: 'scatter', axis: ['shape_area', 'shape_leng'], tickFormats: ['.2s', ',.0f'] }
```

**`axisLabels`** titles the axes, in the order of `axis`, in place of the column names: the x and y titles of a scatter plot, a bar chart, a line chart, and a heat matrix, each axis's title of parallel coordinates, and a table's column headers. An axis without a title keeps its column's name, and an axis that holds a transform's output, `@transform`, is titled `value`. A run refuses more titles than `axis` has columns, and two titles alike, since a table finds the column to sort by its header.

```ts
plot: { dataRef: 'neighborhoods', mark: 'bar', axis: ['shape_area', '@transform'], transform: { preset: 'binning-1d' }, axisLabels: ['Area', 'Neighborhoods'] }
```

### Mark and highlight colors

| Field | Description |
|---|---|
| `markColor` | Color of the marks that are neither colored by value nor selected, `'#rrggbb'`. autk-plot's is `#bfbfbf`. |
| `highlightColor` | Color of the selected marks, and of a table's selected rows, `'#rrggbb'`. autk-plot's is `#5dade2`. |

Both colors are page-wide. autk-plot keeps one mark color and one highlight color for the whole page, which every plot on it reads as it draws and as it shows a selection. So the plots of one spec cannot differ: a run refuses two plots that set different ones, and a plot that sets neither takes the others'. Each run that draws plots sets the colors for the page, for the plots of other specs too, and a run whose plots set neither gives back autk-plot's own: each run draws in the colors its spec gives. A run that draws no plot, such as a map-only or data-only spec, leaves them as they are.

```ts
plot: [
  { id: 'areas', dataRef: 'neighborhoods', mark: 'bar', axis: ['ntaname', 'shape_area'], markColor: '#4e79a7', highlightColor: '#e15759' },
  { id: 'shapes', dataRef: 'neighborhoods', mark: 'scatter', axis: ['shape_area', 'shape_leng'] }, // drawn in the same colors
]
```

### Selected rows

`selection` lists the rows a plot selects as it is drawn, by their feature ids: their positions among the rows the plot draws, from 0, as `plot:selection` events and `setPlotSelection` give them. The run applies it once the plots and their links exist, as `setPlotSelection` does: the plot draws the rows in its highlight color (a binned plot, the bins that hold them), and the layers it is linked to, by `mapRef` or `links`, highlight the same rows. No `plot:selection` event reports it. A run refuses a feature id that is not a whole number from 0, or one past the plot's last row.

```ts
plot: { dataRef: 'neighborhoods', mark: 'scatter', axis: ['shape_area', 'shape_leng'], mapRef: 'neighborhoods', selection: [0, 4] }
```

### Links

Each entry of `links` links a plot to a layer of a map: selecting in the plot highlights the same features on the layer, and picking on the layer selects them in the plot. A run refuses a link that names no plot, map, or layer of the spec.

| Field | Description |
|---|---|
| `source` | `id` of the plot, or its `dataRef` when it has no id. |
| `target` | `id` of the map. A map needs an `id` to be linked. |
| `layer` | Layer of the target map, by its `title`, else its `dataRef`. Defaults to the layer that draws the plot's `dataRef`. |

This spec links a bar chart to a map, and asks the page to put them side by side:

```ts
const spec = {
  layout: { type: 'horizontal', gap: 16 },
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs_proj.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    },
  ],
  map: { id: 'overview', layerRefs: [{ dataRef: 'neighborhoods' }] },
  plot: {
    id: 'areas',
    dataRef: 'neighborhoods',
    mark: 'bar',
    axis: ['ntaname', 'shape_area'],
    events: ['click'],
  },
  links: [{ source: 'areas', target: 'overview' }],
}

const grammar = new AutkGrammar({ map: 'map', plot: 'plot' })
await grammar.run(spec)
```

See the [Linked Views](/grammar/examples/linked-views) example, which links a scatterplot to a map layer named by its `title`.

## Interactions

After `run()`, the grammar exposes its tables and selections to your code:

```ts
// Tables of the default workspace, loaded lazily as GeoJSON FeatureCollections
const neighborhoods = await grammar.data['neighborhoods']

// Listen to selections made on maps and plots
grammar.interactions.on('map:picking', ({ mapId, layerId, selection }) => { /* ... */ })
grammar.interactions.on('plot:selection', ({ plotId, event, selection }) => { /* ... */ })

// Drive selections from outside the spec, on every map that draws the table, or on one map
grammar.highlightOnMap('neighborhoods', [0, 1, 2])
grammar.highlightOnMap('neighborhoods', [0, 1, 2], 'overview')
grammar.setPlotSelection('neighborhoods', [0, 1, 2])
grammar.clearHighlightOnMap('neighborhoods')
grammar.clearHighlightOnPlot('neighborhoods')

// Find the layers that draw a table: every one, in every map, or the last map's
const layers = grammar.mapLayers('neighborhoods')
const { map, layerId } = grammar.mapLayer('neighborhoods')

// Stop the camera tour of the first map, when its camera has a motion
grammar.tours[0]?.stop()

// Release the maps and the grammar's state, for example before the container goes away
grammar.destroy()
```

The calls name map layers by the table they draw. Each reaches every map that draws the table, or only the map its last argument, `mapId`, names: a string by the map's `id`, a number by its index in `map`. A `map:picking` event's `mapId` names the map the pick was made on, so it can be passed back as it is, and its `layerId` is the picked layer's id in that map: its `title`, else its `dataRef`. A plot is named by its `id`, else its `dataRef`: that name is the `plotId` of its `plot:selection` events, and the one `setPlotSelection` and `clearHighlightOnPlot` take. A plot's [`selection`](#selected-rows) makes the same selection as `setPlotSelection`, as the plot is drawn.

`selectFields` on a layer or a plot, for example `selectFields: ['nta2020']`, names the columns whose values identify the selected rows, for an app that links a selection to other tables. The grammar does not read it: the events still report feature ids, and the app reads those columns from the selected rows.

`destroy()` releases what the last run made: it stops each map's [camera tour](#camera-tours), and releases each map, with its GPU buffers, canvas context, controls, and event handlers, and the grammar's registries and caches. `run()` calls it before it starts, so running another spec on the same `AutkGrammar` releases the maps of the last run, and maps kept from `grammar.maps` or `mapLayer()` stop drawing. Use one `AutkGrammar` for each set of views that must stay on the page.

See [External Interactions](/grammar/examples/interaction-external) for a working example.

### For hosts

A host that runs parts of a spec itself, a server that loads its tables for example, can call the functions the grammar runs, and so do exactly what `AutkGrammar` does. A page arranges a spec's views with `arrangeViews`, as every host does:

| Export | Purpose |
|---|---|
| `createDataAdapter(targets?, cache?, computeCache?, computeTypes?)` | The data adapter. Its `resolveWorkspaces(db, workspaces)` sets up a spec's `workspaces` before the first source loads, and its `resolveSource(db, source)` loads one `data` entry. Each takes an autk-db database, a new one when `db` is undefined, and returns it. `cache` receives each GeoJSON table and each table a join or an update wrote. `computeCache` and `computeTypes` are the compute adapter's `cache` and `types`: each table a source writes leaves them, so the maps and plots read what a [source after compute](#sources-after-compute) wrote. |
| `createComputeAdapter(cache?, types?, sources?)` | The compute adapter. Its `resolveCompute(db, pass)` runs one `compute` entry, on the GPU or, for a windows or clusters pass, on the CPU, and refuses a pass of any other `type`. The results are kept in `cache`, and in autk-db too for a pass with [`writeBack`](#results-kept-in-autk-db); `types` receives the layer type of each table a pass wrote under its own `outputTableName`. `sources` is the `cache` given to `createDataAdapter`, from which a pass reads a `fromFeature` table a GeoJSON source loaded (see [Passes run by a host](#passes-run-by-a-host)). |
| `dataPhases(spec)` | The entries of a spec's `data` in the order the grammar runs them: `before`, the sources it runs before the compute passes, and `after`, those it runs after them (see [Sources after compute](#sources-after-compute)). It refuses what a run refuses: an `after` other than `'compute'`, and a source after compute that reads a table a pass writes without `writeBack`. A host that loads the data on a server and runs the passes in a browser loads `before` on the server, and runs `after` in the browser once the passes have run. |
| `enterWorkspace(db, workspace?)` | Makes an entry's workspace, or the default one when it names none, the one autk-db works in. Every adapter calls it before it reads or writes an entry's tables. |
| `tableKey(workspace, name)` | The key of a table in those caches: its name in the default workspace, `<workspace>/<name>` in another. |
| `applyCamera(map, camera)` | Moves an `AutkMap`'s camera as a map's `camera` says, from the view that fits its layers, and refuses a `pitch` that is not at least 0 and less than 90. The map adapter calls it once the layers are loaded, before the map first draws. It looks at a `center` that `resolveCameraCenter` put on the map, and refuses any other, so a host's later turns of a map the grammar drew keep its center. |
| `resolveCameraCenter(db, map, center)` | Puts `center`, `[longitude, latitude]` in degrees, in the coordinate system of the workspace `db` works in, and keeps it with `map` for `applyCamera`. The map adapter calls it once the layers are loaded, with the map's workspace current; a host that builds its own map calls it after `enterWorkspace(db, workspace)`. |
| `playCameraMotion(map, motion)` | Plays a [camera tour](#camera-tours) on an `AutkMap` from the view its camera has, and returns it as `{ done, stop() }` without waiting for it. A tour played on a map stops the one it was playing, and a drag, a scroll, or a key on the map stops it. It refuses a tour as a run does, from the map's own tilt and bank. The map adapter calls it once a map is drawn. A host that frames a map itself and turns it with `applyCamera` calls it after that turn, so the tour starts from the host's view; it also stops the tour the run played. |
| `arrangeViews(spec)` | Where each view of a spec goes on the page, as its `layout` says: a grid of panes, one per view (see [Arranging the views](#arranging-the-views)). It refuses a `layout` it cannot arrange, with a sentence that names the value. |

The entry `@urban-toolkit/autk-grammar/data` exports `createDataAdapter`, `dataPhases`, `enterWorkspace`, and `tableKey`, as an ES module and a CommonJS one. Its code imports autk-db alone, never autk-map, autk-plot, autk-compute, or autk-core, so it can be imported where they cannot, such as in Node:

```ts
import { createDataAdapter, dataPhases } from '@urban-toolkit/autk-grammar/data'

const adapter = createDataAdapter()
let db: unknown // the AutkDb the first call creates
if (spec.workspaces) db = await adapter.resolveWorkspaces(db, spec.workspaces)
// The sources after compute run where the passes run, once they have.
for (const source of dataPhases(spec).before) db = await adapter.resolveSource(db, source)
```

`AutkGrammar.run` refuses the plot keys autk-plot cannot draw, naming the plot, before it draws any view. A page that hosts several grammars shares one plot mark color and one highlight color, which each run that draws plots sets (see [Mark and highlight colors](#mark-and-highlight-colors)).

#### Passes run by a host

A pass reads a `fromFeature` table as an earlier pass wrote it, from the compute adapter's `cache`. Else, when a GeoJSON source of the run loaded the table with its coordinates in its workspace's coordinate system, it reads the features as the source gave them, from `sources`. Else it reads the table as autk-db keeps it. The difference shows on a `buildings` table: autk-db keeps each of its features in its building model, with the geometry inside a GeometryCollection, so a path such as `geometry.coordinates.0` reads a building part's outline only from the source's own features. The pass's own `dataRef` is never read from `sources`: it is read as an earlier pass wrote it, else as autk-db keeps it, as a map draws it, so its result holds the rows the map draws.

`AutkGrammar` hands its data adapter's cache to its compute adapter, and the compute adapter's `cache` and `types` to its data adapter. A host that runs the passes itself does the same, so its passes read what the grammar's do: it passes the map it gave `createDataAdapter` as `sources`. It runs the sources of `dataPhases(spec).after` once the passes have run, so a source after compute that writes a pass's table takes the pass's result out of the compute adapter's caches, and the maps and plots read autk-db's table. The data adapter notes the coordinate system of each GeoJSON source it puts there, so a pass reads only those collections, and only when their coordinates are in the workspace's coordinate system: a source in degrees, in a workspace in World Mercator, is read from autk-db. A host that leaves `sources` out reads autk-db's copy.

The data adapters of both entries, the main one and `./data`, keep their notes in one place on the page, so a host may load the tables with the data adapter of `./data` and run the passes with the compute adapter of the main entry. A host on autk-grammar 5.2.0 takes both adapters from the main entry, since there the `./data` entry keeps notes of its own, which the compute adapter cannot read, and its passes read autk-db's copy, as without `sources`.

```ts
import { createComputeAdapter, createDataAdapter, dataPhases } from '@urban-toolkit/autk-grammar'

const sources = new Map() // each GeoJSON source's features, as the source gave them
const results = new Map() // each pass's result
const types = new Map() // the layer type of each table a pass wrote under its outputTableName
const data = createDataAdapter(undefined, sources, results, types)
const compute = createComputeAdapter(results, types, sources)
const { before, after } = dataPhases(spec)
let db: unknown
if (spec.workspaces) db = await data.resolveWorkspaces(db, spec.workspaces)
for (const source of before) db = await data.resolveSource(db, source)
for (const pass of spec.compute ?? []) db = await compute.resolveCompute(db, pass)
for (const source of after) db = await data.resolveSource(db, source)
```

#### Arranging the views

`arrangeViews(spec)` returns:

| Field | Value |
|---|---|
| `type` | `'vertical'`, `'horizontal'`, or `'grid'`: the `layout`'s, else `'vertical'`. |
| `rows` | The rows of panes. |
| `columns` | The columns of panes: 1 for `'vertical'`, one per view for `'horizontal'`, and `layout.columns`, else 2, for `'grid'`. |
| `gap` | The space between neighboring panes, in pixels: `layout.gap`, else 0. |
| `panes` | One pane per view, in the order the grammar draws the views: the maps in the order of `map`, then the plots in the order of `plot`. |

Each pane has:

| Field | Value |
|---|---|
| `kind` | `'map'` or `'plot'`, which is also the target list that names the element the view draws in. |
| `index` | The view's position among the views of its kind: its element is entry `index` of that target list. |
| `id` | The view's `id`, when it has one. |
| `key` | The name the grammar knows the view by: its `id`, else a map's index or a plot's `dataRef`. A map's is the `mapId` of its `map:picking` events, a plot's the `plotId` of its `plot:selection` events. |
| `row` | The pane's row, from 0 at the top. |
| `column` | The pane's column, from 0 at the left. |

A host makes an element for each pane, a canvas for a map and a div for a plot, places it on a grid of `rows` by `columns`, `gap` pixels apart, and names it in the targets. Each map's canvas goes in a positioned pane of its own, since autk-map adds its controls to the canvas's parent:

```ts
import { AutkGrammar, arrangeViews } from '@urban-toolkit/autk-grammar'

const { rows, columns, gap, panes } = arrangeViews(spec)
Object.assign(container.style, {
  display: 'grid', gap: `${gap}px`,
  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
})
const targets: { map: string[], plot: string[] } = { map: [], plot: [] }
for (const pane of panes) {
  const cell = document.createElement('div')
  Object.assign(cell.style, { position: 'relative', gridRow: `${pane.row + 1}`, gridColumn: `${pane.column + 1}` })
  const element = document.createElement(pane.kind === 'map' ? 'canvas' : 'div')
  element.id = `${pane.kind}-${pane.index}`
  Object.assign(element.style, { width: '100%', height: '100%' })
  cell.appendChild(element)
  container.appendChild(cell)
  targets[pane.kind][pane.index] = element.id
}
await new AutkGrammar(targets).run(spec)
```

## Next steps

- Browse the [grammar examples](/grammar/examples/), each with a live, editable spec.
- Read the source, report issues, or build your own adapter on [GitHub](https://github.com/urban-toolkit/autk-grammar).

</div>
