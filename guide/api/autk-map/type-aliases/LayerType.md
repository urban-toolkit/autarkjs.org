[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerType

# Type Alias: LayerType

> **LayerType** = `"background"` \| `"surface"` \| `"parks"` \| `"water"` \| `"roads"` \| `"buildings"` \| `"points"` \| `"polygons"` \| `"polylines"` \| `"raster"`

Defined in: autk-core/dist/src/types-layer.d.ts:16

Canonical layer families recognized by collection loading and rendering.

`LayerType` is used to route GeoJSON and other layer sources into the
appropriate pipeline branch, including geometry inference, renderer
selection, and thematic handling.
