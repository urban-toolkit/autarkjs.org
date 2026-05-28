[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / GetTablesParams

# Interface: GetTablesParams

Defined in: [use-cases/get-tables/interfaces.ts:8](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/get-tables/interfaces.ts#L8)

Parameters for querying rows from a DuckDB table.

## Example

```ts
const params: GetTablesParams = { tableName: 'places', limit: 100 };
const paramsPaginated: GetTablesParams = { tableName: 'places', limit: 50, offset: 100 };
```

## Properties

### limit?

> `optional` **limit?**: `number`

Defined in: [use-cases/get-tables/interfaces.ts:12](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/get-tables/interfaces.ts#L12)

Maximum number of rows to return.

***

### offset?

> `optional` **offset?**: `number`

Defined in: [use-cases/get-tables/interfaces.ts:14](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/get-tables/interfaces.ts#L14)

Number of rows to skip before returning results.

***

### tableName

> **tableName**: `string`

Defined in: [use-cases/get-tables/interfaces.ts:10](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/get-tables/interfaces.ts#L10)

Unqualified name of the table to read rows from.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/get-tables/interfaces.ts:16](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/get-tables/interfaces.ts#L16)

Workspace namespace used to qualify the table name. Defaults to the system workspace.
