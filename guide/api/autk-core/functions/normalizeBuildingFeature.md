[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / normalizeBuildingFeature

# Function: normalizeBuildingFeature()

> **normalizeBuildingFeature**(`feature`): `Feature`\<`GeometryCollection`\<`Geometry`\>\>

Defined in: [building-feature.ts:18](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-core/src/building-feature.ts#L18)

Normalizes one building to its original component geometries and explicit part indices.
Does not union, repair, clone coordinates, or group independent features.
Legacy positional `parts` metadata is accepted, but cannot be mixed with indexed metadata.

## Parameters

### feature

`Feature`\<`Geometry` \| `null`\>

A building feature with polygonal or ring geometry.

## Returns

`Feature`\<`GeometryCollection`\<`Geometry`\>\>

A new feature/properties object; component geometries retain their original references.

## Throws

If geometry, metadata or component indices are unsupported or ambiguous.
