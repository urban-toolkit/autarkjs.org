# Interface: TileLayerStats

Defined in: [autk-map/src/layer-tiles.ts:44](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L44)

A snapshot of what a TileLayer is doing. Reading it changes nothing and asks for no frame.

## Properties

### activeRequests

> **activeRequests**: `number`

Defined in: [autk-map/src/layer-tiles.ts:62](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L62)

Requests loading right now.

***

### cachedTextures

> **cachedTextures**: `number`

Defined in: [autk-map/src/layer-tiles.ts:68](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L68)

Tile textures held in memory.

***

### cacheLimit

> **cacheLimit**: `number`

Defined in: [autk-map/src/layer-tiles.ts:70](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L70)

Soft limit on the textures held.

***

### cacheReuses

> **cacheReuses**: `number`

Defined in: [autk-map/src/layer-tiles.ts:76](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L76)

Times a tile became wanted again while its texture was still held.

***

### evictions

> **evictions**: `number`

Defined in: [autk-map/src/layer-tiles.ts:78](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L78)

Textures destroyed because the cache needed room. Teardown is not counted.

***

### fallbackTiles

> **fallbackTiles**: `number`

Defined in: [autk-map/src/layer-tiles.ts:58](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L58)

Selected tiles drawn with an ancestor's image while their own loads.

***

### idle

> **idle**: `boolean`

Defined in: [autk-map/src/layer-tiles.ts:80](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L80)

True when no request is loading, queued or waiting to retry.

***

### missingTiles

> **missingTiles**: `number`

Defined in: [autk-map/src/layer-tiles.ts:60](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L60)

Selected tiles with no image to draw yet. `ready + fallback + missing` equals `selectedTiles`.

***

### queuedRequests

> **queuedRequests**: `number`

Defined in: [autk-map/src/layer-tiles.ts:64](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L64)

Requests ready to start, waiting for a free slot.

***

### readyTiles

> **readyTiles**: `number`

Defined in: [autk-map/src/layer-tiles.ts:56](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L56)

Selected tiles drawn with their own image.

***

### requests

> **requests**: `number`

Defined in: [autk-map/src/layer-tiles.ts:74](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L74)

Load attempts started over the layer's lifetime, retries included. The browser may answer some from its HTTP cache, so this is not a count of network transfers.

***

### selectedTiles

> **selectedTiles**: `number`

Defined in: [autk-map/src/layer-tiles.ts:52](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L52)

Tiles in the last selection.

***

### textureBytes

> **textureBytes**: `number`

Defined in: [autk-map/src/layer-tiles.ts:72](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L72)

Estimated size of the held textures: their pixels at 4 bytes each. Excludes driver overhead and other resources.

***

### truncated

> **truncated**: `boolean`

Defined in: [autk-map/src/layer-tiles.ts:54](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L54)

True when the selection was cut to the tile cap because even the source's lowest zoom needs more.

***

### visible

> **visible**: `boolean`

Defined in: [autk-map/src/layer-tiles.ts:46](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L46)

Whether the layer is drawn. A hidden layer does no work.

***

### waitingRetries

> **waitingRetries**: `number`

Defined in: [autk-map/src/layer-tiles.ts:66](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L66)

Tiles waiting out a retry delay after a transient failure.

***

### wantedZoom

> **wantedZoom**: `number` \| `null`

Defined in: [autk-map/src/layer-tiles.ts:50](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L50)

Finest zoom requested before the tile cap, or `null` when nothing was selected.

***

### zoom

> **zoom**: `number` \| `null`

Defined in: [autk-map/src/layer-tiles.ts:48](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/layer-tiles.ts#L48)

Finest zoom in the last selection, or `null` when nothing was selected.
