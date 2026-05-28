[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerManager

# Class: LayerManager

Defined in: [autk-map/src/layer-manager.ts:38](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L38)

Manages all map layers as a single ordered list.

`LayerManager` stores every registered layer in render order, computes the
shared local origin from the first loaded collection, and assigns z-indices
according to the map's layering rules. Base OSM layers occupy fixed slots,
dynamic layers are ordered by insertion, and buildings are always rendered
last.

## Constructors

### Constructor

> **new LayerManager**(): `LayerManager`

#### Returns

`LayerManager`

## Accessors

### hasOrigin

#### Get Signature

> **get** **hasOrigin**(): `boolean`

Defined in: [autk-map/src/layer-manager.ts:59](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L59)

Indicates whether the shared scene origin has been initialized.

##### Returns

`boolean`

***

### layers

#### Get Signature

> **get** **layers**(): [`Layer`](Layer.md)[]

Defined in: [autk-map/src/layer-manager.ts:48](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L48)

Registered layers sorted by render z-index.

##### Returns

[`Layer`](Layer.md)[]

***

### origin

#### Get Signature

> **get** **origin**(): `number`[]

Defined in: [autk-map/src/layer-manager.ts:51](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L51)

World-space origin derived from the current bounding box center.

##### Returns

`number`[]

## Methods

### addLayer()

> **addLayer**(`layerInfo`, `layerRender`, `layerData`): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/layer-manager.ts:81](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L81)

Creates, registers, and reorders a layer based on `layerInfo.typeLayer`.

#### Parameters

##### layerInfo

[`LayerInfo`](../interfaces/LayerInfo.md)

Layer identity and type metadata.

##### layerRender

[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)

Initial render configuration.

##### layerData

[`LayerData`](../interfaces/LayerData.md)

Geometry and auxiliary layer payload.

#### Returns

[`Layer`](Layer.md) \| `null`

The created layer, or `null` if a layer with the same id is already registered.

#### Throws

Never throws. Duplicate ids log an error and return `null`.

***

### computeZindex()

> **computeZindex**(`layerType`): `number`

Defined in: [autk-map/src/layer-manager.ts:142](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L142)

Returns a preliminary z-index placeholder for a layer type.

#### Parameters

##### layerType

`LayerType`

Layer type to place in the render stack.

#### Returns

`number`

The fixed OSM base-slot index, or `0` as a placeholder.

#### Throws

Never throws.

***

### initializeOrigin()

> **initializeOrigin**(`collection`): `void`

Defined in: [autk-map/src/layer-manager.ts:68](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L68)

Computes the shared scene origin from the provided collection.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry` \| `null`\>

Source feature collection.

#### Returns

`void`

Nothing. Updates the manager's shared origin in place.

#### Throws

Never throws.

***

### removeLayerById()

> **removeLayerById**(`layerId`): `void`

Defined in: [autk-map/src/layer-manager.ts:112](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L112)

Removes the layer matching `layerId` and recomputes dynamic z-order.

#### Parameters

##### layerId

`string`

Layer identifier to remove.

#### Returns

`void`

Nothing. Unknown ids are silently ignored.

#### Throws

Never throws.

***

### searchByLayerId()

> **searchByLayerId**(`layerId`): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/layer-manager.ts:131](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/layer-manager.ts#L131)

Returns the layer with the given `layerId`, or `null` if not found.

#### Parameters

##### layerId

`string`

Layer identifier to search for.

#### Returns

[`Layer`](Layer.md) \| `null`

The matching layer instance, or `null`.

#### Throws

Never throws.
