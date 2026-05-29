[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedReduceSeriesTransform

# Type Alias: ExecutedReduceSeriesTransform

> **ExecutedReduceSeriesTransform** = `object`

Defined in: [transforms/presets/reduce-series.ts:28](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L28)

Result produced by `runReduceSeries`.

## Properties

### preset

> **preset**: `"reduce-series"`

Defined in: [transforms/presets/reduce-series.ts:30](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L30)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`ReduceSeriesBucketRow`](ReduceSeriesBucketRow.md)[]

Defined in: [transforms/presets/reduce-series.ts:32](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L32)

Reduced series rows ready for downstream plot rendering.
