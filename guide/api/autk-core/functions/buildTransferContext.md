[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / buildTransferContext

# Function: buildTransferContext()

> **buildTransferContext**(`values`, `config?`): [`TransferContext`](../interfaces/TransferContext.md)

Defined in: [transfer-function.ts:91](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/transfer-function.ts#L91)

Builds a transfer-function context from valid scalar values.

The returned context caches dataset bounds and the resolved configuration so
repeated alpha evaluation does not need to recompute them. When `values` is
empty, the context is zeroed and `validCount` is `0`; callers can still use it
for evaluation, but the output will fall back to the configured opacity range
for the selected mode.

## Parameters

### values

`number`[]

Valid scalar values used to derive dataset statistics.

### config?

[`TransferFunction`](../interfaces/TransferFunction.md)

Optional transfer-function overrides applied on top of defaults.

## Returns

[`TransferContext`](../interfaces/TransferContext.md)

Precomputed transfer-function context for repeated alpha evaluation.

## Throws

Never throws. Empty input produces a zeroed context.

## Example

```ts
const ctx = buildTransferContext([0.1, 0.5, 0.3, 0.9], { mode: 'linear' });
// ctx.min → 0.1, ctx.max → 0.9, ctx.config.mode → 'linear'
```
