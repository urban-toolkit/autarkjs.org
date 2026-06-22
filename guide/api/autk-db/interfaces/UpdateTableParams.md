[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / UpdateTableParams

# Interface: UpdateTableParams

Defined in: [use-cases/update-table/interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/update-table/interfaces.ts#L25)

Parameters for updating an existing DuckDB table with new data.

When using the `'update'` strategy, `idColumn` is required and can reference a direct column (e.g. `'id'`) or a nested property (e.g. `'properties.building_id'`).

## Examples

```ts
const params: UpdateTableParams = { tableName: 'places', data: geoJson, strategy: 'replace' };
```

```ts
const params: UpdateTableParams = { tableName: 'buildings', data: geoJson, strategy: 'update', idColumn: 'properties.building_id' };
```

## Properties

### data

> **data**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\> \| `Record`\<`string`, `unknown`\>[]

Defined in: [use-cases/update-table/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/update-table/interfaces.ts#L29)

GeoJSON FeatureCollection for layer tables, or a plain object array for CSV/JSON tables.

***

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [use-cases/update-table/interfaces.ts:41](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/update-table/interfaces.ts#L41)

Required when `strategy` is `'update'`.

Supports direct column names (`'id'`) or nested property paths (`'properties.building_id'`) that resolve to `properties->>'building_id'` in SQL.

***

### strategy

> **strategy**: [`UpdateStrategy`](../type-aliases/UpdateStrategy.md)

Defined in: [use-cases/update-table/interfaces.ts:35](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/update-table/interfaces.ts#L35)

Strategy for updating the table:
- `'replace'`: Drop and recreate the entire table with the new data.
- `'update'`: Update existing records by ID (does not insert new records).

***

### tableName

> **tableName**: `string`

Defined in: [use-cases/update-table/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/update-table/interfaces.ts#L27)

Name of the table to update.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/update-table/interfaces.ts:43](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/update-table/interfaces.ts#L43)

Workspace namespace used to qualify the table name. Defaults to the system workspace.
