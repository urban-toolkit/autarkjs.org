# Function: isRenderableTable()

> **isRenderableTable**(`table`): `table is Table & { type: LayerType }`

Defined in: [autk-db/src/interfaces.ts:187](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L187)

Narrows a table to metadata that can be rendered on a map.

Use this guard before accessing `table.type` in visualization code.

## Parameters

### table

[`Table`](../type-aliases/Table.md)

Table metadata to inspect.

## Returns

`table is Table & { type: LayerType }`

`true` when the table has a defined renderable `type`.

## Throws

Never throws.

## Example

```ts
const renderable = tables.filter(isRenderableTable);
console.log(renderable[0]?.type); // 'point', 'polygon', 'line', or 'raster'
```
