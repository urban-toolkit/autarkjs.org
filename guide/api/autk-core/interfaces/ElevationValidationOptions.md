# Interface: ElevationValidationOptions

Defined in: [elevation-validation.ts:2](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L2)

Region-independent, conservative validation of isolated raster elevation errors.

## Properties

### madMultiplier?

> `optional` **madMultiplier?**: `number`

Defined in: [elevation-validation.ts:8](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L8)

Multiplier for the neighborhood's scaled median absolute deviation. Default: 8.

***

### maxSlope?

> `optional` **maxSlope?**: `number`

Defined in: [elevation-validation.ts:6](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L6)

Allowed vertical departure per meter of sample spacing. Default: 8.

***

### minDeviation?

> `optional` **minDeviation?**: `number`

Defined in: [elevation-validation.ts:4](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/elevation-validation.ts#L4)

Smallest suspicious vertical departure, in meters. Default: 100.
