[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / RasterBandMetadata

# Interface: RasterBandMetadata

Defined in: [interfaces.ts:37](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/interfaces.ts#L37)

Metadata for one raster band exposed by a GeoTIFF-backed table.

Used by raster-aware consumers to present labels and target individual bands.

## Properties

### id

> **id**: `string`

Defined in: [interfaces.ts:39](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/interfaces.ts#L39)

Internal band identifier used by raster operations.

***

### label

> **label**: `string`

Defined in: [interfaces.ts:41](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/interfaces.ts#L41)

Human-readable label shown in UI controls and outputs.
