[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / shapeOutput

# Function: shapeOutput()

> **shapeOutput**\<`S`\>(`transform`, `shape`): [`ShapeExtras`](../type-aliases/ShapeExtras.md)\[`S`\] \| `undefined`

Defined in: [transforms/registry.ts:273](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L273)

The extra outputs of an executed transform, when its rows have a given shape.

## Type Parameters

### S

`S` *extends* keyof [`ShapeExtras`](../type-aliases/ShapeExtras.md)

## Parameters

### transform

\{ `name?`: `string`; `preset`: `string`; \} \| `undefined`

Result of the configured transform (the drawing context's `transform`).

### shape

`S`

Shape the plot reads.

## Returns

[`ShapeExtras`](../type-aliases/ShapeExtras.md)\[`S`\] \| `undefined`

The output, typed with the extras of the shape, or `undefined` for another shape (or none).

## Example

```ts
const fold = shapeOutput(transform, 'fold');
const measures = fold?.measures ?? [];
```
