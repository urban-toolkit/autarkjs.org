[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / isNumericLike

# Function: isNumericLike()

> **isNumericLike**(`value`): `boolean`

Defined in: [utils-data.ts:41](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/utils-data.ts#L41)

Returns `true` when the value can be treated as a finite numeric scalar.

## Parameters

### value

`unknown`

Value to test for numeric scalar compatibility.

## Returns

`boolean`

`true` when the value is a finite number or numeric string.

## Throws

Never throws.

## Example

```ts
isNumericLike(42);       // true
isNumericLike('3.14');   // true
isNumericLike('');       // false
isNumericLike(NaN);      // false
```
