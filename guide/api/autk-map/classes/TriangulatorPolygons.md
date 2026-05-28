[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / TriangulatorPolygons

# Class: TriangulatorPolygons

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:14

Triangulates polygonal GeoJSON features into fill and border mesh chunks.

`TriangulatorPolygons` accepts `LineString`, `MultiLineString`, `Polygon`,
`MultiPolygon`, and `GeometryCollection` features containing those geometry
types. Fill meshes are triangulated with `earcut` after translating vertices
into local coordinates relative to the supplied origin. Border meshes are
generated as line-index pairs, with open borders for line strings and closed
rings for polygon outlines and holes. Unsupported or missing geometries are
skipped with a warning.

## Constructors

### Constructor

> **new TriangulatorPolygons**(): `TriangulatorPolygons`

#### Returns

`TriangulatorPolygons`

## Methods

### buildBorder()

> `static` **buildBorder**(`geojson`, `origin`): \[[`LayerBorder`](../interfaces/LayerBorder.md)[], [`LayerBorderComponent`](../interfaces/LayerBorderComponent.md)[]\]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:36

Builds border line geometry for a feature collection.

#### Parameters

##### geojson

`FeatureCollection`

Source feature collection.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

\[[`LayerBorder`](../interfaces/LayerBorder.md)[], [`LayerBorderComponent`](../interfaces/LayerBorderComponent.md)[]\]

A tuple of border chunks and per-feature border counts.

#### Throws

Never throws. Unsupported features are skipped with a console warning.

#### Example

```ts
const [borders, borderComps] = TriangulatorPolygons.buildBorder(polyFC, origin);
```

***

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:25

Builds triangulated fill geometry for a feature collection.

#### Parameters

##### geojson

`FeatureCollection`

Source feature collection.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of mesh chunks and per-feature component counts.

#### Throws

Never throws. Unsupported features are skipped with a console warning.

#### Example

```ts
const [meshes, comps] = TriangulatorPolygons.buildMesh(polyFC, origin);
```

***

### geometryCollectionToBorderMesh()

> `static` **geometryCollectionToBorderMesh**(`feature`, `origin`, `featureIndex`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:175

Flattens supported children of a `GeometryCollection` into border meshes.

#### Parameters

##### feature

`Feature`

Source feature with `GeometryCollection` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

##### featureIndex

`number`

Index of the parent feature in the source collection.

#### Returns

`object`[]

Border line meshes for all supported child geometries.

#### Throws

Never throws. Unsupported children are skipped with a console warning.

#### Example

```ts
const borders = TriangulatorPolygons.geometryCollectionToBorderMesh(gcFeature, origin, 0);
```

***

### geometryCollectionToMesh()

> `static` **geometryCollectionToMesh**(`feature`, `origin`, `featureIndex`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:160

Flattens supported children of a `GeometryCollection` into fill meshes.

#### Parameters

##### feature

`Feature`

Source feature with `GeometryCollection` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

##### featureIndex

`number`

Index of the parent feature in the source collection.

#### Returns

`object`[]

Triangulated fill meshes for all supported child geometries.

#### Throws

Never throws. Unsupported children are skipped with a console warning.

#### Example

```ts
const meshes = TriangulatorPolygons.geometryCollectionToMesh(gcFeature, origin, 0);
```

***

### lineStringToBorderMesh()

> `static` **lineStringToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:61

Converts a `LineString` feature into open border line geometry.

#### Parameters

##### feature

`Feature`

Source feature with `LineString` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Border line meshes for the feature.

#### Throws

Never throws.

#### Example

```ts
const [border] = TriangulatorPolygons.lineStringToBorderMesh(lineFeature, origin);
```

***

### lineStringToMesh()

> `static` **lineStringToMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:47

Converts a `LineString` feature into triangulated fill geometry.

#### Parameters

##### feature

`Feature`

Source feature with `LineString` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Triangulated fill meshes for the feature.

#### Throws

Never throws.

#### Example

```ts
const [mesh] = TriangulatorPolygons.lineStringToMesh(lineFeature, origin);
```

***

### multiLineStringToBorderMesh()

> `static` **multiLineStringToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:89

Converts a `MultiLineString` feature into border line geometry.

#### Parameters

##### feature

`Feature`

Source feature with `MultiLineString` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Border line meshes for each constituent line string.

#### Throws

Never throws.

#### Example

```ts
const borders = TriangulatorPolygons.multiLineStringToBorderMesh(mlsFeature, origin);
```

***

### multiLineStringToMesh()

> `static` **multiLineStringToMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:75

Converts a `MultiLineString` feature into triangulated fill geometry.

#### Parameters

##### feature

`Feature`

Source feature with `MultiLineString` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Triangulated fill meshes for each constituent line string.

#### Throws

Never throws.

#### Example

```ts
const meshes = TriangulatorPolygons.multiLineStringToMesh(mlsFeature, origin);
```

***

### multiPolygonToBorderMesh()

> `static` **multiPolygonToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:145

Converts a `MultiPolygon` feature into border line geometry.

#### Parameters

##### feature

`Feature`

Source feature with `MultiPolygon` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Border line meshes for all rings in all polygons.

#### Throws

Never throws.

#### Example

```ts
const borders = TriangulatorPolygons.multiPolygonToBorderMesh(mpFeature, origin);
```

***

### multiPolygonToMesh()

> `static` **multiPolygonToMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:131

Converts a `MultiPolygon` feature into triangulated fill geometry.

#### Parameters

##### feature

`Feature`

Source feature with `MultiPolygon` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Triangulated fill meshes for each polygon in the collection.

#### Throws

Never throws.

#### Example

```ts
const meshes = TriangulatorPolygons.multiPolygonToMesh(mpFeature, origin);
```

***

### polygonToBorderMesh()

> `static` **polygonToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:117

Converts a `Polygon` feature into closed border line geometry.

#### Parameters

##### feature

`Feature`

Source feature with `Polygon` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Border line meshes for all polygon rings.

#### Throws

Never throws.

#### Example

```ts
const borders = TriangulatorPolygons.polygonToBorderMesh(polyFeature, origin);
```

***

### polygonToMesh()

> `static` **polygonToMesh**(`feature`, `origin`): `object`[]

Defined in: autk-core/dist/src/triangulator-polygons.d.ts:103

Converts a `Polygon` feature into triangulated fill geometry with hole support.

#### Parameters

##### feature

`Feature`

Source feature with `Polygon` geometry.

##### origin

`number`[]

World-space origin used to derive local XY coordinates.

#### Returns

`object`[]

Triangulated fill meshes for the polygon, including holes.

#### Throws

Never throws.

#### Example

```ts
const [mesh] = TriangulatorPolygons.polygonToMesh(polyFeature, origin);
```
