# Type Alias: BinningEventsBucketRow

> **BinningEventsBucketRow** = `object`

Defined in: [transforms/presets/binning-events.ts:32](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-events.ts#L32)

A single event bucket row ready for plot rendering.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-events.ts:40](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-events.ts#L40)

Merged source feature ids represented by the bucket.

***

### bucket

> **bucket**: `string`

Defined in: [transforms/presets/binning-events.ts:34](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-events.ts#L34)

Formatted bucket identifier (for example `"2024-03"`).

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-events.ts:38](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-events.ts#L38)

Number of source event rows collapsed into the bucket.

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-events.ts:36](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-events.ts#L36)

Reduced numeric result for the bucket.
