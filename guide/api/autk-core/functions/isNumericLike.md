[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / isNumericLike

# Function: isNumericLike()

> **isNumericLike**(`value`): `boolean`

Defined in: [utils-data.ts:62](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-core/src/utils-data.ts#L62)

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
