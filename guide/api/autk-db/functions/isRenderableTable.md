[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / isRenderableTable

# Function: isRenderableTable()

> **isRenderableTable**(`table`): `table is Table & { type: LayerType }`

Defined in: [interfaces.ts:181](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L181)

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
