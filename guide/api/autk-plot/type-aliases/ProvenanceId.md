[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ProvenanceId

# Type Alias: ProvenanceId

> **ProvenanceId** = `string`

Defined in: [types-provenance.ts:9](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L9)

Entity id inside a provenance graph.

Ids are prefixed by entity kind so they never collide across stages,
e.g. `feature:0`, `bin:4`, `aggregate:4`, `mark:aggregate:4`.
