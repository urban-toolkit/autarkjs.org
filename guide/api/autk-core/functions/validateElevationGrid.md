[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / validateElevationGrid

# Function: validateElevationGrid()

> **validateElevationGrid**(`data`, `width`, `height`, `spacing`, `options`): `object`

Defined in: [elevation-validation.ts:93](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L93)

Validates a standalone normalized grid without modifying the caller's data.

## Parameters

### data

`Float32Array`

### width

`number`

### height

`number`

### spacing

`number`

### options

[`ResolvedElevationValidation`](../type-aliases/ResolvedElevationValidation.md)

## Returns

`object`

### stats

> **stats**: [`ElevationValidationStats`](../interfaces/ElevationValidationStats.md)

### values

> **values**: `Float32Array`\<`ArrayBuffer`\>
