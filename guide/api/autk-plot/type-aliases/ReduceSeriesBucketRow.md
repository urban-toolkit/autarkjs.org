[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ReduceSeriesBucketRow

# Type Alias: ReduceSeriesBucketRow

> **ReduceSeriesBucketRow** = `object`

Defined in: [transforms/presets/reduce-series.ts:41](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L41)

A single reduce-series bucket row ready for plot rendering.

`bucket` is either the array index (plain-number series) or the normalised
timestamp string for object-based series.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/reduce-series.ts:49](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L49)

Merged source feature ids represented by the bucket.

***

### bucket

> **bucket**: `string`

Defined in: [transforms/presets/reduce-series.ts:43](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L43)

Timestamp or index key identifying the reduced bucket.

***

### count

> **count**: `number`

Defined in: [transforms/presets/reduce-series.ts:47](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L47)

Number of source points collapsed into the bucket.

***

### value

> **value**: `number`

Defined in: [transforms/presets/reduce-series.ts:45](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/reduce-series.ts#L45)

Reduced numeric result for the bucket.
