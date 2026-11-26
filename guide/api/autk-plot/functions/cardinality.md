# Function: cardinality()

> **cardinality**(`relation`): [`ProvenanceCardinality`](../type-aliases/ProvenanceCardinality.md)

Defined in: [provenance/relations.ts:129](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/relations.ts#L129)

Classifies a relation by the maximum number of targets per source (fan-out)
and sources per target (fan-in). Weights do not change the classification.

## Parameters

### relation

[`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Relation to classify.

## Returns

[`ProvenanceCardinality`](../type-aliases/ProvenanceCardinality.md)

`1:1`, `N:1`, `1:N`, `N:N`, or `empty` when there are no pairs.
