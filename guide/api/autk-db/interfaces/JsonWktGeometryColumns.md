[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonWktGeometryColumns

# Interface: JsonWktGeometryColumns

Defined in: [use-cases/load-json/interfaces.ts:34](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-json/interfaces.ts#L34)

Describes how to build geometry from a single WKT JSON field.

## Example

```ts
const columns: JsonWktGeometryColumns = { wktColumnName: 'geom' };
```

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [use-cases/load-json/interfaces.ts:38](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-json/interfaces.ts#L38)

CRS of the source WKT geometry before it is transformed into the workspace CRS.

***

### wktColumnName

> **wktColumnName**: `string`

Defined in: [use-cases/load-json/interfaces.ts:36](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-json/interfaces.ts#L36)

Name of the field that stores WKT geometry text such as `POINT(...)` or `POLYGON(...)`.
