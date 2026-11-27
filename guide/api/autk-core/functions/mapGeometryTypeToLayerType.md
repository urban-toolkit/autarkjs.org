# Function: mapGeometryTypeToLayerType()

> **mapGeometryTypeToLayerType**(`geometryType`): `"points"` \| `"polygons"` \| `"polylines"`

Defined in: [utils-layer.ts:48](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/utils-layer.ts#L48)

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
