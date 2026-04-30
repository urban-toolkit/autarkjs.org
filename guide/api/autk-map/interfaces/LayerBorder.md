[**autk-map**](../index.md)

***

[autk-map](../globals.md) / LayerBorder

# Interface: LayerBorder

Defined in: [autk-core/src/types-mesh.ts:54](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L54)

Border or outline buffers for line-based rendering.

This structure carries the vertex positions and line indices for a border
pass separate from the filled mesh geometry.

## Properties

### indices

> **indices**: `Uint32Array`

Defined in: [autk-core/src/types-mesh.ts:58](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L58)

Line index buffer referencing vertices in `position`.

***

### position

> **position**: `Float32Array`

Defined in: [autk-core/src/types-mesh.ts:56](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L56)

Flat vertex position buffer for the outline geometry.
