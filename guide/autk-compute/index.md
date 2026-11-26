<h1 id="autk-compute" class="package-title">autk-compute <a class="pkg-badge" href="https://www.npmjs.com/package/@urban-toolkit/autk-compute"><img alt="autk-compute npm version" src="https://img.shields.io/npm/v/@urban-toolkit/autk-compute?color=10b981&logo=npm&labelColor=111827"></a></h1>

`autk-compute` is Autark's GPU analysis module. It runs computations in the browser on GeoJSON feature collections, and stores the results in `feature.properties.compute`.

**Key capabilities:**

- Run **custom WGSL** over every feature in parallel, with scalars, per-feature arrays, matrices, and global uniforms as inputs.
- Bind each feature's **geometry** — points, lines, polygons, and their components — and read it topologically, so edges are never invented between separate parts.
- Derive one or several **result columns** per feature with a single dispatch.
- Analyze a **scene**, not just attributes: sky exposure, shadows, visibility, view scores, and any visibility-style rule you write.
- Choose **viewpoints** (centroids, building windows) and **aggregation** (classes or objects) per run.
- Write results into `properties.compute`, ready for a thematic map, a chart, or another database table.

## The two pipelines

The package supports two complementary pipelines:

| Pipeline | What it does | Typical output |
|---|---|---|
| `gpgpuPipeline()` | Runs a custom WGSL expression over every feature attribute in parallel | New scalar or multi-column properties |
| `renderPipeline()` | Renders a scene from sampled viewpoints and aggregates what each viewpoint can see | Visibility, sky exposure, class shares, object scores |

In a typical workflow, `autk-db` loads the data, `autk-compute` derives new metrics, and `autk-map` or `autk-plot` displays the result.

## Package installation

To install `autk-compute`, use its [npm package](https://www.npmjs.com/package/@urban-toolkit/autk-compute):

```bash
npm install @urban-toolkit/autk-compute
```

You can also install the full toolkit:

```bash
npm install @urban-toolkit/autk
```

## Initialization

The entry point is the `AutkComputeEngine` class. Create an instance and call the pipeline you need:

```ts
import { AutkComputeEngine } from '@urban-toolkit/autk-compute';

const compute = new AutkComputeEngine();
```

The engine exposes the two main methods:

```ts
await compute.gpgpuPipeline(...);
await compute.renderPipeline(...);
```

## What each pipeline returns

### Property computation

`gpgpuPipeline()` returns a new `FeatureCollection` where each feature receives values under `properties.compute`.

```ts
const result = await compute.gpgpuPipeline({
  collection,
  variableMapping: { area: 'shape_area', perimeter: 'shape_leng' },
  resultField: 'compactness',
  wgslBody: 'return (4.0 * 3.1415927 * area) / (perimeter * perimeter);',
});
```

### Render analysis

`renderPipeline()` returns aggregated render metrics under `properties.compute.render`. With the default `centroid` strategy, these enrich a copy of the source viewpoints collection; `building-windows` returns a derived collection of window points instead. See [Output shape](./render-analysis#output-shape).

```ts
const result = await compute.renderPipeline({
  layers: [{ id: 'buildings', collection: buildings, type: 'buildings' }],
  viewpoints: { collection: roads, sampling: { directions: 1 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
});
```

## When to use autk-compute

Use `autk-compute` when you need **per-feature GPU processing** or **view-based analysis**. For simple filtering, grouping, joins, and aggregations, `autk-db` is usually the better first choice.

| Scenario | Best tool |
|---|---|
| SQL filtering, grouping, counting, spatial joins | `autk-db` |
| Simple arithmetic already easy to express in SQL | `autk-db` |
| Custom per-feature formulas over many features | `autk-compute.gpgpuPipeline()` |
| Visibility, sky exposure, view quality, line-of-sight style metrics | `autk-compute.renderPipeline()` |

## Common workflow

1. Load GeoJSON, CSV, or OSM layers with `autk-db`
2. Run GPU computation with `autk-compute`
3. Send the result to `autk-map` for thematic rendering or interaction
4. Optionally write the enriched data back into `autk-db`

## Guide

- [Property computation](./computing-properties) — derive per-feature values from attributes
- [Render analysis](./render-analysis) — compute visibility-style metrics from sampled viewpoints
- [Patterns](./patterns) — combine `autk-compute` with `autk-db`, `autk-map`, and interactive workflows

---

[API Reference →](/api/autk-compute/globals)
