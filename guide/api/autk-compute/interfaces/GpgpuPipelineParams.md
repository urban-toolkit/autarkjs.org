[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / GpgpuPipelineParams

# Interface: GpgpuPipelineParams

Defined in: [api.ts:132](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L132)

Parameters for the GPGPU pipeline.

## Properties

### attributeArrays?

> `optional` **attributeArrays?**: `Record`\<`string`, `number`\>

Defined in: [api.ts:140](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L140)

Per-feature fixed-length arrays keyed by WGSL variable name.

***

### attributeMatrices?

> `optional` **attributeMatrices?**: `Record`\<`string`, \{ `cols`: `number`; `rows`: `number` \| `"auto"`; \}\>

Defined in: [api.ts:143](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L143)

Per-feature matrices keyed by WGSL variable name.

***

### collection

> **collection**: `FeatureCollection`

Defined in: [api.ts:134](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L134)

GeoJSON FeatureCollection to process.

***

### outputColumns?

> `optional` **outputColumns?**: `string`[]

Defined in: [api.ts:161](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L161)

Output column names for array or vector results.

***

### resultField?

> `optional` **resultField?**: `string`

Defined in: [api.ts:158](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L158)

Name of the single output field written when the shader returns one value.

***

### uniformArrays?

> `optional` **uniformArrays?**: `Record`\<`string`, `number`[]\>

Defined in: [api.ts:149](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L149)

Global read-only arrays backed by storage buffers; WGSL accesses name[index] and name_length (u32).

***

### uniformMatrices?

> `optional` **uniformMatrices?**: `Record`\<`string`, \{ `cols`: `number`; `data`: `number`[][]; \}\>

Defined in: [api.ts:152](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L152)

Global read-only, row-major storage matrices; WGSL accesses name[row * name_cols + col], name_rows/name_cols (u32).

***

### uniforms?

> `optional` **uniforms?**: `Record`\<`string`, `number`\>

Defined in: [api.ts:146](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L146)

Global scalar constants shared across the dispatch, backed by uniform buffers.

***

### variableMapping

> **variableMapping**: `Record`\<`string`, `string`\>

Defined in: [api.ts:137](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L137)

Maps WGSL variable names to feature property dot-paths.

***

### wgslBody

> **wgslBody**: `string`

Defined in: [api.ts:155](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-compute/src/api.ts#L155)

WGSL function body inserted into the generated `compute_value` function.
