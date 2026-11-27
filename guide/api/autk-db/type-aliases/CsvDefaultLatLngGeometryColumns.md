# Type Alias: CsvDefaultLatLngGeometryColumns

> **CsvDefaultLatLngGeometryColumns** = `true`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-csv/interfaces.ts#L11)

Enables point geometry creation from the default `Latitude` and `Longitude` CSV columns.

This shorthand covers the common case where input files already follow the expected column naming convention.

## Example

```ts
const geometryColumns: CsvDefaultLatLngGeometryColumns = true;
```
