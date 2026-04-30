[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ResolvedChartTransform

# Type Alias: ResolvedChartTransform

> **ResolvedChartTransform** = `object`

Defined in: [autk-plot/src/chart-base-data.ts:32](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L32)

Normalized transform payload returned by `resolveTransformResult()`.

Collapses preset-specific transform outputs into the rendered schema
consumed by chart classes.

## Properties

### axisAttributes?

> `optional` **axisAttributes?**: `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:36](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L36)

Optional axis bindings exposed by the transformed row shape.

***

### colorAttribute?

> `optional` **colorAttribute?**: `string`

Defined in: [autk-plot/src/chart-base-data.ts:38](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L38)

Optional color binding exposed by the transformed row shape.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [autk-plot/src/chart-base-data.ts:34](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L34)

Render rows stored on `_data` for the current draw cycle.
