# Type Alias: MapBounds

> **MapBounds** = \[`minX`: `number`, `minY`: `number`, `maxX`: `number`, `maxY`: `number`\]

Defined in: [autk-map/src/api.ts:67](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L67)

A rectangle `[minX, minY, maxX, maxY]` in the coordinate system of the data the map was given (the workspace
coordinate system, in meters, for data from `AutkDb`), not relative to the map origin.
