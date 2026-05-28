[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorBuildings

# Class: TriangulatorBuildings

Defined in: [triangulator-buildings.ts:39](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-buildings.ts#L39)

Builds extruded mesh geometry for OSM-style buildings.

Each feature is expected to contain a `GeometryCollection` whose entries are
matched by index against `feature.properties.parts`. For every supported part
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

Defined in: [triangulator-buildings.ts:51](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-buildings.ts#L51)

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

When `true`, parts with no height metadata get a random fallback height.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of mesh chunks and per-feature component metadata.

#### Throws

Never throws. Parts without height metadata are skipped (or given fallback height).

#### Example

```ts
const [meshes, comps] = TriangulatorBuildings.buildMesh(buildingsFC, origin);
```
