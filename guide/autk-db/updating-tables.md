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
layer.features.forEach(f => f.properties.highlighted = true);

const table = await db.updateTable({
    tableName: 'neighborhoods',
    strategy: 'replace',
    data: layer
});

console.log(table);
`

const replaceRowsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
});

let csv = await db.getTable('noise');
csv = csv.filter(row => row.key < 20);

const table = await db.updateTable({
    tableName: 'noise',
    strategy: 'replace',
    data: csv
});

console.log(table);
`

const updateByIdCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
});

const csv = await db.getTable('noise');
const updates = csv
    .filter(row => row.key === 1 || row.key === 3)
    .map(row => ({
        ...row,
        date: '04/01/2025 12:00:00 AM',
    }));

await db.updateTable({
    tableName: 'noise',
    strategy: 'update',
    idColumn: 'key',
    data: updates,
});

console.log(await db.getTable('noise'));
`

const removeLayerCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods',
});

await db.removeLayer('neighborhoods');
console.log(db.getTablesMetadata().map((table) => table.name));
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

Once a table is loaded into DuckDB, [`updateTable`](/api/autk-db/classes/AutkDb#updatetable) lets you replace its contents or update existing records without creating a new table name. Unlike the loading methods described in [Loading data](./loading-data.md), updating does not create a new table. Instead, it modifies a table that already exists in the current [workspace](./workspaces.md).

:::info Returned metadata
1. Every table manipulation call returns the updated table metadata.

2. Operates on a table that already exists in the current workspace. In practice, this means you should make sure the intended workspace is active before updating a table.
:::


## Replace a table

Use the [`replace`](/api/autk-db/type-aliases/UpdateStrategy) strategy when the entire dataset should be swapped with a new one. Internally, `autk-db` drops the previous table and recreates it from the new data. This is the simplest strategy when the full dataset has changed and you want the table to keep the same name while replacing all of its contents.

### Replacing layer data

For renderable vector tables, pass a GeoJSON `FeatureCollection` as [`data`](/api/autk-db/interfaces/UpdateTableParams#data).

<ClientOnly>
  <CodePlayground :code="replaceLayerCode" out="console" />
</ClientOnly>

In this example, the `neighborhoods` table is first loaded from GeoJSON, then rewritten after adding a `highlighted` property to the features. Because the strategy is `replace`, the old table contents are discarded and the new `FeatureCollection` becomes the full table.

### Replacing tabular data

For JSON or CSV-style tables, pass an array of plain objects.

<ClientOnly>
  <CodePlayground :code="replaceRowsCode" out="console" />
</ClientOnly>

This pattern is useful when a non-spatial dataset is loaded from a file, edited in JavaScript, and then written back in one step. Because the whole table is recreated, rows can be added, removed, or reordered freely.

:::tip When to prefer `replace`
Use [`replace`](/api/autk-db/type-aliases/UpdateStrategy) when you already have the full next version of the dataset in memory. It is often the most predictable option because the final table is determined entirely by the new input.
:::

## Update records

Use the [`update`](/api/autk-db/type-aliases/UpdateStrategy) strategy when you want to modify only records that already exist in the table. In this mode, [`idColumn`](/api/autk-db/interfaces/UpdateTableParams#idcolumn) is required so `autk-db` knows how to match incoming records with stored ones.

<ClientOnly>
  <CodePlayground :code="updateByIdCode" out="console" />
</ClientOnly>

In the example above, only the rows whose `key` values match existing records in the `noise` table are updated.

Notice that `updates` contains full rows, not partial patches. For tabular tables, the `update` strategy expects the replacement rows to have the same column structure as the target table.

The [`idColumn`](/api/autk-db/interfaces/UpdateTableParams#idcolumn) value may refer to:

- a direct column such as `id`
- a nested GeoJSON property path such as `properties.building_id`

:::warning `update` does not insert new rows
The [`update`](/api/autk-db/type-aliases/UpdateStrategy) strategy only modifies rows that already exist. If an incoming record does not match an existing ID, it is not inserted as a new row.
:::


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



## Remove a table

[`removeLayer`](/api/autk-db/classes/AutkDb#removelayer) drops a table from the active workspace.

<ClientOnly>
  <CodePlayground :code="removeLayerCode" out="console" />
</ClientOnly>

After removal, the table no longer appears in [`getTablesMetadata()`](./retrieving-data.md#registered-tables) or [`getLayersMetadata()`](./retrieving-data.md#get-layer-metadata). This is useful when a table is no longer needed, when you want to free the workspace from intermediate results, or when a temporary layer should not remain available to later analysis steps.

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

</div>
