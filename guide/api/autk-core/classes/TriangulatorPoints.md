[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorPoints

# Class: TriangulatorPoints

Defined in: [triangulator-points.ts:31](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-core/src/triangulator-points.ts#L31)

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

Defined in: [triangulator-points.ts:40](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-core/src/triangulator-points.ts#L40)

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
