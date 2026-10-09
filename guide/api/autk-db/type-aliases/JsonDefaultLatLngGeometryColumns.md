[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonDefaultLatLngGeometryColumns

# Type Alias: JsonDefaultLatLngGeometryColumns

> **JsonDefaultLatLngGeometryColumns** = `true`

Defined in: [use-cases/load-json/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-json/interfaces.ts#L11)

Enables point geometry creation from the default `Latitude` and `Longitude` JSON fields.

Set to `true` to use the shorthand mode where latitude and longitude columns are named `Latitude` and `Longitude`.

## Example

```ts
const columns: JsonDefaultLatLngGeometryColumns = true;
```
