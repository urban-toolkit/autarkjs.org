# Function: reprojectBounds()

> **reprojectBounds**(`bounds`, `sourceCrs`, `targetCrs`): \[`number`, `number`, `number`, `number`\]

Defined in: [crs.ts:159](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/crs.ts#L159)

Samples a rectangle's footprint for nonlinear CRS conversions; results are approximate, not densified geometry.

## Parameters

### bounds

readonly \[`number`, `number`, `number`, `number`\]

### sourceCrs

`string`

### targetCrs

`string`

## Returns

\[`number`, `number`, `number`, `number`\]
