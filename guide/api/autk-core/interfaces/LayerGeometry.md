[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / LayerGeometry

# Interface: LayerGeometry

Defined in: [types-mesh.ts:18](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/types-mesh.ts#L18)

Triangulated vertex buffers for one renderable geometry piece.

The buffers are emitted in the same vertex order expected by renderers.
Optional arrays are present only when the triangulation pipeline produces
them for the target material or pass.

## Properties

### featureIndex?

> `optional` **featureIndex?**: `number`

Defined in: [types-mesh.ts:28](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/types-mesh.ts#L28)

Optional source feature index associated with this geometry chunk.

***

### indices?

> `optional` **indices?**: `Uint32Array`\<`ArrayBufferLike`\>

Defined in: [types-mesh.ts:24](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/types-mesh.ts#L24)

Optional triangle index buffer referencing vertices in `position`.

***

### normal?

> `optional` **normal?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [types-mesh.ts:22](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/types-mesh.ts#L22)

Optional vertex normal buffer aligned with `position`.

***

### position

> **position**: `Float32Array`

Defined in: [types-mesh.ts:20](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/types-mesh.ts#L20)

Flat vertex position buffer packed sequentially per vertex.

***

### texCoord?

> `optional` **texCoord?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [types-mesh.ts:26](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/types-mesh.ts#L26)

Optional texture-coordinate buffer aligned with `position`.
