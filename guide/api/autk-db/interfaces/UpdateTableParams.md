[**autk-db**](../index.md)

***

[autk-db](../globals.md) / UpdateTableParams

# Interface: UpdateTableParams

Defined in: [autk-db/src/spatial/use-cases/update-table/interfaces.ts:6](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/update-table/interfaces.ts#L6)

## Properties

### data

> **data**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\> \| `Record`\<`string`, `unknown`\>[]

Defined in: [autk-db/src/spatial/use-cases/update-table/interfaces.ts:8](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/update-table/interfaces.ts#L8)

***

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [autk-db/src/spatial/use-cases/update-table/interfaces.ts:21](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/update-table/interfaces.ts#L21)

Required when strategy is 'update'.
Supports:
- Direct column: 'id' → matches on the id column directly
- Nested in properties: 'properties.building_id' → matches on properties->>'building_id'

***

### strategy

> **strategy**: [`UpdateStrategy`](../type-aliases/UpdateStrategy.md)

Defined in: [autk-db/src/spatial/use-cases/update-table/interfaces.ts:14](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/update-table/interfaces.ts#L14)

Strategy for updating the table:
- 'replace': Drop and recreate the entire table with the new data
- 'update': Update existing records by ID (does NOT insert new records)

***

### tableName

> **tableName**: `string`

Defined in: [autk-db/src/spatial/use-cases/update-table/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/update-table/interfaces.ts#L7)

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/spatial/use-cases/update-table/interfaces.ts:22](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/update-table/interfaces.ts#L22)
