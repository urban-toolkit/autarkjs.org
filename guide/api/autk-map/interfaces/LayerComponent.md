[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerComponent

# Interface: LayerComponent

Defined in: autk-core/dist/src/types-mesh.d.ts:35

Per-feature counts for a triangulated mesh component.

The counts let renderers relate emitted geometry back to the source feature
and determine how many vertices and triangles belong to each component.

## Properties

### featureId?

> `optional` **featureId?**: `string` \| `number`

Defined in: autk-core/dist/src/types-mesh.d.ts:43

Optional stable feature identifier copied from the source data.

***

### featureIndex

> **featureIndex**: `number`

Defined in: autk-core/dist/src/types-mesh.d.ts:41

Index of the source feature represented by this component.

***

### nPoints

> **nPoints**: `number`

Defined in: autk-core/dist/src/types-mesh.d.ts:37

Number of vertices contributed by the component.

***

### nTriangles

> **nTriangles**: `number`

Defined in: autk-core/dist/src/types-mesh.d.ts:39

Number of triangles contributed by the component.
