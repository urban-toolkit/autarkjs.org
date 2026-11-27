# Interface: BuildHeatmapParams

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L23)

Parameters for building a heatmap from spatially joined data.

## Remarks

Requires a valid bounding box and source table to be passed at execution time.

## Properties

### grid

> **grid**: `object`

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:35](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L35)

Grid dimensions for the heatmap overlay.

#### columns

> **columns**: `number`

Number of columns in the output grid.

#### rows

> **rows**: `number`

Number of rows in the output grid.

***

### groupBy?

> `optional` **groupBy?**: [`HeatmapGroupBy`](HeatmapGroupBy.md)[]

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L31)

Columns to aggregate into separate bands. Omit or pass an empty list to count nearby rows.

***

### near

> **near**: [`NearConfig`](NearConfig.md)

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L27)

NEAR predicate configuration for heatmap generation.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L29)

Name of the output table that will hold the heatmap result.

***

### smoothingSigma?

> `optional` **smoothingSigma?**: `number`

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:33](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L33)

Gaussian standard deviation in grid cells (0–32). Applied to each band after aggregation and normalization. Defaults to 0 (no smoothing).

***

### tableJoinName

> **tableJoinName**: `string`

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L25)

Name of the source table to join against the grid.
