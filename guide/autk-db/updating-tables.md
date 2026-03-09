# Updating Tables

`updateTable` modifies an existing table without reloading the source data. This is useful when you have already rendered a map layer and want to update its attributes (for example, after a computation or a user-driven filter).

## Replace Strategy

Drops and recreates the table with new data. Use this when the entire dataset changes:

```typescript
const updatedGeojson = /* new FeatureCollection */;

await db.updateTable({
  tableName: 'buildings',
  data: updatedGeojson,
  strategy: 'replace',
});
```

For non-layer tables (CSV, JSON), pass an array of plain objects instead of a `FeatureCollection`:

```typescript
await db.updateTable({
  tableName: 'incidents',
  data: [{ id: 1, severity: 3 }, { id: 2, severity: 5 }],
  strategy: 'replace',
});
```

## Update by ID Strategy

Updates only the rows that match on a given ID column, leaving unmatched rows untouched:

```typescript
await db.updateTable({
  tableName: 'buildings',
  data: updatedGeojson,
  strategy: 'update',
  idColumn: 'properties.building_id', // dot notation for nested properties
});
```

`idColumn` supports:
- `'id'` — matches on the top-level `id` field of each GeoJSON feature
- `'properties.some_attribute'` — matches on a nested property

:::tip Combine with autk-compute
A common pattern is to compute new values with `autk-compute`, then call `updateTable` to write the results back before re-rendering the map layer with updated thematic data.
:::

## Return Value

`updateTable` returns the updated `Table` object with refreshed column metadata, which you can inspect to confirm the schema:

```typescript
const table = await db.updateTable({ ... });
console.log(table.columns);
```
