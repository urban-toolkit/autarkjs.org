[**autk-compute**](../index.md)

***

[autk-compute](../globals.md) / GeojsonCompute

# Class: GeojsonCompute

Defined in: [geojson-compute.ts:5](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-compute/src/geojson/geojson-compute.ts#L5)

## Constructors

### Constructor

> **new GeojsonCompute**(): `GeojsonCompute`

Defined in: [geojson-compute.ts:8](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-compute/src/geojson/geojson-compute.ts#L8)

#### Returns

`GeojsonCompute`

## Methods

### computeFunctionIntoProperties()

> **computeFunctionIntoProperties**(`params`): `Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Defined in: [geojson-compute.ts:18](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-compute/src/geojson/geojson-compute.ts#L18)

Executes a WGSL function on feature properties and adds the result to properties.compute[outputColumnName]

#### Parameters

##### params

`ComputeFunctionIntoPropertiesParams`

Parameters for the computation

#### Returns

`Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

`Promise<FeatureCollection>` - New FeatureCollection with computed values
