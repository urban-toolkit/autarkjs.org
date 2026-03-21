[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / TriangulatorBuildings

# Class: TriangulatorBuildings

Defined in: [triangulator-buildings.ts:11](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-buildings.ts#L11)

Class for triangulating buildings from GeoJSON features.
It provides methods to convert different geometry types into building meshes.

## Constructors

### Constructor

> **new TriangulatorBuildings**(): `TriangulatorBuildings`

#### Returns

`TriangulatorBuildings`

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`): \[[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[], [`ILayerComponent`](../interfaces/ILayerComponent.md)[]\]

Defined in: [triangulator-buildings.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-buildings.ts#L18)

Builds a mesh from GeoJSON features representing buildings.

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

### lineStringToBuildingMesh()

> `static` **lineStringToBuildingMesh**(`feature`, `heightInfo`, `origin`): `object`[]

Defined in: [triangulator-buildings.ts:149](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-buildings.ts#L149)

Converts a LineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### heightInfo

`number`[]

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### multiLineStringToBuilding()

> `static` **multiLineStringToBuilding**(`feature`, `heightInfo`, `origin`): `object`[]

Defined in: [triangulator-buildings.ts:170](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-buildings.ts#L170)

Converts a LineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### heightInfo

`number`[]

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### multiPolygonToBuilding()

> `static` **multiPolygonToBuilding**(`feature`, `heightInfo`, `origin`): `object`[]

Defined in: [triangulator-buildings.ts:222](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-buildings.ts#L222)

Converts a LineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### heightInfo

`number`[]

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders

***

### polygonToBuilding()

> `static` **polygonToBuilding**(`feature`, `heightInfo`, `origin`): `object`[]

Defined in: [triangulator-buildings.ts:196](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/triangulator-buildings.ts#L196)

Converts a LineString feature to a border representation.

#### Parameters

##### feature

`Feature`

The GeoJSON feature representing a LineString

##### heightInfo

`number`[]

##### origin

`number`[]

The origin point for translation

#### Returns

`object`[]

An array of borders
