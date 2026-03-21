# autk-map

`autk-map` is a WebGPU-powered map renderer. It takes GeoJSON data and renders it on an HTML `<canvas>` — supporting 2D layers (points, polylines, polygons) and 3D building extrusion — without a tile server.

## Installation

```bash
npm install autk-map
```

## Initialization

`AutkMap` wraps a `<canvas>` element. Call `init()` to set up the WebGPU context, then `draw()` to start the render loop:

```typescript
import { AutkMap } from 'autk-map';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;

const map = new AutkMap(canvas);
await map.init();

// ... load layers here ...

map.draw(); // starts continuous rendering at 60fps
```

:::warning WebGPU required
`autk-map` requires a browser with WebGPU support. Use Chrome 113+, Edge 113+, or Safari 18+.
:::

## Core Concepts

- **Layers** — each call to `loadGeoJsonLayer` adds one layer identified by a string name.
- **Layer types** — control how geometry is triangulated and rendered (flat polygon, polyline, 3D building extrusion, etc.). See [Layer Types](./layer-types).
- **Thematic data** — color each feature by a numeric or categorical attribute. See [Thematic Mapping](./thematic-mapping).
- **Bounding box** — set automatically from the first loaded layer; controls the camera's initial framing.

## What's Next

- [Layer Types](./layer-types) — OSM layers, custom geometry, raster
- [Loading Layers](./loading-layers) — `loadGeoJsonLayer`, `loadGeoTiffLayer`
- [Styling](./styling) — opacity and color maps
- [Thematic Mapping](./thematic-mapping) — color features by attribute
- [Interactions](./interactions) — picking, show/hide

---

[API Reference →](/api/autk-map/globals)
