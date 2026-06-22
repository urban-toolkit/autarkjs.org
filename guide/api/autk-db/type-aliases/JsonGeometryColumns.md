[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonGeometryColumns

# Type Alias: JsonGeometryColumns

> **JsonGeometryColumns** = [`JsonDefaultLatLngGeometryColumns`](JsonDefaultLatLngGeometryColumns.md) \| [`JsonLatLngGeometryColumns`](../interfaces/JsonLatLngGeometryColumns.md) \| [`JsonWktGeometryColumns`](../interfaces/JsonWktGeometryColumns.md)

Defined in: [use-cases/load-json/interfaces.ts:50](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/load-json/interfaces.ts#L50)

Lists the supported ways to derive geometry while loading a JSON file.

Use `true` for default lat/lng columns, provide a `JsonLatLngGeometryColumns` object for custom column names, or a `JsonWktGeometryColumns` object for WKT-based geometry.

## Example

```ts
const geo: JsonGeometryColumns = true; // uses default Latitude/Longitude fields
const geoWkt: JsonGeometryColumns = { wktColumnName: 'shape' };
```
