# Class: AutkMap

Defined in: [autk-map/src/map.ts:134](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L134)

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

> **new AutkMap**(`canvas`, `options?`): `AutkMap`

Defined in: [autk-map/src/map.ts:201](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L201)

Creates an AutkMap instance bound to a canvas element.

#### Parameters

##### canvas

`HTMLCanvasElement`

Canvas element used as the WebGPU drawing surface.

##### options?

[`MapOptions`](../interfaces/MapOptions.md) = `{}`

Workspace CRS and whether floating UI elements are shown.

#### Returns

`AutkMap`

#### Throws

If the workspace CRS is unsupported.

#### Example

```ts
new AutkMap(canvas, { crs: 'EPSG:3857', showUi: false });
```

## Accessors

### activeClickLayer

#### Get Signature

> **get** **activeClickLayer**(): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/map.ts:298](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L298)

Currently active pick-enabled layer, if any.

##### Returns

[`Layer`](Layer.md) \| `null`

***

### activeHoverLayer

#### Get Signature

> **get** **activeHoverLayer**(): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/map.ts:946](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L946)

The layer currently targeted for hover highlighting and events.

##### Returns

[`Layer`](Layer.md) \| `null`

***

### camera

#### Get Signature

> **get** **camera**(): `Camera`

Defined in: [autk-map/src/map.ts:258](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L258)

View and projection camera.

##### Returns

`Camera`

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/map.ts:278](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L278)

Backing WebGPU canvas element.

##### Returns

`HTMLCanvasElement`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

Defined in: [autk-map/src/map.ts:293](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L293)

Public typed map-event bus (e.g., picking).

##### Returns

`EventEmitter`\<[`MapEventRecord`](../type-aliases/MapEventRecord.md)\>

***

### hoverSampleInterval

#### Get Signature

> **get** **hoverSampleInterval**(): `number`

Defined in: [autk-map/src/map.ts:964](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L964)

**`Internal`**

Terrain still prepares its visible scene before picks, so sample it less often.

##### Returns

`number`

***

### layerManager

#### Get Signature

> **get** **layerManager**(): [`LayerManager`](LayerManager.md)

Defined in: [autk-map/src/map.ts:273](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L273)

Ordered layer stack manager.

##### Returns

[`LayerManager`](LayerManager.md)

***

### renderer

#### Get Signature

> **get** **renderer**(): [`Renderer`](Renderer.md)

Defined in: [autk-map/src/map.ts:268](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L268)

WebGPU renderer.

##### Returns

[`Renderer`](Renderer.md)

***

### renderStats

#### Get Signature

> **get** **renderStats**(): [`FrameStatsSnapshot`](../interfaces/FrameStatsSnapshot.md)

Defined in: [autk-map/src/map.ts:537](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L537)

CPU time and rate of the frames this map has rendered.

Time is measured on the CPU around preparing and submitting a frame, not
on the GPU, so it can look healthy while the GPU is the bottleneck. In
on-demand mode `framesPerSecond` is 0 while the map is idle, and
`frameCount` stops increasing. Reading it never triggers rendering.

##### Returns

[`FrameStatsSnapshot`](../interfaces/FrameStatsSnapshot.md)

A snapshot of the frame statistics.

***

### showUi

#### Get Signature

> **get** **showUi**(): `boolean`

Defined in: [autk-map/src/map.ts:288](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L288)

Whether optional map controls are enabled; the watermark remains visible.

##### Returns

`boolean`

***

### style

#### Get Signature

> **get** **style**(): [`MapStyle`](MapStyle.md)

Defined in: [autk-map/src/map.ts:263](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L263)

Instance-specific semantic map style.

##### Returns

[`MapStyle`](MapStyle.md)

***

### tracksHover

#### Get Signature

> **get** **tracksHover**(): `boolean`

Defined in: [autk-map/src/map.ts:967](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L967)

**`Internal`**

Whether pointer motion is needed for hover.

##### Returns

`boolean`

***

### ui

#### Get Signature

> **get** **ui**(): [`AutkMapUi`](AutkMapUi.md)

Defined in: [autk-map/src/map.ts:283](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L283)

Map UI controller.

##### Returns

[`AutkMapUi`](AutkMapUi.md)

***

### workspaceCrs

#### Get Signature

> **get** **workspaceCrs**(): `string`

Defined in: [autk-map/src/map.ts:232](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L232)

Coordinate system shared by normalized data, imagery, and terrain.

##### Returns

`string`

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/map.ts:1565](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1565)

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

> **draw**(`options?`): `void`

Defined in: [autk-map/src/map.ts:1481](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1481)

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

`number` \| [`MapDrawOptions`](../interfaces/MapDrawOptions.md) = `{}`

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

### fitBounds()

> **fitBounds**(`bounds?`): `void`

Defined in: [autk-map/src/map.ts:1429](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1429)

Moves the camera, looking straight down, so a rectangle fits the viewport.

A flat map starts at the middle of its first layer from a fixed height, which can show nothing of a spread-out
collection. Call this after loading the layers to frame them: without an argument it frames the collection that
set the map origin (the first one loaded), otherwise the rectangle given, in the coordinates of the data. In
terrain mode, which frames its heightfield itself, or before any layer is loaded, it does nothing. Nothing
calls it for you, so existing maps keep their view.

#### Parameters

##### bounds?

[`MapBounds`](../type-aliases/MapBounds.md)

Optional rectangle `[minX, minY, maxX, maxY]` in the coordinates of the data given to the map.

#### Returns

`void`

Nothing. The camera is moved and a frame is requested.

#### Throws

Never throws.

#### Example

```ts
await map.init();
map.loadCollection('parks', { collection });
map.fitBounds();
```

***

### getLayerOrder()

> **getLayerOrder**(): `string`[]

Defined in: [autk-map/src/map.ts:1199](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1199)

Returns the visible 2D layer IDs in draw order, bottom first.

#### Returns

`string`[]

***

### getTerrainTileStats()

> **getTerrainTileStats**(): [`TerrainTileStats`](../interfaces/TerrainTileStats.md) \| `null`

Defined in: [autk-map/src/map.ts:1351](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1351)

Statistics of the streamed terrain: the zoom of each window, how many
tiles are wanted and ready, samples still missing, and the request queue.
Read-only; it never triggers rendering, so it is safe to poll on a timer.

#### Returns

[`TerrainTileStats`](../interfaces/TerrainTileStats.md) \| `null`

The statistics, or `null` when terrain does not stream from tiles.

#### Throws

Never throws.

#### Example

```ts
const stats = map.getTerrainTileStats();
```

***

### getTerrainValidationStats()

> **getTerrainValidationStats**(): [`ElevationValidationStats`](../interfaces/ElevationValidationStats.md) \| `null`

Defined in: [autk-map/src/map.ts:1337](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1337)

Validation diagnostics shared by tile and normalized raster terrain. Null when disabled or absent.

#### Returns

[`ElevationValidationStats`](../interfaces/ElevationValidationStats.md) \| `null`

***

### getTileStats()

> **getTileStats**(`id`): [`TileLayerStats`](../interfaces/TileLayerStats.md) \| `null`

Defined in: [autk-map/src/map.ts:522](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L522)

Statistics of a tile layer: what the last selection holds, how many
tiles are ready, drawn from an ancestor or missing, the request queue, the
texture cache and cumulative counters.

Reading it is cheap and never triggers rendering, so a page can poll it on
a timer without keeping the map busy.

#### Parameters

##### id

`string`

Tile layer identifier.

#### Returns

[`TileLayerStats`](../interfaces/TileLayerStats.md) \| `null`

The statistics, or `null` if there is no tile layer with that id.

#### Example

```ts
const stats = map.getTileStats('imagery');
if (stats?.idle) console.log('all tiles loaded');
```

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/map.ts:310](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L310)

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

Defined in: [autk-map/src/map.ts:352](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L352)

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

If reprojection is unsupported or coordinates are invalid. Other loading errors are logged.

***

### loadMesh()

> **loadMesh**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:431](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L431)

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

### loadTerrain()

> **loadTerrain**(`params`): `void`

Defined in: [autk-map/src/map.ts:1263](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1263)

Loads elevation tiles or a normalized raster into the shared terrain renderer.
Imagery is optional and is loaded independently with loadTiles(). An existing
workspace origin and camera are reused. On an empty map, set the view before loading elevation tiles;
a raster can initialize its own origin and view from its bounds.
Without visible imagery, loaded surface layers supply the terrain geometry,
preserving their boundaries and holes. Visible tiles or RGB rasters retain
the larger elevation mesh. Maps without surface layers also retain that mesh.

#### Parameters

##### params

[`LoadTerrainParams`](../interfaces/LoadTerrainParams.md)

Elevation source and terrain options.

#### Returns

`void`

#### Throws

If coordinates, source, or options are invalid, or GPU setup fails.

#### Example

```ts
map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });
```

***

### loadTiles()

> **loadTiles**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:476](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L476)

Loads a tile basemap: satellite imagery or a street map fetched as the
camera moves.

Tiles use the Web Mercator grid. By default, they draw below every other layer,
so load vector layers normally and the basemap shows underneath; a
`surface` layer would cover it. Drawing needs the map origin, which the
first loaded data layer defines, or `setView()` can establish it for a
tile-only map. The source attribution is shown on the map.

Opacity and visibility change through [AutkMap.updateRenderInfo](#updaterenderinfo).

#### Parameters

##### id

`string`

Unique layer identifier.

##### params

[`LoadTilesParams`](../interfaces/LoadTilesParams.md)

Tile source and options.

#### Returns

`void`

#### Throws

Never throws. Errors, such as an invalid source, are logged to the console.

#### Example

```ts
map.setView({ center: { latitude: 40.7831, longitude: -73.9712 }, zoom: 12 });
map.loadTiles('imagery', { source: TILE_SOURCES.esriWorldImagery });
```

***

### queueHover()

> **queueHover**(`x`, `y`, `clientX`, `clientY`): `void`

Defined in: [autk-map/src/map.ts:970](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L970)

**`Internal`**

Queues a GPU read for the active hover layer.

#### Parameters

##### x

`number`

##### y

`number`

##### clientX

`number`

##### clientY

`number`

#### Returns

`void`

***

### removeLayer()

> **removeLayer**(`id`): `void`

Defined in: [autk-map/src/map.ts:1143](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1143)

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

### removeTerrain()

> **removeTerrain**(): `void`

Defined in: [autk-map/src/map.ts:1241](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1241)

Removes elevation while preserving imagery, data layers, origin, and camera.

#### Returns

`void`

***

### requestPickingFrame()

> **requestPickingFrame**(): `void`

Defined in: [autk-map/src/map.ts:1547](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1547)

**`Internal`**

Schedules input readback; a pending scene redraw always takes priority.

#### Returns

`void`

***

### requestRender()

> **requestRender**(): `void`

Defined in: [autk-map/src/map.ts:1540](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1540)

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

Defined in: [autk-map/src/map.ts:1408](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1408)

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

### resetHover()

> **resetHover**(): `void`

Defined in: [autk-map/src/map.ts:994](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L994)

**`Internal`**

Clears transient hover state and invalidates queued and in-flight reads.

#### Returns

`void`

***

### resetTerrainTileTiming()

> **resetTerrainTileTiming**(): `void`

Defined in: [autk-map/src/map.ts:1363](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1363)

Forgets the terrain timings recorded so far, so the next ones describe one scenario.

#### Returns

`void`

Nothing; does nothing when terrain does not stream from tiles.

#### Throws

Never throws.

#### Example

```ts
map.resetTerrainTileTiming(); // then pan, then read map.getTerrainTileStats()?.timing
```

***

### setHover()

> **setHover**(`id`, `selection`): `void`

Defined in: [autk-map/src/map.ts:1022](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1022)

Highlights a feature as hovered, as pointer movement would, and emits `MapEvent.HOVER`.

The layer's selection is untouched, so a plot can show its hover on the map without
clearing the map's selection. Every id is highlighted; an empty list clears the hover
set through this method.

#### Parameters

##### id

`string`

Layer identifier.

##### selection

`number`[]

Feature ids to hover; `[]` clears.

#### Returns

`void`

Nothing. Unsupported, hidden, or unknown layers are ignored.

#### Throws

Never throws.

#### Example

```ts
plot.events.on(PlotEvent.HOVER, ({ selection }) => map.setHover('neighborhoods', selection));
```

***

### setLayerOrder()

> **setLayerOrder**(`ids`): `void`

Defined in: [autk-map/src/map.ts:1191](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1191)

Sets the order the map draws its layers in, bottom first.

Without one, the map draws its layers in the order by type: tile layers
first, then surface, parks, water and roads layers, then every other
layer in the order it was loaded, so a raster loaded before the roads
still covers them. With an order set:

- the layers listed are drawn in the order given;
- the layers not listed keep their order among themselves;
- a layer moves past another only when the order requires it: of the
  stacks that meet both rules, the map draws the one that reverses the
  fewest pairs of layers compared with the order by type, and of those,
  the one where each listed layer is as low as it can be.

A layer loaded later takes its place by the same rule. Buildings are
drawn with depth over the other layers wherever they are, so the order
leaves them out: listing them changes nothing. An empty list returns to
the order by type.

#### Parameters

##### ids

`string`[]

Layer ids, bottom first.

#### Returns

`void`

Nothing. The layer list and the credits, which follow the order,
are refreshed and a frame is requested.

#### Throws

Never throws.

#### Examples

```ts
map.setLayerOrder(['surface', 'heat', 'roads']); // the heat raster under the roads
```

```ts
// With surface, roads, heat and stops drawn in that order by type:
map.setLayerOrder(['stops', 'surface']);
// Drawn: stops, surface, roads, heat. Moving the surface up over the
// stops instead would reverse as many pairs, and it would draw the surface
// over the roads and the heat; the map keeps the listed layers lower.
```

***

### setSelection()

> **setSelection**(`id`, `selection`): `void`

Defined in: [autk-map/src/map.ts:1213](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1213)

Replaces the highlighted selection of a pickable layer.

#### Parameters

##### id

`string`

Layer identifier.

##### selection

`number`[]

Component ids to highlight; an empty array clears them.

#### Returns

`void`

Nothing. Unsupported layers are ignored.

#### Throws

Never throws.

***

### setSkipped()

> **setSkipped**(`id`, `selection`): `void`

Defined in: [autk-map/src/map.ts:1230](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1230)

Replaces the hidden components of a vector layer.

#### Parameters

##### id

`string`

Layer identifier.

##### selection

`number`[]

All component ids to hide. Pass an empty array to show all components.

#### Returns

`void`

Nothing. Non-vector layers are ignored.

#### Throws

Never throws.

***

### setTooltip()

> **setTooltip**(`layerId`, `provider`): `void`

Defined in: [autk-map/src/map.ts:951](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L951)

Sets or removes a tooltip for a layer. It only appears while that layer is hovered.

#### Parameters

##### layerId

`string`

##### provider

[`TooltipProvider`](../type-aliases/TooltipProvider.md) \| `null`

#### Returns

`void`

***

### setView()

> **setView**(`__namedParameters`): `void`

Defined in: [autk-map/src/map.ts:240](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L240)

Sets a geographic center and zoom without loading data or changing an existing origin.
On an empty map the projected center establishes the shared origin.
Omitting the projection keeps the camera's persistent projection.

#### Parameters

##### \_\_namedParameters

[`SetViewParams`](../interfaces/SetViewParams.md)

#### Returns

`void`

#### Throws

If the center, zoom, projection, or viewport is invalid.

***

### toggleTerrainOverlayBoundsDebug()

> **toggleTerrainOverlayBoundsDebug**(): `void`

Defined in: [autk-map/src/map.ts:1448](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1448)

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

Defined in: [autk-map/src/map.ts:863](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L863)

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
A custom categorical palette on an RGB raster decodes the original RGB values once.
Later palette updates recolor the decoded classes.

#### Throws

If the custom palette, its domain, or RGB decoding is invalid. Unknown layers are silently ignored.

***

### updateRaster()

> **updateRaster**(`id`, `params`): `void`

Defined in: [autk-map/src/map.ts:751](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L751)

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

Defined in: [autk-map/src/map.ts:1085](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1085)

Updates one or more render properties of a layer.

#### Parameters

##### id

`string`

Layer identifier.

##### params

[`UpdateRenderInfoParams`](../interfaces/UpdateRenderInfoParams.md) \| `Partial`\<[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)\>

Render update parameters.

#### Returns

`void`

Nothing. The target layer render state is updated in place.

#### Throws

Never throws. Unknown layers are silently ignored.

***

### updateTerrainDebug()

> **updateTerrainDebug**(`options`): `void`

Defined in: [autk-map/src/map.ts:1388](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L1388)

Updates debug options for the active terrain render path.

Calls before terrain mode is enabled are ignored.

#### Parameters

##### options

`Partial`\<[`TerrainDebugOptions`](../interfaces/TerrainDebugOptions.md)\>

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

Defined in: [autk-map/src/map.ts:561](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/map.ts#L561)

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
