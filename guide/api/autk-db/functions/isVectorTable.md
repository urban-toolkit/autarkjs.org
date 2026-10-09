[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / isVectorTable

# Function: isVectorTable()

> **isVectorTable**(`table`): table is OsmLayerTable \| GeojsonTable \| CsvTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \} \| UserTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \}

Defined in: [interfaces.ts:201](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/interfaces.ts#L201)

Narrows a table to vector geometry layers.

Excludes raw OSM tables, plain tabular imports, and raster tables.

## Parameters

### table

[`Table`](../type-aliases/Table.md)

Table metadata to inspect.

## Returns

table is OsmLayerTable \| GeojsonTable \| CsvTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \} \| UserTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \}

`true` when the table has a non-raster layer `type`.

## Throws

Never throws.

## Example

```ts
const vectorTables = tables.filter(isVectorTable);
console.log(vectorTables.every((table) => table.type !== 'raster')); // true
```
