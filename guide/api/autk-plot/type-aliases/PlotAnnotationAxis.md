# Type Alias: PlotAnnotationAxis

> **PlotAnnotationAxis** = `object`

Defined in: [annotations.ts:21](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/annotations.ts#L21)

Explicit plot-local coordinates for an axis whose scale is not its position mapping.

## Properties

### bounds?

> `optional` **bounds?**: (`key`) => readonly \[`number`, `number`\] \| `undefined`

Defined in: [annotations.ts:25](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/annotations.ts#L25)

Outer edges of a category's slot, required for categorical bands.

#### Parameters

##### key

`string`

#### Returns

readonly \[`number`, `number`\] \| `undefined`

***

### kind

> **kind**: `"numeric"` \| `"categorical"`

Defined in: [annotations.ts:22](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/annotations.ts#L22)

***

### position

> **position**: (`value`) => `number` \| `undefined`

Defined in: [annotations.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/annotations.ts#L23)

#### Parameters

##### value

[`AnnotationCoordinate`](AnnotationCoordinate.md)

#### Returns

`number` \| `undefined`
