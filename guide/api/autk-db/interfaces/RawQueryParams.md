[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / RawQueryParams

# Interface: RawQueryParams

Defined in: [use-cases/raw-query/interfaces.ts:6](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/raw-query/interfaces.ts#L6)

## Properties

### output

> **output**: `object`

Defined in: [use-cases/raw-query/interfaces.ts:8](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/raw-query/interfaces.ts#L8)

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

Defined in: [use-cases/raw-query/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/raw-query/interfaces.ts#L7)
