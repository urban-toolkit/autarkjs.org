[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / isFeatureCollection

# Function: isFeatureCollection()

> **isFeatureCollection**(`data`): `data is FeatureCollection<Geometry, GeoJsonProperties>`

Defined in: [utils-geojson.ts:31](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/utils-geojson.ts#L31)

Type guard that checks whether a value is a GeoJSON FeatureCollection.

## Parameters

### data

`unknown`

value to test.

## Returns

`data is FeatureCollection<Geometry, GeoJsonProperties>`

`true` if the value has `type: 'FeatureCollection'` and a `features` array.

## Throws

Never throws.

## Example

```ts
isFeatureCollection({ type: 'FeatureCollection', features: [] }); // true
isFeatureCollection([{ name: 'x' }]); // false
```
