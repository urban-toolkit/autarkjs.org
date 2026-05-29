[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TransferContext

# Interface: TransferContext

Defined in: [transfer-function.ts:59](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L59)

Precomputed transfer-function context for efficient per-value alpha mapping.

## Properties

### config

> **config**: [`RequiredTransferFunction`](../type-aliases/RequiredTransferFunction.md)

Defined in: [transfer-function.ts:71](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L71)

Fully resolved transfer-function configuration used during evaluation.

***

### max

> **max**: `number`

Defined in: [transfer-function.ts:63](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L63)

Maximum scalar value found among valid source values.

***

### maxAbsDistance

> **maxAbsDistance**: `number`

Defined in: [transfer-function.ts:67](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L67)

Maximum absolute distance from `config.zeroCenter`.

***

### min

> **min**: `number`

Defined in: [transfer-function.ts:61](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L61)

Minimum scalar value found among valid source values.

***

### range

> **range**: `number`

Defined in: [transfer-function.ts:65](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L65)

Difference between `max` and `min`.

***

### validCount

> **validCount**: `number`

Defined in: [transfer-function.ts:69](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/transfer-function.ts#L69)

Number of valid scalar values used to build the context.
