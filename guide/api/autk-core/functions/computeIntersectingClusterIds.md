[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeIntersectingClusterIds

# Function: computeIntersectingClusterIds()

> **computeIntersectingClusterIds**(`items`): `Map`\<`string`, `number`\>

Defined in: [utils-geojson.ts:399](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/utils-geojson.ts#L399)

Computes connected components (clusters) of intersecting geometries and returns
a mapping from feature id to cluster id. The input array must contain an
application-level identifier for each geometry. Cluster ids are stable only
within a single invocation and start at 0.

## Parameters

### items

`object`[]

Geometries with application-level identifiers to cluster.

## Returns

`Map`\<`string`, `number`\>

Map from stringified feature id to cluster id (0-based).

## Example

```ts
const clusters = computeIntersectingClusterIds(features);
// clusters → Map { 'building-1' → 0, 'building-2' → 0, 'building-3' → 1 }
```
