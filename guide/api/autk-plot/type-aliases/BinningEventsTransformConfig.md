[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / BinningEventsTransformConfig

# Type Alias: BinningEventsTransformConfig

> **BinningEventsTransformConfig** = `object`

Defined in: [api.ts:145](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/api.ts#L145)

Binning-events preset config.

The events array column is read from `PlotConfig.attributes.axis[0]`.
Use `'@transform'` in `axis[1]` to mark the output slot.
`timestamp` and `value` are sub-fields within each event object.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:147](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/api.ts#L147)

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

Defined in: [api.ts:146](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/api.ts#L146)
