[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / isNumericLike

# Function: isNumericLike()

> **isNumericLike**(`value`): `boolean`

Defined in: [utils-data.ts:41](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-core/src/utils-data.ts#L41)

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
