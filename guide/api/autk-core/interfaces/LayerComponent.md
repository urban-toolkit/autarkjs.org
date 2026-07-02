[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / LayerComponent

# Interface: LayerComponent

Defined in: [types-mesh.ts:37](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/types-mesh.ts#L37)

Per-feature counts for a triangulated mesh component.

The counts let renderers relate emitted geometry back to the source feature
and determine how many vertices and triangles belong to each component.

## Properties

### featureId?

> `optional` **featureId?**: `string` \| `number`

Defined in: [types-mesh.ts:45](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/types-mesh.ts#L45)

Optional stable feature identifier copied from the source data.

***

### featureIndex

> **featureIndex**: `number`

Defined in: [types-mesh.ts:43](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/types-mesh.ts#L43)

Index of the source feature represented by this component.

***

### nPoints

> **nPoints**: `number`

Defined in: [types-mesh.ts:39](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/types-mesh.ts#L39)

Number of vertices contributed by the component.

***

### nTriangles

> **nTriangles**: `number`

Defined in: [types-mesh.ts:41](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/types-mesh.ts#L41)

Number of triangles contributed by the component.
