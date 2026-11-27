# Interface: TerrainMemory

Defined in: [autk-map/src/height-source-tiles.ts:85](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L85)

Upper bounds, in bytes, of what a TileHeightSource holds, by kind. They follow from the
configuration alone, so they hold however tiles arrive. They do not include the imagery overlay,
which the map owns and which is much larger (see TILE-TERRAIN.md, Memory).

## Properties

### cpuWindows

> **cpuWindows**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:89](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L89)

Published CPU windows plus one scratch grid per level.

***

### decodedTiles

> **decodedTiles**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:87](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L87)

Decoded tiles in the cache plus at most `tileBound` retained by in-progress snapshots.

***

### decoding

> **decoding**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:93](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L93)

Tiles being fetched and decoded at once, estimated as an RGBA bitmap plus the decoded floats each.

***

### gpuHeights

> **gpuHeights**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:91](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L91)

The GPU height texture array, the size of the published CPU windows.

***

### total

> **total**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:97](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L97)

Sum of the above.

***

### validationScratch

> **validationScratch**: `number`

Defined in: [autk-map/src/height-source-tiles.ts:95](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L95)

Live validation masks and correction arrays in pending row-batch jobs.
