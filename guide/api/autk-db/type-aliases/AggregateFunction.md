[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / AggregateFunction

# Type Alias: AggregateFunction

> **AggregateFunction** = `"sum"` \| `"avg"` \| `"count"` \| `"min"` \| `"max"` \| `"weighted"` \| `"collect"`

Defined in: [use-cases/spatial-join/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-db/src/use-cases/spatial-join/interfaces.ts#L9)

Supported aggregation functions for spatial join results.

Used within `groupBy` to compute aggregate values from join-side data.

## Example

```ts
const fn: AggregateFunction = 'count';
```
