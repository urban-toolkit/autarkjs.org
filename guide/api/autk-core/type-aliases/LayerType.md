# Type Alias: LayerType

> **LayerType** = `"background"` \| `"surface"` \| `"parks"` \| `"water"` \| `"roads"` \| `"buildings"` \| `"points"` \| `"polygons"` \| `"polylines"` \| `"raster"` \| `"tiles"`

Defined in: [types-layer.ts:17](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/types-layer.ts#L17)

Canonical layer families recognized by collection loading and rendering.

`LayerType` is used to route GeoJSON and other layer sources into the
appropriate pipeline branch, including geometry inference, renderer
selection, and thematic handling.
