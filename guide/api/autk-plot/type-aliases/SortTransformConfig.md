# Type Alias: SortTransformConfig

> **SortTransformConfig** = `object`

Defined in: [api.ts:297](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L297)

Sort preset config.

Reorders rows by a single column without aggregating them.
Preserves `autkIds` on every output row.
Using `'@transform'` in `PlotConfig.attributes` with sort throws an error.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:299](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L299)

#### column?

> `optional` **column?**: `string`

Column to sort by. Defaults to `PlotConfig.attributes.axis[0]`.

#### direction?

> `optional` **direction?**: `"asc"` \| `"desc"`

Sort direction. Defaults to `'asc'`.

***

### preset

> **preset**: `"sort"`

Defined in: [api.ts:298](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L298)
