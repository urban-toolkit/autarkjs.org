[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeAlphaByte

# Function: computeAlphaByte()

> **computeAlphaByte**(`value`, `context`): `number`

Defined in: [transfer-function.ts:146](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L146)

Computes alpha as an 8-bit channel value for a scalar value.

`NaN` values are always mapped to `0` (transparent). The mapping uses the
precomputed context bounds and the resolved transfer-function configuration,
applies gamma shaping when `config.gamma` differs from `1`, and clamps the
result to the byte range `[0, 255]`.

## Parameters

### value

`number`

Scalar value to map into an alpha byte.

### context

[`TransferContext`](../interfaces/TransferContext.md)

Precomputed transfer-function context from `buildTransferContext`.

## Returns

`number`

Alpha channel value in the integer range `[0, 255]`.

## Throws

Never throws. Returns `0` for `NaN` input.

## Example

```ts
const ctx = buildTransferContext([0, 100], { mode: 'linear' });
computeAlphaByte(50, ctx);  // → 128 (midpoint)
computeAlphaByte(NaN, ctx); // → 0   (transparent)
```
