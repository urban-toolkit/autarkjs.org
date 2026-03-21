[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / Renderer

# Class: Renderer

Defined in: [renderer.ts:5](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L5)

## Constructors

### Constructor

> **new Renderer**(`canvas`): `Renderer`

Defined in: [renderer.ts:36](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L36)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`Renderer`

## Properties

### \_canvas

> `protected` **\_canvas**: `HTMLCanvasElement`

Defined in: [renderer.ts:7](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L7)

***

### \_colorTexture

> `protected` **\_colorTexture**: `GPUTexture`

Defined in: [renderer.ts:17](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L17)

***

### \_commandEncoder

> `protected` **\_commandEncoder**: `GPUCommandEncoder`

Defined in: [renderer.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L30)

***

### \_context

> `protected` **\_context**: `GPUCanvasContext` \| `null`

Defined in: [renderer.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L13)

***

### \_depthBuffer

> `protected` **\_depthBuffer**: `GPURenderPassDepthStencilAttachment`

Defined in: [renderer.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L21)

***

### \_depthTexture

> `protected` **\_depthTexture**: `GPUTexture`

Defined in: [renderer.ts:20](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L20)

***

### \_device

> `protected` **\_device**: `GPUDevice`

Defined in: [renderer.ts:10](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L10)

***

### \_frameBuffer

> `protected` **\_frameBuffer**: `GPURenderPassColorAttachment`

Defined in: [renderer.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L18)

***

### \_multisampleTexture

> `protected` **\_multisampleTexture**: `GPUTexture`

Defined in: [renderer.ts:16](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L16)

***

### \_pickingBuffer

> `protected` **\_pickingBuffer**: `GPURenderPassColorAttachment`

Defined in: [renderer.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L24)

***

### \_pickingDepthBuffer

> `protected` **\_pickingDepthBuffer**: `GPURenderPassDepthStencilAttachment`

Defined in: [renderer.ts:26](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L26)

***

### \_pickingDepthTexture

> `protected` **\_pickingDepthTexture**: `GPUTexture`

Defined in: [renderer.ts:27](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L27)

***

### \_pickingSampleCount

> `protected` **\_pickingSampleCount**: `number` = `1`

Defined in: [renderer.ts:34](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L34)

***

### \_pickingTexture

> `protected` **\_pickingTexture**: `GPUTexture`

Defined in: [renderer.ts:25](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L25)

***

### \_sampleCount

> `protected` **\_sampleCount**: `number` = `4`

Defined in: [renderer.ts:33](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L33)

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [renderer.ts:40](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L40)

##### Returns

`HTMLCanvasElement`

***

### commandEncoder

#### Get Signature

> **get** **commandEncoder**(): `GPUCommandEncoder`

Defined in: [renderer.ts:60](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L60)

##### Returns

`GPUCommandEncoder`

***

### context

#### Get Signature

> **get** **context**(): `GPUCanvasContext` \| `null`

Defined in: [renderer.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L44)

##### Returns

`GPUCanvasContext` \| `null`

***

### depthBuffer

#### Get Signature

> **get** **depthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [renderer.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L56)

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### device

#### Get Signature

> **get** **device**(): `GPUDevice`

Defined in: [renderer.ts:48](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L48)

##### Returns

`GPUDevice`

***

### frameBuffer

#### Get Signature

> **get** **frameBuffer**(): `GPURenderPassColorAttachment`

Defined in: [renderer.ts:52](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L52)

##### Returns

`GPURenderPassColorAttachment`

***

### pickingBuffer

#### Get Signature

> **get** **pickingBuffer**(): `GPURenderPassColorAttachment`

Defined in: [renderer.ts:72](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L72)

##### Returns

`GPURenderPassColorAttachment`

***

### pickingDepthBuffer

#### Get Signature

> **get** **pickingDepthBuffer**(): `GPURenderPassDepthStencilAttachment`

Defined in: [renderer.ts:76](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L76)

##### Returns

`GPURenderPassDepthStencilAttachment`

***

### pickingTexture

#### Get Signature

> **get** **pickingTexture**(): `GPUTexture`

Defined in: [renderer.ts:68](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L68)

##### Returns

`GPUTexture`

***

### sampleCount

#### Get Signature

> **get** **sampleCount**(): `number`

Defined in: [renderer.ts:64](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L64)

##### Returns

`number`

## Methods

### configureContext()

> **configureContext**(): `void`

Defined in: [renderer.ts:128](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L128)

#### Returns

`void`

***

### configureDepthBuffer()

> **configureDepthBuffer**(): `void`

Defined in: [renderer.ts:211](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L211)

#### Returns

`void`

***

### configureFrameBuffer()

> **configureFrameBuffer**(): `void`

Defined in: [renderer.ts:179](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L179)

#### Returns

`void`

***

### configurePickingBuffer()

> **configurePickingBuffer**(): `void`

Defined in: [renderer.ts:144](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L144)

#### Returns

`void`

***

### finish()

> **finish**(): `void`

Defined in: [renderer.ts:257](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L257)

#### Returns

`void`

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [renderer.ts:81](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L81)

#### Returns

`Promise`\<`void`\>

***

### initWebGPU()

> **initWebGPU**(): `Promise`\<`boolean`\>

Defined in: [renderer.ts:93](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L93)

#### Returns

`Promise`\<`boolean`\>

***

### resize()

> **resize**(`width`, `height`): `void`

Defined in: [renderer.ts:117](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L117)

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [renderer.ts:233](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L233)

#### Returns

`void`

***

### startPickingRenderPass()

> **startPickingRenderPass**(): `void`

Defined in: [renderer.ts:261](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/renderer.ts#L261)

#### Returns

`void`
