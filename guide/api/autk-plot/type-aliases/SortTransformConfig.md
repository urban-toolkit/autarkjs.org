[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / SortTransformConfig

# Type Alias: SortTransformConfig

> **SortTransformConfig** = `object`

Defined in: [api.ts:186](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/api.ts#L186)

Sort preset config.

Reorders rows by a single column without aggregating them.
Preserves `autkIds` on every output row.
Using `'@transform'` in `PlotConfig.attributes` with sort throws an error.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:188](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/api.ts#L188)

#### column?

> `optional` **column?**: `string`

Column to sort by. Defaults to `PlotConfig.attributes.axis[0]`.

#### direction?

> `optional` **direction?**: `"asc"` \| `"desc"`

Sort direction. Defaults to `'asc'`.

***

### preset

> **preset**: `"sort"`

Defined in: [api.ts:187](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/api.ts#L187)
