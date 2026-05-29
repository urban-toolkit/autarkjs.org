[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeIntersectingClusterIds

# Function: computeIntersectingClusterIds()

> **computeIntersectingClusterIds**(`items`): `Map`\<`string`, `number`\>

Defined in: [utils-geojson.ts:399](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/utils-geojson.ts#L399)

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
