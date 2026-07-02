[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / Renderer

# Class: Renderer

Defined in: [autk-map/src/renderer.ts:25](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L25)

WebGPU renderer responsible for canvas setup, render-target management, and
frame-level GPU resource lifecycle.

`Renderer` owns the WebGPU canvas context, allocates the multisampled main
pass targets and the offscreen picking targets, and exposes helpers for
starting render passes, submitting command buffers, and rebuilding
size-dependent resources after resize events.

## Constructors

### Constructor

> **new Renderer**(`canvas`, `_style`): `Renderer`

Defined in: [autk-map/src/renderer.ts:123](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L123)

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

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/renderer.ts:134](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L134)

Underlying render canvas.

##### Returns

`HTMLCanvasElement`

***

### canvasFormat

#### Get Signature

> **get** **canvasFormat**(): `GPUTextureFormat`

Defined in: [autk-map/src/renderer.ts:182](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L182)

Preferred canvas format negotiated with WebGPU.

##### Returns

`GPUTextureFormat`

***

### commandEncoder

#### Get Signature

> **get** **commandEncoder**(): `GPUCommandEncoder`

Defined in: [autk-map/src/renderer.ts:207](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L207)

Active command encoder for the current frame.

##### Returns

`GPUCommandEncoder`

***

### context

#### Get Signature

> **get** **context**(): `GPUCanvasContext` \| `null`

Defined in: [autk-map/src/renderer.ts:187](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L187)

Active WebGPU canvas context, if configured.

##### Returns

`GPUCanvasContext` \| `null`

***

### cssHeight

#### Get Signature

> **get** **cssHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:144](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L144)

Canvas layout height in CSS pixels.

##### Returns

`number`

***

### cssWidth

#### Get Signature

> **get** **cssWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:139](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L139)

Canvas layout width in CSS pixels.

##### Returns

`number`

***

### depthBuffer

#### Get Signature

> **get** **depthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:202](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L202)

Depth attachment used by the primary render pass.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### depthTextureView

#### Get Signature

> **get** **depthTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:235](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L235)

Main depth texture view used by render paths that need direct sampling.

##### Returns

`GPUTextureView`

***

### device

#### Get Signature

> **get** **device**(): `GPUDevice`

Defined in: [autk-map/src/renderer.ts:192](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L192)

Logical GPU device.

##### Returns

`GPUDevice`

***

### devicePixelRatio

#### Get Signature

> **get** **devicePixelRatio**(): `number`

Defined in: [autk-map/src/renderer.ts:177](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L177)

Device pixel ratio currently applied to the render surface.

##### Returns

`number`

***

### frameBuffer

#### Get Signature

> **get** **frameBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:197](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L197)

Main color attachment used by the primary render pass.

##### Returns

`GPURenderPassColorAttachment`

***

### overlayHeight

#### Get Signature

> **get** **overlayHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:164](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L164)

Terrain overlay texture height in pixels.

##### Returns

`number`

***

### overlayPickingTextureView

#### Get Signature

> **get** **overlayPickingTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:248](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L248)

Terrain overlay picking texture view sampled by terrain picking.

##### Returns

`GPUTextureView`

***

### overlayTextureView

#### Get Signature

> **get** **overlayTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:240](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L240)

Terrain overlay color texture view sampled by the terrain renderer.

##### Returns

`GPUTextureView`

***

### overlayWidth

#### Get Signature

> **get** **overlayWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:159](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L159)

Terrain overlay texture width in pixels.

##### Returns

`number`

***

### pickingBuffer

#### Get Signature

> **get** **pickingBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:225](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L225)

Picking color attachment descriptor.

##### Returns

`GPURenderPassColorAttachment`

***

### pickingDepthBuffer

#### Get Signature

> **get** **pickingDepthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:230](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L230)

Picking depth attachment descriptor.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### pickingTexture

#### Get Signature

> **get** **pickingTexture**(): `GPUTexture`

Defined in: [autk-map/src/renderer.ts:220](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L220)

Picking color texture used for object-id readback.

##### Returns

`GPUTexture`

***

### pixelHeight

#### Get Signature

> **get** **pixelHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:154](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L154)

Canvas backing-store height in device pixels.

##### Returns

`number`

***

### pixelWidth

#### Get Signature

> **get** **pixelWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:149](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L149)

Canvas backing-store width in device pixels.

##### Returns

`number`

***

### sampleCount

#### Get Signature

> **get** **sampleCount**(): `number`

Defined in: [autk-map/src/renderer.ts:215](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L215)

MSAA sample count used for the main pass.

##### Returns

`number`

***

### style

#### Get Signature

> **get** **style**(): [`MapStyle`](MapStyle.md)

Defined in: [autk-map/src/renderer.ts:129](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L129)

Map style used by renderer-owned passes and pipelines.

##### Returns

[`MapStyle`](MapStyle.md)

***

### terrainDepthTextureView

#### Get Signature

> **get** **terrainDepthTextureView**(): `GPUTextureView`

Defined in: [autk-map/src/renderer.ts:169](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L169)

Terrain depth texture view used by terrain-aware building compositing.

##### Returns

`GPUTextureView`

## Methods

### beginMainColorRenderPass()

> **beginMainColorRenderPass**(`loadOp?`): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:554](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L554)

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

Defined in: [autk-map/src/renderer.ts:524](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L524)

Opens the shared main render pass for the current frame.

#### Returns

`GPURenderPassEncoder`

An encoder for the primary pass.

#### Throws

If the renderer has not been initialized or GPU context is null.

***

### beginOverlayPickingRenderPass()

> **beginOverlayPickingRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:724](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L724)

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

> **beginOverlayRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:691](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L691)

Begins the terrain overlay color render pass.

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

Defined in: [autk-map/src/renderer.ts:814](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L814)

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

Defined in: [autk-map/src/renderer.ts:792](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L792)

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

Defined in: [autk-map/src/renderer.ts:603](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L603)

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

Defined in: [autk-map/src/renderer.ts:340](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L340)

Configures the WebGPU canvas context.

The context is created lazily and then configured with the negotiated
canvas format and render-attachment usage.

#### Returns

`void`

***

### configureDepthBuffer()

> **configureDepthBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:459](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L459)

Creates or recreates the main depth attachment.

The depth texture matches the current backing-store size and is used by
the primary render pass.

#### Returns

`void`

***

### configureFrameBuffer()

> **configureFrameBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:414](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L414)

Creates or recreates the main color attachment and multisample texture.

The attachment resolves into the current swap-chain texture and uses the
configured background color as its clear value.

#### Returns

`void`

***

### configureOverlayTexture()

> **configureOverlayTexture**(`width`, `height`): `boolean`

Defined in: [autk-map/src/renderer.ts:630](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L630)

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

Defined in: [autk-map/src/renderer.ts:366](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L366)

Creates or recreates color and depth attachments for picking.

The picking pass renders into an offscreen texture sized to the current
backing store so object ids can be read back at pixel precision.

#### Returns

`void`

***

### configureTerrainDepthTexture()

> **configureTerrainDepthTexture**(`width`, `height`): `boolean`

Defined in: [autk-map/src/renderer.ts:577](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L577)

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

Defined in: [autk-map/src/renderer.ts:935](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L935)

Releases GPU resources, unconfigures the canvas, and resets renderer state.

#### Returns

`void`

#### Throws

Never throws.

***

### enqueuePickingReadback()

> **enqueuePickingReadback**(`slotIndex`, `pickIndex`, `x`, `y`): `void`

Defined in: [autk-map/src/renderer.ts:876](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L876)

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

Defined in: [autk-map/src/renderer.ts:753](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L753)

Submits the current command buffer and clears the active encoder.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized or no encoder exists.

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/renderer.ts:260](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L260)

Initializes WebGPU and creates all core render targets.

#### Returns

`Promise`\<`void`\>

#### Throws

Never throws. Failures log to console and leave the renderer uninitialized.

***

### initWebGPU()

> **initWebGPU**(): `Promise`\<`boolean`\>

Defined in: [autk-map/src/renderer.ts:281](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L281)

Initializes the WebGPU device and preferred canvas format.

#### Returns

`Promise`\<`boolean`\>

`true` when adapter and device acquisition succeed; otherwise `false`.

#### Throws

Never throws. Errors are caught and return `false`.

***

### readPickingResults()

> **readPickingResults**(`slotIndex`, `pickCount`): `Promise`\<`number`[]\>

Defined in: [autk-map/src/renderer.ts:906](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L906)

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

Defined in: [autk-map/src/renderer.ts:838](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L838)

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

Defined in: [autk-map/src/renderer.ts:321](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L321)

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

Defined in: [autk-map/src/renderer.ts:492](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L492)

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

Defined in: [autk-map/src/renderer.ts:766](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L766)

Starts the picking render pass by clearing picking attachments.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized.

***

### toPixelCoordinates()

> **toPixelCoordinates**(`x`, `y`): \[`number`, `number`\]

Defined in: [autk-map/src/renderer.ts:993](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/renderer.ts#L993)

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
