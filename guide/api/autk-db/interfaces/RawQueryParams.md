# Interface: RawQueryParams

Defined in: [autk-db/src/use-cases/raw-query/interfaces.ts:6](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/raw-query/interfaces.ts#L6)

## Properties

### output

> **output**: `object`

Defined in: [autk-db/src/use-cases/raw-query/interfaces.ts:8](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/raw-query/interfaces.ts#L8)

#### source?

> `optional` **source?**: [`TableSource`](../type-aliases/TableSource.md)

Optional: identify the origin/source of this new table

#### tableName?

> `optional` **tableName?**: `string`

#### tableType?

> `optional` **tableType?**: `LayerType`

Optional: semantic layer type of this new table

#### type

> **type**: `"CREATE_TABLE"` \| `"RETURN_OBJECT"`

***

### query

> **query**: `string`

Defined in: [autk-db/src/use-cases/raw-query/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/raw-query/interfaces.ts#L7)
