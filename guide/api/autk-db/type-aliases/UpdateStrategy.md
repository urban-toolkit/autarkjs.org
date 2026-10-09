[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / UpdateStrategy

# Type Alias: UpdateStrategy

> **UpdateStrategy** = `"replace"` \| `"update"`

Defined in: [use-cases/update-table/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/update-table/interfaces.ts#L13)

Strategy for replacing or updating an existing table.

- `'replace'` drops and recreates the entire table with new data.
- `'update'` modifies existing records by ID without inserting new ones.

## Example

```ts
const strategy: UpdateStrategy = 'update';
```
