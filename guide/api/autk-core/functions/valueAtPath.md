[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / valueAtPath

# Function: valueAtPath()

> **valueAtPath**(`item`, `path`): `unknown`

Defined in: [utils-data.ts:22](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/utils-data.ts#L22)

Resolves a dot-delimited property path from an unknown value.

## Parameters

### item

`unknown`

Source value to traverse.

### path

`string`

Dot-delimited property path, for example `properties.area`.

## Returns

`unknown`

The resolved nested value, or `undefined` when the path cannot be
fully resolved.

## Throws

Never throws.

## Example

```ts
valueAtPath({ a: { b: 42 } }, 'a.b');  // 42
valueAtPath({ a: null }, 'a.b');       // undefined
```
