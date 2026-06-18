[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / CsvLatLngGeometryColumns

# Interface: CsvLatLngGeometryColumns

Defined in: [use-cases/load-csv/interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L25)

Describes how to build point geometry from explicit latitude and longitude columns.

Use this shape when coordinate values exist in custom columns or arrive in a CRS that must be transformed.

## Example

```ts
const geometryColumns: CsvLatLngGeometryColumns = {
  latColumnName: 'lat',
  longColumnName: 'lng',
  coordinateFormat: 'EPSG:4326',
};
```

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L31)

CRS of the source coordinate columns before they are transformed into the workspace CRS.

***

### latColumnName

> **latColumnName**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L27)

Name of the column that stores latitude values used to create point geometries.

***

### longColumnName

> **longColumnName**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L29)

Name of the column that stores longitude values used to create point geometries.
