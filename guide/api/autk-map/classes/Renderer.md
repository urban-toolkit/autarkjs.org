[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / Renderer

# Class: Renderer

Defined in: [autk-map/src/renderer.ts:25](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L25)

WebGPU renderer responsible for canvas setup, render-target management, and
frame-level GPU resource lifecycle.

`Renderer` owns the WebGPU canvas context, allocates the multisampled main
pass targets and the offscreen picking targets, and exposes helpers for
starting render passes, submitting command buffers, and rebuilding
size-dependent resources after resize events.

## Constructors

### Constructor

> **new Renderer**(`canvas`): `Renderer`

Defined in: [autk-map/src/renderer.ts:91](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L91)

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

Defined in: [autk-map/src/renderer.ts:97](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L97)

Underlying render canvas.

##### Returns

`HTMLCanvasElement`

***

### canvasFormat

#### Get Signature

> **get** **canvasFormat**(): `GPUTextureFormat`

Defined in: [autk-map/src/renderer.ts:127](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L127)

Preferred canvas format negotiated with WebGPU.

##### Returns

`GPUTextureFormat`

***

### commandEncoder

#### Get Signature

> **get** **commandEncoder**(): `GPUCommandEncoder`

Defined in: [autk-map/src/renderer.ts:152](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L152)

Active command encoder for the current frame.

##### Returns

`GPUCommandEncoder`

***

### context

#### Get Signature

> **get** **context**(): `GPUCanvasContext` \| `null`

Defined in: [autk-map/src/renderer.ts:132](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L132)

Active WebGPU canvas context, if configured.

##### Returns

`GPUCanvasContext` \| `null`

***

### cssHeight

#### Get Signature

> **get** **cssHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:107](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L107)

Canvas layout height in CSS pixels.

##### Returns

`number`

***

### cssWidth

#### Get Signature

> **get** **cssWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:102](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L102)

Canvas layout width in CSS pixels.

##### Returns

`number`

***

### depthBuffer

#### Get Signature

> **get** **depthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:147](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L147)

Depth attachment used by the primary render pass.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### device

#### Get Signature

> **get** **device**(): `GPUDevice`

Defined in: [autk-map/src/renderer.ts:137](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L137)

Logical GPU device.

##### Returns

`GPUDevice`

***

### devicePixelRatio

#### Get Signature

> **get** **devicePixelRatio**(): `number`

Defined in: [autk-map/src/renderer.ts:122](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L122)

Device pixel ratio currently applied to the render surface.

##### Returns

`number`

***

### frameBuffer

#### Get Signature

> **get** **frameBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:142](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L142)

Main color attachment used by the primary render pass.

##### Returns

`GPURenderPassColorAttachment`

***

### pickingBuffer

#### Get Signature

> **get** **pickingBuffer**(): `GPURenderPassColorAttachment`

Defined in: [autk-map/src/renderer.ts:170](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L170)

Picking color attachment descriptor.

##### Returns

`GPURenderPassColorAttachment`

***

### pickingDepthBuffer

#### Get Signature

> **get** **pickingDepthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [autk-map/src/renderer.ts:175](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L175)

Picking depth attachment descriptor.

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### pickingTexture

#### Get Signature

> **get** **pickingTexture**(): `GPUTexture`

Defined in: [autk-map/src/renderer.ts:165](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L165)

Picking color texture used for object-id readback.

##### Returns

`GPUTexture`

***

### pixelHeight

#### Get Signature

> **get** **pixelHeight**(): `number`

Defined in: [autk-map/src/renderer.ts:117](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L117)

Canvas backing-store height in device pixels.

##### Returns

`number`

***

### pixelWidth

#### Get Signature

> **get** **pixelWidth**(): `number`

Defined in: [autk-map/src/renderer.ts:112](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L112)

Canvas backing-store width in device pixels.

##### Returns

`number`

***

### sampleCount

#### Get Signature

> **get** **sampleCount**(): `number`

Defined in: [autk-map/src/renderer.ts:160](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L160)

MSAA sample count used for the main pass.

##### Returns

`number`

## Methods

### beginMainRenderPass()

> **beginMainRenderPass**(): `GPURenderPassEncoder`

Defined in: [autk-map/src/renderer.ts:448](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L448)

Opens the shared main render pass for the current frame.

#### Returns

`GPURenderPassEncoder`

An encoder for the primary pass.

#### Throws

If the renderer has not been initialized or GPU context is null.

***

### configureContext()

> **configureContext**(): `void`

Defined in: [autk-map/src/renderer.ts:264](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L264)

Configures the WebGPU canvas context.

The context is created lazily and then configured with the negotiated
canvas format and render-attachment usage.

#### Returns

`void`

***

### configureDepthBuffer()

> **configureDepthBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:383](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L383)

Creates or recreates the main depth attachment.

The depth texture matches the current backing-store size and is used by
the primary render pass.

#### Returns

`void`

***

### configureFrameBuffer()

> **configureFrameBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:338](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L338)

Creates or recreates the main color attachment and multisample texture.

The attachment resolves into the current swap-chain texture and uses the
configured background color as its clear value.

#### Returns

`void`

***

### configurePickingBuffer()

> **configurePickingBuffer**(): `void`

Defined in: [autk-map/src/renderer.ts:290](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L290)

Creates or recreates color and depth attachments for picking.

The picking pass renders into an offscreen texture sized to the current
backing store so object ids can be read back at pixel precision.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [autk-map/src/renderer.ts:607](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L607)

Releases GPU resources, unconfigures the canvas, and resets renderer state.

#### Returns

`void`

#### Throws

Never throws.

***

### enqueuePickingReadback()

> **enqueuePickingReadback**(`slotIndex`, `pickIndex`, `x`, `y`): `void`

Defined in: [autk-map/src/renderer.ts:548](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L548)

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

Defined in: [autk-map/src/renderer.ts:474](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L474)

Submits the current command buffer and clears the active encoder.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized or no encoder exists.

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [autk-map/src/renderer.ts:184](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L184)

Initializes WebGPU and creates all core render targets.

#### Returns

`Promise`\<`void`\>

#### Throws

Never throws. Failures log to console and leave the renderer uninitialized.

***

### initWebGPU()

> **initWebGPU**(): `Promise`\<`boolean`\>

Defined in: [autk-map/src/renderer.ts:205](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L205)

Initializes the WebGPU device and preferred canvas format.

#### Returns

`Promise`\<`boolean`\>

`true` when adapter and device acquisition succeed; otherwise `false`.

#### Throws

Never throws. Errors are caught and return `false`.

***

### readPickingResults()

> **readPickingResults**(`slotIndex`, `pickCount`): `Promise`\<`number`[]\>

Defined in: [autk-map/src/renderer.ts:578](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L578)

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

Defined in: [autk-map/src/renderer.ts:510](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L510)

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

Defined in: [autk-map/src/renderer.ts:245](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L245)

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

Defined in: [autk-map/src/renderer.ts:416](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L416)

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

Defined in: [autk-map/src/renderer.ts:487](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L487)

Starts the picking render pass by clearing picking attachments.

#### Returns

`void`

#### Throws

Never throws. Silently returns when not initialized.

***

### toPixelCoordinates()

> **toPixelCoordinates**(`x`, `y`): \[`number`, `number`\]

Defined in: [autk-map/src/renderer.ts:659](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/renderer.ts#L659)

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
