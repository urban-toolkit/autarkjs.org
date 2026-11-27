# Type Alias: ReduceSeriesBucketRow

> **ReduceSeriesBucketRow** = `object`

Defined in: [transforms/presets/reduce-series.ts:34](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/reduce-series.ts#L34)

A single reduce-series bucket row ready for plot rendering.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/reduce-series.ts:42](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/reduce-series.ts#L42)

Merged source feature ids represented by the bucket.

***

### bucket

> **bucket**: `string`

Defined in: [transforms/presets/reduce-series.ts:36](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/reduce-series.ts#L36)

Timestamp or index key identifying the reduced bucket.

***

### count

> **count**: `number`

Defined in: [transforms/presets/reduce-series.ts:40](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/reduce-series.ts#L40)

Number of source points collapsed into the bucket.

***

### value

> **value**: `number`

Defined in: [transforms/presets/reduce-series.ts:38](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/reduce-series.ts#L38)

Reduced numeric result for the bucket.
