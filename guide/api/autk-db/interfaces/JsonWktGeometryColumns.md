# Interface: JsonWktGeometryColumns

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:32](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L32)

Describes how to build geometry from a single WKT JSON field.

## Example

```ts
const columns: JsonWktGeometryColumns = { wktColumnName: 'geom' };
```

## Properties

### wktColumnName

> **wktColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:34](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L34)

Name of the field that stores WKT geometry text such as `POINT(...)` or `POLYGON(...)`.
