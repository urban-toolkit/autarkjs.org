[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeOrigin

# Function: computeOrigin()

> **computeOrigin**(`geojson`): \[`number`, `number`\]

Defined in: [utils-geojson.ts:52](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/utils-geojson.ts#L52)

Computes a spatial origin from a feature collection's bounding-box center.

## Parameters

### geojson

`FeatureCollection`

Feature collection to summarize.

## Returns

\[`number`, `number`\]

The `[longitude, latitude]` center, or `[0, 0]` when no usable geometry is present.

## Throws

Never throws.

## Example

```ts
const origin = computeOrigin(fc);
// origin → [151.2, -33.8]
```
