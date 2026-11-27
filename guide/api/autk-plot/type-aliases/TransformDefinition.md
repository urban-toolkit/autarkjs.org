# Type Alias: TransformDefinition

> **TransformDefinition** = `object`

Defined in: [transforms/registry.ts:92](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/registry.ts#L92)

Contract of a transform, built-in or user-defined.

## Properties

### label?

> `optional` **label?**: `string`

Defined in: [transforms/registry.ts:96](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/registry.ts#L96)

Name shown to people; defaults to `name`.

***

### name

> **name**: `string`

Defined in: [transforms/registry.ts:94](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/registry.ts#L94)

Unique name: `transform: { preset: 'registered', name }` (built-in transforms: `{ preset: name }`).

***

### shape

> **shape**: [`RowShape`](RowShape.md)

Defined in: [transforms/registry.ts:98](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/registry.ts#L98)

Family of the output rows.

## Methods

### run()

> **run**(`rows`, `options`, `columns`): [`TransformOutput`](TransformOutput.md)

Defined in: [transforms/registry.ts:107](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/registry.ts#L107)

Turns input rows into output rows and their provenance.

#### Parameters

##### rows

(`object` & `object`)[]

One row per source feature, with its properties and `autkIds: [index]`.

##### options

`Record`\<`string`, `unknown`\>

`transform.options` of the plot configuration (`{}` when unset).

##### columns

`string`[]

Source columns of `attributes.axis`, without `'@transform'`.

#### Returns

[`TransformOutput`](TransformOutput.md)

Output rows, their provenance, and the extras of the shape.
