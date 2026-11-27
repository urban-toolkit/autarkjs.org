# Type Alias: FoldTransformConfig

> **FoldTransformConfig** = `object`

Defined in: [api.ts:410](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L410)

Fold preset config.

Reads a categorical column (`PlotConfig.attributes.axis[0]`) and one or more
numeric measures (`axis[1…]`). Each row unfolds into one unit per measure
(`1:N`), and units are reduced per category and measure (`N:1`).
Use `'@transform'` after the measures to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:412](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L412)

#### normalize?

> `optional` **normalize?**: `boolean`

Rescales each measure to `[0, 1]` over all rows before reducing. Defaults to `true`.

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each category and measure. Defaults to `'avg'`.

***

### preset

> **preset**: `"fold"`

Defined in: [api.ts:411](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L411)
