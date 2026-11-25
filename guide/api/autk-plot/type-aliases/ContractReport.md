[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ContractReport

# Type Alias: ContractReport

> **ContractReport** = `object`

Defined in: [provenance/validate.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/validate.ts#L35)

Result of checking the contract: violations, and invariants not checked
(4 when 1–3 fail, 6 when the reducer is not additive, all when `run` fails).

## Properties

### skipped

> **skipped**: `number`[]

Defined in: [provenance/validate.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/validate.ts#L37)

***

### truncated?

> `optional` **truncated?**: `boolean`

Defined in: [provenance/validate.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/validate.ts#L39)

Set when there were more violations than the ones reported (they are capped).

***

### violations

> **violations**: [`ContractViolation`](ContractViolation.md)[]

Defined in: [provenance/validate.ts:36](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/validate.ts#L36)
