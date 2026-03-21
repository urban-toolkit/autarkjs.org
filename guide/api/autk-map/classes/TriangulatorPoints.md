[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / TriangulatorPoints

# Class: TriangulatorPoints

Defined in: [triangulator-points.ts:9](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-points.ts#L9)

Class for triangulating points from GeoJSON features.
It provides methods to convert different geometry types into point meshes.

## Constructors

### Constructor

> **new TriangulatorPoints**(): `TriangulatorPoints`

#### Returns

`TriangulatorPoints`

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`): \[[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[], [`ILayerComponent`](../interfaces/ILayerComponent.md)[]\]

Defined in: [triangulator-points.ts:16](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-points.ts#L16)

Builds a mesh from GeoJSON features representing points.

#### Parameters

##### geojson

`FeatureCollection`

The GeoJSON feature collection

##### origin

`number`[]

The origin point for translation

#### Returns

\[[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[], [`ILayerComponent`](../interfaces/ILayerComponent.md)[]\]

An array of geometries and components

***

### multiPointToMesh()

> `static` **multiPointToMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-points.ts:89](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-points.ts#L89)

Converts a MultiPoint feature to a mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a MultiPoint

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array containing the flat coordinates and indices

***

### pointToMesh()

> `static` **pointToMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-points.ts:63](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-points.ts#L63)

Converts a Point feature to a mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a Point

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array containing the flat coordinates and indices

***

### sampleCircle()

> `static` **sampleCircle**(`centerX`, `centerY`, `radius`, `numPoints`): \[`number`, `number`\][]

Defined in: [triangulator-points.ts:122](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-points.ts#L122)

Samples points on a circle.

#### Parameters

##### centerX

`number`

The x-coordinate of the circle's center

##### centerY

`number`

The y-coordinate of the circle's center

##### radius

`number`

The radius of the circle

##### numPoints

`number`

The number of points to sample on the circle

#### Returns

\[`number`, `number`\][]

An array of sampled points as [x, y] tuples
