[**autk-db**](../index.md)

***

[autk-db](../globals.md) / LoadGeoTiffParams

# Interface: LoadGeoTiffParams

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:3](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L3)

## Properties

### boundingBox?

> `optional` **boundingBox?**: [`BoundingBox`](BoundingBox.md)

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:26](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L26)

Clip the raster to this bounding box (in the source CRS) before loading.
Strongly recommended for large tiles — without it the full raster is decoded,
which may be millions of pixels and exceed browser memory limits.

***

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:14](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L14)

Target coordinate format for the geometry column (e.g. 'EPSG:3395').
Defaults to EPSG:4326 (no transformation).

***

### geotiffArrayBuffer?

> `optional` **geotiffArrayBuffer?**: `ArrayBuffer`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L7)

Raw ArrayBuffer of an already-fetched GeoTIFF file.

***

### geotiffFileUrl?

> `optional` **geotiffFileUrl?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:5](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L5)

URL of the GeoTIFF file to fetch and load.

***

### maxPixels?

> `optional` **maxPixels?**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:32](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L32)

Maximum number of pixels to load. Defaults to 500 000.
An error is thrown if the decoded region exceeds this limit,
prompting the caller to supply a `boundingBox` to reduce the area.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L9)

Name of the output DuckDB table.

***

### sourceCrs?

> `optional` **sourceCrs?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:20](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L20)

CRS of the input GeoTIFF (e.g. 'EPSG:4326', 'EPSG:32633').
Required when coordinateFormat differs from the file's native CRS.
If omitted, no coordinate transformation is applied.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts:33](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-geotiff/interfaces.ts#L33)
