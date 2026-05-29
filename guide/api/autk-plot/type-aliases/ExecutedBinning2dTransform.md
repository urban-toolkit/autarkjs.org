[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBinning2dTransform

# Type Alias: ExecutedBinning2dTransform

> **ExecutedBinning2dTransform** = `object`

Defined in: [transforms/presets/binning-2d.ts:29](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/binning-2d.ts#L29)

Result produced by `runBinning2d`.

Carries the fixed attribute tuple `['x', 'y', 'value']` and the aggregated
cell rows ready for heat matrix rendering.

## Properties

### preset

> **preset**: `"binning-2d"`

Defined in: [transforms/presets/binning-2d.ts:31](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/binning-2d.ts#L31)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`Binning2dCellRow`](Binning2dCellRow.md)[]

Defined in: [transforms/presets/binning-2d.ts:33](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/binning-2d.ts#L33)

Aggregated cell rows ready for downstream heat-matrix rendering.
