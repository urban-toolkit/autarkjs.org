[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / SortTransformConfig

# Type Alias: SortTransformConfig

> **SortTransformConfig** = `object`

Defined in: [autk-plot/src/api.ts:186](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L186)

Sort preset config.

Reorders rows by a single column without aggregating them.
Preserves `autkIds` on every output row.
Using `'@transform'` in `ChartConfig.attributes` with sort throws an error.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [autk-plot/src/api.ts:188](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L188)

#### column?

> `optional` **column?**: `string`

Column to sort by. Defaults to `ChartConfig.attributes.axis[0]`.

#### direction?

> `optional` **direction?**: `"asc"` \| `"desc"`

Sort direction. Defaults to `'asc'`.

***

### preset

> **preset**: `"sort"`

Defined in: [autk-plot/src/api.ts:187](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L187)
