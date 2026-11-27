# Function: collectBuckets()

> **collectBuckets**(`options`): [`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Defined in: [transforms/kernel.ts:81](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/kernel.ts#L81)

Same aggregation as `reduceBuckets`, also returning the counted rows of each
bucket so presets can record unit-level provenance.

For `count`, pass `valueOf: undefined` explicitly: every object literal
inherits `Object.prototype.valueOf`, which TypeScript would otherwise take
as the option. At runtime only an own `valueOf` is used.

## Parameters

### options

`ReduceBucketsOptions`

Aggregation configuration with `rows`, `bucketOf`, `valueOf`, and `reducer`.

## Returns

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Reduced buckets with their counted member rows.

## Throws

If the reducer is not one of count, sum, avg, min, max. Rows with null keys or non-finite
values are skipped.
