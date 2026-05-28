[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / TriangulatorPoints

# Class: TriangulatorPoints

Defined in: autk-core/dist/src/triangulator-points.d.ts:14

Converts point-based GeoJSON features into packed point instances.

The class walks a feature collection in order and supports `Point`,
`MultiPoint`, and point-bearing `GeometryCollection` geometries while
skipping unsupported features with a warning.

## Constructors

### Constructor

> **new TriangulatorPoints**(): `TriangulatorPoints`

#### Returns

`TriangulatorPoints`

## Methods

### buildInstances()

> `static` **buildInstances**(`geojson`, `origin`): `PointInstancesData`

Defined in: autk-core/dist/src/triangulator-points.d.ts:35

Builds point-instance data for a feature collection.

#### Parameters

##### geojson

`FeatureCollection`

Source feature collection containing point geometries.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

#### Returns

`PointInstancesData`

Packed instance centers and per-feature component metadata.

#### Throws

Never throws. Unsupported features are skipped with a console warning.

***

### getPointSize()

> `static` **getPointSize**(): `number`

Defined in: autk-core/dist/src/triangulator-points.d.ts:26

Returns the shared point-marker radius used by point rendering.

#### Returns

`number`

***

### setPointSize()

> `static` **setPointSize**(`size`): `void`

Defined in: autk-core/dist/src/triangulator-points.d.ts:24

Sets the shared base point radius used by sprite rendering.

#### Parameters

##### size

`number`

Marker radius in local planar units.

#### Returns

`void`

Nothing.

#### Throws

If `size` is not a finite positive number.
