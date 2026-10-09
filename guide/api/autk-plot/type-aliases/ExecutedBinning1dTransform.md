[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBinning1dTransform

# Type Alias: ExecutedBinning1dTransform

> **ExecutedBinning1dTransform** = `object`

Defined in: [transforms/presets/binning-1d.ts:25](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-plot/src/transforms/presets/binning-1d.ts#L25)

Result produced by `runBinning1d`.

Carries the fixed attribute tuple `['label', 'value']` and the binned rows
ready for bar-plot rendering.

## Properties

### preset

> **preset**: `"binning-1d"`

Defined in: [transforms/presets/binning-1d.ts:27](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-plot/src/transforms/presets/binning-1d.ts#L27)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`Binning1dBinRow`](Binning1dBinRow.md)[]

Defined in: [transforms/presets/binning-1d.ts:29](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-plot/src/transforms/presets/binning-1d.ts#L29)

Binned rows ready for downstream plot rendering.
