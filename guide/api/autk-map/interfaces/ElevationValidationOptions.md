# Interface: ElevationValidationOptions

Defined in: autk-core/dist/elevation-validation.d.ts:2

Region-independent, conservative validation of isolated raster elevation errors.

## Properties

### madMultiplier?

> `optional` **madMultiplier?**: `number`

Defined in: autk-core/dist/elevation-validation.d.ts:8

Multiplier for the neighborhood's scaled median absolute deviation. Default: 8.

***

### maxSlope?

> `optional` **maxSlope?**: `number`

Defined in: autk-core/dist/elevation-validation.d.ts:6

Allowed vertical departure per meter of sample spacing. Default: 8.

***

### minDeviation?

> `optional` **minDeviation?**: `number`

Defined in: autk-core/dist/elevation-validation.d.ts:4

Smallest suspicious vertical departure, in meters. Default: 100.
