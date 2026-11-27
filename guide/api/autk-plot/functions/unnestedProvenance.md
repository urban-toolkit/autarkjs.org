# Function: unnestedProvenance()

> **unnestedProvenance**(`options`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:132](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/provenance.ts#L132)

Builds `D0 features → D1 units → D2 buckets` for presets that unnest arrays.

Each feature expands into many units (`1:N`), and units sharing a bucket key
are reduced together (`N:1`), so features and buckets relate `N:N`.

## Parameters

### options

Unnested units, their ids, collected buckets, and output row keys.

#### bucketLabel?

`string`

Stage label of `D2`. Defaults to `buckets`.

#### buckets

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Buckets returned by `collectBuckets` over `units`.

#### groupOf?

(`key`) => `string`

Share group of a bucket key. Defaults to no group. A preset whose
features have one unit in each of several buckets (e.g. one per measure)
groups them so a feature is fully covered within its group.

#### reducer

[`TransformReducer`](../type-aliases/TransformReducer.md)

Reducer applied by the preset.

#### rowKeys

`string`[]

Bucket key of each output row, in output order.

#### unitIds

`string`[]

Provenance id of each unit, aligned with `units`.

#### unitLabel

`string`

Stage label of `D1`, e.g. `events` or `series points`.

#### units

[`Row`](../type-aliases/Row.md)[]

Unnested unit rows, each carrying the `autkIds` of its feature.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.
