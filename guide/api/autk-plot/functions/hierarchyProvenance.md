# Function: hierarchyProvenance()

> **hierarchyProvenance**(`options`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:293](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/provenance.ts#L293)

Builds a chain of partitions for hierarchy presets, from the deepest level up:
`D0 features → D1 leaves → D2 parents → … → Dn top level`.

Each feature falls in one node per level (`N:1` into leaves), and each node
belongs to one parent (`N:1` between levels). Every node reduces the
features under it, grouped by level, so a feature is fully covered within
the level of a selected node.

## Parameters

### options

Feature units and buckets per level, labels, and id helpers.

#### levelBuckets

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[][]

Buckets returned by `collectBuckets` for each level, one per node.

#### levelLabels

`string`[]

Stage label of each level, e.g. the attribute it groups by.

#### levelUnits

[`Row`](../type-aliases/Row.md)[][]

One unit row per feature, per level (index `0` is the top level).

#### nodeId

(`key`) => `string`

Returns the node id of a node bucket key.

#### parentOf

(`key`) => `string` \| `null`

Returns the parent bucket key of a node bucket key, or `null` at the top level.

#### reducer

[`TransformReducer`](../type-aliases/TransformReducer.md)

Reducer applied by the preset.

#### rowIds

`string`[]

Provenance id of each output row, in output order.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.
