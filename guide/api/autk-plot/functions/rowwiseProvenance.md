# Function: rowwiseProvenance()

> **rowwiseProvenance**(`rows`): [`TransformProvenance`](../type-aliases/TransformProvenance.md)

Defined in: [transforms/provenance.ts:409](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/provenance.ts#L409)

Builds `D0 features → D1 rows` for presets that keep one row per feature.

## Parameters

### rows

[`Row`](../type-aliases/Row.md)[]

Output rows, each carrying the `autkIds` of its feature.

## Returns

[`TransformProvenance`](../type-aliases/TransformProvenance.md)

Transform provenance aligned with the output rows.
