# Function: image()

> **image**(`relation`, `sources`): `string`[]

Defined in: [provenance/relations.ts:94](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/relations.ts#L94)

Returns the distinct targets reached from the given sources.

## Parameters

### relation

[`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Relation to query.

### sources

`Iterable`\<`string`\>

Source ids.

## Returns

`string`[]

Reached target ids, in first-reached order.
