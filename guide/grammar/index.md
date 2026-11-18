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

const grammar = new AutkGrammar({ map: 'map', plot: 'plot' })
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

- Load **OpenStreetMap**, **GeoJSON**, **CSV**, **JSON**, and **GeoTIFF** data, derive tables with **spatial joins** and **heatmaps**, and keep areas apart in **workspaces**.
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

:::tip Upgrading from 4.x
Version 5.0.0 renames three keys. See [Upgrading from 4.x](#upgrading-from-4-x).
:::

## Quick start

Create an `AutkGrammar` with the ids of the elements it should draw into, then `await grammar.run(spec)`. The example below loads Manhattan neighborhoods, draws them on a map, and links a scatterplot to the map: brush the plot to select neighborhoods.

<ClientOnly>
  <CodePlayground grammar :code="introCode" out="dom" :auto-run="true" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::warning WebGPU required
Maps and computations run on WebGPU. We recommend recent versions of **Chrome**, **Edge**, or **Safari**. See the browser support table in the [Introduction](/introduction).
:::

## Spec structure

A spec is a plain object. Its four main sections are optional and run in this order, and later sections refer to tables created earlier by name. Two more keys, `links` and `layout`, connect and arrange the views.

| Key | Purpose |
|---|---|
| [`data`](#data) | Array of data sources. Each one creates a table in the in-browser database. |
| [`compute`](#compute) | Array of GPU passes. Each one adds columns to a table or writes a new one. |
| [`map`](#map) | One map spec, or an array of map specs for several maps. |
| [`plot`](#plot) | One plot spec, or an array of plot specs. |
| [`links`](#links) | Array of links between plots and map layers, wired once the maps and plots are drawn. |
| [`layout`](#layout) | How the page arranges the maps and plots. |

A map or a plot can have an `id`, unique among the maps and plots of the spec. Links name the plot and the map they join by these ids. A plot without an `id` is known by its `dataRef`, so two plots of one table need ids to be told apart.

The constructor receives the targets to draw into, as element ids:

| Target | Element |
|---|---|
| `map` | Id of a `<canvas>`, or an array of ids, one per map, when `map` is an array. |
| `plot` | Id of a `<div>` that holds the plot. When `plot` is an array, an array of ids gives each plot its own `<div>`, in order; a single id holds every plot. |
| `db` | Optional id of a `<div>` that lists the loaded tables, useful while debugging. |

### Layout

`layout` describes how the maps and plots are arranged on the page. `AutkGrammar` does not read it: it draws into the elements you give it, and the page that creates those elements arranges them by `layout`.

| Field | Description |
|---|---|
| `type` | `'vertical'` stacks the views, `'horizontal'` puts them side by side, and `'grid'` fills `columns` columns. Defaults to `'vertical'`. |
| `columns` | Number of columns of a `'grid'`. Defaults to 2. |
| `gap` | Space between the views, in pixels. |

## Data

Every source has a `type` and, except for joins, an `outputTableName`. Any source can also name the [workspace](#workspaces) its table belongs to.

| Type | Main fields |
|---|---|
| `osm` | `queryArea: { geocodeArea, areas }` for named boundaries, or `queryArea: { bbox: [west, south, east, north] }` for a box in degrees (WGS84), never both; a box is the whole area, and each layer is cut to it except buildings, which are kept or dropped whole (see [OpenStreetMap](/autk-db/loading-data#openstreetmap)). The area is queried from OpenStreetMap, or read from a local extract named by `pbfFileUrl`. `autoLoadLayers.layers` creates one table per layer (`surface`, `parks`, `water`, `roads`, `buildings`), named `<outputTableName>_<layer>`. |
| `geojson` | `geojsonFileUrl` or `geojsonObject`. Set `coordinateFormat` (for example `'EPSG:3395'`) when the data is not in WGS84. `layerType` sets how the map draws the table, for example `'polylines'` for lines or `'buildings'` for polygons; without it, the type is read from the first feature's geometry. |
| `csv` | `csvFileUrl` or `csvObject`, optional `delimiter`, and `geometryColumns: { latColumnName, longColumnName }` to build points. |
| `json` | `jsonFileUrl` or `jsonObject`, with the same optional `geometryColumns`. |
| `geotiff` | `geotiffFileUrl`, loaded as a raster table: one feature, with one band per value. Set `coordinateFormat` when the file is not in WGS84 (`'EPSG:4326'`, the default). A raster with more than `maxRasterCells` cells (1,000,000 by default) is downsampled to fit, by `resampleMethod`: `'bilinear'`, the default, or `'nearest'`. On the map, `getFnv` names the band to draw, `'band_1'` by default. |
| `join` | `dataRef`, the table that receives the joined columns, and `joinDataRef`, the table whose rows are joined onto it. Features intersect by default; add `near: { distance }` to match within a distance, measured from centroid to centroid unless `near.useCentroid` is `false`, which measures between the geometries themselves. `groupBy` aggregates the matches (`count`, `sum`, `avg`, `min`, `max`, `weighted`, `collect`) into `sjoin.<aggregateFn>.<table>`. |
| `heatmap` | `joinDataRef`, the table to aggregate, `grid: { rows, columns }`, `near: { distance }`, the radius around each grid cell (with `useCentroid` as in a join), and `groupBy`. Creates a grid table whose values are read with `<aggregateFn>.<table>`. |

Data is stored in the World Mercator projection (`EPSG:3395`). Distances, such as a join's `near.distance`, are in its planar units, which are about meters: Mercator stretches distances away from the equator, so at Chicago one meter on the ground spans about 1.34 units. See [Loading Data](/grammar/examples/load-csv), [OpenStreetMap](/grammar/examples/osm-layers-api), and [Joins and Heatmaps](/grammar/examples/spatial-join) examples.

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

## Compute

Each `compute` entry is a pass. Passes run in order after the data is loaded, and a pass can read a table an earlier pass wrote. A GPGPU pass, the default, runs a WGSL function on the GPU once per feature of `dataRef`.

| Field | Description |
|---|---|
| `type` | `'gpgpu'`, the default, which can be left out. |
| `dataRef` | Table to compute over. |
| `attributes` | Maps WGSL variable names to feature properties, for example `{ x: 'shape_area' }`. |
| `attributeArrays` | Array lengths for attributes that hold arrays. The function also receives `<name>_length`. |
| `attributeMatrices` | `{ rows, cols }` for attributes that hold matrices. The function also receives `<name>_rows` and `<name>_cols`. |
| `uniforms`, `uniformArrays`, `uniformMatrices` | Values shared by every feature. |
| `wgslFunction` | Body of the WGSL function. It must `return` the result. An array of strings is joined with newlines. Named `wglsFunction` before 5.0.0. |
| `outputColumnName` | Name of the new column, read on the map as `compute.<outputColumnName>`. |
| `outputTableName` | Name of a new table that receives the result, so the source table stays as it is and later passes, maps, and plots can read both. Without it, the pass writes into the `dataRef` table. |
| `layerType` | How the map draws the new table, for example `'points'`. Defaults to the type of the table it was computed from. Only used with `outputTableName`. |
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

See the [Compute](/grammar/examples/compute-function) examples.

### Render passes

A pass with `type: 'render'` draws `layers` from each viewpoint of a table, in several directions, on the GPU, and counts what each frame shows, for a visibility or sky-view measure. The result is a copy of the viewpoints table with the measures in `compute.render`, stored as the table `outputTableName`.

| Field | Description |
|---|---|
| `outputTableName` | Name of the table that receives the result. Required. |
| `layerType` | How the map draws the new table. Defaults to the type of the viewpoints table. |
| `layers` | Tables drawn into the frames. Each has an `id` (letters, digits, and underscores, not starting with a digit), a `dataRef`, a `type` (`'surface'`, `'parks'`, `'water'`, `'roads'`, `'buildings'`, `'points'`, `'polygons'`, or `'polylines'`), and, for `objects` aggregation, an `objectIdProperty`: the property that holds each object's id. |
| `viewpoints` | `dataRef`, the table whose features are the viewpoints. `strategy` places them: `{ type: 'centroid' }`, the default, or `{ type: 'building-windows', floors }` for one viewpoint per floor on a building's windows. `sampling: { directions, azimuthOffsetDeg, pitchDeg }` sets the directions sampled around each viewpoint. |
| `aggregation` | `{ type: 'classes' }` measures the share of the frames each layer `type` covers, in `compute.render.classes.<type>`; with `includeBackground: true`, the share that shows no layer is added as `compute.render.classes.background`, or under the name in `backgroundLayerType`. `{ type: 'objects' }` records the objects seen from each viewpoint, in `compute.render.objects`. |
| `camera` | `{ fov, clip: { near, far } }`: the field of view and the clip distances of the frames. |
| `tileSize` | Frame size in pixels, a multiple of 8. |
| `workspace` | [Workspace](#workspaces) of the tables the pass reads and writes. |

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
| `pointSize` | Radius of each point of a points layer, in meters on the ground. The grammar converts it to the map's planar units at the middle of the layer's extent. Without it, points have autk-map's default radius of 64 planar units. |
| `getFnv` | Property that drives the colormap. Supports dot paths such as `sjoin.count.noise` or `compute.result`. |
| `getFnvType` | `'categorical'` or `'quantitative'`. |
| `defaultFnv` | Value used when a feature has no value. |
| `colorMapInterpolator` | A `ColorMapInterpolator` value, for example `ColorMapInterpolator.SEQ_REDS` or `ColorMapInterpolator.CAT_OBSERVABLE10`. |
| `colorMapDomain`, `catchAllCategory` | For categorical data: the categories to keep, and the label for everything else. |
| `normalization` | `{ mode: NormalizationMode.PERCENTILE, lowerPercentile, upperPercentile }` or `{ mode: NormalizationMode.MIN_MAX }`. |
| `colorMapRange` | `[low, high]`, with low less than high: the ends of the colormap, in place of the layer's own lowest and highest values, so layers and maps that share a range color the same value alike. Raster and vector layers. On a raster layer, `colorMapCenter` sits between the ends and `colorMapReverse` runs from high to low. Not with `colorMapDomain`. |
| `colorMapCenter` | Raster layers: the value at the middle of the colormap, which then reaches as far below it as above it. |
| `colorMapReverse` | Raster layers: runs the colormap from the highest value to the lowest. |
| `transferFunction` | Raster layers: how opaque the cells are by value (`mode`, `opacityMin`, `opacityMax`, `gamma`, `zeroCenter`). `{ opacityMin: 1, opacityMax: 1 }` makes every cell with a value opaque. |
| `isPick` | Enables picking, so the layer can take part in linked selections. |

See the [Map Layers](/grammar/examples/geojson-vis) examples.

### Camera

`camera` moves the map from the view that fits its layers, for example `camera: { pitch: 50, bearing: 30 }` to tilt and turn it. Each field is optional, and an omitted field keeps that view.

| Field | Description |
|---|---|
| `zoom` | Zoom level, 0 or more: the eye sits `10000 / 2^(zoom - 10)` planar units from the point the map looks at, so each step doubles the scale. |
| `pitch` | Tilt from straight down, in degrees, from 0 to 90. |
| `bearing` | Rotation around the vertical axis, in degrees, from 0 to 360. |

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
| `mapRef` | Table of the map layer linked to the plot. Selections in either one highlight the other. A shorthand for a link in [`links`](#links). |
| `title`, `width`, `height`, `margins`, `color` | Presentation. |

To draw several plots, give `plot` an array of plot specs and the constructor's `plot` target an array of ids, one `<div>` per plot, in order.

See the [Plots](/grammar/examples/barchart-click) examples.

### Links

Each entry of `links` links a plot to a layer of a map: selecting in the plot highlights the same features on the layer, and picking on the layer selects them in the plot.

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

## Interactions

After `run()`, the grammar exposes its tables and selections to your code:

```ts
// Tables of the default workspace, loaded lazily as GeoJSON FeatureCollections
const neighborhoods = await grammar.data['neighborhoods']

// Listen to selections made on maps and plots
grammar.interactions.on('map:picking', ({ layerId, selection }) => { /* ... */ })
grammar.interactions.on('plot:selection', ({ plotId, event, selection }) => { /* ... */ })

// Drive selections from outside the spec: a map layer is named by its table,
// a plot by its id, else its dataRef
grammar.highlightOnMap('neighborhoods', [0, 1, 2])
grammar.setPlotSelection('neighborhoods', [0, 1, 2])
grammar.clearHighlightOnMap('neighborhoods')
grammar.clearHighlightOnPlot('neighborhoods')

// Find the map and the layer id that draw a table
const { map, layerId } = grammar.mapLayer('neighborhoods')

// Release the maps and the grammar's state before the page or the container goes away.
// run() calls it first, so a new run on the same instance does not leak the old maps.
grammar.destroy()
```

See [External Interactions](/grammar/examples/interaction-external) for a working example.

### For hosts

An application that runs parts of a spec itself can import the pieces `AutkGrammar` is built from:

| Export | Purpose |
|---|---|
| `createDataAdapter` | The adapter that loads a spec's `data` entries into an autk-db database. |
| `createComputeAdapter` | The adapter that runs a spec's `compute` passes. |
| `applyCamera` | Moves a map's camera as a `camera` spec says, from the view that fits its layers. |
| `enterWorkspace` | Makes a workspace, or the default one, the one an autk-db database works in. |
| `tableKey` | The key a table has in the grammar's caches: its name in the default workspace, `<workspace>/<name>` in another. |

The entry `@urban-toolkit/autk-grammar/data` exports the data adapter alone. It imports autk-db but not autk-map, autk-plot, or autk-compute, so it suits code that loads data without drawing it.

## Upgrading from 4.x

Version 5.0.0 renames three keys and keeps no aliases for the old names, which the grammar no longer reads. Update 4.x specs as follows:

| Where | 4.x | 5.0.0 |
|---|---|---|
| GPU compute pass | `wglsFunction` | `wgslFunction` |
| `join` source | `tableRootName`, `tableJoinName` | `dataRef`, `joinDataRef` |
| `heatmap` source | `tableJoinName` | `joinDataRef` |

```ts
const spec = {
  data: [
    // ...the neighborhoods and noise sources
    {
      type: 'join',
      tableRootName: 'neighborhoods', // [!code --]
      tableJoinName: 'noise', // [!code --]
      dataRef: 'neighborhoods', // [!code ++]
      joinDataRef: 'noise', // [!code ++]
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
    {
      type: 'heatmap',
      outputTableName: 'heatmap',
      tableJoinName: 'noise', // [!code --]
      joinDataRef: 'noise', // [!code ++]
      near: { distance: 1000 },
      grid: { rows: 20, columns: 20 },
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
  ],
  compute: [
    {
      dataRef: 'neighborhoods',
      attributes: { x: 'shape_area', y: 'shape_leng' },
      outputColumnName: 'result',
      wglsFunction: 'return (4.0 * 3.1415927 * x) / (y * y);', // [!code --]
      wgslFunction: 'return (4.0 * 3.1415927 * x) / (y * y);', // [!code ++]
    },
  ],
}
```

Two behaviors are new as well:

- `run()` now calls `destroy()` before it starts. Running a new spec on the same `AutkGrammar` releases the maps of the previous run, so maps kept from `grammar.maps` or `mapLayer()` no longer draw. Use one `AutkGrammar` for each set of views that must stay on the page.
- A plot with an `id` is known by it, not by its `dataRef`: pass the id to `setPlotSelection` and `clearHighlightOnPlot`, and expect it as `plotId` in `plot:selection` events. A plot without an `id` is known by its `dataRef`, as in 4.x.

## Next steps

- Browse the [grammar examples](/grammar/examples/), each with a live, editable spec.
- Read the source, report issues, or build your own adapter on [GitHub](https://github.com/urban-toolkit/autk-grammar).

</div>
