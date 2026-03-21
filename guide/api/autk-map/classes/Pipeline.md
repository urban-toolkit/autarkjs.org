[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / Pipeline

# Abstract Class: Pipeline

Defined in: [pipeline.ts:17](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L17)

Abstract class representing a rendering pipeline.
It provides methods for creating camera and color uniform bind groups,
updating camera and color uniforms, and defining the structure for building
and rendering the pipeline.

## Extended by

- [`PipelineTriangleBorder`](PipelineTriangleBorder.md)
- [`PipelineTriangleFlat`](PipelineTriangleFlat.md)
- [`PipelineTrianglePicking`](PipelineTrianglePicking.md)
- [`PipelineTriangleRaster`](PipelineTriangleRaster.md)
- [`PipelineBuildingSSAO`](PipelineBuildingSSAO.md)

## Constructors

### Constructor

> **new Pipeline**(`renderer`): `Pipeline`

Defined in: [pipeline.ts:101](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L101)

Pipeline constructor

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer instance

#### Returns

`Pipeline`

## Properties

### \_cameraBindGroup

> `protected` **\_cameraBindGroup**: `GPUBindGroup`

Defined in: [pipeline.ts:39](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L39)

Camera bind group

***

### \_cameraBindGroupLayout

> `protected` **\_cameraBindGroupLayout**: `GPUBindGroupLayout`

Defined in: [pipeline.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L44)

Camera bind group layout

***

### \_cMapTexture

> `protected` **\_cMapTexture**: `GPUTexture`

Defined in: [pipeline.ts:61](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L61)

Color map texture

***

### \_colorBuffer

> `protected` **\_colorBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:51](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L51)

Color uniform buffer

***

### \_highlightColorBuffer

> `protected` **\_highlightColorBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L56)

Highlight color uniform buffer

***

### \_mviewBuffer

> `protected` **\_mviewBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:27](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L27)

ModelView matrix uniform buffer

***

### \_opacity

> `protected` **\_opacity**: `GPUBuffer`

Defined in: [pipeline.ts:79](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L79)

Opacity uniform buffer

***

### \_projcBuffer

> `protected` **\_projcBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:32](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L32)

Projection matrix uniform buffer

***

### \_renderer

> `protected` **\_renderer**: [`Renderer`](Renderer.md)

Defined in: [pipeline.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L21)

Renderer reference

***

### \_renderInfoBindGroup

> `protected` **\_renderInfoBindGroup**: `GPUBindGroup`

Defined in: [pipeline.ts:87](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L87)

Render information bind group

***

### \_renderInfoBindGroupLayout

> `protected` **\_renderInfoBindGroupLayout**: `GPUBindGroupLayout`

Defined in: [pipeline.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L92)

Render information bind group layout

***

### \_useColorMap

> `protected` **\_useColorMap**: `GPUBuffer`

Defined in: [pipeline.ts:69](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L69)

Use color map uniform buffer

***

### \_useHighlight

> `protected` **\_useHighlight**: `GPUBuffer`

Defined in: [pipeline.ts:74](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L74)

Use highlight uniform buffer

## Methods

### build()

> `abstract` **build**(`data`): `void`

Defined in: [pipeline.ts:331](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L331)

Builds the pipeline.

#### Parameters

##### data

[`Layer`](Layer.md)

The layer instance

#### Returns

`void`

***

### createCameraUniformBindGroup()

> **createCameraUniformBindGroup**(): `void`

Defined in: [pipeline.ts:110](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L110)

Creates the camera uniform bind group.

#### Returns

`void`

***

### createColorUniformBindGroup()

> **createColorUniformBindGroup**(): `void`

Defined in: [pipeline.ts:170](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L170)

Creates the color uniform bind group.

#### Returns

`void`

***

### createVertexBuffers()

> `abstract` **createVertexBuffers**(`data`): `void`

Defined in: [pipeline.ts:337](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L337)

Creates the vertex buffers.

#### Parameters

##### data

[`Layer`](Layer.md)

The layer instance

#### Returns

`void`

***

### renderPass()

> `abstract` **renderPass**(`camera`): `void`

Defined in: [pipeline.ts:348](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L348)

Creates the shaders for the pipeline.

#### Parameters

##### camera

[`Camera`](Camera.md)

#### Returns

`void`

***

### updateCameraUniforms()

> **updateCameraUniforms**(`camera`): `void`

Defined in: [pipeline.ts:157](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L157)

Updates the camera uniform buffers with the current camera state.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance

#### Returns

`void`

***

### updateColorUniforms()

> **updateColorUniforms**(`layer`): `void`

Defined in: [pipeline.ts:295](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L295)

Updates the color uniform buffers with the current layer state.

#### Parameters

##### layer

[`Layer`](Layer.md)

The layer instance

#### Returns

`void`

***

### updateVertexBuffers()

> `abstract` **updateVertexBuffers**(`data`): `void`

Defined in: [pipeline.ts:343](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L343)

Updates the vertex buffers with the provided data.

#### Parameters

##### data

[`Layer`](Layer.md)

The layer instance

#### Returns

`void`
