[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadGeoTiffParams

# Interface: LoadGeoTiffParams

Defined in: [use-cases/load-geotiff/interfaces.ts:1](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L1)

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:15](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L15)

CRS of the input GeoTIFF file (source).

Defaults to `EPSG:4326` (lat/lng) when omitted.
The raster extent metadata will be transformed from this CRS to the workspace CRS.
If the raster is not in `EPSG:4326`, pass the correct CRS explicitly.

***

### geotiffArrayBuffer?

> `optional` **geotiffArrayBuffer?**: `ArrayBuffer`

Defined in: [use-cases/load-geotiff/interfaces.ts:5](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L5)

Raw ArrayBuffer of an already-fetched GeoTIFF file.

***

### geotiffFileUrl?

> `optional` **geotiffFileUrl?**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:3](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L3)

URL of the GeoTIFF file to fetch and load.

***

### maxPixels?

> `optional` **maxPixels?**: `number`

Defined in: [use-cases/load-geotiff/interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L25)

Deprecated alias for `maxRasterCells`.

***

### maxRasterCells?

> `optional` **maxRasterCells?**: `number`

Defined in: [use-cases/load-geotiff/interfaces.ts:21](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L21)

Maximum number of raster cells to decode into memory.
Larger rasters are downsampled to fit this limit.
Defaults to 1 000 000.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L7)

Name of the output DuckDB table.

***

### resampleMethod?

> `optional` **resampleMethod?**: `"nearest"` \| `"bilinear"`

Defined in: [use-cases/load-geotiff/interfaces.ts:30](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L30)

Resampling method used when downsampling large rasters.
Defaults to `'bilinear'`.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-geotiff/interfaces.ts#L31)
