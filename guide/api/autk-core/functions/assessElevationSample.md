[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / assessElevationSample

# Function: assessElevationSample()

> **assessElevationSample**(`value`, `ring`, `spacing`, `options`): [`ElevationAssessment`](../interfaces/ElevationAssessment.md) \| `undefined`

Defined in: [elevation-validation.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L49)

Assesses a sample against the 16 positions on a radius-two square ring,
ordered by row then column. Opposite supported positions preserve coherent
cliffs, ridges, and valleys. Missing neighbors defer the decision.

## Parameters

### value

`number`

### ring

readonly `number`[]

### spacing

`number`

### options

[`ResolvedElevationValidation`](../type-aliases/ResolvedElevationValidation.md)

## Returns

[`ElevationAssessment`](../interfaces/ElevationAssessment.md) \| `undefined`
