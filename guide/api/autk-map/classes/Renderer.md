[**autk-map**](../index.md)

***

[autk-map](../globals.md) / Renderer

# Class: Renderer

Defined in: [autk-map/src/renderer.ts:25](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L25)

WebGPU renderer responsible for canvas setup, render-target management, and
frame-level GPU resource lifecycle.

`Renderer` owns the WebGPU canvas context, allocates the multisampled main
pass targets and the offscreen picking targets, and exposes helpers for
starting render passes, submitting command buffers, and rebuilding
size-dependent resources after resize events.

## Constructors

### Constructor

> **new Renderer**(`canvas`): `Renderer`

Defined in: [autk-map/src/renderer.ts:90](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L90)

Creates a renderer bound to a canvas.

#### Parameters

##### canvas

`HTMLCanvasElement`

Target HTML canvas.

#### Returns

`Renderer`

#### Throws

Never throws.

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [autk-map/src/renderer.ts:96](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L96)

Underlying render canvas.

##### Returns

`HTMLCanvasElement`

***

### canvasFormat

#### Get Signature

> **get** **canvasFormat**(): `GPUTextureFormat`

Defined in: [autk-map/src/renderer.ts:126](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L126)

Preferred canvas format negotiated with WebGPU.

##### Returns

`GPUTextureFormat`

***

### commandEncoder

#### Get Signature

> **get** **commandEncoder**(): `GPUCommandEncoder`

Defined in: [autk-map/src/renderer.ts:151](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L151)

Active command encoder for the current frame.

##### Returns

`GPUCommandEncoder`

***

### context

#### Get Signature

> **get** **context**(): `GPUCanvasContext` \| `null`

Defined in: [autk-map/src/renderer.ts:131](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L131)

Active WebGPU canvas context, if configured.

##### Returns

`GPUCanvasContext` \| `null`

***

### cssHeight

#### Get Signature

> **get** **cssHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:106](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L106)

Canvas layout height in CSS pixels.

##### Returns

`number`

***

### cssWidth

#### Get Signature

> **get** **cssWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:101](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L101)

Canvas layout width in CSS pixels.

##### Returns

`number`

***

### depthBuffer

#### Get Signature

> **get** **depthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:146](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L146)

Depth attachment used by the primary render pass.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### device

#### Get Signature

> **get** **device**(): `GPUDevice`

Defined in: [autk-map/src/renderer.ts:136](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L136)

Logical GPU device.

##### Returns

`GPUDevice`

***

### devicePixelRatio

#### Get Signature

> **get** **devicePixelRatio**(): `number`

Defined in: [autk-map/src/renderer.ts:121](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L121)

Device pixel ratio currently applied to the render surface.

##### Returns

`number`

***

### frameBuffer

#### Get Signature

> **get** **frameBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:141](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L141)

Main color attachment used by the primary render pass.

##### Returns

`GPURenderPassColorAttachment`

***

### pickingBuffer

#### Get Signature

> **get** **pickingBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:169](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L169)

Picking color attachment descriptor.

##### Returns

`GPURenderPassColorAttachment`

***

### pickingDepthBuffer

#### Get Signature

> **get** **pickingDepthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:174](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L174)

Picking depth attachment descriptor.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### pickingTexture

#### Get Signature

> **get** **pickingTexture**(): `GPUTexture`

Defined in: [autk-map/src/renderer.ts:164](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L164)

Picking color texture used for object-id readback.

##### Returns

`GPUTexture`

***

### pixelHeight

#### Get Signature

> **get** **pixelHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:116](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L116)

Canvas backing-store height in device pixels.

##### Returns

`number`

***

### pixelWidth

#### Get Signature

> **get** **pixelWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:111](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L111)

Canvas backing-store width in device pixels.

##### Returns

`number`

***

### sampleCount

#### Get Signature

> **get** **sampleCount**(): `number`

Defined in: [autk-map/src/renderer.ts:159](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L159)

MSAA sample count used for the main pass.

##### Returns

`number`

## Methods

### beginMainRenderPass()

> **beginMainRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:425](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L425)

Opens the shared main render pass for the current frame.

#### Returns

`GPURenderPassEncoder`

An encoder for the primary pass.

#### Throws

If the renderer has not been initialized or GPU context is null.

***

### configureContext()

> **configureContext**(): `void`

Defined in: [autk-map/src/renderer.ts:254](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L254)

Configures the WebGPU canvas context.

The context is created lazily and then configured with the negotiated
canvas format and render-attachment usage.

#### Returns

`void`

***

### configureDepthBuffer()

> **configureDepthBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:369](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L369)

Creates or recreates the main depth attachment.

The depth texture matches the current backing-store size and is used by
the primary render pass.

#### Returns

`void`

***

### configureFrameBuffer()

> **configureFrameBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:328](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L328)

Creates or recreates the main color attachment and multisample texture.

The attachment resolves into the current swap-chain texture and uses the
configured background color as its clear value.

#### Returns

`void`

***

### configurePickingBuffer()

> **configurePickingBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:280](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L280)

Creates or recreates color and depth attachments for picking.

The picking pass renders into an offscreen texture sized to the current
backing store so object ids can be read back at pixel precision.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/renderer.ts:584](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L584)

Releases GPU resources, unconfigures the canvas, and resets renderer state.

#### Returns

`void`

#### Throws

Never throws.

***

### enqueuePickingReadback()

> **enqueuePickingReadback**(`slotIndex`, `pickIndex`, `x`, `y`): `void`

Defined in: [autk-map/src/renderer.ts:525](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L525)

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

Defined in: [autk-map/src/renderer.ts:451](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L451)

Submits the current command buffer and clears the active encoder.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized or no encoder exists.

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/renderer.ts:183](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L183)

Initializes WebGPU and creates all core render targets.

#### Returns

`Promise`\<`void`\>

#### Throws

Never throws. Failures log to console and leave the renderer uninitialized.

***

### initWebGPU()

> **initWebGPU**(): `Promise`\<`boolean`\>

Defined in: [autk-map/src/renderer.ts:204](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L204)

Initializes the WebGPU device and preferred canvas format.

#### Returns

`Promise`\<`boolean`\>

`true` when adapter and device acquisition succeed; otherwise `false`.

#### Throws

Never throws. Errors are caught and return `false`.

***

### readPickingResults()

> **readPickingResults**(`slotIndex`, `pickCount`): `Promise`\<`number`[]\>

Defined in: [autk-map/src/renderer.ts:555](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L555)

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

Defined in: [autk-map/src/renderer.ts:487](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L487)

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

Defined in: [autk-map/src/renderer.ts:235](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L235)

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

Defined in: [autk-map/src/renderer.ts:400](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L400)

Starts the main render pass by clearing configured attachments.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized.

***

### startPickingRenderPass()

> **startPickingRenderPass**(): `void`

Defined in: [autk-map/src/renderer.ts:464](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L464)

Starts the picking render pass by clearing picking attachments.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized.

***

### toPixelCoordinates()

> **toPixelCoordinates**(`x`, `y`): \[`number`, `number`\]

Defined in: [autk-map/src/renderer.ts:630](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/renderer.ts#L630)

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
