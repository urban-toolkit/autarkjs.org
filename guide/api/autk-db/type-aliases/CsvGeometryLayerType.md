# Type Alias: CsvGeometryLayerType

> **CsvGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:100](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L100)

Restricts CSV-derived geometry to vector layer families supported by the database.

CSV imports can only produce point, polyline, or polygon layers because raster outputs are not inferred from tabular rows.

## Example

```ts
const layerType: CsvGeometryLayerType = 'points';
```
