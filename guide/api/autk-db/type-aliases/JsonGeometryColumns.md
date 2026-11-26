# Type Alias: JsonGeometryColumns

> **JsonGeometryColumns** = [`JsonDefaultLatLngGeometryColumns`](JsonDefaultLatLngGeometryColumns.md) \| [`JsonLatLngGeometryColumns`](../interfaces/JsonLatLngGeometryColumns.md) \| [`JsonWktGeometryColumns`](../interfaces/JsonWktGeometryColumns.md)

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:46](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L46)

Lists the supported ways to derive geometry while loading a JSON file.

Use `true` for default lat/lng columns, provide a `JsonLatLngGeometryColumns` object for custom column names, or a `JsonWktGeometryColumns` object for WKT-based geometry.

## Example

```ts
const geo: JsonGeometryColumns = true; // uses default Latitude/Longitude fields
const geoWkt: JsonGeometryColumns = { wktColumnName: 'shape' };
```
