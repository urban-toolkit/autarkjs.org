# Type Alias: AggregateFunction

> **AggregateFunction** = `"sum"` \| `"avg"` \| `"count"` \| `"min"` \| `"max"` \| `"weighted"` \| `"collect"`

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/spatial-join/interfaces.ts#L9)

Supported aggregation functions for spatial join results.

Used within `groupBy` to compute aggregate values from join-side data.

## Example

```ts
const fn: AggregateFunction = 'count';
```
