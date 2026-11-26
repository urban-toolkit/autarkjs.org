# Interface: LoadTerrainParams

Defined in: [autk-map/src/api.ts:252](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L252)

Parameters for loading elevation tiles or a normalized terrain raster.
The workspace CRS comes from the map constructor and must be metre-based.

## Properties

### composeBudgetMs?

> `optional` **composeBudgetMs?**: `number`

Defined in: [autk-map/src/api.ts:282](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L282)

Milliseconds of terrain composition per frame before the rest waits for the next frame (default 4; `Infinity` for no limit).

***

### levels?

> `optional` **levels?**: `number`

Defined in: [autk-map/src/api.ts:265](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L265)

Nested windows of height samples around the view, finest first; each covers
twice the area of the one before. Fewer are used when the source has too few
zoom levels. Defaults to 6, at most 8.

***

### maxCachedTiles?

> `optional` **maxCachedTiles?**: `number`

Defined in: [autk-map/src/api.ts:274](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L274)

Elevation tiles kept in memory. Defaults to 128.

***

### overlaySize?

> `optional` **overlaySize?**: `number`

Defined in: [autk-map/src/api.ts:284](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L284)

Draped-layer overlay edge in pixels, from 64 to 4096. Defaults to 2048 for tiles and 4096 for raster terrain.

***

### source

> **source**: [`TerrainTileSource`](TerrainTileSource.md) \| [`TerrainRasterSource`](TerrainRasterSource.md)

Defined in: [autk-map/src/api.ts:259](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L259)

Elevation tile descriptor or normalized raster and band property. Tile attribution
is shown on the map; the caller is responsible for following the provider's terms.

***

### validation?

> `optional` **validation?**: `false` \| [`ElevationValidationOptions`](ElevationValidationOptions.md)

Defined in: [autk-map/src/api.ts:254](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L254)

Conservative, region-independent elevation validation. Enabled by default; false preserves raw heights.

***

### verticalScale?

> `optional` **verticalScale?**: `number`

Defined in: [autk-map/src/api.ts:280](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L280)

Multiplies every height. Heights are metres while the map plane is
EPSG:3395 metres, which are stretched by about `1/cos(latitude)`, as are
building heights, so the default keeps them consistent. Defaults to 1.

***

### windowSize?

> `optional` **windowSize?**: `number`

Defined in: [autk-map/src/api.ts:267](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L267)

Samples along each window edge, an even number. Defaults to 512.

***

### zoomBias?

> `optional` **zoomBias?**: `number`

Defined in: [autk-map/src/api.ts:272](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L272)

Added to the finest zoom (14, or the source's `maxZoom` when lower).
Negative values give coarser terrain and fewer requests. Defaults to 0.
