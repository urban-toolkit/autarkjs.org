# Type Alias: ProvenancePath

> **ProvenancePath** = `object`[]

Defined in: [types-provenance.ts:106](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L106)

Entities reached in each stage by a provenance query.

## Type Declaration

### dropped?

> `optional` **dropped?**: `number`

Entities of the previous step with no image in this stage (`1:0`), for direct queries.

### ids

> **ids**: [`ProvenanceId`](ProvenanceId.md)[]

Entities reached in the stage.

### label

> **label**: `string`

Stage description.

### note?

> `optional` **note?**: `string`

Why entities may be missing in this stage, copied from the stage.

### stage

> **stage**: `string`

Stage name.
