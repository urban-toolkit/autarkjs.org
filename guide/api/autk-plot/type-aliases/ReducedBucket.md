[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ReducedBucket

# Type Alias: ReducedBucket

> **ReducedBucket** = `object`

Defined in: [transforms/kernel.ts:17](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/kernel.ts#L17)

Output of a single aggregated bucket after reduction.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/kernel.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/kernel.ts#L25)

Merged source feature ids from all rows in this bucket, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/kernel.ts:23](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/kernel.ts#L23)

How many rows fell into this bucket.

***

### key

> **key**: `string`

Defined in: [transforms/kernel.ts:19](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/kernel.ts#L19)

The bucket identifier (e.g. `"2024-03"`, `"1k-2k"`).

***

### value

> **value**: `number`

Defined in: [transforms/kernel.ts:21](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/kernel.ts#L21)

The reduced numeric result (count, sum, avg, min, or max).
