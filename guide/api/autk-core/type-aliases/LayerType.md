[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / LayerType

# Type Alias: LayerType

> **LayerType** = `"background"` \| `"surface"` \| `"parks"` \| `"water"` \| `"roads"` \| `"buildings"` \| `"points"` \| `"polygons"` \| `"polylines"` \| `"raster"`

Defined in: [types-layer.ts:17](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-core/src/types-layer.ts#L17)

Canonical layer families recognized by collection loading and rendering.

`LayerType` is used to route GeoJSON and other layer sources into the
appropriate pipeline branch, including geometry inference, renderer
selection, and thematic handling.
