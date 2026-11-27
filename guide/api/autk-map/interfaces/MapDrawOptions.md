# Interface: MapDrawOptions

Defined in: [autk-map/src/api.ts:342](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L342)

Options for starting map rendering with `AutkMap.draw`.

By default the map draws once and then only when something changes.
Set `onDemand: false` or provide `fps` to use a continuous loop.

## Properties

### fps?

> `optional` **fps?**: `number`

Defined in: [autk-map/src/api.ts:348](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L348)

Target frames per second of the continuous loop (default `60`).

Pass `0` to render as fast as possible. Ignored when `onDemand` is `true`.

***

### onDemand?

> `optional` **onDemand?**: `boolean`

Defined in: [autk-map/src/api.ts:358](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L358)

Draws only when the picture changes (default `true` unless `fps` is provided).

The map then requests a frame itself after every change it can observe:
camera navigation and resizing, layer loads, updates and removals, style
changes, picking and terrain changes. Changes made in the same frame are
drawn once. Direct mutations require `AutkMap.requestRender()` and,
for cached uniforms or CPU buffers, the corresponding layer dirty mark.
