[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / BinningEventsBucketRow

# Type Alias: BinningEventsBucketRow

> **BinningEventsBucketRow** = `object`

Defined in: [autk-plot/src/transforms/presets/binning-events.ts:34](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-events.ts#L34)

A single event bucket row ready for chart rendering.

`bucket` is a formatted string key (e.g. `"2024-03"` for monthly resolution).

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [autk-plot/src/transforms/presets/binning-events.ts:42](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-events.ts#L42)

Merged source feature ids represented by the bucket.

***

### bucket

> **bucket**: `string`

Defined in: [autk-plot/src/transforms/presets/binning-events.ts:36](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-events.ts#L36)

Formatted bucket identifier (for example `"2024-03"`).

***

### count

> **count**: `number`

Defined in: [autk-plot/src/transforms/presets/binning-events.ts:40](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-events.ts#L40)

Number of source event rows collapsed into the bucket.

***

### value

> **value**: `number`

Defined in: [autk-plot/src/transforms/presets/binning-events.ts:38](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-events.ts#L38)

Reduced numeric result for the bucket.
