# Interface: RasterBandMetadata

Defined in: [autk-db/src/interfaces.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/interfaces.ts#L37)

Metadata for one raster band exposed by a GeoTIFF-backed table.

Used by raster-aware consumers to present labels and target individual bands.

## Properties

### categories?

> `optional` **categories?**: `string`[]

Defined in: [autk-db/src/interfaces.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/interfaces.ts#L43)

When present, each integer cell value indexes this ordered list of class names.

***

### id

> **id**: `string`

Defined in: [autk-db/src/interfaces.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/interfaces.ts#L39)

Internal band identifier used by raster operations.

***

### label

> **label**: `string`

Defined in: [autk-db/src/interfaces.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/interfaces.ts#L41)

Human-readable label shown in UI controls and outputs.
