[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorBuildingWithWindows

# Class: TriangulatorBuildingWithWindows

Defined in: [triangulator-windows.ts:81](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L81)

Triangulates simplified building roofs and procedural facade windows.

The class extracts supported building footprints, reduces them to convex
hulls, resolves a usable building height, and derives a facade layout by
sampling hull edges across the requested floor count. Roof geometry is
emitted as a triangulated fan at the resolved height, while window geometry
is emitted as indexed quads centered on the generated layout entries.

## Example

```ts
const [geometry, components] = TriangulatorBuildingWithWindows.buildMesh(
  buildings,
  origin,
  floors,
);
```

## Constructors

### Constructor

> **new TriangulatorBuildingWithWindows**(): `TriangulatorBuildingWithWindows`

#### Returns

`TriangulatorBuildingWithWindows`

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`, `floors`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: [triangulator-windows.ts:94](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L94)

Builds renderable roof and window geometry for a building collection.

#### Parameters

##### geojson

`FeatureCollection`

Source building features.

##### origin

`number`[]

World-space origin used to convert generated geometry into
local coordinates.

##### floors

`number`

Requested number of procedural floors for window layout.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of geometry chunks and per-feature component metadata.

#### Throws

Never throws. Features without a usable hull are skipped.

#### Example

```ts
const [meshes, comps] = TriangulatorBuildingWithWindows.buildMesh(buildings, origin, 5);
```

***

### buildWindowLayout()

> `static` **buildWindowLayout**(`source`, `floors`): [`BuildingWindowLayoutResult`](../interfaces/BuildingWindowLayoutResult.md)

Defined in: [triangulator-windows.ts:146](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L146)

Generates a procedural facade-window layout for a building collection.

#### Parameters

##### source

`FeatureCollection`

Source building features.

##### floors

`number`

Requested number of procedural floors (clamped to ≥1).

#### Returns

[`BuildingWindowLayoutResult`](../interfaces/BuildingWindowLayoutResult.md)

Generated window metadata as GeoJSON points and detailed layout entries.

#### Throws

Never throws. Features without usable hulls are silently skipped.

#### Example

```ts
const { collection, windows } = TriangulatorBuildingWithWindows.buildWindowLayout(buildings, 5);
```

***

### resolveHeight()

> `static` **resolveHeight**(`feature`): `number`

Defined in: [triangulator-windows.ts:236](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L236)

Resolves an effective building height from feature and part metadata.

#### Parameters

##### feature

`Feature`\<`Geometry` \| `null`, `GeoJsonProperties`\>

Building feature whose height metadata should be parsed.

#### Returns

`number`

Resolved building height in world units (falls back to `DEFAULT_BUILDING_HEIGHT`).

#### Throws

Never throws.

#### Example

```ts
const h = TriangulatorBuildingWithWindows.resolveHeight(feature);
// h → 50 (from height tag) or 20 (default)
```
