[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvGeometryLayerType

# Type Alias: CsvGeometryLayerType

> **CsvGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [use-cases/load-csv/interfaces.ts:103](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-csv/interfaces.ts#L103)

Restricts CSV-derived geometry to vector layer families supported by the database.

CSV imports can only produce point, polyline, or polygon layers because raster outputs are not inferred from tabular rows.

## Example

```ts
const layerType: CsvGeometryLayerType = 'points';
```
