[**autk-map**](../index.md)

***

[autk-map](../globals.md) / LoadCollectionParams

# Interface: LoadCollectionParams

Defined in: [autk-map/src/api.ts:42](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L42)

Parameters for loading a feature collection as a map layer.

When `type` is omitted, the map may infer a vector layer type from the
collection's non-null geometries. Mixed-geometry collections require an
explicit `type`. Pass `type: 'raster'` together with `property` to load a
GeoTIFF-derived raster layer.

For vector layers, `property` is optional and is used to initialize thematic
mapping immediately after the layer is created. For raster layers, `property`
is required so a numeric value can be extracted from each raster cell.

## Properties

### allowZeroHeightBuildings?

> `optional` **allowZeroHeightBuildings?**: `boolean`

Defined in: [autk-map/src/api.ts:62](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L62)

Optional flag to treat building zero-height extrusions.

***

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:49](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L49)

Source feature collection to load.

Raster-derived collections may contain `null` geometries because values
are resolved from raster cell payloads rather than vector geometry.

***

### property?

> `optional` **property?**: `string`

Defined in: [autk-map/src/api.ts:74](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L74)

Property accessor used to derive layer values.

Use a dot-path string accessor such as `properties.shape_area`.

For vector layers, the path is resolved from each feature and is applied
immediately as the initial thematic mapping when provided.

For raster layers, the path is resolved from each raster cell object and
is required to populate the raster value texture.

***

### type?

> `optional` **type?**: [`LayerType`](../type-aliases/LayerType.md) \| `null`

Defined in: [autk-map/src/api.ts:57](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L57)

Optional explicit layer type override.

Provide this when geometry-based inference is ambiguous, such as for
mixed-geometry collections, or when the intended semantic layer type
should not be derived automatically.
