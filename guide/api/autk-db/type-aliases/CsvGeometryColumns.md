# Type Alias: CsvGeometryColumns

> **CsvGeometryColumns** = [`CsvDefaultLatLngGeometryColumns`](CsvDefaultLatLngGeometryColumns.md) \| [`CsvLatLngGeometryColumns`](../interfaces/CsvLatLngGeometryColumns.md) \| [`CsvWktGeometryColumns`](../interfaces/CsvWktGeometryColumns.md)

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:57](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-csv/interfaces.ts#L57)

Lists the supported ways to derive geometry while loading a CSV file.

Use `true` for the default `Latitude` and `Longitude` columns, or pass an object to use custom coordinate or WKT columns.

## Example

```ts
const geometryColumns: CsvGeometryColumns = {
  latColumnName: 'y',
  longColumnName: 'x',
};
```
