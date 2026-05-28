[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadMeshParams

# Interface: LoadMeshParams

Defined in: [autk-map/src/api.ts:85](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L85)

Parameters for loading a prebuilt triangle mesh directly.

Mesh inputs bypass GeoJSON triangulation and are added as already-prepared
geometry. The geometry, components, and optional thematic values are expected
to remain aligned by index so rendering, picking, and color mapping refer to
the same logical mesh parts.

## Properties

### components

> **components**: [`LayerComponent`](LayerComponent.md)[]

Defined in: [autk-map/src/api.ts:99](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L99)

Per-component metadata aligned with `geometry`.

Component ordering is used for picking and for associating thematic data
with rendered mesh parts.

***

### geometry

> **geometry**: [`LayerGeometry`](LayerGeometry.md)[]

Defined in: [autk-map/src/api.ts:92](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L92)

Mesh geometry in map-local coordinates.

Coordinates must already be expressed relative to the map's current
shared origin.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/api.ts:106](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L106)

Optional thematic values aligned one-to-one with `components`.

When provided, each thematic entry should correspond to the component at
the same index.

***

### type?

> `optional` **type?**: `"buildings"`

Defined in: [autk-map/src/api.ts:112](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L112)

Mesh render type.

Currently only `'buildings'` is supported by the map mesh-loading API.
