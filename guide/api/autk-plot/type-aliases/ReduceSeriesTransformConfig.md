# Type Alias: ReduceSeriesTransformConfig

> **ReduceSeriesTransformConfig** = `object`

Defined in: [api.ts:261](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L261)

Reduce-series preset config.

The series array column is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each series point.
Unlike `binning-events`, timestamps are used as-is with no resolution bucketing.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:263](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L263)

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

Defined in: [api.ts:262](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L262)
