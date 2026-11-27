# Type Alias: GetTableOutput

> **GetTableOutput** = `Record`\<`string`, `unknown`\>[]

Defined in: [autk-db/src/use-cases/get-table/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/get-table/interfaces.ts#L9)

Array of plain objects representing rows from the queried table.

Each object's keys correspond to the table column names.

## Example

```ts
const rows: GetTableOutput = [{ name: 'Park A', area: 500 }, { name: 'Park B', area: 1200 }];
```
