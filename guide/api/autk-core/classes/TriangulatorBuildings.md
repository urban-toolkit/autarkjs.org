[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorBuildings

# Class: TriangulatorBuildings

Defined in: [triangulator-buildings.ts:40](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/triangulator-buildings.ts#L40)

Builds extruded mesh geometry for OSM-style buildings.

Each feature contains original component geometries associated with
`properties.parts[].geometryIndex` (legacy positional metadata is accepted).
Parts inherit building attributes and override them individually. For every supported part
geometry, the triangulator converts world coordinates into local XY space,
resolves wall heights from part metadata, and emits mesh chunks with feature
component counts. Roof geometry is delegated to `triangulator-roofs`.

## Example

```ts
const [mesh, components] = TriangulatorBuildings.buildMesh(buildings, origin);
```

## Constructors

### Constructor

> **new TriangulatorBuildings**(): `TriangulatorBuildings`

#### Returns

`TriangulatorBuildings`

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`, `allowZeroHeightBuildings?`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: [triangulator-buildings.ts:54](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/triangulator-buildings.ts#L54)

Builds extruded building geometry for an OSM-style building collection.

#### Parameters

##### geojson

`FeatureCollection`

Source building feature collection.

##### origin

`number`[]

World-space origin used to convert coordinates into local XY space.

##### allowZeroHeightBuildings?

`boolean` = `false`

When `true`, parts with missing height tags get a random fallback height.
Explicit zero or invalid height tags are never replaced by that fallback.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of mesh chunks and per-feature component metadata.

#### Throws

If building geometries or part indices are unsupported or ambiguous.
Parts without height metadata are skipped (or given fallback height).

#### Example

```ts
const [meshes, comps] = TriangulatorBuildings.buildMesh(buildingsFC, origin);
```
