[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TriangulatorPolylines

# Class: TriangulatorPolylines

Defined in: [triangulator-polylines.ts:17](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L17)

Triangulates polyline features into stroked mesh geometry.

## Constructors

### Constructor

> **new TriangulatorPolylines**(): `TriangulatorPolylines`

#### Returns

`TriangulatorPolylines`

## Properties

### DEFAULT\_ROAD\_HALF\_WIDTH

> `readonly` `static` **DEFAULT\_ROAD\_HALF\_WIDTH**: `number` = `3.5`

Defined in: [triangulator-polylines.ts:43](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L43)

Default road half-width used when no known `highway` tag value is available.

***

### offset

> `static` **offset**: `number` = `5`

Defined in: [triangulator-polylines.ts:19](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L19)

Default half-width, in local planar units, used when buffering source polylines.

***

### ROAD\_HALF\_WIDTH\_BY\_HIGHWAY

> `readonly` `static` **ROAD\_HALF\_WIDTH\_BY\_HIGHWAY**: `Record`\<`string`, `number`\>

Defined in: [triangulator-polylines.ts:22](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L22)

OSM road half-widths, in local planar units, keyed by normalized `highway` tag value.

## Methods

### buildMesh()

> `static` **buildMesh**(`geojson`, `origin`, `resolveOffset?`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: [triangulator-polylines.ts:59](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L59)

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

### defaultOffsetResolver()

> `readonly` `static` **defaultOffsetResolver**(`_feature`, `_featureIndex`): `number`

Defined in: [triangulator-polylines.ts:46](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L46)

Optional callback used to resolve a per-feature polyline half-width.

#### Parameters

##### \_feature

`Feature`

##### \_featureIndex

`number`

#### Returns

`number`

***

### geometryCollectionToPolyline()

> `static` **geometryCollectionToPolyline**(`feature`, `origin`, `offset`, `featureIndex`): `object`[]

Defined in: [triangulator-polylines.ts:178](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L178)

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

Defined in: [triangulator-polylines.ts:121](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L121)

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

Defined in: [triangulator-polylines.ts:146](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L146)

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

Defined in: [triangulator-polylines.ts:221](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L221)

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

Defined in: [triangulator-polylines.ts:204](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/triangulator-polylines.ts#L204)

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
