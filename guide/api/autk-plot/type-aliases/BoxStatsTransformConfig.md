# Type Alias: BoxStatsTransformConfig

> **BoxStatsTransformConfig** = `object`

Defined in: [api.ts:473](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L473)

Box-stats preset config.

Groups rows by the categorical column in `PlotConfig.attributes.axis[0]`
and summarizes the numeric column in `axis[1]` with quartiles, Tukey
whiskers, and outliers. Rows with non-finite values are skipped.
Use `'@transform'` in `axis[2]` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:475](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L475)

#### whisker?

> `optional` **whisker?**: `number`

Whisker length as a multiple of the interquartile range. Defaults to `1.5`.

***

### preset

> **preset**: `"box-stats"`

Defined in: [api.ts:474](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L474)
