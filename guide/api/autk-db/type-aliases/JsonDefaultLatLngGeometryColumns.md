# Type Alias: JsonDefaultLatLngGeometryColumns

> **JsonDefaultLatLngGeometryColumns** = `true`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L11)

Enables point geometry creation from the default `Latitude` and `Longitude` JSON fields.

Set to `true` to use the shorthand mode where latitude and longitude columns are named `Latitude` and `Longitude`.

## Example

```ts
const columns: JsonDefaultLatLngGeometryColumns = true;
```
