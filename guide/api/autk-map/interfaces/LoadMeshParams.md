# Interface: LoadMeshParams

Defined in: [autk-map/src/api.ts:149](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L149)

Parameters for loading a prebuilt triangle mesh directly.

Mesh inputs bypass GeoJSON triangulation and are added as already-prepared
geometry. The geometry, components, and optional thematic values are expected
to remain aligned by index so rendering, picking, and color mapping refer to
the same logical mesh parts.

## Properties

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/api.ts:163](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L163)

Per-component metadata aligned with `geometry`.

Component ordering is used for picking and for associating thematic data
with rendered mesh parts.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/api.ts:156](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L156)

Mesh geometry in map-local coordinates.

Coordinates must already be expressed relative to the map's current
shared origin.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/api.ts:170](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L170)

Optional thematic values aligned one-to-one with `components`.

When provided, each thematic entry should correspond to the component at
the same index.

***

### type?

> `optional` **type?**: `"buildings"`

Defined in: [autk-map/src/api.ts:176](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L176)

Mesh render type.

Currently only `'buildings'` is supported by the map mesh-loading API.
