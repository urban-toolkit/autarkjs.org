# Type Alias: TopKConfig

> **TopKConfig** = `object`

Defined in: [api.ts:161](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L161)

Top-k options, used by `PlotConfig.topK`.

## Properties

### k

> **k**: `number`

Defined in: [api.ts:163](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L163)

Number of rows to keep, ranked by value.

***

### others?

> `optional` **others?**: `boolean` \| `string`

Defined in: [api.ts:168](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L168)

Gathers the remaining rows into one extra row instead of dropping them.
`true` labels it `Others`; a string sets the label. Defaults to `false`.
