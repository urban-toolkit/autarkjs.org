[**autk-db**](../index.md)

***

[autk-db](../globals.md) / RawQueryParams

# Interface: RawQueryParams

Defined in: [autk-db/src/spatial/use-cases/raw-query/interfaces.ts:5](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/raw-query/interfaces.ts#L5)

## Properties

### output

> **output**: `object`

Defined in: [autk-db/src/spatial/use-cases/raw-query/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/raw-query/interfaces.ts#L7)

#### source?

> `optional` **source?**: `"user"` \| `"osm"` \| `"geojson"` \| `"csv"`

Optional: identify the origin/source of this new table

#### tableName?

> `optional` **tableName?**: `string`

#### tableType?

> `optional` **tableType?**: [`LayerType`](../type-aliases/LayerType.md) \| `"pointset"`

Optional: logical type of the table (layer type or pointset)

#### type

> **type**: `"CREATE_TABLE"` \| `"RETURN_OBJECT"`

***

### query

> **query**: `string`

Defined in: [autk-db/src/spatial/use-cases/raw-query/interfaces.ts:6](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/raw-query/interfaces.ts#L6)
