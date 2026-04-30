[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ExecutedReduceSeriesTransform

# Type Alias: ExecutedReduceSeriesTransform

> **ExecutedReduceSeriesTransform** = `object`

Defined in: [autk-plot/src/transforms/presets/reduce-series.ts:28](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/reduce-series.ts#L28)

Result produced by `runReduceSeries`.

## Properties

### preset

> **preset**: `"reduce-series"`

Defined in: [autk-plot/src/transforms/presets/reduce-series.ts:30](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/reduce-series.ts#L30)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`ReduceSeriesBucketRow`](ReduceSeriesBucketRow.md)[]

Defined in: [autk-plot/src/transforms/presets/reduce-series.ts:32](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/reduce-series.ts#L32)

Reduced series rows ready for downstream chart rendering.
