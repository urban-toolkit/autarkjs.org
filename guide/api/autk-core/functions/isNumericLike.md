# Function: isNumericLike()

> **isNumericLike**(`value`): `boolean`

Defined in: [utils-data.ts:62](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/utils-data.ts#L62)

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
