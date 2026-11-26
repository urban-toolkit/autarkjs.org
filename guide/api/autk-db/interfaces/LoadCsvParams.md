# Interface: LoadCsvParams

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:75](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L75)

Describes the inputs required to load CSV data into DuckDB.

Callers can provide either a remote CSV file URL or an in-memory CSV matrix, with optional geometry creation rules.

## Example

```ts
const params: LoadCsvParams = {
  csvFileUrl: 'https://example.com/parcels.csv',
  outputTableName: 'parcels',
  geometryColumns: { wktColumnName: 'wkt' },
  sourceCrs: 'EPSG:4326',
};
```

## Properties

### csvFileUrl?

> `optional` **csvFileUrl?**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:77](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L77)

URL of the CSV file to fetch and load into DuckDB.

***

### csvObject?

> `optional` **csvObject?**: `unknown`[][]

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:79](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L79)

In-memory CSV rows to serialize, including the header row as the first entry.

***

### delimiter?

> `optional` **delimiter?**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L83)

Field delimiter used by the CSV source. Defaults to `,` in the use case.

***

### geometryColumns?

> `optional` **geometryColumns?**: [`CsvGeometryColumns`](../type-aliases/CsvGeometryColumns.md)

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:85](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L85)

Optional geometry strategy used to create a spatial column while loading.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L81)

Name of the output table created inside the target workspace.

***

### sourceCrs?

> `optional` **sourceCrs?**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:87](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L87)

CRS of the source coordinates or WKT. Defaults to `EPSG:4326`.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/use-cases/load-csv/interfaces.ts:89](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-csv/interfaces.ts#L89)

Optional workspace override used by higher-level callers when qualifying the table name.
