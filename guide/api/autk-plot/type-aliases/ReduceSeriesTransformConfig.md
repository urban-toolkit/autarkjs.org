[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ReduceSeriesTransformConfig

# Type Alias: ReduceSeriesTransformConfig

> **ReduceSeriesTransformConfig** = `object`

Defined in: [api.ts:167](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/api.ts#L167)

Reduce-series preset config.

The series array column is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each series point.
Unlike `binning-events`, timestamps are used as-is with no resolution bucketing.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:169](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/api.ts#L169)

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied across features sharing the same timestamp. Defaults to `'avg'`.

#### timestamp?

> `optional` **timestamp?**: `string`

Field within each series point that holds the timestamp. Defaults to `'timestamp'`.

#### value?

> `optional` **value?**: `string`

Field within each series point that holds the numeric value. Defaults to `'value'`.

***

### preset

> **preset**: `"reduce-series"`

Defined in: [api.ts:168](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-plot/src/api.ts#L168)
