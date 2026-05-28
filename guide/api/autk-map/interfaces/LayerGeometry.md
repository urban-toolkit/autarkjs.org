[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerGeometry

# Interface: LayerGeometry

Defined in: autk-core/dist/src/types-mesh.d.ts:17

Triangulated vertex buffers for one renderable geometry piece.

The buffers are emitted in the same vertex order expected by renderers.
Optional arrays are present only when the triangulation pipeline produces
them for the target material or pass.

## Properties

### featureIndex?

> `optional` **featureIndex?**: `number`

Defined in: autk-core/dist/src/types-mesh.d.ts:27

Optional source feature index associated with this geometry chunk.

***

### indices?

> `optional` **indices?**: `Uint32Array`\<`ArrayBufferLike`\>

Defined in: autk-core/dist/src/types-mesh.d.ts:23

Optional triangle index buffer referencing vertices in `position`.

***

### normal?

> `optional` **normal?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: autk-core/dist/src/types-mesh.d.ts:21

Optional vertex normal buffer aligned with `position`.

***

### position

> **position**: `Float32Array`

Defined in: autk-core/dist/src/types-mesh.d.ts:19

Flat vertex position buffer packed sequentially per vertex.

***

### texCoord?

> `optional` **texCoord?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: autk-core/dist/src/types-mesh.d.ts:25

Optional texture-coordinate buffer aligned with `position`.
