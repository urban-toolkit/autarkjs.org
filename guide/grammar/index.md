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

- Load **OpenStreetMap**, **GeoJSON**, **CSV**, and **JSON** data, and derive tables with **spatial joins** and **heatmaps**.
- Run **GPU computations** written in WGSL over feature attributes.
- Draw **2D and 3D maps** with categorical, sequential, and diverging colormaps.
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
  <CodePlayground grammar :code="introCode" out="dom" :auto-run="true" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::warning WebGPU required
Maps and computations run on WebGPU. We recommend recent versions of **Chrome**, **Edge**, or **Safari**. See the browser support table in the [Introduction](/introduction).
:::

## Spec structure

A spec is a plain object with four optional sections. They run in this order, and later sections refer to tables created earlier by name.

| Section | Purpose |
|---|---|
| [`data`](#data) | Array of data sources. Each one creates a table in the in-browser database. |
| [`compute`](#compute) | Array of GPU computations that add columns to a table. |
| [`map`](#map) | One map spec, or an array of map specs for several maps. |
| [`plot`](#plot) | One plot spec, or an array of plot specs. |

The constructor receives the targets to draw into, as element ids:

| Target | Element |
|---|---|
| `map` | Id of a `<canvas>`, or an array of ids when `map` is an array. |
| `plot` | Id of a `<div>` that holds the plot. |
| `db` | Optional id of a `<div>` that lists the loaded tables, useful while debugging. |

## Data

Every source has a `type` and, except for joins, an `outputTableName`.

| Type | Main fields |
|---|---|
| `osm` | `queryArea: { geocodeArea, areas }` to query OpenStreetMap, or `pbfFileUrl` to read a local extract. `autoLoadLayers.layers` creates one table per layer (`surface`, `parks`, `water`, `roads`, `buildings`), named `<outputTableName>_<layer>`. |
| `geojson` | `geojsonFileUrl` or `geojsonObject`. Set `coordinateFormat` (for example `'EPSG:3395'`) when the data is not in WGS84. |
| `csv` | `csvFileUrl` or `csvObject`, optional `delimiter`, and `geometryColumns: { latColumnName, longColumnName }` to build points. |
| `json` | `jsonFileUrl` or `jsonObject`, with the same optional `geometryColumns`. |
| `join` | `tableRootName` and `tableJoinName`. Features intersect by default; add `near: { distance }` to match within a distance. `groupBy` aggregates the matches (`count`, `sum`, `avg`, `min`, `max`, `weighted`, `collect`) into `sjoin.<aggregateFn>.<table>`. |
| `heatmap` | `tableJoinName`, `near: { distance }`, `grid: { rows, columns }`, and `groupBy`. Creates a grid table whose values are read with `<aggregateFn>.<table>`. |

Data is stored in the World Mercator projection (`EPSG:3395`), so distances are in meters. See [Loading Data](/grammar/examples/load-csv), [OpenStreetMap](/grammar/examples/osm-layers-api), and [Joins and Heatmaps](/grammar/examples/spatial-join) examples.

## Compute

A compute entry runs a WGSL function on the GPU once per feature of `dataRef`.

| Field | Description |
|---|---|
| `dataRef` | Table to compute over. |
| `attributes` | Maps WGSL variable names to feature properties, for example `{ x: 'shape_area' }`. |
| `attributeArrays` | Array lengths for attributes that hold arrays. The function also receives `<name>_length`. |
| `attributeMatrices` | `{ rows, cols }` for attributes that hold matrices. The function also receives `<name>_rows` and `<name>_cols`. |
| `uniforms`, `uniformArrays`, `uniformMatrices` | Values shared by every feature. |
| `wglsFunction` | Body of the WGSL function. It must `return` the result. |
| `outputColumnName` | Name of the new column, read on the map as `compute.<outputColumnName>`. |

See the [Compute](/grammar/examples/compute-function) examples.

## Map

A map spec has an optional `style` (for example `'light'`) and a `layerRefs` array, drawn in order.

| Field | Description |
|---|---|
| `dataRef` | Table to draw. |
| `opacity` | Layer opacity, from 0 to 1. |
| `getFnv` | Property that drives the colormap. Supports dot paths such as `sjoin.count.noise` or `compute.result`. |
| `getFnvType` | `'categorical'` or `'quantitative'`. |
| `defaultFnv` | Value used when a feature has no value. |
| `colorMapInterpolator` | A `ColorMapInterpolator` value, for example `ColorMapInterpolator.SEQ_REDS` or `ColorMapInterpolator.CAT_OBSERVABLE10`. |
| `colorMapDomain`, `catchAllCategory` | For categorical data: the categories to keep, and the label for everything else. |
| `normalization` | `{ mode: NormalizationMode.PERCENTILE, lowerPercentile, upperPercentile }` or `{ mode: NormalizationMode.MIN_MAX }`. |
| `isPick` | Enables picking, so the layer can take part in linked selections. |

See the [Map Layers](/grammar/examples/geojson-vis) examples.

## Plot

| Field | Description |
|---|---|
| `dataRef` | Table to plot. |
| `mark` | `'bar'`, `'scatter'`, `'linechart'`, `'parallel-coordinates'`, `'table'`, or `'heatmatrix'`. |
| `axis` | Properties for the axes. Use `'@transform'` for a value produced by `transform`. |
| `transform` | `{ preset, options }`, with presets such as `binning-1d`, `binning-2d`, `binning-events`, and `sort`. |
| `events` | Selections the plot emits: `'click'`, `'brush'`, `'brushX'`, `'brushY'`. |
| `mapRef` | Map layer linked to the plot. Selections in either one highlight the other. |
| `title`, `width`, `height`, `margins`, `color` | Presentation. |

See the [Plots](/grammar/examples/barchart-click) examples.

## Interactions

After `run()`, the grammar exposes its tables and selections to your code:

```ts
// Tables, loaded lazily as GeoJSON FeatureCollections
const neighborhoods = await grammar.data['neighborhoods']

// Listen to selections made on maps and plots
grammar.interactions.on('map:picking', ({ layerId, selection }) => { /* ... */ })
grammar.interactions.on('plot:selection', ({ plotId, event, selection }) => { /* ... */ })

// Drive selections from outside the spec
grammar.highlightOnMap('neighborhoods', [0, 1, 2])
grammar.setPlotSelection('neighborhoods', [0, 1, 2])
grammar.clearHighlightOnMap('neighborhoods')
grammar.clearHighlightOnPlot('neighborhoods')
```

See [External Interactions](/grammar/examples/interaction-external) for a working example.

## Next steps

- Browse the [grammar examples](/grammar/examples/), each with a live, editable spec.
- Read the source, report issues, or build your own adapter on [GitHub](https://github.com/urban-toolkit/autk-grammar).

</div>
