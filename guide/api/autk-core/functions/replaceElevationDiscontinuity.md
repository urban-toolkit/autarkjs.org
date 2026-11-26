# Function: replaceElevationDiscontinuity()

> **replaceElevationDiscontinuity**(`value`, `coarse`, `neighbors`, `spacing`, `options`): `number`

Defined in: [elevation-validation.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L83)

Rejects extreme fine/coarse contradictions only when the coarse neighborhood
independently supports a smooth surface. No absolute altitude cutoff is used.

## Parameters

### value

`number`

### coarse

`number`

### neighbors

readonly `number`[]

### spacing

`number`

### options

[`ResolvedElevationValidation`](../type-aliases/ResolvedElevationValidation.md)

## Returns

`number`
