[**autk-db**](../index.md)

***

[autk-db](../globals.md) / SpatialQueryParams

# Interface: SpatialQueryParams

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:3](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L3)

## Properties

### groupBy?

> `optional` **groupBy?**: `object`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:14](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L14)

#### selectColumns

> **selectColumns**: `object`[]

***

### joinType?

> `optional` **joinType?**: `"INNER"` \| `"LEFT"` \| `"RIGHT"` \| `"FULL"`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L11)

***

### nearDistance?

> `optional` **nearDistance?**: `number`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:12](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L12)

***

### nearUseCentroid?

> `optional` **nearUseCentroid?**: `boolean`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L13)

***

### output

> **output**: `object`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:6](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L6)

#### tableName?

> `optional` **tableName?**: `string`

#### type

> **type**: `"MODIFY_ROOT"` \| `"CREATE_NEW"`

***

### spatialPredicate?

> `optional` **spatialPredicate?**: `"INTERSECT"` \| `"NEAR"`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:10](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L10)

***

### tableJoinName

> **tableJoinName**: `string`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:5](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L5)

***

### tableRootName

> **tableRootName**: `string`

Defined in: [autk-db/src/spatial/use-cases/spatial-join/interfaces.ts:4](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/spatial-join/interfaces.ts#L4)
