[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / Layer

# Abstract Class: Layer

Defined in: [autk-map/src/layer.ts:28](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L28)

Base class for map layers.

`Layer` provides the shared metadata and lifecycle surface used by the layer
manager and renderer to work with different layer implementations in a
uniform way.

Subclasses are responsible for creating GPU resources, executing render
passes, and optionally supporting picking and highlighting. The base class
also tracks whether layer data or render-state changes require GPU-side
synchronization before the next draw.

## Constructors

### Constructor

> **new Layer**(`layerInfo`, `layerRenderInfo`): `Layer`

Defined in: [autk-map/src/layer.ts:47](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L47)

Creates a base layer instance.

#### Parameters

##### layerInfo

[`LayerInfo`](../interfaces/LayerInfo.md)

Layer identity and z-order metadata.

##### layerRenderInfo

[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)

Initial render configuration.

#### Returns

`Layer`

#### Throws

Never throws.

## Accessors

### layerInfo

#### Get Signature

> **get** **layerInfo**(): [`LayerInfo`](../interfaces/LayerInfo.md)

Defined in: [autk-map/src/layer.ts:82](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L82)

Layer identity and ordering metadata.

##### Returns

[`LayerInfo`](../interfaces/LayerInfo.md)

The current layer metadata object.

***

### layerRenderInfo

#### Get Signature

> **get** **layerRenderInfo**(): [`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)

Defined in: [autk-map/src/layer.ts:89](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L89)

Current render configuration and interaction flags.

##### Returns

[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)

The current mutable render-state object for this layer.

***

### supportsHighlight

#### Get Signature

> **get** **supportsHighlight**(): `boolean`

Defined in: [autk-map/src/layer.ts:75](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L75)

Indicates whether this layer supports feature highlighting.

Highlight support is used together with picking and explicit highlight
updates to control per-feature emphasis during rendering.

##### Returns

`boolean`

`true` when highlight state can be updated for this layer.

***

### supportsPicking

#### Get Signature

> **get** **supportsPicking**(): `boolean`

Defined in: [autk-map/src/layer.ts:65](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L65)

Indicates whether this layer supports picking interactions.

Subclasses override this when they implement a picking pass and expose
stable component ids that can be resolved back to features.

##### Returns

`boolean`

`true` when picking is supported for this layer.

## Methods

### clearHighlightedIds()

> **clearHighlightedIds**(): `void`

Defined in: [autk-map/src/layer.ts:225](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L225)

Clears all highlighted features.

Layers that support highlighting should override this to remove any
current highlight selection. The base implementation is a no-op.

#### Returns

`void`

Clears highlight state when supported. Otherwise does nothing.

***

### clearSkippedIds()

> **clearSkippedIds**(): `void`

Defined in: [autk-map/src/layer.ts:261](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L261)

Clears the skip mask.

Layers that implement skipped-component handling should override this to
restore normal rendering for all components. The base implementation is a
no-op.

#### Returns

`void`

Clears skipped-component state when supported. Otherwise does
nothing.

***

### createPipeline()

> `abstract` **createPipeline**(`renderer`): `void`

Defined in: [autk-map/src/layer.ts:178](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L178)

Initializes GPU resources and pipeline objects for this layer.

This is called once the renderer is available and should allocate any
pipeline state, buffers, bind groups, or other GPU resources required by
the concrete layer implementation.

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

Active renderer instance.

#### Returns

`void`

Initializes the layer so it can participate in subsequent render
passes.

***

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/layer.ts:269](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L269)

Releases resources owned by this layer.

#### Returns

`void`

Releases any layer-owned resources. The base implementation does nothing.

#### Throws

Never throws.

***

### makeLayerDataDirty()

> **makeLayerDataDirty**(): `void`

Defined in: [autk-map/src/layer.ts:151](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L151)

Marks layer data buffers as stale for the next render pass.

#### Returns

`void`

Causes subclasses to refresh geometry-dependent GPU resources.

#### Throws

Never throws.

***

### makeLayerRenderInfoDirty()

> **makeLayerRenderInfoDirty**(): `void`

Defined in: [autk-map/src/layer.ts:162](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L162)

Marks render uniforms and render-state as stale for the next render pass.

#### Returns

`void`

Causes subclasses to refresh GPU-side render-state.

#### Throws

Never throws.

***

### prepareRender()

> **prepareRender**(`_camera`): `void`

Defined in: [autk-map/src/layer.ts:203](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L203)

Runs any offscreen or prepass work required before the shared main pass.

Subclasses can override this to perform preparation steps that must occur
before `renderPass`, such as updating intermediate render targets or other
camera-dependent precomputations.

#### Parameters

##### \_camera

`Camera`

Active camera used to compute view/projection transforms.

#### Returns

`void`

Performs any layer-specific pre-render work. The base
implementation does nothing.

***

### renderPass()

> `abstract` **renderPass**(`camera`, `passEncoder`): `void`

Defined in: [autk-map/src/layer.ts:190](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L190)

Executes the regular render pass for this layer.

Implementations should encode draw commands for the main shared render
pass using the current camera state and any synchronized layer resources.

#### Parameters

##### camera

`Camera`

Active camera used to compute view/projection transforms.

##### passEncoder

`GPURenderPassEncoder`

Render-pass encoder for the active main pass.

#### Returns

`void`

Encodes this layer's draw commands into the provided render pass.

***

### renderPickingPass()

> **renderPickingPass**(`_camera`, `_passEncoder?`): `void`

Defined in: [autk-map/src/layer.ts:215](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L215)

Executes the picking render pass.

Layers that support picking can override this to render feature or
component ids into an offscreen target for hit-testing. The base
implementation is a no-op.

#### Parameters

##### \_camera

`Camera`

Active camera used to compute view/projection transforms.

##### \_passEncoder?

`GPURenderPassEncoder`

#### Returns

`void`

Renders picking data when supported. Otherwise does nothing.

***

### setChangeListener()

> **setChangeListener**(`listener`): `void`

Defined in: [autk-map/src/layer.ts:143](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L143)

Registers the callback run whenever this layer marks itself dirty.

`AutkMap` uses it to schedule a frame in on-demand mode. Pass `null` to
remove the callback.

#### Parameters

##### listener

(() => `void`) \| `null`

Callback run after each dirty mark, or `null`.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

***

### setHighlightedIds()

> **setHighlightedIds**(`_ids`): `void`

Defined in: [autk-map/src/layer.ts:237](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L237)

Replaces the highlighted feature selection.

Layers that support highlighting should interpret the provided component
ids according to their own feature-to-component mapping. The base
implementation is a no-op.

#### Parameters

##### \_ids

`number`[]

Component ids to highlight.

#### Returns

`void`

Updates highlight state when supported. Otherwise does nothing.

***

### setSkippedIds()

> **setSkippedIds**(`_ids`): `void`

Defined in: [autk-map/src/layer.ts:249](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L249)

Applies a skip mask to the provided component ids.

Layers can override this to suppress rendering for selected components.
The base implementation is a no-op.

#### Parameters

##### \_ids

`number`[]

Component ids to skip during rendering.

#### Returns

`void`

Updates the layer's skip mask when supported. Otherwise does
nothing.

***

### updateLayerInfo()

> **updateLayerInfo**(`info`): `void`

Defined in: [autk-map/src/layer.ts:98](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L98)

Updates layer metadata and marks geometry-dependent resources dirty.

#### Parameters

##### info

`Partial`\<[`LayerInfo`](../interfaces/LayerInfo.md)\>

Partial metadata patch to merge into `layerInfo`.

#### Returns

`void`

Marks layer data as stale for the next render cycle.

#### Throws

Never throws.

***

### updateLayerRenderInfo()

> **updateLayerRenderInfo**(`info`): `void`

Defined in: [autk-map/src/layer.ts:110](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/layer.ts#L110)

Updates render metadata and marks render uniforms dirty.

#### Parameters

##### info

`Partial`\<[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)\>

Partial render-state patch to merge into `layerRenderInfo`.

#### Returns

`void`

Marks render-state uniforms as stale for the next render cycle.

#### Throws

Never throws.
