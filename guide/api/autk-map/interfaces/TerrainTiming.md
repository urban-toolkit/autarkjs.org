# Interface: TerrainTiming

Defined in: [autk-map/src/height-source-tiles.ts:107](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L107)

CPU timings of the terrain work over the most recent frames, in milliseconds.

`update` covers every frame (planning, tile bookkeeping and composition), so most frames are near
zero once the view is still. `compose` and `upload` cover only the frames that processed composition batches
or uploaded a window, the cost of a frame that does the work. Upload is the time to submit, not for the GPU to finish.

## Properties

### compose

> **compose**: [`TimingSummary`](TimingSummary.md)

Defined in: [autk-map/src/height-source-tiles.ts:111](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L111)

Composition alone, frames that processed at least one row batch.

***

### update

> **update**: [`TimingSummary`](TimingSummary.md)

Defined in: [autk-map/src/height-source-tiles.ts:109](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L109)

Whole `update` call, every frame.

***

### upload

> **upload**: [`TimingSummary`](TimingSummary.md)

Defined in: [autk-map/src/height-source-tiles.ts:113](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L113)

Submitting the changed levels to the GPU, frames that uploaded.

***

### windowsPerCompose

> **windowsPerCompose**: [`TimingSummary`](TimingSummary.md)

Defined in: [autk-map/src/height-source-tiles.ts:115](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/height-source-tiles.ts#L115)

Completed windows per frame with composition work; partial batches may complete none.
