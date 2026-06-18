[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / GpgpuPipelineParams

# Interface: GpgpuPipelineParams

Defined in: [api.ts:132](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L132)

Parameters for the GPGPU pipeline.

## Properties

### attributeArrays?

> `optional` **attributeArrays?**: `Record`\<`string`, `number`\>

Defined in: [api.ts:140](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L140)

Per-feature fixed-length arrays keyed by WGSL variable name.

***

### attributeMatrices?

> `optional` **attributeMatrices?**: `Record`\<`string`, \{ `cols`: `number`; `rows`: `number` \| `"auto"`; \}\>

Defined in: [api.ts:143](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L143)

Per-feature matrices keyed by WGSL variable name.

***

### collection

> **collection**: `FeatureCollection`

Defined in: [api.ts:134](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L134)

GeoJSON FeatureCollection to process.

***

### outputColumns?

> `optional` **outputColumns?**: `string`[]

Defined in: [api.ts:161](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L161)

Output column names for array or vector results.

***

### resultField?

> `optional` **resultField?**: `string`

Defined in: [api.ts:158](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L158)

Name of the single output field written when the shader returns one value.

***

### uniformArrays?

> `optional` **uniformArrays?**: `Record`\<`string`, `number`[]\>

Defined in: [api.ts:149](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L149)

Global fixed-length arrays shared across the dispatch.

***

### uniformMatrices?

> `optional` **uniformMatrices?**: `Record`\<`string`, \{ `cols`: `number`; `data`: `number`[][]; \}\>

Defined in: [api.ts:152](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L152)

Global matrices shared across the dispatch.

***

### uniforms?

> `optional` **uniforms?**: `Record`\<`string`, `number`\>

Defined in: [api.ts:146](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L146)

Global scalar constants shared across the dispatch.

***

### variableMapping

> **variableMapping**: `Record`\<`string`, `string`\>

Defined in: [api.ts:137](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L137)

Maps WGSL variable names to feature property dot-paths.

***

### wgslBody

> **wgslBody**: `string`

Defined in: [api.ts:155](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L155)

WGSL function body inserted into the generated `compute_value` function.
