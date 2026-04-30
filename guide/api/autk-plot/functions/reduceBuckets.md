[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / reduceBuckets

# Function: reduceBuckets()

> **reduceBuckets**(`options`): [`ReducedBucket`](../type-aliases/ReducedBucket.md)[]

Defined in: [autk-plot/src/transforms/kernel.ts:39](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/kernel.ts#L39)

Groups rows into keyed buckets and reduces each bucket to a single value.

## Parameters

### options

Aggregation configuration with `rows`, `bucketOf`, `valueOf`, and `reducer`.

#### bucketOf

(`row`) => `string` \| `null`

Assigns a bucket key to each row; return `null` to skip the row.

#### reducer

[`TransformReducer`](../type-aliases/TransformReducer.md)

Aggregation strategy applied within each bucket.

#### rows

[`Row`](../type-aliases/Row.md)[]

Input rows to aggregate.

#### valueOf?

(`row`) => `number` \| `null`

Optional numeric extractor used for non-count reducers.

## Returns

[`ReducedBucket`](../type-aliases/ReducedBucket.md)[]

Reduced buckets with merged `autkIds` for selection linking.

## Throws

Never throws. Rows with null keys or non-finite values are skipped.

## Example

```ts
const buckets = reduceBuckets({
  rows: data,
  bucketOf: row => String(row.category),
  valueOf: row => row.amount,
  reducer: 'sum',
});
```
