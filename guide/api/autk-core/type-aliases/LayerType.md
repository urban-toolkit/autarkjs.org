[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / LayerType

# Type Alias: LayerType

> **LayerType** = `"background"` \| `"surface"` \| `"parks"` \| `"water"` \| `"roads"` \| `"buildings"` \| `"points"` \| `"polygons"` \| `"polylines"` \| `"raster"`

Defined in: [types-layer.ts:17](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/types-layer.ts#L17)

Canonical layer families recognized by collection loading and rendering.

`LayerType` is used to route GeoJSON and other layer sources into the
appropriate pipeline branch, including geometry inference, renderer
selection, and thematic handling.
