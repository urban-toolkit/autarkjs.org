# autk-compute

`autk-compute` is the GPU analysis module in Autark. It runs browser-side computation over GeoJSON feature collections and writes the results back into `feature.properties.compute`.

The package supports **two complementary pipelines**:

| Pipeline | What it does | Typical output |
|---|---|---|
| `gpgpuPipeline()` | Runs a custom WGSL expression over every feature attribute in parallel | New scalar or multi-column properties |
| `renderPipeline()` | Renders a scene from sampled viewpoints and aggregates what each viewpoint can see | Visibility, sky exposure, class shares, object scores |

In a typical workflow, `autk-db` loads the data, `autk-compute` derives new metrics, and `autk-map` or `autk-plot` displays the result.

## When to use autk-compute

Use `autk-compute` when you need **per-feature GPU processing** or **view-based analysis**. For simple filtering, grouping, joins, and aggregations, `autk-db` is usually the better first choice.

| Scenario | Best tool |
|---|---|
| SQL filtering, grouping, counting, spatial joins | `autk-db` |
| Simple arithmetic already easy to express in SQL | `autk-db` |
| Custom per-feature formulas over many features | `autk-compute.gpgpuPipeline()` |
| Visibility, sky exposure, view quality, line-of-sight style metrics | `autk-compute.renderPipeline()` |

## Main entry point

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

`renderPipeline()` returns the viewpoints collection enriched with aggregated render metrics under `properties.compute.render`.

```ts
const result = await compute.renderPipeline({
  layers: [{ id: 'buildings', collection: buildings, type: 'buildings' }],
  viewpoints: { collection: roads, sampling: { directions: 1 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
});
```

## Common workflow

1. Load GeoJSON, CSV, or OSM layers with `autk-db`
2. Run GPU computation with `autk-compute`
3. Send the result to `autk-map` for thematic rendering or interaction
4. Optionally write the enriched data back into `autk-db`

## Guide

- [Property computation](./computing-properties) — compute new per-feature values from existing attributes
- [Render analysis](./render-analysis) — compute visibility-style metrics from sampled viewpoints
- [Patterns](./patterns) — combine `autk-compute` with `autk-db`, `autk-map`, and interactive workflows

---

[API Reference →](/api/autk-compute/globals)
