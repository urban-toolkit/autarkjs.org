[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / AutkMap

# Class: AutkMap

Defined in: [autk-map/src/map.ts:93](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L93)

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

Defined in: [autk-map/src/map.ts:127](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L127)

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

Defined in: [autk-map/src/map.ts:173](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L173)

Currently active pick-enabled layer, if any.

##### Returns

[`Layer`](Layer.md) \| `null`

***

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [autk-map/src/map.ts:143](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L143)

View and projection camera.

##### Returns

[`Camera`](Camera.md)

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/map.ts:158](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L158)

Backing WebGPU canvas element.

##### Returns

`HTMLCanvasElement`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

Defined in: [autk-map/src/map.ts:168](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L168)

Public typed map-event bus (e.g., picking).

##### Returns

`EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

***

### layerManager

#### Get Signature

> **get** **layerManager**(): [`LayerManager`](LayerManager.md)

Defined in: [autk-map/src/map.ts:153](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L153)

Ordered layer stack manager.

##### Returns

[`LayerManager`](LayerManager.md)

***

### renderer

#### Get Signature

> **get** **renderer**(): [`Renderer`](Renderer.md)

Defined in: [autk-map/src/map.ts:148](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L148)

WebGPU renderer.

##### Returns

[`Renderer`](Renderer.md)

***

### ui

#### Get Signature

> **get** **ui**(): [`AutkMapUi`](AutkMapUi.md)

Defined in: [autk-map/src/map.ts:163](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L163)

Map UI controller.

##### Returns

[`AutkMapUi`](AutkMapUi.md)

## Methods

### clearHighlightedIds()

> **clearHighlightedIds**(`id`): `void`

Defined in: [autk-map/src/map.ts:654](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L654)

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

Defined in: [autk-map/src/map.ts:687](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L687)

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

Defined in: [autk-map/src/map.ts:745](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L745)

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

### draw()

> **draw**(`fps?`): `void`

Defined in: [autk-map/src/map.ts:705](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L705)

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

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/map.ts:185](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L185)

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

Defined in: [autk-map/src/map.ts:223](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L223)

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

Defined in: [autk-map/src/map.ts:280](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L280)

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

Defined in: [autk-map/src/map.ts:624](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L624)

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

### setHighlightedIds()

> **setHighlightedIds**(`id`, `selection`): `void`

Defined in: [autk-map/src/map.ts:638](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L638)

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

Defined in: [autk-map/src/map.ts:671](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L671)

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

### updateColorMap()

> **updateColorMap**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:527](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L527)

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

Defined in: [autk-map/src/map.ts:481](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L481)

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

Defined in: [autk-map/src/map.ts:584](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L584)

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

### updateThematic()

> **updateThematic**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:327](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map.ts#L327)

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
