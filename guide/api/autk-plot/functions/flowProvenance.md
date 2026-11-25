[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / flowProvenance

# Function: flowProvenance()

> **flowProvenance**(`options`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:205](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/provenance.ts#L205)

Builds `D0 features → D1 segments → D2 links → D3 nodes` for flow presets.

Each feature walks one step per pair of consecutive columns; every step is a
segment (`1:N`), segments with equal endpoints form a link (`N:1`), and each
link touches its two endpoint nodes (`N:N`). Going through segments keeps
paths exact: a link only leads back to the features that walked it, which a
chain through nodes would over-approximate.

## Parameters

### options

Segment and node units, their buckets, id helpers, and output row ids.

#### endsOf

(`key`) => \[`string`, `string`\]

Returns the ids of the two endpoint nodes of a link bucket key.

#### linkBuckets

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Buckets returned by `collectBuckets` over `segments`, one per link.

#### linkGroup

(`key`) => `string`

Returns the share group of a link bucket key (its step), so shares are computed per step.

#### linkId

(`key`) => `string`

Returns the link id of a link bucket key.

#### nodeBuckets

[`CollectedBucket`](../type-aliases/CollectedBucket.md)[]

Buckets returned by `collectBuckets` over `nodeUnits`, one per node.

#### nodeGroup

(`key`) => `string`

Returns the share group of a node bucket key (its column), so shares are computed per column.

#### nodeId

(`key`) => `string`

Returns the node id of a node bucket key.

#### nodeUnits

[`Row`](../type-aliases/Row.md)[]

One unit row per feature and column, carrying the feature `autkIds`.

#### reducer

[`TransformReducer`](../type-aliases/TransformReducer.md)

Reducer applied by the preset.

#### rowIds

`string`[]

Provenance id of each output row, in output order.

#### segmentIds

`string`[]

Provenance id of each segment, aligned with `segments`.

#### segments

[`Row`](../type-aliases/Row.md)[]

One unit row per feature step, carrying the feature `autkIds`.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.
