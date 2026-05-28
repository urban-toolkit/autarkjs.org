# Updating tables

`updateTable` modifies an existing table without reloading the original source data. This is useful when you compute new attributes, apply user edits, or replace a dataset that is already registered in `autk-db`.

## Replace strategy

The `replace` strategy drops and recreates the table with new data. Use this when the entire dataset changes.

For a renderable table, pass a GeoJSON `FeatureCollection`:

```typescript
const updatedGeojson = /* new FeatureCollection */;

await db.updateTable({
  tableName: 'buildings',
  data: updatedGeojson,
  strategy: 'replace',
});
```

For tabular data, pass an array of plain objects:

```typescript
await db.updateTable({
  tableName: 'incidents',
  data: [
    { id: 1, severity: 3 },
    { id: 2, severity: 5 },
  ],
  strategy: 'replace',
});
```

## Update by ID strategy

The `update` strategy updates rows that match an ID column and leaves unmatched rows untouched.

```typescript
await db.updateTable({
  tableName: 'buildings',
  data: updatedGeojson,
  strategy: 'update',
  idColumn: 'properties.building_id',
});
```

`idColumn` supports:

- `'id'` — matches on the top-level `id` field of each GeoJSON feature
- `'properties.some_attribute'` — matches on a nested property

:::tip Combine with autk-compute
A common pattern is to compute new values with `autk-compute`, then call `updateTable` to write the results back before re-rendering a map layer with updated thematic data.
:::

## Return value

`updateTable` returns the updated `Table` object with refreshed column metadata:

```typescript
const table = await db.updateTable({ ... });
console.log(table.columns);
```

## Remove a table

`removeLayer` drops a table from DuckDB and removes it from the current workspace metadata:

```typescript
await db.removeLayer('incidents');
```

After removal, the table no longer appears in `db.tables` or `db.getLayerTables()`.

## Updating vs reloading

Use `updateTable` when you want to preserve the table name and keep downstream code pointing to the same table. Reload data when the source itself should be fetched or parsed again.
