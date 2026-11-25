[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / FoldTransformConfig

# Type Alias: FoldTransformConfig

> **FoldTransformConfig** = `object`

Defined in: [api.ts:393](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L393)

Fold preset config.

Reads a categorical column (`PlotConfig.attributes.axis[0]`) and one or more
numeric measures (`axis[1…]`). Each row unfolds into one unit per measure
(`1:N`), and units are reduced per category and measure (`N:1`).
Use `'@transform'` after the measures to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:395](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L395)

#### normalize?

> `optional` **normalize?**: `boolean`

Rescales each measure to `[0, 1]` over all rows before reducing. Defaults to `true`.

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each category and measure. Defaults to `'avg'`.

***

### preset

> **preset**: `"fold"`

Defined in: [api.ts:394](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L394)
