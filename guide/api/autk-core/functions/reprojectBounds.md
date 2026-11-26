# Function: reprojectBounds()

> **reprojectBounds**(`bounds`, `sourceCrs`, `targetCrs`): \[`number`, `number`, `number`, `number`\]

Defined in: [crs.ts:159](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/crs.ts#L159)

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
