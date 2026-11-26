# Type Alias: TopKConfig

> **TopKConfig** = `object`

Defined in: [api.ts:144](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L144)

Top-k options, used by `PlotConfig.topK`.

## Properties

### k

> **k**: `number`

Defined in: [api.ts:146](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L146)

Number of rows to keep, ranked by value.

***

### others?

> `optional` **others?**: `boolean` \| `string`

Defined in: [api.ts:151](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L151)

Gathers the remaining rows into one extra row instead of dropping them.
`true` labels it `Others`; a string sets the label. Defaults to `false`.
