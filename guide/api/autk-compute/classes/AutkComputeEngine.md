[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / AutkComputeEngine

# Class: AutkComputeEngine

Defined in: [compute.ts:41](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/compute.ts#L41)

Main compute engine for GPGPU analysis and render sampling.

`AutkComputeEngine` provides the package-level API for running analytical and
render compute passes. It accepts GeoJSON feature collections and writes the
results back to `feature.properties.compute` on the returned collection.

## Example

```ts
const compute = new AutkComputeEngine();
await compute.gpgpuPipeline(params);
```

## Constructors

### Constructor

> **new AutkComputeEngine**(): `AutkComputeEngine`

#### Returns

`AutkComputeEngine`

## Methods

### gpgpuPipeline()

> **gpgpuPipeline**(`params`): `Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Defined in: [compute.ts:62](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/compute.ts#L62)

Runs the GPGPU pipeline and writes results to `feature.properties.compute`.

#### Parameters

##### params

[`GpgpuPipelineParams`](../interfaces/GpgpuPipelineParams.md)

Pipeline parameters.

#### Returns

`Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Promise resolving to the input collection with computed values attached.

#### Throws

If `resultField` or `outputColumns` is missing, or WGSL identifiers are invalid.

#### Example

```ts
const engine = new AutkComputeEngine();
const result = await engine.gpgpuPipeline({
  collection: fc,
  variableMapping: { pop: 'properties.population' },
  wgslBody: 'return pop * 1.5;',
  resultField: 'scaledPop',
});
```

***

### renderPipeline()

> **renderPipeline**(`params`): `Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Defined in: [compute.ts:80](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/compute.ts#L80)

Runs the render pipeline and writes metrics to `feature.properties.compute.render`.

#### Parameters

##### params

[`RenderPipelineParams`](../interfaces/RenderPipelineParams.md)

Pipeline parameters.

#### Returns

`Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Promise resolving to the viewpoints collection with aggregated render metrics.

#### Throws

If no layers are provided or `tileSize` is invalid.

#### Example

```ts
const engine = new AutkComputeEngine();
const result = await engine.renderPipeline({
  layers: [{ id: 'b', collection: fc, type: 'buildings' }],
  viewpoints: { collection: vpFC },
  aggregation: { type: 'classes' },
});
```
