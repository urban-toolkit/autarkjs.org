[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / run

# Function: run()

> **run**(`rows`, `config`, `columns`): [`ExecutedPlotTransform`](../type-aliases/ExecutedPlotTransform.md)

Defined in: [autk-plot/src/transforms/index.ts:61](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/transforms/index.ts#L61)

Runs a plot transform config through the preset pipeline.

## Parameters

### rows

`object` & `object`[]

Input rows to transform.

### config

[`PlotTransformConfig`](../type-aliases/PlotTransformConfig.md)

Transform configuration selecting the preset runner.

### columns

`string`[]

Ordered source columns passed to the chosen preset.

## Returns

[`ExecutedPlotTransform`](../type-aliases/ExecutedPlotTransform.md)

Executed transform payload tagged with its preset discriminator.

## Throws

Never throws. Falls through to the last preset when unrecognized.

## Example

```ts
const result = run(data, { preset: 'binning-1d', options: { bins: 10 } }, ['area']);
```
