[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / PolylineBuilder

# Class: PolylineBuilder

Defined in: [polyline-builder.ts:13](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/polyline-builder.ts#L13)

Builds centerline topology without buffering polygons or resolving visual widths.

## Constructors

### Constructor

> **new PolylineBuilder**(): `PolylineBuilder`

#### Returns

`PolylineBuilder`

## Methods

### build()

> `static` **build**(`geojson`, `origin`): [`PolylineData`](../interfaces/PolylineData.md)

Defined in: [polyline-builder.ts:20](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/polyline-builder.ts#L20)

Builds local XY centerlines for LineString, MultiLineString and nested GeometryCollection.
Consecutive duplicate vertices are removed after float32 conversion. Invalid paths and
paths with fewer than two distinct points are skipped. Components retain source IDs.
Five vertices per node support segment quads and width-independent join triangles.

#### Parameters

##### geojson

`FeatureCollection`

##### origin

`number`[]

#### Returns

[`PolylineData`](../interfaces/PolylineData.md)
