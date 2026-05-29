[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / BuildHeatmapParams

# Interface: BuildHeatmapParams

Defined in: [use-cases/build-heatmap/interfaces.ts:23](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/build-heatmap/interfaces.ts#L23)

Parameters for building a heatmap from spatially joined data.

## Note

Requires a valid bounding box and source table to be passed at execution time.

## Properties

### grid

> **grid**: `object`

Defined in: [use-cases/build-heatmap/interfaces.ts:33](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/build-heatmap/interfaces.ts#L33)

Grid dimensions for the heatmap overlay.

#### columns

> **columns**: `number`

Number of columns in the output grid.

#### rows

> **rows**: `number`

Number of rows in the output grid.

***

### groupBy?

> `optional` **groupBy?**: `HeatmapGroupBy`[]

Defined in: [use-cases/build-heatmap/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/build-heatmap/interfaces.ts#L31)

Optional group-by columns to aggregate into separate raster bands.

***

### near

> **near**: [`NearConfig`](NearConfig.md)

Defined in: [use-cases/build-heatmap/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/build-heatmap/interfaces.ts#L27)

NEAR predicate configuration for heatmap generation.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/build-heatmap/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/build-heatmap/interfaces.ts#L29)

Name of the output table that will hold the heatmap result.

***

### tableJoinName

> **tableJoinName**: `string`

Defined in: [use-cases/build-heatmap/interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/build-heatmap/interfaces.ts#L25)

Name of the source table to join against the grid.
