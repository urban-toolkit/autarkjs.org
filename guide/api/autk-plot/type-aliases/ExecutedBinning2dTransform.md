[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedBinning2dTransform

# Type Alias: ExecutedBinning2dTransform

> **ExecutedBinning2dTransform** = `object`

Defined in: [transforms/presets/binning-2d.ts:23](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L23)

Result produced by `runBinning2d`.

## Properties

### preset

> **preset**: `"binning-2d"`

Defined in: [transforms/presets/binning-2d.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L25)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/binning-2d.ts:29](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L29)

Provenance `D0 features → D1 cells → D2 aggregates`, aligned with `rows`.

***

### rows

> **rows**: [`Binning2dCellRow`](Binning2dCellRow.md)[]

Defined in: [transforms/presets/binning-2d.ts:27](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L27)

Aggregated cell rows ready for downstream heat-matrix rendering.
