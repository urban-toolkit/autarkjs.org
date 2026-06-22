[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBinningEventsTransform

# Type Alias: ExecutedBinningEventsTransform

> **ExecutedBinningEventsTransform** = `object`

Defined in: [transforms/presets/binning-events.ts:22](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/transforms/presets/binning-events.ts#L22)

Result produced by `runBinningEvents`.

## Properties

### preset

> **preset**: `"binning-events"`

Defined in: [transforms/presets/binning-events.ts:24](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/transforms/presets/binning-events.ts#L24)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`BinningEventsBucketRow`](BinningEventsBucketRow.md)[]

Defined in: [transforms/presets/binning-events.ts:26](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/transforms/presets/binning-events.ts#L26)

Event bucket rows ready for downstream plot rendering.
