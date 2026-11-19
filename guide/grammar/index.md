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
- Run **GPU computations** written in WGSL over feature attributes, and **render passes** that measure what can be seen from each viewpoint.
- Draw **2D and 3D maps** with categorical, sequential, and diverging colormaps, seen from a **camera** you can tilt and turn.
- Draw **linked plots** (bar charts, scatterplots, histograms, parallel coordinates, tables, heat matrices, and time series) that select features on the map.
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

A spec is a plain object. Its four main sections are optional and run in this order, and later sections refer to tables created earlier by name. Three more keys set up the workspaces before any data loads (`workspaces`), and connect and arrange the views (`links` and `layout`).

| Key | Purpose |
|---|---|
| [`data`](#data) | Array of data sources. Each one creates or changes a table in the in-browser database. |
| [`compute`](#compute) | Array of GPU passes. Each one adds columns to a table or writes a new one. |
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

Every source has a `type` and, except for `join`, `update`, and `drop` sources, which change a table already loaded, an `outputTableName`. Any source can also name the [workspace](#workspaces) its table belongs to.

| Type | Main fields |
|---|---|
| `osm` | `queryArea` for named boundaries or a box, read from OpenStreetMap or from a local extract named by `pbfFileUrl`. `autoLoadLayers.layers` creates one table per layer (`surface`, `parks`, `water`, `roads`, `buildings`), named `<outputTableName>_<layer>`, and `tagSets` one table per set of features chosen by their tags. See [OpenStreetMap sources](#openstreetmap-sources). |
| `geojson` | `geojsonFileUrl` or `geojsonObject`. Set `coordinateFormat` (for example `'EPSG:3395'`) when the data is not in WGS84. `layerType` sets how the map draws the table, for example `'polylines'` for lines or `'buildings'` for polygons; without it, the type is read from the first feature's geometry. `boundingBox: { minLon, minLat, maxLon, maxLat }` keeps only the features that cross the box, cut to it (a buildings table keeps them whole); despite their names, its bounds are in the workspace's coordinate system, not in degrees. |
| `csv` | `csvFileUrl` or `csvObject`, optional `delimiter`, and `geometryColumns: { latColumnName, longColumnName }` to build points (`geometryColumns: true` reads the `Latitude` and `Longitude` columns), or `geometryColumns: { wktColumnName }` to read each row's geometry from a column of WKT text such as `POLYGON((...))`. Either object takes a `coordinateFormat` when the coordinates are not in WGS84. |
| `json` | `jsonFileUrl` or `jsonObject`, with the same optional `geometryColumns`. |
| `geotiff` | `geotiffFileUrl`, loaded as a raster table: each band of the file's first image becomes a band of the table (`band_1`, `band_2`, ...), and the file's no-data value reads as no value. Set `coordinateFormat` when the file is not in WGS84 (`'EPSG:4326'`, the default). A raster with more than `maxRasterCells` cells (1,000,000 by default) is downsampled to fit, by `resampleMethod`: `'bilinear'`, the default, or `'nearest'`. On the map, `getFnv` names the band to draw, `'band_1'` by default. |
| `join` | `dataRef`, the table that receives the joined columns, and `joinDataRef`, the table whose rows are joined onto it. Features intersect by default; add `near: { distance }` to match within a distance, measured from centroid to centroid unless `near.useCentroid` is `false`, which measures between the geometries themselves. `groupBy` aggregates the matches (`count`, `sum`, `avg`, `min`, `max`, `weighted`, `collect`) into `sjoin.<aggregateFn>.<table>`; see [Normalized values](#normalized-values) for `normalize`. |
| `heatmap` | `joinDataRef`, the table to aggregate, `grid: { rows, columns }`, cells over the workspace's extent, `near: { distance }`, the radius around each cell's center (with `useCentroid` as in a join), and `groupBy`, with any aggregate but `collect`, since a cell holds one value. Creates a grid table whose values are read with `<aggregateFn>.<table>`; see [Normalized values](#normalized-values) for `normalize`. |
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

### Workspaces

A workspace is an isolated set of tables with its own extent. The first source loaded into a workspace sets its extent and later sources are cut to it, so two areas that must not clip each other go in two workspaces. A table is found by its name inside its workspace, so two workspaces may hold tables of the same name.

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

Each `compute` entry is a pass. Passes run in order after the data is loaded, and a pass can read a table an earlier pass wrote. A GPGPU pass, the default, runs a WGSL function on the GPU once per feature of `dataRef`.

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
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

See the [Compute](/grammar/examples/compute-function) examples, and [Compute into a New Table](/grammar/examples/compute-output-table) for `outputTableName`.

### Uniforms from a feature

An entry of `uniforms` or `uniformMatrices` can read its value from a feature of a loaded table instead of writing it inline, as `{ fromFeature: { layer, path }, default }`:

| Field | Description |
|---|---|
| `fromFeature.layer` | Table to read from. |
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
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

See the [Render Pass](/grammar/examples/compute-render) example, which colors streets by the share of sky seen from them.

## Map

A map spec has a `layerRefs` array, drawn in order, bottom first.

| Field | Description |
|---|---|
| `id` | Name of the map, which a [link](#links) uses as its `target`. Unique among the ids of the maps and plots. |
| `style` | Map style, for example `'light'`. |
| `camera` | Where the map looks from: see [Camera](#camera). |
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
| `pointSize` | Radius of each point of a points layer, in meters on the ground. The grammar converts it to the map's planar units at the middle of the layer's extent, in World Mercator and Web Mercator; in another coordinate system it is read as planar units. Without it, points have autk-map's default radius of 64 planar units. |
| `getFnv` | Property that drives the colormap. Supports dot paths such as `sjoin.count.noise` or `compute.result`. |
| `getFnvType` | `'categorical'` or `'quantitative'`, how the grammar's deck.gl adapter reads the value. autk-grammar ignores it. |
| `defaultFnv` | Value the grammar's deck.gl adapter uses when a feature has no value. autk-grammar ignores it. |
| `colorMapInterpolator` | A `ColorMapInterpolator` value, for example `ColorMapInterpolator.SEQ_REDS` or `ColorMapInterpolator.CAT_OBSERVABLE10`. |
| `colorMapDomain`, `catchAllCategory` | For categorical data: the categories to keep, and the label for everything else. |
| `normalization` | `{ mode: NormalizationMode.PERCENTILE, lowerPercentile, upperPercentile }` or `{ mode: NormalizationMode.MIN_MAX }`. |
| `colorMapRange` | `[low, high]`, with low less than high: the ends of the colormap, in place of the layer's own lowest and highest values, so layers and maps that share a range color the same value alike. Raster and vector layers. On a raster layer, `colorMapCenter` sits between the ends and `colorMapReverse` runs from high to low. Not with `colorMapDomain`. |
| `colorMapCenter` | Raster layers: the value at the middle of the colormap, which then reaches as far below it as above it. |
| `colorMapReverse` | Raster layers: runs the colormap from the highest value to the lowest. |
| `transferFunction` | Raster layers: how opaque the cells are by value (`mode`, `opacityMin`, `opacityMax`, `gamma`, `zeroCenter`). `{ opacityMin: 1, opacityMax: 1 }` makes every cell with a value opaque. |
| `isPick` | Enables picking, so the layer can take part in linked selections. |
| `isSkip` | Loads the layer into the map without drawing it. |
| `osmElements` | `true` draws an OpenStreetMap layer table as one feature per OpenStreetMap element: see [OpenStreetMap elements](#openstreetmap-elements). |

Two more layer fields, `colorMapLabels` and `pickedComps`, are read by the grammar's deck.gl adapter only; autk-grammar ignores them.

See the [Map Layers](/grammar/examples/geojson-vis) examples, and [Points at True Size](/grammar/examples/points-true-size) for `pointSize`.

### OpenStreetMap elements

A map layer or a plot with `osmElements: true` reads an OpenStreetMap layer table as one feature per OpenStreetMap element it was built from, rather than one per row. Each feature's properties are the element's tags, its `osm_type` (`node`, `way`, or `relation`), and its `osm_id`; in a buildings table, whose parts are elements of their own, also the `building_id` of its building. A part takes only its own tags, so a buildings layer draws only the parts whose tags give their height. A table that is not an OpenStreetMap layer, a surface, and an OpenStreetMap table an `update` source changed are read row by row, as without it.

```ts
map: { layerRefs: [{ dataRef: 'downtown_roads', osmElements: true, getFnv: 'highway', colorMapInterpolator: 'schemeTableau10' }] },
plot: { dataRef: 'downtown_roads', mark: 'table', axis: ['osm_id', 'highway', 'name'], osmElements: true },
```

### Camera

`camera` moves the map from the view that fits its layers, for example `camera: { pitch: 50, bearing: 30 }` to tilt and turn it. Each field is optional, and an omitted field keeps that view.

| Field | Description |
|---|---|
| `zoom` | Zoom level, 0 or more: the eye sits `10000 / 2^(zoom - 10)` planar units from the point the map looks at, so each step doubles the scale. |
| `pitch` | Tilt from straight down, in degrees, at least 0 and less than 90. At 90 the eye would sit on the ground, edge-on to the flat layers, and the map could not pan, so a run refuses a `pitch` of 90 or more, with a message that names the map. |
| `bearing` | Compass heading the view faces, clockwise from north, in degrees from 0 to 360. |

See the [Map Camera](/grammar/examples/map-camera) example.

## Plot

| Field | Description |
|---|---|
| `id` | Name of the plot, which a [link](#links) uses as its `source`. Unique among the ids of the maps and plots. Without it, the plot is known by its `dataRef`. |
| `dataRef` | Table to plot. |
| `workspace` | [Workspace](#workspaces) the table is read from. |
| `mark` | `'bar'`, `'scatter'`, `'linechart'`, `'parallel-coordinates'`, `'table'`, or `'heatmatrix'`. |
| `axis` | Properties for the axes. Use `'@transform'` for a value produced by `transform`. |
| `transform` | `{ preset, options }`, with presets such as `binning-1d`, `binning-2d`, `binning-events`, and `sort`. |
| `events` | Selections the plot emits: `'click'`, `'brush'`, `'brushX'`, `'brushY'`. |
| `mapRef` | Table of the map layers linked to the plot: the plot is linked to every layer that draws it, in every map. Selections in either one highlight the other. A shorthand for [`links`](#links). |
| `osmElements` | `true` plots an OpenStreetMap layer table as one row per OpenStreetMap element, with its tags, `osm_type`, and `osm_id`: see [OpenStreetMap elements](#openstreetmap-elements). |
| `title`, `width`, `height`, `margins`, `color` | Presentation. `margins` is `{ left, right, top, bottom }`. |

To draw several plots, give `plot` an array of plot specs and the constructor's `plot` target an array of ids, one `<div>` per plot, in order. A plot reads only its table's properties, so it also draws a table without geometry, such as a CSV or JSON table loaded without `geometryColumns`.

See the [Plots](/grammar/examples/barchart-click) examples.

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

// Release the maps and the grammar's state, for example before the container goes away
grammar.destroy()
```

The calls name map layers by the table they draw. Each reaches every map that draws the table, or only the map its last argument, `mapId`, names: a string by the map's `id`, a number by its index in `map`. A `map:picking` event's `mapId` names the map the pick was made on, so it can be passed back as it is, and its `layerId` is the picked layer's id in that map: its `title`, else its `dataRef`. A plot is named by its `id`, else its `dataRef`: that name is the `plotId` of its `plot:selection` events, and the one `setPlotSelection` and `clearHighlightOnPlot` take.

`selectFields` on a layer or a plot, for example `selectFields: ['nta2020']`, names the columns whose values identify the selected rows, for an app that links a selection to other tables. The grammar does not read it: the events still report feature ids, and the app reads those columns from the selected rows.

`destroy()` releases what the last run made: each map, with its GPU buffers, canvas context, controls, and event handlers, and the grammar's registries and caches. `run()` calls it before it starts, so running another spec on the same `AutkGrammar` releases the maps of the last run, and maps kept from `grammar.maps` or `mapLayer()` stop drawing. Use one `AutkGrammar` for each set of views that must stay on the page.

See [External Interactions](/grammar/examples/interaction-external) for a working example.

### For hosts

A host that runs parts of a spec itself, a server that loads its tables for example, can call the functions the grammar runs, and so do exactly what `AutkGrammar` does. A page arranges a spec's views with `arrangeViews`, as every host does:

| Export | Purpose |
|---|---|
| `createDataAdapter(targets?, cache?)` | The data adapter. Its `resolveWorkspaces(db, workspaces)` sets up a spec's `workspaces` before the first source loads, and its `resolveSource(db, source)` loads one `data` entry. Each takes an autk-db database, a new one when `db` is undefined, and returns it. `cache` receives each GeoJSON table and each table a join or an update wrote. |
| `createComputeAdapter(cache?, types?)` | The compute adapter. Its `resolveCompute(db, pass)` runs one `compute` entry on the GPU. The results are kept only in `cache`, and `types` receives the layer type of each table a pass wrote under its own `outputTableName`. |
| `enterWorkspace(db, workspace?)` | Makes an entry's workspace, or the default one when it names none, the one autk-db works in. Every adapter calls it before it reads or writes an entry's tables. |
| `tableKey(workspace, name)` | The key of a table in those caches: its name in the default workspace, `<workspace>/<name>` in another. |
| `applyCamera(map, camera)` | Moves an `AutkMap`'s camera as a map's `camera` says, from the view that fits its layers, and refuses a `pitch` that is not at least 0 and less than 90. The map adapter calls it once the layers are loaded, before the map first draws. |
| `arrangeViews(spec)` | Where each view of a spec goes on the page, as its `layout` says: a grid of panes, one per view (see [Arranging the views](#arranging-the-views)). It refuses a `layout` it cannot arrange, with a sentence that names the value. |

The entry `@urban-toolkit/autk-grammar/data` exports `createDataAdapter`, `enterWorkspace`, and `tableKey`, as an ES module and a CommonJS one. Its code imports autk-db alone, never autk-map, autk-plot, autk-compute, or autk-core, so it can be imported where they cannot, such as in Node:

```ts
import { createDataAdapter } from '@urban-toolkit/autk-grammar/data'

const adapter = createDataAdapter()
let db: unknown // the AutkDb the first call creates
if (spec.workspaces) db = await adapter.resolveWorkspaces(db, spec.workspaces)
for (const source of spec.data ?? []) db = await adapter.resolveSource(db, source)
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
