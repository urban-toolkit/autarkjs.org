[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / AggregateFunction

# Type Alias: AggregateFunction

> **AggregateFunction** = `"sum"` \| `"avg"` \| `"count"` \| `"min"` \| `"max"` \| `"weighted"` \| `"collect"`

Defined in: [use-cases/spatial-join/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/spatial-join/interfaces.ts#L9)

Supported aggregation functions for spatial join results.

Used within `groupBy` to compute aggregate values from join-side data.

## Example

```ts
const fn: AggregateFunction = 'count';
```
