[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / Heightfield

# Interface: Heightfield

Defined in: [heightfield.ts:20](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L20)

Local-space grid of scalar height samples.

The grid is stored row-major in `data` and aligned to `bounds`, whose
coordinates are already shifted by the supplied map origin.

## Properties

### bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

Defined in: [heightfield.ts:40](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L40)

Local-space bounds as `[minX, minY, maxX, maxY]`.

***

### cellSizeX

> **cellSizeX**: `number`

Defined in: [heightfield.ts:30](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L30)

Local-space distance between adjacent samples along X.

***

### cellSizeY

> **cellSizeY**: `number`

Defined in: [heightfield.ts:32](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L32)

Local-space distance between adjacent samples along Y.

***

### data

> **data**: `Float32Array`

Defined in: [heightfield.ts:38](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L38)

Row-major scalar height samples. Non-finite source values are replaced with `0`.

***

### height

> **height**: `number`

Defined in: [heightfield.ts:24](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L24)

Number of grid samples along the Y axis.

***

### maxHeight

> **maxHeight**: `number`

Defined in: [heightfield.ts:36](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L36)

Largest finite height value found in the source data.

***

### minHeight

> **minHeight**: `number`

Defined in: [heightfield.ts:34](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L34)

Smallest finite height value found in the source data.

***

### originX

> **originX**: `number`

Defined in: [heightfield.ts:26](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L26)

Local-space X coordinate of the first grid sample.

***

### originY

> **originY**: `number`

Defined in: [heightfield.ts:28](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L28)

Local-space Y coordinate of the first grid sample.

***

### width

> **width**: `number`

Defined in: [heightfield.ts:22](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L22)

Number of grid samples along the X axis.
