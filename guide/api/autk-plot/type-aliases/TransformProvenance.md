# Type Alias: TransformProvenance

> **TransformProvenance** = `object`

Defined in: [types-provenance.ts:92](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L92)

Provenance produced by a transform, from `D0` to the rendered rows.

## Properties

### contributions

> **contributions**: [`ProvenanceContribution`](ProvenanceContribution.md)[]

Defined in: [types-provenance.ts:100](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L100)

Unit-level contributions to the rendered rows.

***

### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Defined in: [types-provenance.ts:102](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L102)

Reducer applied to the contributions of each rendered row; absent when rows map one-to-one to features.

***

### relations

> **relations**: [`ProvenanceRelation`](ProvenanceRelation.md)[]

Defined in: [types-provenance.ts:96](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L96)

Relations between consecutive stages, starting at `D0`.

***

### rowIds

> **rowIds**: [`ProvenanceId`](ProvenanceId.md)[]

Defined in: [types-provenance.ts:98](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L98)

Provenance id of each output row, aligned with the transform `rows`.

***

### stages

> **stages**: [`ProvenanceStage`](ProvenanceStage.md)[]

Defined in: [types-provenance.ts:94](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L94)

Stages after `D0`, in pipeline order. The last stage holds the rendered rows.
