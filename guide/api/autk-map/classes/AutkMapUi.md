[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / AutkMapUi

# Class: AutkMapUi

Defined in: [autk-map/src/map-ui.ts:40](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L40)

Floating DOM UI controller for an `AutkMap` instance.

`AutkMapUi` builds lightweight overlay controls in the map canvas container
and keeps them synchronized with the current layer stack and render state.
It exposes methods for building and tearing down the UI, responding to map
resize and layer lifecycle events, and updating legend and performance
displays.

## Example

```ts
const map = new AutkMap(canvas);
await map.init();

map.ui.changeActiveLayer(map.layerManager.layers[0] ?? null);
```

## Constructors

### Constructor

> **new AutkMapUi**(`map`): `AutkMapUi`

Defined in: [autk-map/src/map-ui.ts:65](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L65)

Creates a UI controller bound to a map instance.

The UI is not inserted into the DOM until [buildUi](#buildui) is called.

#### Parameters

##### map

[`AutkMap`](AutkMap.md)

Parent map whose canvas, layers, and update APIs are used by the UI.

#### Returns

`AutkMapUi`

## Accessors

### activeLayer

#### Get Signature

> **get** **activeLayer**(): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/map-ui.ts:74](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L74)

Layer currently used for legend display and pick activation.

##### Returns

[`Layer`](Layer.md) \| `null`

#### Set Signature

> **set** **activeLayer**(`layer`): `void`

Defined in: [autk-map/src/map-ui.ts:76](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L76)

Sets the cached active layer reference used by legend synchronization.

##### Parameters

###### layer

[`Layer`](Layer.md) \| `null`

##### Returns

`void`

***

### map

#### Get Signature

> **get** **map**(): [`AutkMap`](AutkMap.md)

Defined in: [autk-map/src/map-ui.ts:70](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L70)

Parent map reference.

##### Returns

[`AutkMap`](AutkMap.md)

#### Set Signature

> **set** **map**(`map`): `void`

Defined in: [autk-map/src/map-ui.ts:72](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L72)

Updates the parent map reference used by subsequent UI operations.

##### Parameters

###### map

[`AutkMap`](AutkMap.md)

##### Returns

`void`

## Methods

### buildUi()

> **buildUi**(): `void`

Defined in: [autk-map/src/map-ui.ts:154](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L154)

Builds the map UI overlays.

This method creates the menu icon, submenu structure, layer list section,
legend container, and optional performance overlay. Repeated calls are
safe and reuse already-created elements.

#### Returns

`void`

Ensures the UI DOM structure exists for the current map.

***

### changeActiveLayer()

> **changeActiveLayer**(`layer`): `void`

Defined in: [autk-map/src/map-ui.ts:127](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L127)

Activates a layer for picking and legend display.

The provided layer is first validated against the current layer manager.
When a valid layer is found, this method makes picking exclusive by
disabling `isPick` on every other registered layer before enabling it on
the selected one. The legend is then refreshed to reflect the new active
layer.

Calls with `null` or with a layer object that is no longer the currently
registered instance are ignored.

#### Parameters

##### layer

[`Layer`](Layer.md) \| `null`

Layer to activate.

#### Returns

`void`

Updates layer render state and refreshes the legend when activation succeeds.

***

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/map-ui.ts:173](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L173)

Removes all UI DOM nodes, listeners, and cached UI state.

After teardown, the instance retains only its map reference. Calling
[buildUi](#buildui) again recreates the UI from scratch.

#### Returns

`void`

Detaches injected elements and clears cached element references.

***

### handleLayerRemoved()

> **handleLayerRemoved**(`layerId`): `void`

Defined in: [autk-map/src/map-ui.ts:217](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L217)

Clears active-layer UI state after a layer is removed from the map.

If the removed layer was the current active layer, the cached reference is
cleared before the legend visibility is recomputed.

#### Parameters

##### layerId

`string`

Identifier of the removed layer.

#### Returns

`void`

Synchronizes legend visibility with the remaining layer state.

***

### handleResize()

> **handleResize**(): `void`

Defined in: [autk-map/src/map-ui.ts:89](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L89)

Repositions floating UI elements to match the canvas location.

This should be called after canvas size or page layout changes so the
menu, submenu, legend, and performance overlay remain anchored to the
correct corners of the map container.

#### Returns

`void`

Updates the inline position styles of any UI elements that have been built.

***

### refreshLayerList()

> **refreshLayerList**(): `void`

Defined in: [autk-map/src/map-ui.ts:251](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L251)

Rebuilds the layer list when visible layer state changes.

This method is intended to be called after updates to render flags such as
`isSkip`, `isPick`, or `isColorMap`. To avoid unnecessary DOM work, the
list is repopulated only while the submenu is currently visible.

#### Returns

`void`

Re-renders the visible layer rows when the submenu is open.

***

### refreshLegend()

> **refreshLegend**(`layer`): `void`

Defined in: [autk-map/src/map-ui.ts:234](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L234)

Refreshes legend state after layer render settings change.

If the provided layer is still registered and has color-map rendering
enabled, it becomes the active legend layer. The legend container is then
shown or hidden according to the resolved active layer state.

#### Parameters

##### layer

[`Layer`](Layer.md) \| `null`

Layer whose legend-related state may have changed.

#### Returns

`void`

Recomputes legend visibility and content for the current active layer.

***

### updatePerformance()

> **updatePerformance**(`fps`, `frameTimeMs`): `void`

Defined in: [autk-map/src/map-ui.ts:200](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/map-ui.ts#L200)

Updates the on-screen performance overlay.

If the performance overlay has not been created, the call is ignored.

#### Parameters

##### fps

`number`

Smoothed frames-per-second value to display.

##### frameTimeMs

`number`

Frame time in milliseconds to display.

#### Returns

`void`

Updates the overlay contents when the performance UI is enabled.
