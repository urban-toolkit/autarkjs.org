[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / BoxStatsTransformConfig

# Type Alias: BoxStatsTransformConfig

> **BoxStatsTransformConfig** = `object`

Defined in: [api.ts:456](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L456)

Box-stats preset config.

Groups rows by the categorical column in `PlotConfig.attributes.axis[0]`
and summarizes the numeric column in `axis[1]` with quartiles, Tukey
whiskers, and outliers. Rows with non-finite values are skipped.
Use `'@transform'` in `axis[2]` to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:458](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L458)

#### whisker?

> `optional` **whisker?**: `number`

Whisker length as a multiple of the interquartile range. Defaults to `1.5`.

***

### preset

> **preset**: `"box-stats"`

Defined in: [api.ts:457](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L457)
