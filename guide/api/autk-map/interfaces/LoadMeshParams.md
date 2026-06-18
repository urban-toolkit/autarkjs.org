[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadMeshParams

# Interface: LoadMeshParams

Defined in: [autk-map/src/api.ts:98](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L98)

Parameters for loading a prebuilt triangle mesh directly.

Mesh inputs bypass GeoJSON triangulation and are added as already-prepared
geometry. The geometry, components, and optional thematic values are expected
to remain aligned by index so rendering, picking, and color mapping refer to
the same logical mesh parts.

## Properties

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/api.ts:112](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L112)

Per-component metadata aligned with `geometry`.

Component ordering is used for picking and for associating thematic data
with rendered mesh parts.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/api.ts:105](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L105)

Mesh geometry in map-local coordinates.

Coordinates must already be expressed relative to the map's current
shared origin.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/api.ts:119](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L119)

Optional thematic values aligned one-to-one with `components`.

When provided, each thematic entry should correspond to the component at
the same index.

***

### type?

> `optional` **type?**: `"buildings"`

Defined in: [autk-map/src/api.ts:125](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L125)

Mesh render type.

Currently only `'buildings'` is supported by the map mesh-loading API.
