[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / GetTablesOutput

# Type Alias: GetTablesOutput

> **GetTablesOutput** = `Record`\<`string`, `unknown`\>[]

Defined in: [use-cases/get-tables/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/get-tables/interfaces.ts#L27)

Array of plain objects representing rows from the queried table.

Each object's keys correspond to the table column names.

## Example

```ts
const rows: GetTablesOutput = [{ name: 'Park A', area: 500 }, { name: 'Park B', area: 1200 }];
```
