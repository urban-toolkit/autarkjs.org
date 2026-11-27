# Interface: CsvLatLngGeometryColumns

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:24](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-csv/interfaces.ts#L24)

Describes how to build point geometry from explicit latitude and longitude columns.

Use this shape when coordinate values exist in custom columns or arrive in a CRS that must be transformed.

## Example

```ts
const geometryColumns: CsvLatLngGeometryColumns = {
  latColumnName: 'lat',
  longColumnName: 'lng',
};
```

## Properties

### latColumnName

> **latColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:26](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-csv/interfaces.ts#L26)

Name of the column that stores latitude values used to create point geometries.

***

### longColumnName

> **longColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:28](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-csv/interfaces.ts#L28)

Name of the column that stores longitude values used to create point geometries.
