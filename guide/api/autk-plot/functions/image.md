# Function: image()

> **image**(`relation`, `sources`): `string`[]

Defined in: [provenance/relations.ts:94](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/provenance/relations.ts#L94)

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
