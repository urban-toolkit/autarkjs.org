[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / valueAtPath

# Function: valueAtPath()

> **valueAtPath**(`item`, `path`): `unknown`

Defined in: [utils-data.ts:26](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-core/src/utils-data.ts#L26)

Resolves a dot-delimited property path, including literal dotted leaf keys.

Fully traversable nested paths take precedence. If traversal fails, an own key
may match the remaining suffix, such as `shadows.jun` in spatial-join output.

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
valueAtPath({ sjoin: { avg: { 'shadows.jun': 12 } } }, 'sjoin.avg.shadows.jun'); // 12
```
