[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / isRasterTable

# Function: isRasterTable()

> **isRasterTable**(`table`): table is GeotiffTable \| UserTable & \{ type: "raster" \}

Defined in: [interfaces.ts:215](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L215)

Narrows a table to raster-backed layers.

Use this guard before reading raster band metadata or raster-specific options.

## Parameters

### table

[`Table`](../type-aliases/Table.md)

Table metadata to inspect.

## Returns

table is GeotiffTable \| UserTable & \{ type: "raster" \}

`true` when the table represents raster data.

## Throws

Never throws.

## Example

```ts
const rasterTables = tables.filter(isRasterTable);
console.log(rasterTables[0]?.bands?.map((band) => band.label)); // ['Band 1']
```
