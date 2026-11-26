---
package: autk-map
title: Imagery
---

<script setup>
const tilesCode = `
import { AutkMap, TILE_SOURCES } from '@urban-toolkit/autk-map';

const map = new AutkMap(canvas, { showUi: false });
await map.init();

// A center is required to start a map that has no vector layer yet.
map.setView({ center: { latitude: 40.7061, longitude: -74.0087 }, zoom: 14 });
map.loadTiles('imagery', { source: TILE_SOURCES.osmLight });

map.draw();

output('<button type="button" data-theme="light">Light</button> <button type="button" data-theme="dark">Dark</button> <button type="button" data-action="hide">Toggle imagery</button>');

let hidden = false;
mount.querySelector('[data-action="hide"]').addEventListener('click', () => {
  hidden = !hidden;
  map.updateRenderInfo('imagery', { isSkip: hidden });
});

for (const theme of ['light', 'dark']) {
  mount.querySelector('button[data-theme="' + theme + '"]').addEventListener('click', async () => {
    const source = theme === 'light' ? TILE_SOURCES.osmLight : TILE_SOURCES.osmDark;
    // Replacing the source keeps the camera and the shared origin.
    await map.loadTiles('imagery', { source });
  });
}
`

const combinedCode = `
import { AutkMap, TILE_SOURCES, TERRAIN_TILE_SOURCES } from '@urban-toolkit/autk-map';

const map = new AutkMap(canvas, { showUi: false });
await map.init();

map.setView({ center: { latitude: 40.7061, longitude: -74.0087 }, zoom: 14 });
map.loadTiles('imagery', { source: TILE_SOURCES.esriWorldImagery });
await map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });
map.draw();
`
</script>

<style scoped>
.package-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

# Imagery

`loadTiles()` draws a web map tile basemap below the other layers and fetches tiles as the camera moves. It works on its own or under vector data, with or without terrain.

:::warning Internet required
This page uses third-party tile servers. The built-in presets are conveniences, not licenses: respect each provider's terms. OpenStreetMap's public servers forbid heavy use and bulk downloading, and Esri imagery requires its attribution to stay visible. Use your own server or a commercial provider in production.
:::

## Loading a basemap

```ts
import { AutkMap, TILE_SOURCES } from '@urban-toolkit/autk-map'

const map = new AutkMap(canvas)
await map.init()

map.setView({ center: { latitude: 40.7061, longitude: -74.0087 }, zoom: 14 })
map.loadTiles('imagery', { source: TILE_SOURCES.osmLight })
map.draw()
```

Tiles stay in Web Mercator and are reprojected into a two-dimensional CPU mesh in the workspace CRS. The presets are:

| Preset | Source |
| --- | --- |
| `TILE_SOURCES.esriWorldImagery` | Esri World Imagery (satellite). |
| `TILE_SOURCES.openStreetMap` | Standard OpenStreetMap raster tiles. |
| `TILE_SOURCES.osmLight` | The same tiles, muted on the client against a pale background. |
| `TILE_SOURCES.osmDark` | The same tiles, luminance reversed onto a dark background. |

The OSM themes only recolor the raster images; baked-in roads and labels remain, so this is not vector tile styling. Colors are processed once per tile and cached with the texture.

<ClientOnly>
  <CodePlayground :code="tilesCode" out="dom" :auto-run="false" />
</ClientOnly>

## Custom sources and attribution

Anything else is a URL template with `{z}`, `{x}`, `{y}`, optional `{s}` with `subdomains`, and `{reverseY}` for TMS-style servers. `attribution` is required: a string, a `{ text, url }` entry, or a list of either. Links must be `http(s)` URLs, and they appear beside the Autark credit.

```ts
map.loadTiles('imagery', {
  source: {
    urlTemplate: 'https://tiles.example.org/{z}/{x}/{y}.png',
    attribution: { text: '© Example Maps', url: 'https://example.org/terms' },
    theme: 'original', // 'light' | 'dark' | 'original'
    maxZoom: 19,
  },
})
```

## Order, hiding, and statistics

Tile layers draw first by default, so a `surface` layer covers them; use `setLayerOrder()` to place imagery above a surface when that is what you want. Hiding a tile layer with `updateRenderInfo(id, { isSkip: true })` cancels queued, in-flight, and retrying requests but keeps the textures already loaded, so showing it again draws immediately and fetches only what is missing.

`map.getTileStats(id)` returns a read-only snapshot: the selected zoom (and the zoom the view wanted, if the tile cap lowered it), how many tiles are drawn with their own image, an ancestor's, or not at all, the request queue, cached texture memory, and cumulative request, reuse, and eviction counts. `map.renderStats` reports frames rendered, CPU time per frame, and the frame rate while rendering. Neither read triggers a frame, so a page can poll them on a timer; a frame count that stops increasing means the map is idle.

Loading is bounded: at most eight requests run at once, tiles that leave the view are cancelled, and the soft cache limit is 256 tiles (`maxCachedTiles`). While a tile loads, the nearest loaded ancestor is drawn in its place. `zoomBias: 1` trades about four times the requests for sharper imagery, and `maxTiles` (64) caps the selected tiles.

## Combining imagery and terrain

Imagery is independent of terrain: load it before or after, hide it without removing elevation, and remove the terrain without losing the basemap. A map with streamed elevation needs a starting view, because it has no vector layer to establish the origin:

<ClientOnly>
  <CodePlayground :code="combinedCode" out="dom" :auto-run="false" />
</ClientOnly>

See [Terrain data](./terrain) for height sources, validation, and memory options.

</div>
