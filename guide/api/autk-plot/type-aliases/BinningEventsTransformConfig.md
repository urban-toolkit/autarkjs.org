# Type Alias: BinningEventsTransformConfig

> **BinningEventsTransformConfig** = `object`

Defined in: [api.ts:239](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L239)

Binning-events preset config.

The events array column is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each event object.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:241](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L241)

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each bucket. Defaults to `'count'`.

#### resolution?

> `optional` **resolution?**: [`TransformResolution`](TransformResolution.md)

Granularity of the time buckets. Defaults to `'month'`.

#### timestamp?

> `optional` **timestamp?**: `string`

Field within each event object that holds the timestamp. Defaults to `'timestamp'`.

#### value?

> `optional` **value?**: `string`

Field within each event object used for non-count reducers. Defaults to `'value'`.

***

### preset

> **preset**: `"binning-events"`

Defined in: [api.ts:240](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L240)
