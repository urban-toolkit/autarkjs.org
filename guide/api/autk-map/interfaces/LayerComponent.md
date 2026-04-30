[**autk-map**](../index.md)

***

[autk-map](../globals.md) / LayerComponent

# Interface: LayerComponent

Defined in: [autk-core/src/types-mesh.ts:37](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L37)

Per-feature counts for a triangulated mesh component.

The counts let renderers relate emitted geometry back to the source feature
and determine how many vertices and triangles belong to each component.

## Properties

### featureId?

> `optional` **featureId?**: `string` \| `number`

Defined in: [autk-core/src/types-mesh.ts:45](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L45)

Optional stable feature identifier copied from the source data.

***

### featureIndex

> **featureIndex**: `number`

Defined in: [autk-core/src/types-mesh.ts:43](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L43)

Index of the source feature represented by this component.

***

### nPoints

> **nPoints**: `number`

Defined in: [autk-core/src/types-mesh.ts:39](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L39)

Number of vertices contributed by the component.

***

### nTriangles

> **nTriangles**: `number`

Defined in: [autk-core/src/types-mesh.ts:41](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-mesh.ts#L41)

Number of triangles contributed by the component.
