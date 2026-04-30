[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ReducedBucket

# Type Alias: ReducedBucket

> **ReducedBucket** = `object`

Defined in: [autk-plot/src/transforms/kernel.ts:14](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/kernel.ts#L14)

Output of a single aggregated bucket after reduction.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [autk-plot/src/transforms/kernel.ts:22](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/kernel.ts#L22)

Merged source feature ids from all rows in this bucket, used for selection linking.

***

### count

> **count**: `number`

Defined in: [autk-plot/src/transforms/kernel.ts:20](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/kernel.ts#L20)

How many rows fell into this bucket.

***

### key

> **key**: `string`

Defined in: [autk-plot/src/transforms/kernel.ts:16](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/kernel.ts#L16)

The bucket identifier (e.g. `"2024-03"`, `"1k-2k"`).

***

### value

> **value**: `number`

Defined in: [autk-plot/src/transforms/kernel.ts:18](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/kernel.ts#L18)

The reduced numeric result (count, sum, avg, min, or max).
