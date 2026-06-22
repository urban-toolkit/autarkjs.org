[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / offsetPolyline

# Function: offsetPolyline()

> **offsetPolyline**(`points`, `distance`): \[`number`, `number`\][]

Defined in: [utils-geometry.ts:30](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-core/src/utils-geometry.ts#L30)

Builds a closed polygon buffer around a polyline for stroke rendering.

Input coordinates are expected to already be in a local planar system.
Consecutive duplicate points are skipped before the offset is computed.
The returned polygon includes a repeated closing vertex and is suitable for
triangulation with earcut.

## Parameters

### points

`number`[][]

Ordered local-space polyline coordinates.

### distance

`number`

Offset distance applied on both sides of the polyline.

## Returns

\[`number`, `number`\][]

A closed polygon describing the buffered polyline footprint in
local planar coordinates. Returns an empty array when the input contains
fewer than two distinct points or when `distance` is `0`.

## Throws

Never throws. Degenerate inputs return an empty array rather than
raising an error.

## Example

```ts
const poly = offsetPolyline([[0, 0], [10, 0], [10, 10]], 2);
// poly is a closed ring e.g. [[-0, 2], [10, -2], [12, 10], …]
```
