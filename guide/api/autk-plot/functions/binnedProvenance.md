# Function: binnedProvenance()

> **binnedProvenance**(`options`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:68](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/provenance.ts#L68)

Builds `D0 features → D1 bins → D2 aggregates` for binning presets.

Each input row is one feature, so the reduced units are the features
themselves (`N:1` into bins, `1:1` from bins to aggregates).

## Parameters

### options

Input rows, collected buckets, all bins of `D1`, and output row keys.

#### aggregateLabel?

`string`

Stage label of `D2`. Defaults to `aggregates`.

#### binLabel

`string`

Stage label of `D1`, e.g. `bins` or `cells`.

#### bins

`Map`\<`string`, `string`\>

Every bin of `D1` by bucket key, including empty bins.

#### buckets

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Buckets returned by `collectBuckets`.

#### reducer

[`TransformReducer`](../type-aliases/TransformReducer.md)

Reducer applied by the preset.

#### rowKeys

`string`[]

Bucket key of each output row, in output order.

#### rows

[`Row`](../type-aliases/Row.md)[]

Input rows reduced by the preset, one per feature.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.

## Throws

If a bucket key or a row key has no bin.
