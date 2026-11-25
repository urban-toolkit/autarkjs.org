[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ProvenancePair

# Type Alias: ProvenancePair

> **ProvenancePair** = `object`

Defined in: [types-provenance.ts:19](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L19)

One pair of a provenance relation.

`source` contributed to `target`; `weight` counts how many times it did so
(e.g. a feature with three events in the same bucket has weight `3`).
Weights are natural numbers for counting transforms and non-negative reals
for fractional coverage (e.g. the kernel weight of a feature at a density point).

## Properties

### source

> **source**: [`ProvenanceId`](ProvenanceId.md)

Defined in: [types-provenance.ts:21](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L21)

Contributing entity in the source stage.

***

### target

> **target**: [`ProvenanceId`](ProvenanceId.md)

Defined in: [types-provenance.ts:23](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L23)

Produced entity in the target stage.

***

### weight

> **weight**: `number`

Defined in: [types-provenance.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-provenance.ts#L25)

Multiplicity of the contribution, or its real weight for fractional coverage.
