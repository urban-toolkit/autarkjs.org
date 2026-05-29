[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvDefaultLatLngGeometryColumns

# Type Alias: CsvDefaultLatLngGeometryColumns

> **CsvDefaultLatLngGeometryColumns** = `true`

Defined in: [use-cases/load-csv/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/load-csv/interfaces.ts#L11)

Enables point geometry creation from the default `Latitude` and `Longitude` CSV columns.

This shorthand covers the common case where input files already follow the expected column naming convention.

## Example

```ts
const geometryColumns: CsvDefaultLatLngGeometryColumns = true;
```
