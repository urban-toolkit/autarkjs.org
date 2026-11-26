# Interface: LoadTilesParams

Defined in: [autk-map/src/api.ts:222](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L222)

Parameters for loading a tile basemap with [AutkMap.loadTiles](../classes/AutkMap.md#loadtiles).

Tiles are web map tiles in the Web Mercator (EPSG:3857) grid, fetched as the
camera moves and drawn below other layers by default.

## Properties

### maxCachedTiles?

> `optional` **maxCachedTiles?**: `number`

Defined in: [autk-map/src/api.ts:233](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L233)

Positive safe integer soft cache limit. Defaults to 256. Invalid values are rejected.

***

### maxTiles?

> `optional` **maxTiles?**: `number`

Defined in: [autk-map/src/api.ts:245](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L245)

Positive safe integer cap on selected tiles; ancestor preloads add requests.
Tilted flat views prioritize foreground detail within this budget. If even the
source's lowest zoom exceeds the cap, only the nearest tiles are selected. Defaults to 64.

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [autk-map/src/api.ts:231](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L231)

Layer opacity from 0 to 1. Defaults to 1.

***

### source

> **source**: [`TileSource`](TileSource.md)

Defined in: [autk-map/src/api.ts:229](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L229)

Where the tiles come from: a preset from `TILE_SOURCES` or a custom
URL template. The attribution is required and is shown on the map, as
text or, where the source gives a URL, as a link; the caller is
responsible for following the provider's terms of use.

***

### zoomBias?

> `optional` **zoomBias?**: `number`

Defined in: [autk-map/src/api.ts:239](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L239)

Adjusts the zoom chosen for the view. Positive values favor sharper tiles
and more requests; negative values favor fewer requests.
Defaults to 0.
