[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / Column

# Interface: Column

Defined in: [interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/interfaces.ts#L25)

Describes a single table column as reported by DuckDB.

Keeps schema metadata small and stable for UI rendering and query planning.

## Properties

### name

> **name**: `string`

Defined in: [interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/interfaces.ts#L27)

Stable column name used in queries and result objects.

***

### type

> **type**: `string`

Defined in: [interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/interfaces.ts#L29)

Database type string returned for the column.
