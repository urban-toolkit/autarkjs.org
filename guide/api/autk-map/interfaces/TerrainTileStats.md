[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / TerrainTileStats

# Interface: TerrainTileStats

Defined in: [autk-map/src/height-source-tiles.ts:119](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L119)

Read-only statistics of a TileHeightSource.

## Properties

### cacheLimit

> **cacheLimit**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:133](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L133)

Tiles the cache may hold; at least `tileBound`, so tiles in use are never evicted.

***

### complete

> **complete**: `boolean`

Defined in: [autk-map/src/height-source-tiles.ts:143](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L143)

Every requested window has height coverage, including coarser fallback.

***

### failedTiles

> **failedTiles**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:145](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L145)

Requested tiles whose most recent request failed.

***

### idle

> **idle**: `boolean`

Defined in: [autk-map/src/height-source-tiles.ts:147](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L147)

`true` when no composition, request, or retry is pending, even if coverage is incomplete.

***

### levels

> **levels**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:123](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L123)

Number of levels in use.

***

### memory

> **memory**: [`TerrainMemory`](TerrainMemory.md)

Defined in: [autk-map/src/height-source-tiles.ts:135](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L135)

Upper bounds, in bytes, of the memory the height source holds; see [TerrainMemory](TerrainMemory.md).

***

### missingSamples

> **missingSamples**: readonly `number`[]

Defined in: [autk-map/src/height-source-tiles.ts:139](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L139)

Samples per level that no loaded tile covers yet, finest first.

***

### pendingLevels

> **pendingLevels**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:141](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L141)

Windows that are out of date and wait for a frame with composition budget.

***

### readyTiles

> **readyTiles**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:137](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L137)

Of those, tiles that have loaded.

***

### store

> **store**: `TileStoreStats`

Defined in: [autk-map/src/height-source-tiles.ts:149](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L149)

Request queue and cache counters of the tile store.

***

### tileBound

> **tileBound**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:131](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L131)

Conservative bound for window tiles and validation parent references.

***

### timing

> **timing**: [`TerrainTiming`](TerrainTiming.md)

Defined in: [autk-map/src/height-source-tiles.ts:151](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L151)

Recent CPU timings; see [TerrainTiming](TerrainTiming.md).

***

### validation

> **validation**: [`ElevationValidationStats`](ElevationValidationStats.md) \| `null`

Defined in: [autk-map/src/height-source-tiles.ts:121](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L121)

Published per-window validation totals; overlapping windows can count the same input texel.

***

### wantedTiles

> **wantedTiles**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:129](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L129)

Tiles the windows need right now.

***

### windowSize

> **windowSize**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:127](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L127)

Samples along each window edge.

***

### zooms

> **zooms**: readonly `number`[]

Defined in: [autk-map/src/height-source-tiles.ts:125](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/height-source-tiles.ts#L125)

Tile zoom read by each level, finest first.
