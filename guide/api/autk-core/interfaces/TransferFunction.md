[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TransferFunction

# Interface: TransferFunction

Defined in: [transfer-function.ts:17](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L17)

Configures how scalar values map to opacity.

The active mode determines which values receive higher opacity after the
input values are normalized against the current transfer context.

## Properties

### gamma?

> `optional` **gamma?**: `number`

Defined in: [transfer-function.ts:31](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L31)

Curve shaping factor; values `<= 0` are clamped to a tiny positive exponent at evaluation time.

***

### mode?

> `optional` **mode?**: `"linear"` \| `"near-zero"` \| `"far-zero"`

Defined in: [transfer-function.ts:25](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L25)

Opacity mapping mode.

- `near-zero`: values closer to `zeroCenter` are more opaque.
- `far-zero`: values farther from `zeroCenter` are more opaque.
- `linear`: opacity increases monotonically across the dataset range.

***

### opacityMax?

> `optional` **opacityMax?**: `number`

Defined in: [transfer-function.ts:29](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L29)

Upper bound for output opacity in `[0, 1]`.

***

### opacityMin?

> `optional` **opacityMin?**: `number`

Defined in: [transfer-function.ts:27](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L27)

Lower bound for output opacity in `[0, 1]`.

***

### zeroCenter?

> `optional` **zeroCenter?**: `number`

Defined in: [transfer-function.ts:33](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L33)

Reference center used by zero-distance modes (default `0`).
