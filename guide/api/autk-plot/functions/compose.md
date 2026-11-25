[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / compose

# Function: compose()

> **compose**(`first`, `second`): [`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Defined in: [provenance/relations.ts:38](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/relations.ts#L38)

Composes two relations, returning `second ∘ first`.

Pairs meet on the intermediate id. Weights multiply along a path and add up
across alternative paths between the same source and target.

## Parameters

### first

[`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Relation applied first (`R_{i,j}`).

### second

[`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Relation applied second (`R_{j,k}`).

## Returns

[`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Composed relation `R_{i,k}`.

## Example

```ts
const r02 = compose(r01, r12);
```
