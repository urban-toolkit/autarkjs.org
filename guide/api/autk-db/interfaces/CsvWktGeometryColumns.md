[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvWktGeometryColumns

# Interface: CsvWktGeometryColumns

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L41)

Describes how to build geometry from a single WKT column.

The resulting layer family is inferred after the WKT text is parsed into DuckDB spatial geometries.

## Example

```ts
const geometryColumns: CsvWktGeometryColumns = {
  wktColumnName: 'geometry_wkt',
};
```

## Properties

### wktColumnName

> **wktColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L43)

Name of the column that stores WKT geometry text such as `POINT(...)` or `POLYGON(...)`.
