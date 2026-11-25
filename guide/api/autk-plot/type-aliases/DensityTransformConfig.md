[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / DensityTransformConfig

# Type Alias: DensityTransformConfig

> **DensityTransformConfig** = `object`

Defined in: [api.ts:331](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L331)

Density preset config (kernel density estimate).

Reads a numeric column (`PlotConfig.attributes.axis[0]`), or a group and a
numeric column (`axis[0]`, `axis[1]`) for one curve per group. Every row
spreads over the grid points within one bandwidth of its value with real
weights (fractional coverage), and each curve integrates to 1.
Use `'@transform'` after the columns to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:333](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L333)

#### bandwidth?

> `optional` **bandwidth?**: `number`

Kernel bandwidth, in units of the numeric column. Defaults to Silverman's rule for the Epanechnikov kernel.

#### points?

> `optional` **points?**: `number`

Grid points per curve. Defaults to `48`.

***

### preset

> **preset**: `"density"`

Defined in: [api.ts:332](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L332)
