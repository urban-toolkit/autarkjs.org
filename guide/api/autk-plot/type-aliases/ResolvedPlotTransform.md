[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ResolvedPlotTransform

# Type Alias: ResolvedPlotTransform

> **ResolvedPlotTransform** = `object`

Defined in: [plot-base-data.ts:32](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/plot-base-data.ts#L32)

Normalized transform payload returned by `resolveTransformResult()`.

Collapses preset-specific transform outputs into the rendered schema
consumed by plot classes.

## Properties

### axisAttributes?

> `optional` **axisAttributes?**: `string`[]

Defined in: [plot-base-data.ts:36](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/plot-base-data.ts#L36)

Optional axis bindings exposed by the transformed row shape.

***

### colorAttribute?

> `optional` **colorAttribute?**: `string`

Defined in: [plot-base-data.ts:38](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/plot-base-data.ts#L38)

Optional color binding exposed by the transformed row shape.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [plot-base-data.ts:34](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/plot-base-data.ts#L34)

Render rows stored on `_data` for the current draw cycle.
