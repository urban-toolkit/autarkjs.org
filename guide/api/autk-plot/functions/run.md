[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / run

# Function: run()

> **run**(`rows`, `config`, `columns`): [`ExecutedChartTransform`](../type-aliases/ExecutedChartTransform.md)

Defined in: [autk-plot/src/transforms/index.ts:61](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/index.ts#L61)

Runs a chart transform config through the preset pipeline.

## Parameters

### rows

`object` & `object`[]

Input rows to transform.

### config

[`ChartTransformConfig`](../type-aliases/ChartTransformConfig.md)

Transform configuration selecting the preset runner.

### columns

`string`[]

Ordered source columns passed to the chosen preset.

## Returns

[`ExecutedChartTransform`](../type-aliases/ExecutedChartTransform.md)

Executed transform payload tagged with its preset discriminator.

## Throws

Never throws. Falls through to the last preset when unrecognized.

## Example

```ts
const result = run(data, { preset: 'binning-1d', options: { bins: 10 } }, ['area']);
```
