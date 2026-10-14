[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvGeometryLayerType

# Type Alias: CsvGeometryLayerType

> **CsvGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [use-cases/load-csv/interfaces.ts:103](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-db/src/use-cases/load-csv/interfaces.ts#L103)

Restricts CSV-derived geometry to vector layer families supported by the database.

CSV imports can only produce point, polyline, or polygon layers because raster outputs are not inferred from tabular rows.

## Example

```ts
const layerType: CsvGeometryLayerType = 'points';
```
