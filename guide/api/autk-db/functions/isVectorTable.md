[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / isVectorTable

# Function: isVectorTable()

> **isVectorTable**(`table`): table is OsmLayerTable \| GeojsonTable \| CsvTable & \{ type: "water" \| "background" \| "surface" \| "parks" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \} \| UserTable & \{ type: "water" \| "background" \| "surface" \| "parks" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \}

Defined in: [interfaces.ts:197](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L197)

Narrows a table to vector geometry layers.

Excludes raw OSM tables, plain tabular imports, and raster tables.

## Parameters

### table

[`Table`](../type-aliases/Table.md)

Table metadata to inspect.

## Returns

table is OsmLayerTable \| GeojsonTable \| CsvTable & \{ type: "water" \| "background" \| "surface" \| "parks" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \} \| UserTable & \{ type: "water" \| "background" \| "surface" \| "parks" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \}

`true` when the table has a non-raster layer `type`.

## Throws

Never throws.

## Example

```ts
const vectorTables = tables.filter(isVectorTable);
console.log(vectorTables.every((table) => table.type !== 'raster')); // true
```
