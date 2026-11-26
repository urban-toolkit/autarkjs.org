# Type Alias: AggregateFunction

> **AggregateFunction** = `"sum"` \| `"avg"` \| `"count"` \| `"min"` \| `"max"` \| `"weighted"` \| `"collect"`

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/spatial-join/interfaces.ts#L9)

Supported aggregation functions for spatial join results.

Used within `groupBy` to compute aggregate values from join-side data.

## Example

```ts
const fn: AggregateFunction = 'count';
```
