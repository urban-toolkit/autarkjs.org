[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvDefaultLatLngGeometryColumns

# Type Alias: CsvDefaultLatLngGeometryColumns

> **CsvDefaultLatLngGeometryColumns** = `true`

Defined in: [use-cases/load-csv/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/load-csv/interfaces.ts#L11)

Enables point geometry creation from the default `Latitude` and `Longitude` CSV columns.

This shorthand covers the common case where input files already follow the expected column naming convention.

## Example

```ts
const geometryColumns: CsvDefaultLatLngGeometryColumns = true;
```
