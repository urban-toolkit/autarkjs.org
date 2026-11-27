# Function: normalizeBuildingFeature()

> **normalizeBuildingFeature**(`feature`): `Feature`\<`GeometryCollection`\<`Geometry`\>\>

Defined in: [building-feature.ts:18](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/building-feature.ts#L18)

Normalizes one building to its original component geometries and explicit part indices.
Does not union, repair, clone coordinates, or group independent features.
Every `parts` entry must specify its component's `geometryIndex`.

## Parameters

### feature

`Feature`\<`Geometry` \| `null`\>

A building feature with polygonal or ring geometry.

## Returns

`Feature`\<`GeometryCollection`\<`Geometry`\>\>

A new feature/properties object; component geometries retain their original references.

## Throws

If geometry, metadata or component indices are unsupported or ambiguous.
