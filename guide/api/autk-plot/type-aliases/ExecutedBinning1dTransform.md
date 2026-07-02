[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBinning1dTransform

# Type Alias: ExecutedBinning1dTransform

> **ExecutedBinning1dTransform** = `object`

Defined in: [transforms/presets/binning-1d.ts:25](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/transforms/presets/binning-1d.ts#L25)

Result produced by `runBinning1d`.

Carries the fixed attribute tuple `['label', 'value']` and the binned rows
ready for bar-plot rendering.

## Properties

### preset

> **preset**: `"binning-1d"`

Defined in: [transforms/presets/binning-1d.ts:27](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/transforms/presets/binning-1d.ts#L27)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`Binning1dBinRow`](Binning1dBinRow.md)[]

Defined in: [transforms/presets/binning-1d.ts:29](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/transforms/presets/binning-1d.ts#L29)

Binned rows ready for downstream plot rendering.
