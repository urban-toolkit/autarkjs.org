# Type Alias: ResolvedPlotTransform

> **ResolvedPlotTransform** = `object`

Defined in: [plot-base-data.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L47)

Rendered rows and bindings of an executed transform, returned by `resolveTransformResult()`.

## Properties

### axisAttributes?

> `optional` **axisAttributes?**: `string`[]

Defined in: [plot-base-data.ts:51](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L51)

Optional axis bindings exposed by the transformed row shape.

***

### colorAttribute?

> `optional` **colorAttribute?**: `string`

Defined in: [plot-base-data.ts:53](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L53)

Optional color binding exposed by the transformed row shape.

***

### rowIds?

> `optional` **rowIds?**: [`ProvenanceId`](ProvenanceId.md)[]

Defined in: [plot-base-data.ts:55](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L55)

Provenance id of each row in `rows`. Required when `rows` are rebuilt or reordered.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [plot-base-data.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L49)

Render rows stored on `_data` for the current draw cycle.
