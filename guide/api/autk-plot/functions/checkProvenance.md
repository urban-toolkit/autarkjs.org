[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / checkProvenance

# Function: checkProvenance()

> **checkProvenance**(`featureCount`, `rows`, `provenance`, `valueField?`): `string`[]

Defined in: [provenance/validate.ts:167](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/validate.ts#L167)

Checks the provenance of a transform output against the contract invariants.

## Parameters

### featureCount

`number`

Number of source features (`D0` holds `feature:0 … feature:n-1`).

### rows

(`object` & `object`)[]

Output rows, aligned with `provenance.rowIds`.

### provenance

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Provenance declared by the transform.

### valueField?

`string` = `'value'`

Row field holding the reduced value. Defaults to `value`.

## Returns

`string`[]

Violations, empty when every invariant holds.
