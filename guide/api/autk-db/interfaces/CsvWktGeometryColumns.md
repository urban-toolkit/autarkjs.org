[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvWktGeometryColumns

# Interface: CsvWktGeometryColumns

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:45](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-csv/interfaces.ts#L45)

Describes how to build geometry from a single WKT column.

The resulting layer family is inferred after the WKT text is parsed into DuckDB spatial geometries.

## Example

```ts
const geometryColumns: CsvWktGeometryColumns = {
  wktColumnName: 'geometry_wkt',
  coordinateFormat: 'EPSG:3857',
};
```

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:49](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-csv/interfaces.ts#L49)

CRS of the source WKT geometry before it is transformed into the workspace CRS.

***

### wktColumnName

> **wktColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:47](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-csv/interfaces.ts#L47)

Name of the column that stores WKT geometry text such as `POINT(...)` or `POLYGON(...)`.
