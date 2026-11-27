# Function: clamp()

> **clamp**(`value`, `min`, `max`): `number`

Defined in: [utils-math.ts:30](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/utils-math.ts#L30)

Limits a value to a range.

## Parameters

### value

`number`

Value to limit.

### min

`number`

Lower bound.

### max

`number`

Upper bound, not below `min`.

## Returns

`number`

`value`, or the nearest bound when it lies outside.

## Throws

Never throws.

## Example

```ts
clamp(1.4, 0, 1); // 1
```
