[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorBuildingWithWindows

# Class: TriangulatorBuildingWithWindows

Defined in: [triangulator-windows.ts:38](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/triangulator-windows.ts#L38)

Generates per-part roofs and windows while retaining one source feature identity.

## Constructors

### Constructor

> **new TriangulatorBuildingWithWindows**(): `TriangulatorBuildingWithWindows`

#### Returns

`TriangulatorBuildingWithWindows`

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`, `floors`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: [triangulator-windows.ts:43](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/triangulator-windows.ts#L43)

Triangulates flat roofs (including holes) and facade windows on original parts.

#### Parameters

##### geojson

`FeatureCollection`

##### origin

`number`[]

##### floors

`number`

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

#### Throws

If building geometry or part metadata is ambiguous or unsupported.

***

### buildWindowLayout()

> `static` **buildWindowLayout**(`source`, `floors`): [`BuildingWindowLayoutResult`](../interfaces/BuildingWindowLayoutResult.md)

Defined in: [triangulator-windows.ts:79](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/triangulator-windows.ts#L79)

Places windows on original outer and courtyard rings, at each part's height/base.
IDs include component/ring indices, avoiding collisions between parts.

#### Parameters

##### source

`FeatureCollection`

##### floors

`number`

#### Returns

[`BuildingWindowLayoutResult`](../interfaces/BuildingWindowLayoutResult.md)

#### Throws

If building geometry or part metadata is ambiguous or unsupported.

***

### resolveHeight()

> `static` **resolveHeight**(`feature`): `number`

Defined in: [triangulator-windows.ts:125](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/triangulator-windows.ts#L125)

Returns the maximum effective part height, with the existing missing-height fallback.

#### Parameters

##### feature

`Feature`\<`Geometry` \| `null`, `GeoJsonProperties`\>

#### Returns

`number`
