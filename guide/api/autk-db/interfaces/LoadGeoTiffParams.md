[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadGeoTiffParams

# Interface: LoadGeoTiffParams

Defined in: [use-cases/load-geotiff/interfaces.ts:1](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L1)

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:12](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L12)

CRS of the input GeoTIFF file (source). Defaults to EPSG:4326.
The geometry will be transformed from this CRS to the workspace CRS.

***

### geotiffArrayBuffer?

> `optional` **geotiffArrayBuffer?**: `ArrayBuffer`

Defined in: [use-cases/load-geotiff/interfaces.ts:5](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L5)

Raw ArrayBuffer of an already-fetched GeoTIFF file.

***

### geotiffFileUrl?

> `optional` **geotiffFileUrl?**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:3](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L3)

URL of the GeoTIFF file to fetch and load.

***

### maxPixels?

> `optional` **maxPixels?**: `number`

Defined in: [use-cases/load-geotiff/interfaces.ts:17](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L17)

Maximum number of pixels to load. Defaults to 500 000.
An error is thrown if the full raster exceeds this limit.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L7)

Name of the output DuckDB table.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-geotiff/interfaces.ts:18](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geotiff/interfaces.ts#L18)
