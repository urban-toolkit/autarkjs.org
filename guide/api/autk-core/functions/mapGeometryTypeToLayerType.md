[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / mapGeometryTypeToLayerType

# Function: mapGeometryTypeToLayerType()

> **mapGeometryTypeToLayerType**(`geometryType`): `"points"` \| `"polygons"` \| `"polylines"`

Defined in: [utils-layer.ts:47](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-core/src/utils-layer.ts#L47)

Maps a GeoJSON geometry type to the corresponding shared layer family.

## Parameters

### geometryType

`"Point"` \| `"MultiPoint"` \| `"LineString"` \| `"MultiLineString"` \| `"Polygon"` \| `"MultiPolygon"` \| `"GeometryCollection"`

GeoJSON geometry type to classify.

## Returns

`"points"` \| `"polygons"` \| `"polylines"`

One of `points`, `polylines`, or `polygons`.

## Throws

Never throws.

## Example

```ts
mapGeometryTypeToLayerType('Polygon');  // 'polygons'
mapGeometryTypeToLayerType('Point');    // 'points'
```
