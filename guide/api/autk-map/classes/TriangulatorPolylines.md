[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / TriangulatorPolylines

# Class: TriangulatorPolylines

Defined in: [triangulator-polylines.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polylines.ts#L13)

Class for triangulating polylines from GeoJSON features.
It provides methods to convert different geometry types into polyline meshes.

## Constructors

### Constructor

> **new TriangulatorPolylines**(): `TriangulatorPolylines`

#### Returns

`TriangulatorPolylines`

## Properties

### offset

> `static` **offset**: `number` = `300`

Defined in: [triangulator-polylines.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polylines.ts#L18)

The offset distance for the polyline extrusion.

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`): \[[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[], [`ILayerComponent`](../interfaces/ILayerComponent.md)[]\]

Defined in: [triangulator-polylines.ts:26](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polylines.ts#L26)

Builds a mesh from GeoJSON features representing polylines.

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

### lineStringToPolyline()

> `static` **lineStringToPolyline**(`feature`, `origin`, `offset`): `object`[]

Defined in: [triangulator-polylines.ts:74](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polylines.ts#L74)

Converts a LineString feature to a polyline mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### origin

`number`[]

The origin point for translation

##### offset

`number`

The offset distance for the polyline extrusion

#### Returns

`object`[]

An array of geometries

***

### multiLineStringToPolyline()

> `static` **multiLineStringToPolyline**(`feature`, `origin`, `offset`): `object`[]

Defined in: [triangulator-polylines.ts:97](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-polylines.ts#L97)

Converts a MultiLineString feature to a polyline mesh representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a MultiLineString

##### origin

`number`[]

The origin point for translation

##### offset

`number`

The offset distance for the polyline extrusion

#### Returns

`object`[]

An array of geometries
