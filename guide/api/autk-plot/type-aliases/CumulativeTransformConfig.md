# Type Alias: CumulativeTransformConfig

> **CumulativeTransformConfig** = `object`

Defined in: [api.ts:385](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L385)

Cumulative preset config.

Partitions rows by `PlotConfig.attributes.axis[0]` into ordered bars and
accumulates them: point `k` reduces the rows of bars `0…k`. Numeric columns
are ordered by value (an empirical cumulative distribution); categorical
columns by reduced value, largest first (a Pareto chart).
Use `'@transform'` in `axis[1]` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:387](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L387)

#### bins?

> `optional` **bins?**: `number`

Number of equal-width bins for numeric columns. By default every
distinct value is a step, up to 100 values; larger columns use 50 bins.

#### order?

> `optional` **order?**: `"key"` \| `"value"`

Bar order: `'key'` (ascending value or label) or `'value'` (largest first).

#### reducer?

> `optional` **reducer?**: `"count"` \| `"sum"`

Additive reducer applied within each bar. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for `sum`.

***

### preset

> **preset**: `"cumulative"`

Defined in: [api.ts:386](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L386)
