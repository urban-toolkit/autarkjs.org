[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadMeshParams

# Interface: LoadMeshParams

Defined in: [autk-map/src/api.ts:100](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L100)

Parameters for loading a prebuilt triangle mesh directly.

Mesh inputs bypass GeoJSON triangulation and are added as already-prepared
geometry. The geometry, components, and optional thematic values are expected
to remain aligned by index so rendering, picking, and color mapping refer to
the same logical mesh parts.

## Properties

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/api.ts:114](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L114)

Per-component metadata aligned with `geometry`.

Component ordering is used for picking and for associating thematic data
with rendered mesh parts.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/api.ts:107](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L107)

Mesh geometry in map-local coordinates.

Coordinates must already be expressed relative to the map's current
shared origin.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/api.ts:121](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L121)

Optional thematic values aligned one-to-one with `components`.

When provided, each thematic entry should correspond to the component at
the same index.

***

### type?

> `optional` **type?**: `"buildings"`

Defined in: [autk-map/src/api.ts:127](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L127)

Mesh render type.

Currently only `'buildings'` is supported by the map mesh-loading API.
