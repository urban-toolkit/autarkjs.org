# Interface: HeatmapGroupBy

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L9)

Shared heatmap group-by item, aligned with `spatialQuery` except that `collect` is not supported.

## Properties

### aggregateFn

> **aggregateFn**: [`HeatmapAggregateFunction`](../type-aliases/HeatmapAggregateFunction.md)

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L13)

Required aggregation function for the cell's value.

***

### column

> **column**: `string`

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L11)

Column name to aggregate. Use `'*'` for row-level aggregations like `count`.

***

### normalize?

> `optional` **normalize?**: `boolean`

Defined in: [autk-db/src/use-cases/build-heatmap/interfaces.ts:15](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/build-heatmap/interfaces.ts#L15)

When `true`, normalizes the aggregated value between 0 and 1.
