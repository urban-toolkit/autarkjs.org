[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / TriangulatorPolygons

# Class: TriangulatorPolygons

Defined in: [triangulator-polygons.ts:11](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L11)

Class for triangulating polygons from GeoJSON features.
It provides methods to convert different geometry types into polygon meshes.

## Constructors

### Constructor

> **new TriangulatorPolygons**(): `TriangulatorPolygons`

#### Returns

`TriangulatorPolygons`

## Methods

### buildBorder()

> `static` **buildBorder**(`geojson`, `origin`): \[[`ILayerBorder`](../interfaces/ILayerBorder.md)[], [`ILayerBorderComponent`](../interfaces/ILayerBorderComponent.md)[]\]

Defined in: [triangulator-polygons.ts:70](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L70)

Converts GeoJSON features into a collection of borders.

#### Parameters

##### geojson

`FeatureCollection`

The GeoJSON feature collection

##### origin

`number`[]

The origin point for translation

#### Returns

\[[`ILayerBorder`](../interfaces/ILayerBorder.md)[], [`ILayerBorderComponent`](../interfaces/ILayerBorderComponent.md)[]\]

An array of borders

***

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`): \[[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[], [`ILayerComponent`](../interfaces/ILayerComponent.md)[]\]

Defined in: [triangulator-polygons.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L18)

Builds a mesh from GeoJSON features representing polygons.

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

### generateBorderIds()

> `protected` `static` **generateBorderIds**(`nCoords`): `number`[]

Defined in: [triangulator-polygons.ts:302](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L302)

Generates border indices for a given number of coordinates.

#### Parameters

##### nCoords

`number`

The number of coordinates

#### Returns

`number`[]

An array of border indices

***

### lineStringToBorderMesh()

> `static` **lineStringToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:141](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L141)

Converts a LineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### lineStringToMesh()

> `static` **lineStringToMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:126](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L126)

Converts a LineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### multiLineStringToBorderMesh()

> `static` **multiLineStringToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:177](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L177)

Converts a MultiLineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a MultiLineString

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### multiLineStringToMesh()

> `static` **multiLineStringToMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:156](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L156)

Converts a MultiLineString feature to a mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a MultiLineString

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of geometries

***

### multiPolygonToBorderMesh()

> `static` **multiPolygonToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:274](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L274)

Converts a MultiPolygon feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a MultiPolygon

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### multiPolygonToMesh()

> `static` **multiPolygonToMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:245](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L245)

Converts a MultiPolygon feature to a mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a MultiPolygon

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of geometries

***

### polygonToBorderMesh()

> `static` **polygonToBorderMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:221](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L221)

Converts a Polygon feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a Polygon

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### polygonToMesh()

> `static` **polygonToMesh**(`feature`, `origin`): `object`[]

Defined in: [triangulator-polygons.ts:198](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polygons.ts#L198)

Converts a Polygon feature to a mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a Polygon

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of geometries
