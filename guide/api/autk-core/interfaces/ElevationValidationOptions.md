# Interface: ElevationValidationOptions

Defined in: [elevation-validation.ts:2](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/elevation-validation.ts#L2)

Region-independent, conservative validation of isolated raster elevation errors.

## Properties

### madMultiplier?

> `optional` **madMultiplier?**: `number`

Defined in: [elevation-validation.ts:8](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/elevation-validation.ts#L8)

Multiplier for the neighborhood's scaled median absolute deviation. Default: 8.

***

### maxSlope?

> `optional` **maxSlope?**: `number`

Defined in: [elevation-validation.ts:6](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/elevation-validation.ts#L6)

Allowed vertical departure per meter of sample spacing. Default: 8.

***

### minDeviation?

> `optional` **minDeviation?**: `number`

Defined in: [elevation-validation.ts:4](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/elevation-validation.ts#L4)

Smallest suspicious vertical departure, in meters. Default: 100.
