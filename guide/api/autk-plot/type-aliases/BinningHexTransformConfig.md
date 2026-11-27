# Type Alias: BinningHexTransformConfig

> **BinningHexTransformConfig** = `object`

Defined in: [api.ts:429](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L429)

Binning-hex preset config.

Groups rows into hexagons by the numeric columns in
`PlotConfig.attributes.axis[0]` (x) and `axis[1]` (y). Hexagons are regular
in pixels: values are mapped to a `width × height` area first. The `hexbin`
plot sets `width` and `height` to its drawing area.
Use `'@transform'` in `PlotConfig.attributes.color` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:431](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L431)

#### height?

> `optional` **height?**: `number`

Height of the binned area in pixels. Defaults to `500`.

#### radius?

> `optional` **radius?**: `number`

Hexagon radius in pixels. Defaults to `14`.

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each hexagon. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for non-count reducers. Required when `reducer` is not `'count'`.

#### width?

> `optional` **width?**: `number`

Width of the binned area in pixels. Defaults to `800`.

***

### preset

> **preset**: `"binning-hex"`

Defined in: [api.ts:430](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L430)
