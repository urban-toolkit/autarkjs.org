# Type Alias: ProvenanceStage

> **ProvenanceStage** = `object`

Defined in: [types-provenance.ts:40](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L40)

A named set of entities produced by one pipeline step.

`D0` holds source features, `D1..Dn` hold intermediate and aggregated rows,
and `M` holds rendered marks.

## Properties

### ids

> **ids**: [`ProvenanceId`](ProvenanceId.md)[]

Defined in: [types-provenance.ts:46](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L46)

Entity ids in the stage.

***

### label

> **label**: `string`

Defined in: [types-provenance.ts:44](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L44)

Human-readable stage description, e.g. `bins`.

***

### name

> **name**: `string`

Defined in: [types-provenance.ts:42](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L42)

Stage name, e.g. `D0`, `D1`, `M`.

***

### note?

> `optional` **note?**: `string`

Defined in: [types-provenance.ts:48](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L48)

Why entities of the previous stage may be missing here, e.g. `filter: shape_area > 10000000`.
