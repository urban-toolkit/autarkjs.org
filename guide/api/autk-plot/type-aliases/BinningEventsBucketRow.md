[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / BinningEventsBucketRow

# Type Alias: BinningEventsBucketRow

> **BinningEventsBucketRow** = `object`

Defined in: [transforms/presets/binning-events.ts:34](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-events.ts#L34)

A single event bucket row ready for plot rendering.

`bucket` is a formatted string key (e.g. `"2024-03"` for monthly resolution).

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-events.ts:42](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-events.ts#L42)

Merged source feature ids represented by the bucket.

***

### bucket

> **bucket**: `string`

Defined in: [transforms/presets/binning-events.ts:36](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-events.ts#L36)

Formatted bucket identifier (for example `"2024-03"`).

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-events.ts:40](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-events.ts#L40)

Number of source event rows collapsed into the bucket.

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-events.ts:38](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-events.ts#L38)

Reduced numeric result for the bucket.
