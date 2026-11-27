# Function: cumulativeProvenance()

> **cumulativeProvenance**(`options`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:358](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/provenance.ts#L358)

Builds `D0 features → D1 bins → D2 points` for accumulation presets.

Features are partitioned into ordered bars (`N:1`), and bar `i` contributes
to every point `k ≥ i` (a prefix relation, `N:N`). Point `k` therefore
reduces the features of bars `0…k`; its units are grouped per point, so a
feature under a selected point is fully covered there.

## Parameters

### options

Feature units, ordered bar buckets, and id helpers.

#### bars

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Buckets returned by `collectBuckets`, in bar order.

#### reducer

[`TransformReducer`](../type-aliases/TransformReducer.md)

Reducer applied by the preset.

#### rowIds

`string`[]

Provenance id of each output row, in output order.

#### units

[`Row`](../type-aliases/Row.md)[]

One unit row per feature.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.
