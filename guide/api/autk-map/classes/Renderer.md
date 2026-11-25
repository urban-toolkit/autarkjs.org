[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / Renderer

# Class: Renderer

Defined in: [autk-map/src/renderer.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L25)

WebGPU renderer responsible for canvas setup, render-target management, and
frame-level GPU resource lifecycle.

`Renderer` owns the WebGPU canvas context, allocates the multisampled main
pass targets and the offscreen picking targets, and exposes helpers for
starting render passes, submitting command buffers, and rebuilding
size-dependent resources after resize events.

## Constructors

### Constructor

> **new Renderer**(`canvas`, `_style`): `Renderer`

Defined in: [autk-map/src/renderer.ts:125](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L125)

Creates a renderer bound to a canvas.

#### Parameters

##### canvas

`HTMLCanvasElement`

Target HTML canvas.

##### \_style

[`MapStyle`](MapStyle.md)

#### Returns

`Renderer`

#### Throws

Never throws.

## Properties

### pickingPassVersion

> **pickingPassVersion**: `number` = `0`

Defined in: [autk-map/src/renderer.ts:53](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L53)

Changes whenever commands write IDs into the shared picking texture.

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/renderer.ts:136](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L136)

Underlying render canvas.

##### Returns

`HTMLCanvasElement`

***

### canvasFormat

#### Get Signature

> **get** **canvasFormat**(): `GPUTextureFormat`

Defined in: [autk-map/src/renderer.ts:184](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L184)

Preferred canvas format negotiated with WebGPU.

##### Returns

`GPUTextureFormat`

***

### commandEncoder

#### Get Signature

> **get** **commandEncoder**(): `GPUCommandEncoder`

Defined in: [autk-map/src/renderer.ts:209](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L209)

Active command encoder for the current frame.

##### Returns

`GPUCommandEncoder`

***

### context

#### Get Signature

> **get** **context**(): `GPUCanvasContext` \| `null`

Defined in: [autk-map/src/renderer.ts:189](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L189)

Active WebGPU canvas context, if configured.

##### Returns

`GPUCanvasContext` \| `null`

***

### cssHeight

#### Get Signature

> **get** **cssHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:146](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L146)

Canvas layout height in CSS pixels.

##### Returns

`number`

***

### cssWidth

#### Get Signature

> **get** **cssWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:141](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L141)

Canvas layout width in CSS pixels.

##### Returns

`number`

***

### depthBuffer

#### Get Signature

> **get** **depthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:204](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L204)

Depth attachment used by the primary render pass.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### depthTextureView

#### Get Signature

> **get** **depthTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:237](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L237)

Main depth texture view used by render paths that need direct sampling.

##### Returns

`GPUTextureView`

***

### device

#### Get Signature

> **get** **device**(): `GPUDevice`

Defined in: [autk-map/src/renderer.ts:194](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L194)

Logical GPU device.

##### Returns

`GPUDevice`

***

### devicePixelRatio

#### Get Signature

> **get** **devicePixelRatio**(): `number`

Defined in: [autk-map/src/renderer.ts:179](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L179)

Device pixel ratio currently applied to the render surface.

##### Returns

`number`

***

### frameBuffer

#### Get Signature

> **get** **frameBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:199](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L199)

Main color attachment used by the primary render pass.

##### Returns

`GPURenderPassColorAttachment`

***

### overlayHeight

#### Get Signature

> **get** **overlayHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:166](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L166)

Terrain overlay texture height in pixels.

##### Returns

`number`

***

### overlayPickingTextureView

#### Get Signature

> **get** **overlayPickingTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:250](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L250)

Terrain overlay picking texture view sampled by terrain picking.

##### Returns

`GPUTextureView`

***

### overlayTextureView

#### Get Signature

> **get** **overlayTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:242](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L242)

Terrain overlay color texture view sampled by the terrain renderer.

##### Returns

`GPUTextureView`

***

### overlayWidth

#### Get Signature

> **get** **overlayWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:161](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L161)

Terrain overlay texture width in pixels.

##### Returns

`number`

***

### pickingBuffer

#### Get Signature

> **get** **pickingBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:227](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L227)

Picking color attachment descriptor.

##### Returns

`GPURenderPassColorAttachment`

***

### pickingDepthBuffer

#### Get Signature

> **get** **pickingDepthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:232](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L232)

Picking depth attachment descriptor.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### pickingTexture

#### Get Signature

> **get** **pickingTexture**(): `GPUTexture`

Defined in: [autk-map/src/renderer.ts:222](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L222)

Picking color texture used for object-id readback.

##### Returns

`GPUTexture`

***

### pixelHeight

#### Get Signature

> **get** **pixelHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:156](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L156)

Canvas backing-store height in device pixels.

##### Returns

`number`

***

### pixelWidth

#### Get Signature

> **get** **pixelWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:151](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L151)

Canvas backing-store width in device pixels.

##### Returns

`number`

***

### sampleCount

#### Get Signature

> **get** **sampleCount**(): `number`

Defined in: [autk-map/src/renderer.ts:217](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L217)

MSAA sample count used for the main pass.

##### Returns

`number`

***

### style

#### Get Signature

> **get** **style**(): [`MapStyle`](MapStyle.md)

Defined in: [autk-map/src/renderer.ts:131](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L131)

Map style used by renderer-owned passes and pipelines.

##### Returns

[`MapStyle`](MapStyle.md)

***

### terrainDepthTextureView

#### Get Signature

> **get** **terrainDepthTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:171](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L171)

Terrain depth texture view used by terrain-aware building compositing.

##### Returns

`GPUTextureView`

## Methods

### beginMainColorRenderPass()

> **beginMainColorRenderPass**(`loadOp?`): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:556](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L556)

Begins a main color-only render pass.

#### Parameters

##### loadOp?

`GPULoadOp` = `'load'`

Load operation for the main color attachment.

#### Returns

`GPURenderPassEncoder`

Render pass encoder targeting the current canvas color attachment.

#### Throws

If the renderer has not been initialized.

#### Example

```ts
const pass = renderer.beginMainColorRenderPass('load');
```

***

### beginMainRenderPass()

> **beginMainRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:526](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L526)

Opens the shared main render pass for the current frame.

#### Returns

`GPURenderPassEncoder`

An encoder for the primary pass.

#### Throws

If the renderer has not been initialized or GPU context is null.

***

### beginOverlayPickingRenderPass()

> **beginOverlayPickingRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:727](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L727)

Begins the terrain overlay picking render pass.

#### Returns

`GPURenderPassEncoder`

Render pass encoder targeting overlay picking and depth textures.

#### Throws

If overlay picking textures have not been configured.

#### Example

```ts
const pass = renderer.beginOverlayPickingRenderPass();
```

***

### beginOverlayRenderPass()

> **beginOverlayRenderPass**(`clearColor?`): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:694](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L694)

Begins the terrain overlay color render pass.

#### Parameters

##### clearColor?

`GPUColor` = `...`

Background beneath draped layers; transparent by default.

#### Returns

`GPURenderPassEncoder`

Render pass encoder targeting the overlay color and depth textures.

#### Throws

If overlay textures have not been configured.

#### Example

```ts
const pass = renderer.beginOverlayRenderPass();
```

***

### beginPickingDepthRenderPass()

> **beginPickingDepthRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:820](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L820)

Begins a depth-only pass using the picking depth attachment.

#### Returns

`GPURenderPassEncoder`

Render pass encoder writing only picking depth.

#### Throws

If the renderer has not been initialized.

#### Example

```ts
const pass = renderer.beginPickingDepthRenderPass();
```

***

### beginPickingRenderPass()

> **beginPickingRenderPass**(`depthLoadOp?`): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:796](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L796)

Begins a picking render pass and returns its encoder.

#### Parameters

##### depthLoadOp?

`GPULoadOp` = `'clear'`

Load operation for the picking depth attachment.

#### Returns

`GPURenderPassEncoder`

Render pass encoder targeting the main picking attachments.

#### Throws

If the renderer has not been initialized.

#### Example

```ts
const pass = renderer.beginPickingRenderPass('clear');
```

***

### beginTerrainDepthRenderPass()

> **beginTerrainDepthRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:605](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L605)

Begins a depth-only pass for terrain compositing.

#### Returns

`GPURenderPassEncoder`

Render pass encoder writing to the terrain depth texture.

#### Throws

If the terrain depth texture has not been configured.

#### Example

```ts
const pass = renderer.beginTerrainDepthRenderPass();
```

***

### configureContext()

> **configureContext**(): `void`

Defined in: [autk-map/src/renderer.ts:342](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L342)

Configures the WebGPU canvas context.

The context is created lazily and then configured with the negotiated
canvas format and render-attachment usage.

#### Returns

`void`

***

### configureDepthBuffer()

> **configureDepthBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:461](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L461)

Creates or recreates the main depth attachment.

The depth texture matches the current backing-store size and is used by
the primary render pass.

#### Returns

`void`

***

### configureFrameBuffer()

> **configureFrameBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:416](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L416)

Creates or recreates the main color attachment and multisample texture.

The attachment resolves into the current swap-chain texture and uses the
configured background color as its clear value.

#### Returns

`void`

***

### configureOverlayTexture()

> **configureOverlayTexture**(`width`, `height`): `boolean`

Defined in: [autk-map/src/renderer.ts:632](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L632)

Creates or resizes terrain overlay color, depth, and picking textures.

#### Parameters

##### width

`number`

Requested overlay texture width in pixels.

##### height

`number`

Requested overlay texture height in pixels.

#### Returns

`boolean`

`true` when overlay textures were recreated, otherwise `false`.

#### Throws

If GPU texture creation fails.

#### Example

```ts
renderer.configureOverlayTexture(4096, 4096);
```

***

### configurePickingBuffer()

> **configurePickingBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:368](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L368)

Creates or recreates color and depth attachments for picking.

The picking pass renders into an offscreen texture sized to the current
backing store so object ids can be read back at pixel precision.

#### Returns

`void`

***

### configureTerrainDepthTexture()

> **configureTerrainDepthTexture**(`width`, `height`): `boolean`

Defined in: [autk-map/src/renderer.ts:579](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L579)

Creates or resizes the terrain composite depth texture.

#### Parameters

##### width

`number`

Requested texture width in pixels.

##### height

`number`

Requested texture height in pixels.

#### Returns

`boolean`

`true` when the texture was recreated, otherwise `false`.

#### Throws

If GPU texture creation fails.

#### Example

```ts
renderer.configureTerrainDepthTexture(width, height);
```

***

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/renderer.ts:942](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L942)

Releases GPU resources, unconfigures the canvas, and resets renderer state.

#### Returns

`void`

#### Throws

Never throws.

***

### enqueuePickingReadback()

> **enqueuePickingReadback**(`slotIndex`, `pickIndex`, `x`, `y`): `void`

Defined in: [autk-map/src/renderer.ts:882](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L882)

Queues a single-pixel picking texture readback into a reserved slot.

#### Parameters

##### slotIndex

`number`

Reserved readback slot index.

##### pickIndex

`number`

Offset within the slot for this pick.

##### x

`number`

CSS-relative x coordinate.

##### y

`number`

CSS-relative y coordinate.

#### Returns

`void`

#### Throws

If the requested slot is not reserved.

***

### finish()

> **finish**(): `void`

Defined in: [autk-map/src/renderer.ts:756](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L756)

Submits the current command buffer and clears the active encoder.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized or no encoder exists.

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/renderer.ts:262](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L262)

Initializes WebGPU and creates all core render targets.

#### Returns

`Promise`\<`void`\>

#### Throws

Never throws. Failures log to console and leave the renderer uninitialized.

***

### initWebGPU()

> **initWebGPU**(): `Promise`\<`boolean`\>

Defined in: [autk-map/src/renderer.ts:283](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L283)

Initializes the WebGPU device and preferred canvas format.

#### Returns

`Promise`\<`boolean`\>

`true` when adapter and device acquisition succeed; otherwise `false`.

#### Throws

Never throws. Errors are caught and return `false`.

***

### readPickingResults()

> **readPickingResults**(`slotIndex`, `pickCount`): `Promise`\<`number`[]\>

Defined in: [autk-map/src/renderer.ts:913](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L913)

Maps a reserved readback slot and decodes all picked ids.

#### Parameters

##### slotIndex

`number`

Reserved readback slot index.

##### pickCount

`number`

Number of copied pick records to decode.

#### Returns

`Promise`\<`number`[]\>

Decoded object ids in copy order, or an empty array when unavailable.

#### Throws

If the buffer map operation times out or the device is lost.

***

### reservePickingReadbackSlot()

> **reservePickingReadbackSlot**(`pickCount`): `number` \| `null`

Defined in: [autk-map/src/renderer.ts:844](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L844)

Reserves a double-buffered picking readback slot for the current frame.

#### Parameters

##### pickCount

`number`

Number of single-pixel readbacks to accommodate.

#### Returns

`number` \| `null`

The reserved slot index, or `null` when no slot is available.

#### Throws

Never throws.

***

### resize()

> **resize**(`cssWidth`, `cssHeight`, `devicePixelRatio?`): `void`

Defined in: [autk-map/src/renderer.ts:323](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L323)

Resizes the canvas and recreates size-dependent render targets.

#### Parameters

##### cssWidth

`number`

New layout width in CSS pixels.

##### cssHeight

`number`

New layout height in CSS pixels.

##### devicePixelRatio?

`number` = `...`

Backing-store scale factor.

#### Returns

`void`

#### Throws

Never throws.

***

### start()

> **start**(): `void`

Defined in: [autk-map/src/renderer.ts:494](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L494)

Starts the main render pass by clearing configured attachments.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized or when the
canvas context has been transiently unconfigured (e.g. by a sibling
renderer's destroy/recreate cycle in a multi-instance setup).

***

### startPickingRenderPass()

> **startPickingRenderPass**(): `void`

Defined in: [autk-map/src/renderer.ts:769](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L769)

Starts the picking render pass by clearing picking attachments.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized.

***

### toPixelCoordinates()

> **toPixelCoordinates**(`x`, `y`): \[`number`, `number`\]

Defined in: [autk-map/src/renderer.ts:1000](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/renderer.ts#L1000)

Converts CSS-relative coordinates into clamped backing-store pixel coordinates.

#### Parameters

##### x

`number`

CSS-relative x coordinate.

##### y

`number`

CSS-relative y coordinate.

#### Returns

\[`number`, `number`\]

Clamped pixel coordinates `[px, py]`.

#### Throws

Never throws.
