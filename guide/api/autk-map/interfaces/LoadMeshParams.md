[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadMeshParams

# Interface: LoadMeshParams

Defined in: [autk-map/src/api.ts:93](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L93)

Parameters for loading a prebuilt triangle mesh directly.

Mesh inputs bypass GeoJSON triangulation and are added as already-prepared
geometry. The geometry, components, and optional thematic values are expected
to remain aligned by index so rendering, picking, and color mapping refer to
the same logical mesh parts.

## Properties

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/api.ts:107](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L107)

Per-component metadata aligned with `geometry`.

Component ordering is used for picking and for associating thematic data
with rendered mesh parts.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/api.ts:100](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L100)

Mesh geometry in map-local coordinates.

Coordinates must already be expressed relative to the map's current
shared origin.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/api.ts:114](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L114)

Optional thematic values aligned one-to-one with `components`.

When provided, each thematic entry should correspond to the component at
the same index.

***

### type?

> `optional` **type?**: `"buildings"`

Defined in: [autk-map/src/api.ts:120](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L120)

Mesh render type.

Currently only `'buildings'` is supported by the map mesh-loading API.
