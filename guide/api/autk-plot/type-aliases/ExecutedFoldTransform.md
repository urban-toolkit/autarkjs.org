[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedFoldTransform

# Type Alias: ExecutedFoldTransform

> **ExecutedFoldTransform** = `object`

Defined in: [transforms/presets/fold.ts:26](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L26)

Result produced by `runFold`.

## Properties

### extents

> **extents**: \[`number`, `number`\][]

Defined in: [transforms/presets/fold.ts:34](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L34)

Raw extent of each measure, used to rescale it.

***

### measures

> **measures**: `string`[]

Defined in: [transforms/presets/fold.ts:32](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L32)

Measure names, in axis order.

***

### preset

> **preset**: `"fold"`

Defined in: [transforms/presets/fold.ts:28](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L28)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/fold.ts:36](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L36)

Provenance `D0 features → D1 units → D2 cells`, aligned with `rows`.

***

### rows

> **rows**: [`FoldCellRow`](FoldCellRow.md)[]

Defined in: [transforms/presets/fold.ts:30](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L30)

One cell per category and measure, by category then measure.
