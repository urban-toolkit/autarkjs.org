[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / TriangulatorPolylines

# Class: TriangulatorPolylines

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:12

Triangulators for converting supported data sources into renderable meshes.

## Constructors

### Constructor

> **new TriangulatorPolylines**(): `TriangulatorPolylines`

#### Returns

`TriangulatorPolylines`

## Properties

### DEFAULT\_ROAD\_HALF\_WIDTH

> `readonly` `static` **DEFAULT\_ROAD\_HALF\_WIDTH**: `number`

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:18

Default road half-width used when no known `highway` tag value is available.

***

### defaultOffsetResolver

> `readonly` `static` **defaultOffsetResolver**: (`_feature`, `_featureIndex`) => `number`

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:20

Optional callback used to resolve a per-feature polyline half-width.

#### Parameters

##### \_feature

`Feature`

##### \_featureIndex

`number`

#### Returns

`number`

***

### offset

> `static` **offset**: `number`

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:14

Default half-width, in local planar units, used when buffering source polylines.

***

### ROAD\_HALF\_WIDTH\_BY\_HIGHWAY

> `readonly` `static` **ROAD\_HALF\_WIDTH\_BY\_HIGHWAY**: `Record`\<`string`, `number`\>

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:16

OSM road half-widths, in local planar units, keyed by normalized `highway` tag value.

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`, `resolveOffset?`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:32

Builds triangulated polyline geometry for a GeoJSON feature collection.

#### Parameters

##### geojson

`FeatureCollection`

Source feature collection containing polyline geometries.

##### origin

`number`[]

World-space origin subtracted before converting to local planar space.

##### resolveOffset?

(`feature`, `featureIndex`) => `number`

Optional per-feature half-width resolver.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of triangulated geometry chunks and per-feature component metadata.

#### Throws

Never throws. Unsupported or degenerate features are skipped.

#### Example

```ts
const [meshes, comps] = TriangulatorPolylines.buildMesh(lineFC, origin);
```

***

### geometryCollectionToPolyline()

> `static` **geometryCollectionToPolyline**(`feature`, `origin`, `offset`, `featureIndex`): `object`[]

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:75

Flattens supported children of a `GeometryCollection` into polyline meshes.

#### Parameters

##### feature

`Feature`

Source feature with `GeometryCollection` geometry.

##### origin

`number`[]

World-space origin subtracted before buffering.

##### offset

`number`

Polyline half-width used for planar buffering.

##### featureIndex

`number`

Index of the parent feature in the source collection.

#### Returns

`object`[]

Triangulated meshes for all supported child geometries.

#### Throws

Never throws. Unsupported children are skipped with a console warning.

#### Example

```ts
const meshes = TriangulatorPolylines.geometryCollectionToPolyline(feature, origin, 5, 0);
```

***

### lineStringToPolyline()

> `static` **lineStringToPolyline**(`feature`, `origin`, `offset`): `object`[]

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:44

Converts a single `LineString` feature into triangulated polyline mesh data.

#### Parameters

##### feature

`Feature`

Source feature with `LineString` geometry.

##### origin

`number`[]

World-space origin subtracted before buffering.

##### offset

`number`

Polyline half-width used for planar buffering.

#### Returns

`object`[]

One triangulated polygon mesh, or an empty array when buffering fails.

#### Throws

Never throws. Degenerate buffers return an empty array.

#### Example

```ts
const [mesh] = TriangulatorPolylines.lineStringToPolyline(feature, origin, 5);
```

***

### multiLineStringToPolyline()

> `static` **multiLineStringToPolyline**(`feature`, `origin`, `offset`): `object`[]

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:59

Converts a `MultiLineString` feature into triangulated polyline meshes.

#### Parameters

##### feature

`Feature`

Source feature with `MultiLineString` geometry.

##### origin

`number`[]

World-space origin subtracted before buffering.

##### offset

`number`

Polyline half-width used for planar buffering.

#### Returns

`object`[]

Triangulated meshes for each valid buffered line string.

#### Throws

Never throws. Invalid buffered lines are silently ignored.

#### Example

```ts
const meshes = TriangulatorPolylines.multiLineStringToPolyline(feature, origin, 5);
```

***

### normalizeRoadHighwayValue()

> `static` **normalizeRoadHighwayValue**(`highway`): `string` \| `null`

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:100

Normalizes an OSM `highway` tag value for road-width lookup.

#### Parameters

##### highway

`unknown`

Raw `highway` property value (string, semicolon-delimited, or array).

#### Returns

`string` \| `null`

Normalized highway token, or `null` when unavailable.

#### Throws

Never throws.

#### Example

```ts
TriangulatorPolylines.normalizeRoadHighwayValue('motorway');  // 'motorway'
TriangulatorPolylines.normalizeRoadHighwayValue('primary;secondary');  // 'primary'
```

***

### resolveRoadHalfWidth()

> `static` **resolveRoadHalfWidth**(`feature`): `number`

Defined in: autk-core/dist/src/triangulator-polylines.d.ts:89

Resolves a road polyline half-width from OSM `highway` tag semantics.

#### Parameters

##### feature

`Feature`

Source road feature with `highway` property.

#### Returns

`number`

Polyline half-width in local planar units.

#### Throws

Never throws. Falls back to `DEFAULT_ROAD_HALF_WIDTH`.

#### Example

```ts
const hw = TriangulatorPolylines.resolveRoadHalfWidth(roadFeature);
// hw → 10 for motorway, 6 for primary, 3.5 for unknown
```
