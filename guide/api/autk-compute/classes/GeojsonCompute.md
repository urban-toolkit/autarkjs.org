[**autk-compute**](../globals.md)

***

[autk-compute](../globals.md) / GeojsonCompute

# Class: GeojsonCompute

Defined in: [geojson-compute.ts:5](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-compute/src/geojson/geojson-compute.ts#L5)

## Constructors

### Constructor

> **new GeojsonCompute**(): `GeojsonCompute`

Defined in: [geojson-compute.ts:8](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-compute/src/geojson/geojson-compute.ts#L8)

#### Returns

`GeojsonCompute`

## Methods

### computeFunctionIntoProperties()

> **computeFunctionIntoProperties**(`params`): `Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Defined in: [geojson-compute.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-compute/src/geojson/geojson-compute.ts#L18)

Executes a WGSL function on feature properties and adds the result to properties.compute[outputColumnName]

#### Parameters

##### params

`ComputeFunctionIntoPropertiesParams`

Parameters for the computation

#### Returns

`Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

`Promise<FeatureCollection>` - New FeatureCollection with computed values
