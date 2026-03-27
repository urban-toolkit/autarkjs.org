[**autk-map**](../index.md)

***

[autk-map](../globals.md) / AutkMap

# Class: AutkMap

Defined in: [main.ts:60](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L60)

The main autark map class.

`AutkMap` encapsulates the core logic for initializing and rendering a map on a given HTML canvas element.
It manages the camera, map rendering, map layers, and user interactions through keyboard, mouse, and map events.

## Example

```ts
const canvas = document.getElementById('map-canvas') as HTMLCanvasElement;
const boundingBox = /* { bounding box for the map } */ ;

const map = new AutkMap(canvas);
await map.init(boundingBox);

const geojsonData = { /* GeoJSON data */ };
map.loadGeoJsonLayer('my_data', LayerType.CUSTOM_FEATURES_LAYER, geojsonData);
```

## Constructors

### Constructor

> **new AutkMap**(`canvas`, `autoResize?`): `AutkMap`

Defined in: [main.ts:85](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L85)

Creates an instance of the AutkMap class.

#### Parameters

##### canvas

`HTMLCanvasElement`

The canvas element to render the map on

##### autoResize?

`boolean` = `true`

Whether to automatically resize the canvas on window resize

#### Returns

`AutkMap`

## Properties

### \_camera

> `protected` **\_camera**: [`Camera`](Camera.md)

Defined in: [main.ts:62](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L62)

The camera instance used for rendering the map

***

### \_canvas

> `protected` **\_canvas**: `HTMLCanvasElement`

Defined in: [main.ts:78](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L78)

The canvas element used for rendering the map

***

### \_keyEvents

> `protected` **\_keyEvents**: [`KeyEvents`](KeyEvents.md)

Defined in: [main.ts:69](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L69)

The key events handler for keyboard interactions

***

### \_layerManager

> `protected` **\_layerManager**: [`LayerManager`](LayerManager.md)

Defined in: [main.ts:66](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L66)

The layer manager instance used for managing map layers

***

### \_mapEvents

> `protected` **\_mapEvents**: [`MapEvents`](MapEvents.md)

Defined in: [main.ts:73](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L73)

The map events handler for map interactions

***

### \_mouseEvents

> `protected` **\_mouseEvents**: [`MouseEvents`](MouseEvents.md)

Defined in: [main.ts:71](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L71)

The mouse events handler for mouse interactions

***

### \_renderer

> `protected` **\_renderer**: [`Renderer`](Renderer.md)

Defined in: [main.ts:64](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L64)

The renderer instance used for rendering the map

***

### \_ui

> `protected` **\_ui**: [`AutkMapUi`](AutkMapUi.md)

Defined in: [main.ts:76](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L76)

The UI instance for managing the map's user interface

## Accessors

### boundingBox

#### Get Signature

> **get** **boundingBox**(): `BBox`

Defined in: [main.ts:177](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L177)

Gets the bounding box of the map.

##### Returns

`BBox`

The bounding box

#### Set Signature

> **set** **boundingBox**(`bbox`): `void`

Defined in: [main.ts:180](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L180)

##### Parameters

###### bbox

`BBox`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [main.ts:110](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L110)

Gets the camera instance used for rendering the map.

##### Returns

[`Camera`](Camera.md)

The camera instance

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [main.ts:118](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L118)

Sets the camera instance used for rendering the map.

##### Parameters

###### camera

[`Camera`](Camera.md)

The camera instance to set

##### Returns

`void`

***

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [main.ts:152](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L152)

Gets the canvas element used for rendering the map.

##### Returns

`HTMLCanvasElement`

The canvas element

***

### layerManager

#### Get Signature

> **get** **layerManager**(): [`LayerManager`](LayerManager.md)

Defined in: [main.ts:134](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L134)

Gets the layer manager instance used for managing map layers.

##### Returns

[`LayerManager`](LayerManager.md)

The layer manager instance

***

### mapEvents

#### Get Signature

> **get** **mapEvents**(): [`MapEvents`](MapEvents.md)

Defined in: [main.ts:143](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L143)

Gets the map events instance used for handling map interactions.

##### Returns

[`MapEvents`](MapEvents.md)

The map events instance

***

### origin

#### Get Signature

> **get** **origin**(): `number`[]

Defined in: [main.ts:169](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L169)

Gets the origin of the map, which is the center of the bounding box.

##### Returns

`number`[]

The origin coordinates [x, y]

***

### renderer

#### Get Signature

> **get** **renderer**(): [`Renderer`](Renderer.md)

Defined in: [main.ts:126](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L126)

Gets the renderer instance used for rendering the map.

##### Returns

[`Renderer`](Renderer.md)

The renderer instance

***

### ui

#### Get Signature

> **get** **ui**(): [`AutkMapUi`](AutkMapUi.md)

Defined in: [main.ts:160](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L160)

Gets the UI instance used for managing the map's user interface.

##### Returns

[`AutkMapUi`](AutkMapUi.md)

The UI instance

## Methods

### draw()

> **draw**(`fps?`): `void`

Defined in: [main.ts:490](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L490)

Starts the drawing loop.

#### Parameters

##### fps?

`number` = `60`

The frames per second to target.

#### Returns

`void`

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [main.ts:187](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L187)

Initializes the map.

#### Returns

`Promise`\<`void`\>

***

### loadGeoJsonLayer()

> **loadGeoJsonLayer**(`layerName`, `geojson`, `typeLayer?`): `void`

Defined in: [main.ts:220](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L220)

Loads a GeoJSON layer into the map.

This method creates a layer based on the provided GeoJSON data and adds it to the map's layer manager.
Supported OSM layer types include:
- AUTK_OSM_SURFACE
- AUTK_OSM_WATER
- AUTK_OSM_PARKS
- AUTK_OSM_ROADS
- AUTK_OSM_BUILDINGS

Custom layers can also be loaded with types:
- AUTK_GEO_POINTS
- AUTK_GEO_POLYLINES
- AUTK_GEO_POLYGONS
- AUTK_RASTER

#### Parameters

##### layerName

`string`

The name of the layer

##### geojson

`FeatureCollection`

The GeoJSON data to load

##### typeLayer?

[`LayerType`](../enumerations/LayerType.md) \| `null`

The type of the layer

#### Returns

`void`

***

### loadGeoTiffLayer()

> **loadGeoTiffLayer**(`layerName`, `geotiff`, `typeLayer?`, `getFnv`): `void`

Defined in: [main.ts:290](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L290)

Loads a GeoTIFF layer into the map.
This method creates a layer based on the provided GeoTIFF data and adds it to the map's layer manager.

#### Parameters

##### layerName

`string`

The name of the layer

##### geotiff

`FeatureCollection`

The GeoTIFF data to load

##### typeLayer?

[`LayerType`](../enumerations/LayerType.md) \| `null`

The type of the layer

##### getFnv

(`cell`) => `number`

Optional function to extract a numeric value from each raster cell.
              Use this when raster cells contain nested objects (e.g. from a spatial join).
              If omitted, cell values are used directly as numbers.

#### Returns

`void`

***

### updateGeoJsonLayerThematic()

> **updateGeoJsonLayerThematic**(`layerName`, `geojson`, `getFnv`, `groupById?`): `void`

Defined in: [main.ts:350](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L350)

Updates the thematic information of a layer based on a GeoJSON source.

This method extracts thematic values from the GeoJSON features using the provided function,
normalizes these values, and updates the layer's thematic data accordingly.

#### Parameters

##### layerName

`string`

The name of the layer to update

##### geojson

`FeatureCollection`

The GeoJSON data containing the features

##### getFnv

(`feature`) => `string` \| `number`

A function that extracts a numeric value from a GeoJSON feature

##### groupById?

`boolean` = `false`

Whether to group features by their 'building_id' property to ensure uniqueness

#### Returns

`void`

***

### updateGeoTiffLayerData()

> **updateGeoTiffLayerData**(`layerName`, `geotiff`, `getFnv`): `void`

Defined in: [main.ts:317](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L317)

Updates the raster values of an existing GeoTiff layer in place.

Use this instead of removing and re-adding the layer when only the raster
values change (e.g. switching the month in a heatmap). The geometry and
render settings of the layer are preserved.

#### Parameters

##### layerName

`string`

The name of the existing raster layer

##### geotiff

`FeatureCollection`

The new GeoTIFF FeatureCollection

##### getFnv

(`cell`) => `number`

Function to extract a numeric value from each raster cell

#### Returns

`void`

***

### updateLayerGeometry()

> **updateLayerGeometry**(`layerName`, `layerGeometry`): `void`

Defined in: [main.ts:433](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L433)

Updates the geometry of a layer.

#### Parameters

##### layerName

`string`

The name of the layer

##### layerGeometry

[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[]

The geometry data to update

#### Returns

`void`

***

### updateLayerThematic()

> **updateLayerThematic**(`layerName`, `layerThematic`): `void`

Defined in: [main.ts:418](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L418)

Updates the thematic information of a layer.

#### Parameters

##### layerName

`string`

The name of the layer

##### layerThematic

[`ILayerThematic`](../interfaces/ILayerThematic.md)[]

The thematic information to update

#### Returns

`void`

***

### updateRenderInfoProperty()

> **updateRenderInfoProperty**(`layerName`, `property`, `value`): `void`

Defined in: [main.ts:449](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/main.ts#L449)

Updates the render information of a layer.

#### Parameters

##### layerName

`string`

The name of the layer

##### property

keyof [`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The property to update

##### value

`unknown`

The new value for the property

#### Returns

`void`
