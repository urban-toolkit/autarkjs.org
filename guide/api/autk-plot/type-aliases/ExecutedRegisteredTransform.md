# Type Alias: ExecutedRegisteredTransform

> **ExecutedRegisteredTransform** = [`TransformOutput`](TransformOutput.md) & `object`

Defined in: [transforms/registry.ts:111](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L111)

Result of running a user transform (`preset: 'registered'`), tagged with its name and shape.

## Type Declaration

### name

> **name**: `string`

Registered name.

### preset

> **preset**: `"registered"`

Preset discriminator.

### shape

> **shape**: [`RowShape`](RowShape.md)

Family of the output rows.
