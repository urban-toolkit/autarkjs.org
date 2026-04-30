[**autk-map**](../index.md)

***

[autk-map](../globals.md) / TriangulatorPoints

# Class: TriangulatorPoints

Defined in: [autk-core/src/triangulator-points.ts:33](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/triangulator-points.ts#L33)

Converts point-based GeoJSON features into triangulated marker meshes.

The class walks a feature collection in order and emits one or more
triangle-fan meshes per supported feature. `Point` and `MultiPoint`
geometries are converted directly; `GeometryCollection` features are
flattened to supported point children, while unsupported geometries are
skipped with a warning.

## Example

```ts
const [meshes, components] = TriangulatorPoints.buildMesh(collection, origin);
```

## Constructors

### Constructor

> **new TriangulatorPoints**(): `TriangulatorPoints`

#### Returns

`TriangulatorPoints`

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: [autk-core/src/triangulator-points.ts:44](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/triangulator-points.ts#L44)

Builds triangulated point-marker geometry for a feature collection.

#### Parameters

##### geojson

`FeatureCollection`

Source feature collection containing point geometries.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of mesh chunks and per-feature component metadata.

#### Throws

Never throws. Unsupported features are skipped with a console warning.

#### Example

```ts
const [meshes, comps] = TriangulatorPoints.buildMesh(pointFC, origin);
```

***

### geometryCollectionToMesh()

> `static` **geometryCollectionToMesh**(`feature`, `origin`, `featureIndex`): `object`[]

Defined in: [autk-core/src/triangulator-points.ts:144](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/triangulator-points.ts#L144)

Flattens supported children of a `GeometryCollection` into marker meshes.

#### Parameters

##### feature

`Feature`

Source feature with `GeometryCollection` geometry.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

##### featureIndex

`number`

Index of the parent feature in the source collection.

#### Returns

`object`[]

Mesh chunks for all supported child geometries.

#### Throws

Never throws. Unsupported children are skipped with a console warning.

#### Example

```ts
const meshes = TriangulatorPoints.geometryCollectionToMesh(gcFeature, origin, 0);
```

***

### multiPointToMesh()

> `static` **multiPointToMesh**(`feature`, `origin`): `object`[]

Defined in: [autk-core/src/triangulator-points.ts:118](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/triangulator-points.ts#L118)

Converts a `MultiPoint` feature into triangle-fan marker meshes.

#### Parameters

##### feature

`Feature`

Source feature with `MultiPoint` geometry.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

#### Returns

`object`[]

One mesh chunk per point in the collection.

#### Throws

Never throws.

#### Example

```ts
const meshes = TriangulatorPoints.multiPointToMesh(multiPtFeature, origin);
```

***

### pointToMesh()

> `static` **pointToMesh**(`feature`, `origin`): `object`[]

Defined in: [autk-core/src/triangulator-points.ts:97](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/triangulator-points.ts#L97)

Converts a single `Point` feature into a triangle-fan marker mesh.

#### Parameters

##### feature

`Feature`

Source feature with `Point` geometry.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

#### Returns

`object`[]

A single mesh chunk for the point marker.

#### Throws

Never throws.

#### Example

```ts
const [mesh] = TriangulatorPoints.pointToMesh(pointFeature, origin);
```

***

### sampleCircle()

> `static` **sampleCircle**(`centerX`, `centerY`, `radius`, `numPoints`): \[`number`, `number`\][]

Defined in: [autk-core/src/triangulator-points.ts:195](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/triangulator-points.ts#L195)

Samples a circle as a center point plus evenly spaced perimeter vertices.

#### Parameters

##### centerX

`number`

Circle center X coordinate.

##### centerY

`number`

Circle center Y coordinate.

##### radius

`number`

Circle radius in local planar units.

##### numPoints

`number`

Number of perimeter sample points.

#### Returns

\[`number`, `number`\][]

Ordered `[center, ...perimeter]` vertices for triangle-fan indexing.

#### Throws

Never throws.

#### Example

```ts
const circle = TriangulatorPoints.sampleCircle(0, 0, 100, 8);
// circle.length → 9 (1 center + 8 perimeter)
```
