[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ProvenanceCardinality

# Type Alias: ProvenanceCardinality

> **ProvenanceCardinality** = `"1:1"` \| `"N:1"` \| `"1:N"` \| `"N:N"` \| `"empty"`

Defined in: [types-provenance.ts:32](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L32)

Cardinality of a relation, from the maximum fan-out and fan-in of its pairs.
`empty` marks a relation without pairs (e.g. a line chart with no events).
