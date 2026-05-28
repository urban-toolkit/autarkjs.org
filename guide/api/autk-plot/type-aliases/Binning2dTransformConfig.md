[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / Binning2dTransformConfig

# Type Alias: Binning2dTransformConfig

> **Binning2dTransformConfig** = `object`

Defined in: [autk-plot/src/api.ts:124](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/api.ts#L124)

Binning-2d preset config.

The x and y columns are read from `PlotConfig.attributes.axis[0]` and `axis[1]`.
Use `'@transform'` in `PlotConfig.attributes.color` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [autk-plot/src/api.ts:126](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/api.ts#L126)

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

Defined in: [autk-plot/src/api.ts:125](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/api.ts#L125)
