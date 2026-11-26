# Type Alias: Binning2dTransformConfig

> **Binning2dTransformConfig** = `object`

Defined in: [api.ts:218](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L218)

Binning-2d preset config.

The x and y columns are read from `PlotConfig.attributes.axis[0]` and `axis[1]`.
Use `'@transform'` in `PlotConfig.attributes.color` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:220](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L220)

#### binsX?

> `optional` **binsX?**: `number`

Number of bins for the x axis when quantitative. Defaults to `10`.

#### binsY?

> `optional` **binsY?**: `number`

Number of bins for the y axis when quantitative. Defaults to `10`.

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each cell. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for non-count reducers. Required when `reducer` is not `'count'`.

***

### preset

> **preset**: `"binning-2d"`

Defined in: [api.ts:219](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L219)
