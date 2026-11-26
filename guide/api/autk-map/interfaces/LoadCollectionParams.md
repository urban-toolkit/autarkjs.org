# Interface: LoadCollectionParams

Defined in: [autk-map/src/api.ts:96](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L96)

Parameter types for the main `AutkMap` loading and update APIs.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:104](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L104)

Source feature collection to load.

Raster-derived collections may contain `null` geometries because values
are provided as flat band arrays on the feature properties rather than as
per-cell vector geometries.

***

### loadConfig?

> `optional` **loadConfig?**: [`LoadCollectionConfig`](LoadCollectionConfig.md)

Defined in: [autk-map/src/api.ts:123](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L123)

Optional geometry-building configuration applied while loading.

***

### property?

> `optional` **property?**: `string` \| [`RasterRgbBands`](../type-aliases/RasterRgbBands.md)

Defined in: [autk-map/src/api.ts:138](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L138)

Property accessor used to derive layer values.

Use a dot-path string accessor such as `properties.shape_area`.

For vector layers, the path is resolved from each feature and is applied
immediately as the initial thematic mapping when provided.

For raster layers, the path is resolved from the feature properties and
must point to a flat band array such as `band_1`, which is drawn through
the layer color map. Pass three paths, such as
`['band_1', 'band_2', 'band_3']`, to draw the bands as a true-color RGB
image instead. The color map does not apply to an RGB raster.

***

### sourceCrs?

> `optional` **sourceCrs?**: `string`

Defined in: [autk-map/src/api.ts:111](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L111)

CRS of input vector coordinates; defaults to the map's workspace CRS (no conversion).
Accepts Proj4js names registered through autk-core's registerCrs(), PROJ strings, or WKT.
EPSG:4326 uses [longitude, latitude]. Geometry and bounds are converted without mutating input.
Normalized raster collections must already use the workspace CRS.

***

### type?

> `optional` **type?**: `LayerType` \| `null`

Defined in: [autk-map/src/api.ts:119](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L119)

Optional explicit layer type override.

Provide this when geometry-based inference is ambiguous, such as for
mixed-geometry collections, or when the intended semantic layer type
should not be derived automatically.
