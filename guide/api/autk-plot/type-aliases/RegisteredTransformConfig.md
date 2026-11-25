[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / RegisteredTransformConfig

# Type Alias: RegisteredTransformConfig

> **RegisteredTransformConfig** = `object`

Defined in: [api.ts:314](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L314)

Config of a user-defined transform added with `registerTransform`.

The transform receives `options` and the source columns of
`PlotConfig.attributes.axis`, and must return rows of its declared shape with
provenance that honors the contract checked by `checkTransform`.
Use `'@transform'` after the source columns to mark the output slot.

## Properties

### name

> **name**: `string`

Defined in: [api.ts:317](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L317)

Name given to `registerTransform`.

***

### options?

> `optional` **options?**: `Record`\<`string`, `unknown`\>

Defined in: [api.ts:319](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L319)

Options passed to the transform.

***

### preset

> **preset**: `"registered"`

Defined in: [api.ts:315](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L315)
