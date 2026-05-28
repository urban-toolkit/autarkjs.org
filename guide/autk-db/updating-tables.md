<script setup>
const replaceLayerCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

const layer = await db.getLayer('neighborhoods');
const updatedGeojson = {
    ...layer,
    features: layer.features.map((feature, index) => ({
        ...feature,
        properties: {
            ...feature.properties,
            highlighted: index < 3,
        },
    })),
};

const table = await db.updateTable({
    tableName: 'neighborhoods',
    data: updatedGeojson,
    strategy: 'replace',
});

console.log(table.name, table.columns.length);
`

const replaceRowsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadJson({
    jsonObject: [
        { id: 1, severity: 3, label: 'A' },
        { id: 2, severity: 4, label: 'B' },
    ],
    outputTableName: 'incidents',
});

const table = await db.updateTable({
    tableName: 'incidents',
    data: [
        { id: 1, severity: 2, label: 'Updated A' },
        { id: 2, severity: 5, label: 'Updated B' },
        { id: 3, severity: 1, label: 'New C' },
    ],
    strategy: 'replace',
});

const rows = await db.getTables({ tableName: 'incidents' });
console.log(table.name, rows);
`

const updateByIdCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

const layer = await db.getLayer('neighborhoods');
const updates = {
    type: 'FeatureCollection',
    features: layer.features.slice(0, 2).map((feature, index) => ({
        ...feature,
        properties: {
            ...feature.properties,
            priority: index + 1,
        },
    })),
};

const table = await db.updateTable({
    tableName: 'neighborhoods',
    data: updates,
    strategy: 'update',
    idColumn: 'properties.ntaname',
});

console.log(table.name, table.columns.map((column) => column.name));
`

const removeLayerCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

console.log(db.tables.map((table) => table.name));
await db.removeLayer('neighborhoods');
console.log(db.tables.map((table) => table.name));
`
</script>

<style scoped>
.introduction-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

<div class="introduction-page">

# Updating tables

Once a table is loaded into DuckDB, [`updateTable`](/api/autk-db/classes/AutkDb#updatetable) lets you replace its contents or update existing records without creating a new table name. This is useful when you compute new attributes, apply edits coming from a user interface, or refresh a dataset while keeping the rest of your code pointed at the same table.

Unlike the loading methods described in [Loading data](./loading-data.md), updating does not create a new table. Instead, it modifies a table that already exists in the current workspace. That makes it especially useful in iterative workflows where the table has already been used by analysis or rendering code.

## Replace a table

Use the [`replace`](/api/autk-db/type-aliases/UpdateStrategy) strategy when the entire dataset should be swapped with a new one. Internally, `autk-db` drops the previous table and recreates it from the new data.

This is the simplest strategy when:

- the full dataset has changed
- the number of rows or features may change
- you want the table to keep the same name while replacing all of its contents

### Replacing a vector layer

For renderable vector tables, pass a GeoJSON `FeatureCollection` as [`data`](/api/autk-db/interfaces/UpdateTableParams#data).

<ClientOnly>
  <CodePlayground :code="replaceLayerCode" out="console" />
</ClientOnly>

In this example, the `neighborhoods` table is first loaded from GeoJSON, then rewritten with an updated `highlighted` property. Because the strategy is `replace`, the old table contents are discarded and the new `FeatureCollection` becomes the full table.

### Replacing tabular data

For JSON or CSV-style tables, pass an array of plain objects.

<ClientOnly>
  <CodePlayground :code="replaceRowsCode" out="console" />
</ClientOnly>

This pattern is useful when a non-spatial dataset is edited outside DuckDB and then written back in one step. Because the whole table is recreated, rows can be added, removed, or reordered freely.

:::tip When to prefer `replace`
Use [`replace`](/api/autk-db/type-aliases/UpdateStrategy) when you already have the full next version of the dataset in memory. It is often the most predictable option because the final table is determined entirely by the new input.
:::

## Update existing records by ID

Use the [`update`](/api/autk-db/type-aliases/UpdateStrategy) strategy when you want to modify only records that already exist in the table. In this mode, [`idColumn`](/api/autk-db/interfaces/UpdateTableParams#idcolumn) is required so `autk-db` knows how to match incoming records with stored ones.

<ClientOnly>
  <CodePlayground :code="updateByIdCode" out="console" />
</ClientOnly>

In the example above, only the features whose `properties.ntaname` values match existing rows in the `neighborhoods` table are updated. The rest of the table is left untouched.

The [`idColumn`](/api/autk-db/interfaces/UpdateTableParams#idcolumn) value may refer to:

- a direct column such as `id`
- a nested GeoJSON property path such as `properties.building_id`

:::warning `update` does not insert new rows
The [`update`](/api/autk-db/type-aliases/UpdateStrategy) strategy only modifies rows that already exist. If an incoming record does not match an existing ID, it is not inserted as a new row. If you need to fully replace the dataset, use [`replace`](/api/autk-db/type-aliases/UpdateStrategy) instead.
:::

## Returned value

[`updateTable`](/api/autk-db/classes/AutkDb#updatetable) returns the updated table metadata after the operation completes. This is useful when you want to inspect the refreshed schema, confirm the table name, or pass the updated table to later steps.

```ts
const table = await db.updateTable({ ... });
console.log(table.columns);
```

## List of `updateTable` parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/api/autk-db/interfaces/UpdateTableParams#tablename"><code>tableName</code></a></td>
      <td><code>string</code></td>
      <td>Name of the table to update.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/UpdateTableParams#data"><code>data</code></a></td>
      <td><code>FeatureCollection | Record&lt;string, unknown&gt;[]</code></td>
      <td>Replacement or update payload. Use GeoJSON for layer tables and plain object arrays for JSON or CSV-style tables.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/UpdateTableParams#strategy"><code>strategy</code></a></td>
      <td><code>"replace" | "update"</code></td>
      <td>Update mode. <code>replace</code> recreates the whole table; <code>update</code> modifies matching existing records only.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/UpdateTableParams#idcolumn"><code>idColumn</code></a></td>
      <td><code>string</code></td>
      <td>Required when <code>strategy</code> is <code>"update"</code>. Used to match incoming records with existing rows.</td>
    </tr>
  </tbody>
</table>

:::info Workspace behavior
[`updateTable`](/api/autk-db/classes/AutkDb#updatetable) operates on a table that already exists in the current workspace. In practice, this means you should make sure the intended workspace is active before updating a table.
:::

## Remove a table

[`removeLayer`](/api/autk-db/classes/AutkDb#removelayer) drops a table from DuckDB and unregisters it from the active workspace.

<ClientOnly>
  <CodePlayground :code="removeLayerCode" out="console" />
</ClientOnly>

After removal, the table no longer appears in [`db.tables`](./retrieving-data.md#inspect-registered-tables) or [`getLayerTables()`](./retrieving-data.md#list-renderable-tables). This is useful when a table is no longer needed, when you want to free the workspace from intermediate results, or when a temporary layer should not remain available to later analysis steps.

#### List of `removeLayer` parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>tableName</code></td>
      <td><code>string</code></td>
      <td>Name of the table to remove.</td>
    </tr>
  </tbody>
</table>

## Updating vs loading again

Use [`updateTable`](/api/autk-db/classes/AutkDb#updatetable) when you want to preserve the existing table name and keep downstream code pointing to the same object in the workspace. This is especially useful after running custom logic in JavaScript or after editing properties in a UI.

Use the loading methods again when the source itself needs to be fetched, parsed, or re-ingested from its original format. In other words, loading is usually the right choice when the external source of truth has changed, while updating is often the better choice when the data has already been brought into the application and only needs to be rewritten.

</div>
