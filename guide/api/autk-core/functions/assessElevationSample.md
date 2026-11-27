# Function: assessElevationSample()

> **assessElevationSample**(`value`, `ring`, `spacing`, `options`): [`ElevationAssessment`](../interfaces/ElevationAssessment.md) \| `undefined`

Defined in: [elevation-validation.ts:49](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/elevation-validation.ts#L49)

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
