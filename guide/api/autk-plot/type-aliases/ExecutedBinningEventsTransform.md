[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBinningEventsTransform

# Type Alias: ExecutedBinningEventsTransform

> **ExecutedBinningEventsTransform** = `object`

Defined in: [transforms/presets/binning-events.ts:22](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/binning-events.ts#L22)

Result produced by `runBinningEvents`.

## Properties

### preset

> **preset**: `"binning-events"`

Defined in: [transforms/presets/binning-events.ts:24](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/binning-events.ts#L24)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`BinningEventsBucketRow`](BinningEventsBucketRow.md)[]

Defined in: [transforms/presets/binning-events.ts:26](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/binning-events.ts#L26)

Event bucket rows ready for downstream plot rendering.
