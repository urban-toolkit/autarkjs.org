[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadCsvParams

# Interface: LoadCsvParams

Defined in: [use-cases/load-csv/interfaces.ts:80](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L80)

Describes the inputs required to load CSV data into DuckDB.

Callers can provide either a remote CSV file URL or an in-memory CSV matrix, with optional geometry creation rules.

## Example

```ts
const params: LoadCsvParams = {
  csvFileUrl: 'https://example.com/parcels.csv',
  outputTableName: 'parcels',
  geometryColumns: { wktColumnName: 'wkt' },
};
```

## Properties

### csvFileUrl?

> `optional` **csvFileUrl?**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:82](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L82)

URL of the CSV file to fetch and load into DuckDB.

***

### csvObject?

> `optional` **csvObject?**: `unknown`[][]

Defined in: [use-cases/load-csv/interfaces.ts:84](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L84)

In-memory CSV rows to serialize, including the header row as the first entry.

***

### delimiter?

> `optional` **delimiter?**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:88](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L88)

Field delimiter used by the CSV source. Defaults to `,` in the use case.

***

### geometryColumns?

> `optional` **geometryColumns?**: [`CsvGeometryColumns`](../type-aliases/CsvGeometryColumns.md)

Defined in: [use-cases/load-csv/interfaces.ts:90](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L90)

Optional geometry strategy used to create a spatial column while loading.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:86](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L86)

Name of the output table created inside the target workspace.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-csv/interfaces.ts:92](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/use-cases/load-csv/interfaces.ts#L92)

Optional workspace override used by higher-level callers when qualifying the table name.
