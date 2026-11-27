# Function: indexedBins()

> **indexedBins**(`labels`, `keys`, `prefix`): `Map`\<`string`, `string`\>

Defined in: [transforms/provenance.ts:50](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/provenance.ts#L50)

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
