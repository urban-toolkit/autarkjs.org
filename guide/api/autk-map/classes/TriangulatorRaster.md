[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / TriangulatorRaster

# Class: TriangulatorRaster

Defined in: autk-core/dist/src/triangulator-raster.d.ts:11

Builds textured mesh geometry for GeoTIFF raster layers.

`TriangulatorRaster` turns the source collection `bbox` into a single quad in
local XY space. The four corners are shifted by the supplied origin so the
raster aligns with the rest of the layer stack, and the quad is emitted with
UVs spanning `[0, 1]` to match normalized texture coordinates.

## Constructors

### Constructor

> **new TriangulatorRaster**(): `TriangulatorRaster`

#### Returns

`TriangulatorRaster`

## Methods

### buildMesh()

> `static` **buildMesh**(`geotiff`, `origin`): \[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

Defined in: autk-core/dist/src/triangulator-raster.d.ts:22

Builds a single textured quad covering the raster bounding box.

#### Parameters

##### geotiff

`FeatureCollection`\<`Geometry` \| `null`\>

Raster feature collection whose `bbox` defines the quad extent.

##### origin

`number`[]

World-space origin subtracted from each corner to form local coordinates.

#### Returns

\[[`LayerGeometry`](../interfaces/LayerGeometry.md)[], [`LayerComponent`](../interfaces/LayerComponent.md)[]\]

A tuple of quad geometry and matching component metadata.

#### Throws

Never throws. When `bbox` is missing, returns empty arrays with a console warning.

#### Example

```ts
const [meshes, comps] = TriangulatorRaster.buildMesh(rasterFC, origin);
```
