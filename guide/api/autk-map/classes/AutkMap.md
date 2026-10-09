[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / AutkMap

# Class: AutkMap

Defined in: [autk-map/src/map.ts:101](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L101)

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

> **new AutkMap**(`canvas`, `showUi?`): `AutkMap`

Defined in: [autk-map/src/map.ts:148](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L148)

Creates an AutkMap instance bound to a canvas element.

#### Parameters

##### canvas

`HTMLCanvasElement`

Canvas element used as the WebGPU drawing surface.

##### showUi?

`boolean` = `true`

Whether floating UI elements should be shown. Defaults to `true`.

#### Returns

`AutkMap`

#### Throws

Never throws.

## Accessors

### activePickingLayer

#### Get Signature

> **get** **activePickingLayer**(): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/map.ts:214](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L214)

Currently active pick-enabled layer, if any.

##### Returns

[`Layer`](Layer.md) \| `null`

***

### camera

#### Get Signature

> **get** **camera**(): `Camera`

Defined in: [autk-map/src/map.ts:174](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L174)

View and projection camera.

##### Returns

`Camera`

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/map.ts:194](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L194)

Backing WebGPU canvas element.

##### Returns

`HTMLCanvasElement`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

Defined in: [autk-map/src/map.ts:209](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L209)

Public typed map-event bus (e.g., picking).

##### Returns

`EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

***

### layerManager

#### Get Signature

> **get** **layerManager**(): [`LayerManager`](LayerManager.md)

Defined in: [autk-map/src/map.ts:189](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L189)

Ordered layer stack manager.

##### Returns

[`LayerManager`](LayerManager.md)

***

### renderer

#### Get Signature

> **get** **renderer**(): [`Renderer`](Renderer.md)

Defined in: [autk-map/src/map.ts:184](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L184)

WebGPU renderer.

##### Returns

[`Renderer`](Renderer.md)

***

### showUi

#### Get Signature

> **get** **showUi**(): `boolean`

Defined in: [autk-map/src/map.ts:204](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L204)

Whether optional map controls are enabled; the watermark remains visible.

##### Returns

`boolean`

***

### style

#### Get Signature

> **get** **style**(): [`MapStyle`](MapStyle.md)

Defined in: [autk-map/src/map.ts:179](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L179)

Instance-specific semantic map style.

##### Returns

[`MapStyle`](MapStyle.md)

***

### ui

#### Get Signature

> **get** **ui**(): [`AutkMapUi`](AutkMapUi.md)

Defined in: [autk-map/src/map.ts:199](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L199)

Map UI controller.

##### Returns

[`AutkMapUi`](AutkMapUi.md)

## Methods

### clearHighlightedIds()

> **clearHighlightedIds**(`id`): `void`

Defined in: [autk-map/src/map.ts:732](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L732)

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

Defined in: [autk-map/src/map.ts:765](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L765)

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

Defined in: [autk-map/src/map.ts:983](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L983)

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

Defined in: [autk-map/src/map.ts:814](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L814)

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

> **draw**(`options?`): `void`

Defined in: [autk-map/src/map.ts:902](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L902)

Starts rendering, either on every frame or only when the picture changes.

By default it draws once and then only when something changes.
A number, `{ fps }`, or `{ onDemand: false }` starts a continuous loop.
In on-demand mode:
camera navigation and resizing, layer loads, updates and removals, style
changes, picking and terrain changes each request a frame, and changes
made before the next frame are drawn once. Direct mutations are not
observed: mark CPU data or uniforms dirty when necessary, then call
[AutkMap.requestRender](#requestrender) to draw the updated resources.

Calling `draw` again replaces the current mode, so a map that is already
drawing continuously can be switched to on-demand rendering and back.

#### Parameters

##### options?

`number` \| [`MapDrawOptions`](../interfaces/MapDrawOptions.md)

Target frames per second for the continuous loop (default `60`, `0` renders as fast as possible), or [MapDrawOptions](../interfaces/MapDrawOptions.md).

#### Returns

`void`

Nothing. Rendering is scheduled via `requestAnimationFrame`.

#### Throws

Never throws.

#### Example

```ts
map.draw();                    // draw only when something changes
map.draw(30);                  // redraw continuously at 30 fps
map.draw({ onDemand: false }); // redraw continuously at 60 fps
```

***

### enableTerrainMode()

> **enableTerrainMode**(`collection`, `property`): `void`

Defined in: [autk-map/src/map.ts:787](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L787)

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

Defined in: [autk-map/src/map.ts:226](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L226)

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

Defined in: [autk-map/src/map.ts:267](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L267)

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

Defined in: [autk-map/src/map.ts:335](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L335)

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

Defined in: [autk-map/src/map.ts:697](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L697)

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

### requestRender()

> **requestRender**(): `void`

Defined in: [autk-map/src/map.ts:961](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L961)

Schedules one frame when the map renders on demand.

Calls made before that frame runs are merged into it, so a burst of
changes is drawn once. The map already requests a frame after every change
it can observe; call this after changing anything else that affects the
picture, such as a layer's GPU resources written directly.

Does not upload changed CPU buffers or refresh cached uniforms by itself;
use the update APIs or mark the corresponding layer state dirty first.
Has no effect before `draw()`, in continuous mode, or after `destroy()`.

#### Returns

`void`

Nothing. The frame is scheduled via `requestAnimationFrame`.

#### Throws

Never throws.

#### Example

```ts
map.draw({ onDemand: true });
// ...after changing something the map cannot observe:
map.requestRender();
```

***

### resetCamera()

> **resetCamera**(): `void`

Defined in: [autk-map/src/map.ts:855](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L855)

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

Defined in: [autk-map/src/map.ts:716](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L716)

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

Defined in: [autk-map/src/map.ts:749](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L749)

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

Defined in: [autk-map/src/map.ts:869](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L869)

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

Defined in: [autk-map/src/map.ts:600](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L600)

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

Defined in: [autk-map/src/map.ts:536](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L536)

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

Defined in: [autk-map/src/map.ts:657](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L657)

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

Defined in: [autk-map/src/map.ts:835](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L835)

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

Defined in: [autk-map/src/map.ts:382](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map.ts#L382)

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
