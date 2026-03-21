# autk-compute

`autk-compute` runs custom computations across all features in a GeoJSON `FeatureCollection` in parallel on the GPU, using [WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) and [WGSL](https://www.w3.org/TR/WGSL/) shaders. Results are written back as new feature properties.

## Installation

```bash
npm install autk-compute
```

## When to Use autk-compute vs SQL

| Scenario | Use |
|----------|-----|
| Simple aggregations, counts, filters | `autk-db` raw SQL |
| Per-feature arithmetic on a few columns | `autk-db` raw SQL |
| Heavy per-feature computation (scoring, distance calculations, ML inference) across thousands of features | `autk-compute` |
| Custom formulas that are hard to express in SQL | `autk-compute` |

`autk-compute` processes all features simultaneously on the GPU. For datasets with tens of thousands of features and complex per-feature logic, this is significantly faster than SQL.

## Entry Point

```typescript
import { geojsonCompute } from 'autk-compute';
```

`geojsonCompute` is a singleton instance of `GeojsonCompute`. You don't need to instantiate it.

## What's Next

- [Computing into Properties](./computing-properties) — write a WGSL function and apply it across all features
- [Patterns](./patterns) — common pipelines combining `autk-compute` with `autk-db` and `autk-map`

---

[API Reference →](/api/autk-compute/globals)
