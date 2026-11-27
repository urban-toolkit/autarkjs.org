# Type Alias: ProvenanceCardinality

> **ProvenanceCardinality** = `"1:1"` \| `"N:1"` \| `"1:N"` \| `"N:N"` \| `"empty"`

Defined in: [types-provenance.ts:32](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L32)

Cardinality of a relation, from the maximum fan-out and fan-in of its pairs.
`empty` marks a relation without pairs (e.g. a line chart with no events).
