[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvGeometryColumns

# Type Alias: CsvGeometryColumns

> **CsvGeometryColumns** = [`CsvDefaultLatLngGeometryColumns`](CsvDefaultLatLngGeometryColumns.md) \| [`CsvLatLngGeometryColumns`](../interfaces/CsvLatLngGeometryColumns.md) \| [`CsvWktGeometryColumns`](../interfaces/CsvWktGeometryColumns.md)

Defined in: [use-cases/load-csv/interfaces.ts:63](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/load-csv/interfaces.ts#L63)

Lists the supported ways to derive geometry while loading a CSV file.

Use `true` for the default `Latitude` and `Longitude` columns, or pass an object to use custom coordinate or WKT columns.

## Example

```ts
const geometryColumns: CsvGeometryColumns = {
  latColumnName: 'y',
  longColumnName: 'x',
};
```
