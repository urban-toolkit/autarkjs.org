# Interface: JsonWktGeometryColumns

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:32](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L32)

Describes how to build geometry from a single WKT JSON field.

## Example

```ts
const columns: JsonWktGeometryColumns = { wktColumnName: 'geom' };
```

## Properties

### wktColumnName

> **wktColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:34](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L34)

Name of the field that stores WKT geometry text such as `POINT(...)` or `POLYGON(...)`.
