# Interface: UpdateColorMapParams

Defined in: [autk-map/src/api.ts:316](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L316)

Parameters for patching a layer's color-map configuration.

The provided object is treated as a partial patch and merged into the layer's
existing color-map state rather than replacing the full configuration.

## Properties

### colorMap

> **colorMap**: `ColorMapOptions`

Defined in: [autk-map/src/api.ts:320](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L320)

Partial color-map patch merged with the existing layer color-map state.
