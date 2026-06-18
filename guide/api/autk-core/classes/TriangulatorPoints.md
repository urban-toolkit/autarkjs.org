[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorPoints

# Class: TriangulatorPoints

Defined in: [triangulator-points.ts:31](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-points.ts#L31)

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

> `static` **buildInstances**(`geojson`, `origin`): [`PointInstancesData`](../interfaces/PointInstancesData.md)

Defined in: [triangulator-points.ts:62](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-points.ts#L62)

Builds point-instance data for a feature collection.

#### Parameters

##### geojson

`FeatureCollection`

Source feature collection containing point geometries.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

#### Returns

[`PointInstancesData`](../interfaces/PointInstancesData.md)

Packed instance centers and per-feature component metadata.

#### Throws

Never throws. Unsupported features are skipped with a console warning.

***

### getPointSize()

> `static` **getPointSize**(): `number`

Defined in: [triangulator-points.ts:50](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-points.ts#L50)

Returns the shared point-marker radius used by point rendering.

#### Returns

`number`

***

### setPointSize()

> `static` **setPointSize**(`size`): `void`

Defined in: [triangulator-points.ts:42](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-points.ts#L42)

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
