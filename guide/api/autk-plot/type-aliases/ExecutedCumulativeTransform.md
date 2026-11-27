# Type Alias: ExecutedCumulativeTransform

> **ExecutedCumulativeTransform** = `object`

Defined in: [transforms/presets/cumulative.ts:30](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/cumulative.ts#L30)

Result produced by `runCumulative`.

## Properties

### numeric

> **numeric**: `boolean`

Defined in: [transforms/presets/cumulative.ts:36](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/cumulative.ts#L36)

Whether the column is numeric, so bars have numeric upper edges.

***

### preset

> **preset**: `"cumulative"`

Defined in: [transforms/presets/cumulative.ts:32](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/cumulative.ts#L32)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/cumulative.ts:40](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/cumulative.ts#L40)

Provenance `D0 features → D1 bins → D2 points`, aligned with `rows`.

***

### rows

> **rows**: [`CumulativeRow`](CumulativeRow.md)[]

Defined in: [transforms/presets/cumulative.ts:34](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/cumulative.ts#L34)

Bars, then cumulative points, both in bar order.

***

### total

> **total**: `number`

Defined in: [transforms/presets/cumulative.ts:38](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/cumulative.ts#L38)

Sum of all bar values, the value of the last point.
