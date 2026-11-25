[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / indexedBins

# Function: indexedBins()

> **indexedBins**(`labels`, `keys`, `prefix`): `Map`\<`string`, `string`\>

Defined in: [transforms/provenance.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/provenance.ts#L50)

Assigns indexed ids to bins, in mapper order, so empty bins also belong to `D1`.

Bucket keys the mapper does not list (e.g. `unknown` for non-finite values)
are appended after the regular bins.

## Parameters

### labels

`string`[]

Bin labels in mapper order.

### keys

`string`[]

Bucket keys produced by the reduction.

### prefix

`string`

Entity prefix, e.g. `bin`.

## Returns

`Map`\<`string`, `string`\>

Bin id by bucket key.
