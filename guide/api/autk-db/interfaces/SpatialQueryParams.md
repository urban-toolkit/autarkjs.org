[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / SpatialQueryParams

# Interface: SpatialQueryParams

Defined in: [use-cases/spatial-join/interfaces.ts:49](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-db/src/use-cases/spatial-join/interfaces.ts#L49)

Parameters for a spatial join between two tables.

The join always modifies the root table in place using a LEFT join.
Each root feature remains one row. Aggregated results are stored under
`properties.sjoin.<aggregateFn>.<key>`. Without groupBy, matches are an array of
`{ id?, properties }` under `properties.sjoin.matches`, without repeated geometry.
Multipart geometries contribute once per pair of stored features.
A compact raster can be the join table: each decoded cell contributes its center
point, transformed to the workspace CRS. NoData values are ignored by numeric
aggregations. Pixel-area intersections are not computed; the root must be vector.

## Examples

```ts
await db.spatialQuery({ tableRootName: 'roads', tableJoinName: 'noise' });
```

```ts
await db.spatialQuery({
  tableRootName: 'neighborhoods',
  tableJoinName: 'schools',
  near: { distance: 500 },
  groupBy: [{ column: 'name', aggregateFn: 'count' }],
});
```

## Properties

### groupBy?

> `optional` **groupBy?**: `object`[]

Defined in: [use-cases/spatial-join/interfaces.ts:60](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-db/src/use-cases/spatial-join/interfaces.ts#L60)

Optional aggregation applied to join-side data. Keys are derived from `tableJoinName` and the aggregate function.

#### aggregateFn?

> `optional` **aggregateFn?**: [`AggregateFunction`](../type-aliases/AggregateFunction.md)

Aggregation function. Omit to collect the matched column values in an array.

#### column

> **column**: `string`

Column name to aggregate. Use `'*'` to count matched features, not their parts.

#### normalize?

> `optional` **normalize?**: `boolean`

When `true`, normalizes the aggregated value between 0 and 1.

***

### near?

> `optional` **near?**: [`NearConfig`](NearConfig.md)

Defined in: [use-cases/spatial-join/interfaces.ts:58](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-db/src/use-cases/spatial-join/interfaces.ts#L58)

NEAR predicate configuration. When present, the join uses `'NEAR'` instead of `'INTERSECT'`.
Finds features within the specified distance from root geometries.

***

### tableJoinName

> **tableJoinName**: `string`

Defined in: [use-cases/spatial-join/interfaces.ts:53](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-db/src/use-cases/spatial-join/interfaces.ts#L53)

Name of the vector or compact raster table to join against the vector root.

***

### tableRootName

> **tableRootName**: `string`

Defined in: [use-cases/spatial-join/interfaces.ts:51](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-db/src/use-cases/spatial-join/interfaces.ts#L51)

Name of the root table that will be modified in place.
