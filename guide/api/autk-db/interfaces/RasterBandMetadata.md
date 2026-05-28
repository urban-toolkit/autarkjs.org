[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / RasterBandMetadata

# Interface: RasterBandMetadata

Defined in: [autk-db/src/interfaces.ts:37](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/interfaces.ts#L37)

Metadata for one raster band exposed by a GeoTIFF-backed table.

Used by raster-aware consumers to present labels and target individual bands.

## Properties

### id

> **id**: `string`

Defined in: [autk-db/src/interfaces.ts:39](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/interfaces.ts#L39)

Internal band identifier used by raster operations.

***

### label

> **label**: `string`

Defined in: [autk-db/src/interfaces.ts:41](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/interfaces.ts#L41)

Human-readable label shown in UI controls and outputs.
