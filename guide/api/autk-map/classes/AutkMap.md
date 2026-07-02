[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / AutkMap

# Class: AutkMap

Defined in: [autk-map/src/map.ts:95](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L95)

Main map controller for rendering, interaction, and layer lifecycle.

`AutkMap` initializes the renderer, camera, layer manager, and interaction
controllers, and exposes high-level APIs for loading and updating layers.

## Example

```ts
const canvas = document.getElementById('map-canvas') as HTMLCanvasElement;

const map = new AutkMap(canvas);
await map.init();

const geojsonData = { /* GeoJSON data */ };
map.loadCollection('my_data', { collection: geojsonData });
```

## Constructors

### Constructor

> **new AutkMap**(`canvas`): `AutkMap`

Defined in: [autk-map/src/map.ts:137](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L137)

Creates an AutkMap instance bound to a canvas element.

#### Parameters

##### canvas

`HTMLCanvasElement`

Canvas element used as the WebGPU drawing surface.

#### Returns

`AutkMap`

#### Throws

Never throws.

## Accessors

### activePickingLayer

#### Get Signature

> **get** **activePickingLayer**(): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/map.ts:191](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L191)

Currently active pick-enabled layer, if any.

##### Returns

[`Layer`](Layer.md) \| `null`

***

### camera

#### Get Signature

> **get** **camera**(): `Camera`

Defined in: [autk-map/src/map.ts:156](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L156)

View and projection camera.

##### Returns

`Camera`

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/map.ts:176](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L176)

Backing WebGPU canvas element.

##### Returns

`HTMLCanvasElement`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

Defined in: [autk-map/src/map.ts:186](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L186)

Public typed map-event bus (e.g., picking).

##### Returns

`EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

***

### layerManager

#### Get Signature

> **get** **layerManager**(): [`LayerManager`](LayerManager.md)

Defined in: [autk-map/src/map.ts:171](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L171)

Ordered layer stack manager.

##### Returns

[`LayerManager`](LayerManager.md)

***

### renderer

#### Get Signature

> **get** **renderer**(): [`Renderer`](Renderer.md)

Defined in: [autk-map/src/map.ts:166](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L166)

WebGPU renderer.

##### Returns

[`Renderer`](Renderer.md)

***

### style

#### Get Signature

> **get** **style**(): [`MapStyle`](MapStyle.md)

Defined in: [autk-map/src/map.ts:161](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L161)

Instance-specific semantic map style.

##### Returns

[`MapStyle`](MapStyle.md)

***

### ui

#### Get Signature

> **get** **ui**(): [`AutkMapUi`](AutkMapUi.md)

Defined in: [autk-map/src/map.ts:181](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L181)

Map UI controller.

##### Returns

[`AutkMapUi`](AutkMapUi.md)

## Methods

### clearHighlightedIds()

> **clearHighlightedIds**(`id`): `void`

Defined in: [autk-map/src/map.ts:702](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L702)

Clears the highlighted selection of a pickable layer.

#### Parameters

##### id

`string`

Layer identifier.

#### Returns

`void`

Nothing. Unsupported layers are ignored.

#### Throws

Never throws.

***

### clearSkippedIds()

> **clearSkippedIds**(`id`): `void`

Defined in: [autk-map/src/map.ts:735](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L735)

Clears skipped rendering state for a vector layer.

#### Parameters

##### id

`string`

Layer identifier.

#### Returns

`void`

Nothing. Non-vector layers are ignored.

#### Throws

Never throws.

***

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/map.ts:885](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L885)

Tears down map resources, event bindings, and GPU allocations.

#### Returns

`void`

Nothing. Repeated calls after destruction are ignored.

#### Throws

Never throws.

#### Example

```ts
map.destroy();
```

***

### disableTerrainMode()

> **disableTerrainMode**(): `void`

Defined in: [autk-map/src/map.ts:782](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L782)

Disables terrain rendering and returns the map to the flat render path.

#### Returns

`void`

Nothing. Terrain GPU resources are released when present.

#### Throws

Never throws.

#### Example

```ts
map.disableTerrainMode();
```

***

### draw()

> **draw**(`fps?`): `void`

Defined in: [autk-map/src/map.ts:845](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L845)

Starts the continuous render loop at the target frame rate.

#### Parameters

##### fps?

`number` = `60`

Target frames per second (default `60`). Pass `0` to render as fast as possible.

#### Returns

`void`

Nothing. Rendering is scheduled via `requestAnimationFrame`.

#### Throws

Never throws.

#### Example

```ts
map.draw(30);  // render at 30 fps
```

***

### enableTerrainMode()

> **enableTerrainMode**(`collection`, `property`): `void`

Defined in: [autk-map/src/map.ts:757](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L757)

Enables terrain rendering from a raster feature collection.

The collection is converted to a local-space heightfield and used to
replace the flat render path with the terrain render path.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry` \| `null`\>

Raster feature collection containing bbox, resolution, and height values.

##### property

`string`

Dot-path to the raster band used as terrain height.

#### Returns

`void`

Nothing. Terrain resources are initialized immediately.

#### Throws

If the map origin is not initialized or the heightfield input is invalid.

#### Example

```ts
map.enableTerrainMode(elevationCollection, 'bands.elevation');
```

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/map.ts:203](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L203)

Initializes renderer resources, event bindings, and UI.

#### Returns

`Promise`\<`void`\>

Promise that resolves when renderer initialization completes.

#### Throws

If WebGPU is not available or device acquisition fails.

#### Example

```ts
await map.init();
```

***

### loadCollection()

> **loadCollection**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:241](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L241)

Loads a GeoJSON feature collection as a map layer.

When `type` is omitted the layer type is inferred from all non-null
geometries in the collection. Implicit inference only works for
collections that resolve to a single geometry family
(Point → 'points', LineString → 'polylines', Polygon → 'polygons').
Mixed-geometry collections must pass an explicit `type`.

Supported layer types: 'surface', 'water', 'parks', 'roads', 'buildings',
'points', 'polylines', 'polygons', 'raster'.

#### Parameters

##### id

`string`

Unique layer identifier.

##### params

[`LoadCollectionParams`](../interfaces/LoadCollectionParams.md)

Load parameters.

#### Returns

`void`

#### Throws

Never throws. Errors are logged to the console.

***

### loadMesh()

> **loadMesh**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:310](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L310)

Loads a prebuilt 3D triangle mesh directly into the map.

Mesh coordinates must already be expressed in the map's local coordinate
space, relative to the current shared origin.

#### Parameters

##### id

`string`

Layer identifier.

##### params

[`LoadMeshParams`](../interfaces/LoadMeshParams.md)

Mesh loading parameters.

#### Returns

`void`

Nothing. The mesh layer is created and registered with the map.

#### Throws

If the map origin has not been initialized.

***

### removeLayer()

> **removeLayer**(`id`): `void`

Defined in: [autk-map/src/map.ts:672](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L672)

Removes all layers matching the provided id.

#### Parameters

##### id

`string`

Layer identifier.

#### Returns

`void`

Nothing. Matching layers are removed from the map.

#### Throws

Never throws. Unknown ids are silently ignored.

***

### resetCamera()

> **resetCamera**(): `void`

Defined in: [autk-map/src/map.ts:813](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L813)

Resets the camera for the active render mode.

In terrain mode the camera frames the heightfield bounds; otherwise it
returns to the default flat map view.

#### Returns

`void`

Nothing. The camera state and viewport matrices are updated.

#### Throws

Never throws.

#### Example

```ts
map.resetCamera();
```

***

### setHighlightedIds()

> **setHighlightedIds**(`id`, `selection`): `void`

Defined in: [autk-map/src/map.ts:686](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L686)

Replaces the highlighted selection of a pickable layer.

#### Parameters

##### id

`string`

Layer identifier.

##### selection

`number`[]

Component ids to highlight.

#### Returns

`void`

Nothing. Unsupported layers are ignored.

#### Throws

Never throws.

***

### setSkippedIds()

> **setSkippedIds**(`id`, `selection`): `void`

Defined in: [autk-map/src/map.ts:719](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L719)

Toggles skipped rendering for the provided component ids of a vector layer.

#### Parameters

##### id

`string`

Layer identifier.

##### selection

`number`[]

Component ids to skip/unskip.

#### Returns

`void`

Nothing. Non-vector layers are ignored.

#### Throws

Never throws.

***

### toggleTerrainOverlayBoundsDebug()

> **toggleTerrainOverlayBoundsDebug**(): `void`

Defined in: [autk-map/src/map.ts:827](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L827)

Toggles terrain overlay bounds debug rendering.

The call is ignored with a warning when terrain mode is disabled.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

#### Example

```ts
map.toggleTerrainOverlayBoundsDebug();
```

***

### updateColorMap()

> **updateColorMap**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:575](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L575)

Updates color-map configuration for a layer.

#### Parameters

##### id

`string`

Layer identifier.

##### params

[`UpdateColorMapParams`](../interfaces/UpdateColorMapParams.md)

Color-map update parameters.

#### Returns

`void`

Nothing. The target layer render configuration is updated in place.

#### Throws

Never throws. Unknown layers are silently ignored.

***

### updateRaster()

> **updateRaster**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:511](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L511)

Updates raster layer values and color domain.

#### Parameters

##### id

`string`

Layer identifier.

##### params

[`UpdateRasterParams`](../interfaces/UpdateRasterParams.md)

Update parameters.

#### Returns

`void`

#### Throws

Never throws. Errors are logged to the console.

***

### updateRenderInfo()

> **updateRenderInfo**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:632](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L632)

Updates one or more render properties of a layer.

#### Parameters

##### id

`string`

Layer identifier.

##### params

[`UpdateRenderInfoParams`](../interfaces/UpdateRenderInfoParams.md) \| `Partial`\<[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)\>

Render update parameters.

[`UpdateRenderInfoParams`](../interfaces/UpdateRenderInfoParams.md)

***

`Partial`\<[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)\>

#### Returns

`void`

Nothing. The target layer render state is updated in place.

#### Throws

Never throws. Unknown layers are silently ignored.

***

### updateTerrainDebug()

> **updateTerrainDebug**(`options`): `void`

Defined in: [autk-map/src/map.ts:798](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L798)

Updates debug options for the active terrain render path.

Calls before terrain mode is enabled are ignored.

#### Parameters

##### options

`Partial`\<`TerrainDebugOptions`\>

Partial terrain debug flags to merge with existing options.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

#### Example

```ts
map.updateTerrainDebug({ showMesh: true, enableCulling: false });
```

***

### updateThematic()

> **updateThematic**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:357](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/map.ts#L357)

Updates the thematic (color-mapped) values of a layer from a feature collection.

Normalization to `[0, 1]` (required by the GPU shader) and legend label
generation are delegated to `ColorMap` based on the active layer
`colorMap` configuration.

Thematic values are aligned to rendered components through source feature
metadata captured during triangulation. When both the layer and the input
collection expose feature ids, matching is done by `feature.id`; otherwise
the update falls back to the original feature index order.

For raster layers the raster texture is rebuilt from `property`.

#### Parameters

##### id

`string`

Layer identifier.

##### params

[`UpdateThematicParams`](../interfaces/UpdateThematicParams.md)

Update parameters.

#### Returns

`void`

#### Throws

Never throws. Errors are logged to the console.
