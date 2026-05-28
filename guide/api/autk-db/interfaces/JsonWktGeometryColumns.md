[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonWktGeometryColumns

# Interface: JsonWktGeometryColumns

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:34](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L34)

Describes how to build geometry from a single WKT JSON field.

## Example

```ts
const columns: JsonWktGeometryColumns = { wktColumnName: 'geom' };
```

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:38](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L38)

CRS of the source WKT geometry before it is transformed into the workspace CRS.

***

### wktColumnName

> **wktColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:36](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L36)

Name of the field that stores WKT geometry text such as `POINT(...)` or `POLYGON(...)`.
