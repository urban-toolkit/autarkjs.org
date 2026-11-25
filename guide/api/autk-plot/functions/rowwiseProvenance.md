[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / rowwiseProvenance

# Function: rowwiseProvenance()

> **rowwiseProvenance**(`rows`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:409](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/provenance.ts#L409)

Builds `D0 features → D1 rows` for presets that keep one row per feature.

## Parameters

### rows

[`Row`](../type-aliases/Row.md)[]

Output rows, each carrying the `autkIds` of its feature.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.
