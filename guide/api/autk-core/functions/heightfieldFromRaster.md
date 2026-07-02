[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / heightfieldFromRaster

# Function: heightfieldFromRaster()

> **heightfieldFromRaster**(`collection`, `property`, `origin`): [`Heightfield`](../interfaces/Heightfield.md)

Defined in: [heightfield.ts:58](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/heightfield.ts#L58)

Builds a local-space heightfield from a raster feature collection.

The raster band is read from the first feature properties using `property`,
and the returned bounds subtract `origin` from the source bbox.

## Parameters

### collection

`FeatureCollection`\<`Geometry` \| `null`\>

Raster feature collection containing `bbox` and raster metadata.

### property

`string`

Dot-path to the raster band values in the first feature properties.

### origin

readonly `number`[]

World-space origin to subtract from the raster bbox.

## Returns

[`Heightfield`](../interfaces/Heightfield.md)

Heightfield with local bounds, cell sizes, min/max height, and sample data.

## Throws

If bbox, raster metadata, raster values, or finite heights are missing or invalid.

## Example

```ts
const heightfield = heightfieldFromRaster(collection, 'bands.elevation', origin);
console.log(heightfield.width, heightfield.bounds);
```
