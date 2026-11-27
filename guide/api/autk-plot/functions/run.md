# Function: run()

> **run**(`rows`, `config`, `columns`): [`ExecutedPlotTransform`](../type-aliases/ExecutedPlotTransform.md)

Defined in: [transforms/index.ts:100](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/index.ts#L100)

Runs the transform of a plot configuration: the registered definition named
by `preset` (or by `name`, for `preset: 'registered'`), built-in or user.

## Parameters

### rows

(`object` & `object`)[]

Input rows to transform.

### config

[`PlotTransformConfig`](../type-aliases/PlotTransformConfig.md)

Transform configuration naming the transform and its options.

### columns

`string`[]

Ordered source columns passed to the transform.

## Returns

[`ExecutedPlotTransform`](../type-aliases/ExecutedPlotTransform.md)

Rows and provenance of the transform, tagged with its preset.

## Throws

If no transform is registered under the name, or its output is malformed.

## Example

```ts
const result = run(data, { preset: 'binning-1d', options: { bins: 10 } }, ['area']);
```
