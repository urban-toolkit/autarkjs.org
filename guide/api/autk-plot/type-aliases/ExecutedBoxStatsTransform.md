[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBoxStatsTransform

# Type Alias: ExecutedBoxStatsTransform

> **ExecutedBoxStatsTransform** = `object`

Defined in: [transforms/presets/box-stats.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L25)

Result produced by `runBoxStats`.

## Properties

### preset

> **preset**: `"box-stats"`

Defined in: [transforms/presets/box-stats.ts:27](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L27)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/box-stats.ts:31](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L31)

Provenance `D0 features → D1 groups → D2 box summaries`, aligned with `rows`.

***

### rows

> **rows**: [`BoxStatsRow`](BoxStatsRow.md)[]

Defined in: [transforms/presets/box-stats.ts:29](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L29)

One box summary per category, in first-seen order.
