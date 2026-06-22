[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / GetTableOutput

# Type Alias: GetTableOutput

> **GetTableOutput** = `Record`\<`string`, `unknown`\>[]

Defined in: [use-cases/get-table/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/get-table/interfaces.ts#L9)

Array of plain objects representing rows from the queried table.

Each object's keys correspond to the table column names.

## Example

```ts
const rows: GetTableOutput = [{ name: 'Park A', area: 500 }, { name: 'Park B', area: 1200 }];
```
