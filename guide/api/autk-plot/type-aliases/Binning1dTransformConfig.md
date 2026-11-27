# Type Alias: Binning1dTransformConfig

> **Binning1dTransformConfig** = `object`

Defined in: [api.ts:217](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L217)

Binning-1d preset config.

The column to bin is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:219](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L219)

#### bins?

> `optional` **bins?**: `number`

Number of bins for quantitative attributes. Defaults to `10`.

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each bin. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for non-count reducers. Required when `reducer` is not `'count'`.

***

### preset

> **preset**: `"binning-1d"`

Defined in: [api.ts:218](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L218)
