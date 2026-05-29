[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / GetTableOutput

# Type Alias: GetTableOutput

> **GetTableOutput** = `Record`\<`string`, `unknown`\>[]

Defined in: use-cases/get-table/interfaces.ts:9

Array of plain objects representing rows from the queried table.

Each object's keys correspond to the table column names.

## Example

```ts
const rows: GetTableOutput = [{ name: 'Park A', area: 500 }, { name: 'Park B', area: 1200 }];
```
