[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / HeatmapGroupBy

# Interface: HeatmapGroupBy

Defined in: [use-cases/build-heatmap/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/build-heatmap/interfaces.ts#L9)

Shared heatmap group-by item, aligned with `spatialQuery` except that `collect` is not supported.

## Properties

### aggregateFn?

> `optional` **aggregateFn?**: [`HeatmapAggregateFunction`](../type-aliases/HeatmapAggregateFunction.md)

Defined in: [use-cases/build-heatmap/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/build-heatmap/interfaces.ts#L13)

Aggregation function to apply on the grouped values.

***

### column

> **column**: `string`

Defined in: [use-cases/build-heatmap/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/build-heatmap/interfaces.ts#L11)

Column name to aggregate. Use `'*'` for row-level aggregations like `count`.

***

### normalize?

> `optional` **normalize?**: `boolean`

Defined in: [use-cases/build-heatmap/interfaces.ts:15](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/build-heatmap/interfaces.ts#L15)

When `true`, normalizes the aggregated value between 0 and 1.
