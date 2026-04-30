[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ReduceSeriesTransformConfig

# Type Alias: ReduceSeriesTransformConfig

> **ReduceSeriesTransformConfig** = `object`

Defined in: [autk-plot/src/api.ts:167](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L167)

Reduce-series preset config.

The series array column is read from `ChartConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each series point.
Unlike `binning-events`, timestamps are used as-is with no resolution bucketing.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [autk-plot/src/api.ts:169](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L169)

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

Defined in: [autk-plot/src/api.ts:168](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L168)
