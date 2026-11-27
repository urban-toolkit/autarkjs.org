# Function: reduceBuckets()

> **reduceBuckets**(`options`): [`ReducedBucket`](../type-aliases/ReducedBucket.md)[]

Defined in: [transforms/kernel.ts:63](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/kernel.ts#L63)

Groups rows into keyed buckets and reduces each bucket to a single value.

## Parameters

### options

`ReduceBucketsOptions`

Aggregation configuration with `rows`, `bucketOf`, `valueOf`, and `reducer`.

## Returns

[`ReducedBucket`](../type-aliases/ReducedBucket.md)[]

Reduced buckets with merged `autkIds` for selection linking.

## Throws

If the reducer is not one of count, sum, avg, min, max. Rows with null keys or non-finite
values are skipped.

## Example

```ts
const buckets = reduceBuckets({
  rows: data,
  bucketOf: row => String(row.category),
  valueOf: row => row.amount,
  reducer: 'sum',
});
```
