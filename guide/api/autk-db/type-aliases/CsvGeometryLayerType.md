[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvGeometryLayerType

# Type Alias: CsvGeometryLayerType

> **CsvGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [use-cases/load-csv/interfaces.ts:103](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/load-csv/interfaces.ts#L103)

Restricts CSV-derived geometry to vector layer families supported by the database.

CSV imports can only produce point, polyline, or polygon layers because raster outputs are not inferred from tabular rows.

## Example

```ts
const layerType: CsvGeometryLayerType = 'points';
```
