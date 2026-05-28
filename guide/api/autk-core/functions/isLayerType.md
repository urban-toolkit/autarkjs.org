[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / isLayerType

# Function: isLayerType()

> **isLayerType**(`value`): `value is LayerType`

Defined in: [utils-layer.ts:25](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-core/src/utils-layer.ts#L25)

Type guard checking whether a string is a supported shared layer type.

## Parameters

### value

`string`

Candidate layer identifier to validate.

## Returns

`value is LayerType`

`true` when `value` is a recognized `LayerType`, narrowing the type.

## Throws

Never throws.

## Example

```ts
if (isLayerType(userInput)) {
  // userInput is now typed as LayerType
}
```
