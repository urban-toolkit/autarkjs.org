# Function: isVectorTable()

> **isVectorTable**(`table`): table is OsmLayerTable \| GeojsonTable \| CsvTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \| "tiles" \} \| UserTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \| "tiles" \}

Defined in: [autk-db/src/interfaces.ts:203](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L203)

Narrows a table to vector geometry layers.

Excludes raw OSM tables, plain tabular imports, and raster tables.

## Parameters

### table

[`Table`](../type-aliases/Table.md)

Table metadata to inspect.

## Returns

table is OsmLayerTable \| GeojsonTable \| CsvTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \| "tiles" \} \| UserTable & \{ type: "background" \| "surface" \| "parks" \| "water" \| "roads" \| "buildings" \| "points" \| "polygons" \| "polylines" \| "tiles" \}

`true` when the table has a non-raster layer `type`.

## Throws

Never throws.

## Example

```ts
const vectorTables = tables.filter(isVectorTable);
console.log(vectorTables.every((table) => table.type !== 'raster')); // true
```
