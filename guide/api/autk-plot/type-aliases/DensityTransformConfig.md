# Type Alias: DensityTransformConfig

> **DensityTransformConfig** = `object`

Defined in: [api.ts:348](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L348)

Density preset config (kernel density estimate).

Reads a numeric column (`PlotConfig.attributes.axis[0]`), or a group and a
numeric column (`axis[0]`, `axis[1]`) for one curve per group. Every row
spreads over the grid points within one bandwidth of its value with real
weights (fractional coverage), and each curve integrates to 1.
Use `'@transform'` after the columns to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:350](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L350)

#### bandwidth?

> `optional` **bandwidth?**: `number`

Kernel bandwidth, in units of the numeric column. Defaults to Silverman's rule for the Epanechnikov kernel.

#### points?

> `optional` **points?**: `number`

Grid points per curve. Defaults to `48`.

***

### preset

> **preset**: `"density"`

Defined in: [api.ts:349](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L349)
