[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / bilerp

# Function: bilerp()

> **bilerp**(`a`, `b`, `c`, `d`, `u`, `v`): `number`

Defined in: [utils-math.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/utils-math.ts#L50)

Bilinear interpolation between four corner values.

`a` and `b` are the corners at `v = 0` (`u = 0` and `u = 1`), `c` and `d` those at `v = 1`.

## Parameters

### a

`number`

Value at `(0, 0)`.

### b

`number`

Value at `(1, 0)`.

### c

`number`

Value at `(0, 1)`.

### d

`number`

Value at `(1, 1)`.

### u

`number`

Weight along the first axis, `0` to `1`.

### v

`number`

Weight along the second axis, `0` to `1`.

## Returns

`number`

The interpolated value.

## Throws

Never throws.

## Example

```ts
bilerp(0, 10, 20, 30, 0.5, 0.5); // 15
```
