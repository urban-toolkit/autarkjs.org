[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / isRasterTable

# Function: isRasterTable()

> **isRasterTable**(`table`): table is GeotiffTable \| UserTable & \{ type: "raster" \}

Defined in: [autk-db/src/interfaces.ts:221](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/interfaces.ts#L221)

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
