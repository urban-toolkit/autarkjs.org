[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ExecutedBinning1dTransform

# Type Alias: ExecutedBinning1dTransform

> **ExecutedBinning1dTransform** = `object`

Defined in: [autk-plot/src/transforms/presets/binning-1d.ts:25](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-1d.ts#L25)

Result produced by `runBinning1d`.

Carries the fixed attribute tuple `['label', 'value']` and the binned rows
ready for bar-chart rendering.

## Properties

### preset

> **preset**: `"binning-1d"`

Defined in: [autk-plot/src/transforms/presets/binning-1d.ts:27](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-1d.ts#L27)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`Binning1dBinRow`](Binning1dBinRow.md)[]

Defined in: [autk-plot/src/transforms/presets/binning-1d.ts:29](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-1d.ts#L29)

Binned rows ready for downstream chart rendering.
