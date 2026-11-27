# Type Alias: UpdateStrategy

> **UpdateStrategy** = `"replace"` \| `"update"`

Defined in: [autk-db/src/use-cases/update-table/interfaces.ts:14](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/update-table/interfaces.ts#L14)

Strategy for replacing or updating an existing table.

- `'replace'` drops and recreates the entire table with new data.
- `'update'` modifies existing records by ID without inserting new ones.

## Example

```ts
const strategy: UpdateStrategy = 'update';
```
