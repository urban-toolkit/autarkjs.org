[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / BuildHeatmapParams

# Interface: BuildHeatmapParams

Defined in: [use-cases/build-heatmap/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/build-heatmap/interfaces.ts#L13)

Parameters for building a heatmap from spatially joined data.

## Note

Requires a valid bounding box and source table to be passed at execution time.

## Properties

### grid

> **grid**: `object`

Defined in: [use-cases/build-heatmap/interfaces.ts:28](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/build-heatmap/interfaces.ts#L28)

Grid dimensions for the heatmap overlay.

#### columns

> **columns**: `number`

Number of columns in the output grid.

#### rows

> **rows**: `number`

Number of rows in the output grid.

***

### groupBy?

> `optional` **groupBy?**: `object`[]

Defined in: [use-cases/build-heatmap/interfaces.ts:21](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/build-heatmap/interfaces.ts#L21)

Optional group-by columns to aggregate into separate raster bands.

#### aggregateFn?

> `optional` **aggregateFn?**: [`HeatmapAggregateFunction`](../type-aliases/HeatmapAggregateFunction.md)

Aggregation function to apply on the grouped values.

#### column

> **column**: `string`

Column name to aggregate. Use `'*'` for row-level aggregations like `count`.

***

### near

> **near**: `object`

Defined in: [use-cases/build-heatmap/interfaces.ts:17](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/build-heatmap/interfaces.ts#L17)

NEAR predicate configuration for heatmap generation.

#### distance

> **distance**: `number`

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/build-heatmap/interfaces.ts:19](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/build-heatmap/interfaces.ts#L19)

Name of the output table that will hold the heatmap result.

***

### tableJoinName

> **tableJoinName**: `string`

Defined in: [use-cases/build-heatmap/interfaces.ts:15](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/build-heatmap/interfaces.ts#L15)

Name of the source table to join against the grid.
