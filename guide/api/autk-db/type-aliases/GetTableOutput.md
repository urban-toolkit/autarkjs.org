[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / GetTableOutput

# Type Alias: GetTableOutput

> **GetTableOutput** = `Record`\<`string`, `unknown`\>[]

Defined in: [use-cases/get-table/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-db/src/use-cases/get-table/interfaces.ts#L9)

Array of plain objects representing rows from the queried table.

Each object's keys correspond to the table column names.

## Example

```ts
const rows: GetTableOutput = [{ name: 'Park A', area: 500 }, { name: 'Park B', area: 1200 }];
```
