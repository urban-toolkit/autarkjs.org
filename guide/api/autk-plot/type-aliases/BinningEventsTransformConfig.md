[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / BinningEventsTransformConfig

# Type Alias: BinningEventsTransformConfig

> **BinningEventsTransformConfig** = `object`

Defined in: [autk-plot/src/api.ts:145](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L145)

Binning-events preset config.

The events array column is read from `ChartConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each event object.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [autk-plot/src/api.ts:147](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L147)

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

Defined in: [autk-plot/src/api.ts:146](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L146)
