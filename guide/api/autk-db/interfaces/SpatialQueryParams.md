[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / SpatialQueryParams

# Interface: SpatialQueryParams

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:43](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/spatial-join/interfaces.ts#L43)

Parameters for a spatial join between two tables.

The join always modifies the root table in place using a LEFT join.
Aggregated results are stored under `properties.sjoin.<aggregateFn>.<key>` in the root table.

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

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:54](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/spatial-join/interfaces.ts#L54)

Optional aggregation applied to join-side data. Keys are derived from `tableJoinName` and the aggregate function.

#### aggregateFn?

> `optional` **aggregateFn?**: [`AggregateFunction`](../type-aliases/AggregateFunction.md)

Aggregation function. Omit to pass the column through without aggregation.

#### column

> **column**: `string`

Column name to aggregate. Use `'*'` for row-level aggregations like `count`.

#### normalize?

> `optional` **normalize?**: `boolean`

When `true`, normalizes the aggregated value between 0 and 1.

***

### near?

> `optional` **near?**: [`NearConfig`](NearConfig.md)

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:52](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/spatial-join/interfaces.ts#L52)

NEAR predicate configuration. When present, the join uses `'NEAR'` instead of `'INTERSECT'`.
Finds features within the specified distance from root geometries.

***

### tableJoinName

> **tableJoinName**: `string`

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:47](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/spatial-join/interfaces.ts#L47)

Name of the table to join against the root.

***

### tableRootName

> **tableRootName**: `string`

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:45](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/spatial-join/interfaces.ts#L45)

Name of the root table that will be modified in place.
