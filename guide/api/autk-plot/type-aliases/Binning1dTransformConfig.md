[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / Binning1dTransformConfig

# Type Alias: Binning1dTransformConfig

> **Binning1dTransformConfig** = `object`

Defined in: [api.ts:106](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/api.ts#L106)

Binning-1d preset config.

The column to bin is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:108](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/api.ts#L108)

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

Defined in: [api.ts:107](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/api.ts#L107)
