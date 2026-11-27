# Type Alias: ReduceSeriesTransformConfig

> **ReduceSeriesTransformConfig** = `object`

Defined in: [api.ts:278](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L278)

Reduce-series preset config.

The series array column is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each series point.
Unlike `binning-events`, timestamps are used as-is with no resolution bucketing.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:280](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L280)

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

Defined in: [api.ts:279](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L279)
