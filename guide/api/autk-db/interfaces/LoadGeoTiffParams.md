[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadGeoTiffParams

# Interface: LoadGeoTiffParams

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:10](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L10)

## Properties

### categoricalRgb?

> `optional` **categoricalRgb?**: `CategoricalRgbPalette`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L37)

Decode a three-band RGB GeoTIFF into one scalar band of named classes.

***

### geotiffArrayBuffer?

> `optional` **geotiffArrayBuffer?**: `ArrayBuffer`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:14](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L14)

Raw ArrayBuffer of an already-fetched GeoTIFF file.

***

### geotiffFileUrl?

> `optional` **geotiffFileUrl?**: `string`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:12](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L12)

URL of the GeoTIFF file to fetch and load.

***

### maxRasterCells?

> `optional` **maxRasterCells?**: `number`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:30](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L30)

Maximum number of raster cells to decode into memory.
Larger rasters are downsampled to fit this limit.
Defaults to 1 000 000.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:16](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L16)

Name of the output DuckDB table.

***

### resampleMethod?

> `optional` **resampleMethod?**: `"nearest"` \| `"bilinear"`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L35)

Resampling method used when downsampling large rasters.
Defaults to `'bilinear'`. Categorical RGB imports always use nearest-neighbor.

***

### sourceCrs?

> `optional` **sourceCrs?**: `string`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:24](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L24)

CRS of the input GeoTIFF file (source).

Defaults to `EPSG:4326` (lat/lng) when omitted.
The raster extent metadata will be transformed from this CRS to the workspace CRS.
If the raster is not in `EPSG:4326`, pass the correct CRS explicitly.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/use-cases/load-geotiff/interfaces.ts:38](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-geotiff/interfaces.ts#L38)
