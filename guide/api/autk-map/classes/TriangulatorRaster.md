[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / TriangulatorRaster

# Class: TriangulatorRaster

Defined in: [triangulator-raster.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-raster.ts#L13)

Class for triangulating polylines from GeoJSON features.
It provides methods to convert different geometry types into polyline meshes.

## Constructors

### Constructor

> **new TriangulatorRaster**(): `TriangulatorRaster`

#### Returns

`TriangulatorRaster`

## Methods

### buildMesh()

> `static` **buildMesh**(`geotiff`, `origin`): \[[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[], [`ILayerComponent`](../interfaces/ILayerComponent.md)[]\]

Defined in: [triangulator-raster.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-raster.ts#L21)

Builds a mesh from GeoJSON features representing polylines.

#### Parameters

##### geotiff

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

Defined in: [triangulator-raster.ts:64](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-raster.ts#L64)

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

Defined in: [triangulator-raster.ts:87](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-raster.ts#L87)

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
