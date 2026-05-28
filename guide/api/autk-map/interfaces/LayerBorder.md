[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerBorder

# Interface: LayerBorder

Defined in: autk-core/dist/src/types-mesh.d.ts:51

Border or outline buffers for line-based rendering.

This structure carries the vertex positions and line indices for a border
pass separate from the filled mesh geometry.

## Properties

### indices

> **indices**: `Uint32Array`

Defined in: autk-core/dist/src/types-mesh.d.ts:55

Line index buffer referencing vertices in `position`.

***

### position

> **position**: `Float32Array`

Defined in: autk-core/dist/src/types-mesh.d.ts:53

Flat vertex position buffer for the outline geometry.
