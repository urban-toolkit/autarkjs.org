# Type Alias: ExecutedReduceSeriesTransform

> **ExecutedReduceSeriesTransform** = `object`

Defined in: [transforms/presets/reduce-series.ts:24](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/reduce-series.ts#L24)

Result produced by `runReduceSeries`.

## Properties

### preset

> **preset**: `"reduce-series"`

Defined in: [transforms/presets/reduce-series.ts:26](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/reduce-series.ts#L26)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/reduce-series.ts:30](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/reduce-series.ts#L30)

Provenance `D0 features → D1 series points → D2 buckets`, aligned with `rows`.

***

### rows

> **rows**: [`ReduceSeriesBucketRow`](ReduceSeriesBucketRow.md)[]

Defined in: [transforms/presets/reduce-series.ts:28](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/reduce-series.ts#L28)

Reduced series rows ready for downstream plot rendering.
