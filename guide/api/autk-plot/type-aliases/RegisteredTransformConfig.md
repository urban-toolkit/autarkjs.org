# Type Alias: RegisteredTransformConfig

> **RegisteredTransformConfig** = `object`

Defined in: [api.ts:331](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L331)

Config of a user-defined transform added with `registerTransform`.

The transform receives `options` and the source columns of
`PlotConfig.attributes.axis`, and must return rows of its declared shape with
provenance that honors the contract checked by `checkTransform`.
Use `'@transform'` after the source columns to mark the output slot.

## Properties

### name

> **name**: `string`

Defined in: [api.ts:334](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L334)

Name given to `registerTransform`.

***

### options?

> `optional` **options?**: `Record`\<`string`, `unknown`\>

Defined in: [api.ts:336](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L336)

Options passed to the transform.

***

### preset

> **preset**: `"registered"`

Defined in: [api.ts:332](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L332)
