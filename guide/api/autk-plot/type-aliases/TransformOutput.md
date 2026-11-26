# Type Alias: TransformOutput

> **TransformOutput** = `object`

Defined in: [transforms/registry.ts:80](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L80)

Output of a transform's `run`: the rows, their provenance, and the extra
fields its shape asks for (e.g. `measures` for `fold`).

## Indexable

> \[`extra`: `string`\]: `unknown`

Extra fields of the shape.

## Properties

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/registry.ts:84](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L84)

Provenance from `D0` to the rows: stages `D1…Dn`, relations, row ids, unit contributions, reducer.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [transforms/registry.ts:82](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L82)

Rows to draw; each carries `autkIds` and the fields of its shape.
