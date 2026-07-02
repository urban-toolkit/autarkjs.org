[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonDefaultLatLngGeometryColumns

# Type Alias: JsonDefaultLatLngGeometryColumns

> **JsonDefaultLatLngGeometryColumns** = `true`

Defined in: [use-cases/load-json/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-json/interfaces.ts#L11)

Enables point geometry creation from the default `Latitude` and `Longitude` JSON fields.

Set to `true` to use the shorthand mode where latitude and longitude columns are named `Latitude` and `Longitude`.

## Example

```ts
const columns: JsonDefaultLatLngGeometryColumns = true;
```
