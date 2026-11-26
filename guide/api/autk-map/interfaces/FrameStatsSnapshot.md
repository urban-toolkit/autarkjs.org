# Interface: FrameStatsSnapshot

Defined in: [autk-map/src/frame-stats.ts:13](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/frame-stats.ts#L13)

A snapshot of frame statistics.

## Properties

### averageFrameCpuMs

> **averageFrameCpuMs**: `number`

Defined in: [autk-map/src/frame-stats.ts:19](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/frame-stats.ts#L19)

Average CPU milliseconds per frame over the recent frames; 0 when there are none.

***

### frameCount

> **frameCount**: `number`

Defined in: [autk-map/src/frame-stats.ts:15](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/frame-stats.ts#L15)

Frames rendered since the map was created. Stops increasing when the map is idle.

***

### framesPerSecond

> **framesPerSecond**: `number`

Defined in: [autk-map/src/frame-stats.ts:21](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/frame-stats.ts#L21)

Frames per second while frames are being rendered; 0 when fewer than two frames came in the last second.

***

### lastFrameCpuMs

> **lastFrameCpuMs**: `number`

Defined in: [autk-map/src/frame-stats.ts:17](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/frame-stats.ts#L17)

CPU milliseconds the last frame took to prepare and submit; 0 before the first frame.
