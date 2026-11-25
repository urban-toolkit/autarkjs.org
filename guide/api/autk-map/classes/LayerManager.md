[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerManager

# Class: LayerManager

Defined in: [autk-map/src/layer-manager.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L43)

Manages all map layers as a single ordered list.

`LayerManager` stores every registered layer in render order, computes the
shared local origin from the first loaded collection, and maintains the
default order by type and insertion. A custom order rearranges 2D layers;
buildings still render in a separate 3D pass.

## Constructors

### Constructor

> **new LayerManager**(): `LayerManager`

#### Returns

`LayerManager`

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`MapBounds`](../type-aliases/MapBounds.md) \| `undefined`

Defined in: [autk-map/src/layer-manager.ts:75](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L75)

World-space bounds `[minX, minY, maxX, maxY]` of the collection that set the origin, or `undefined` before one
is loaded or when it had no coordinates.

##### Returns

[`MapBounds`](../type-aliases/MapBounds.md) \| `undefined`

***

### hasOrigin

#### Get Signature

> **get** **hasOrigin**(): `boolean`

Defined in: [autk-map/src/layer-manager.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L69)

Indicates whether the shared scene origin has been initialized.

##### Returns

`boolean`

***

### layers

#### Get Signature

> **get** **layers**(): [`Layer`](Layer.md)[]

Defined in: [autk-map/src/layer-manager.ts:58](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L58)

Registered layers in the order they are drawn, bottom first.

##### Returns

[`Layer`](Layer.md)[]

***

### origin

#### Get Signature

> **get** **origin**(): `number`[]

Defined in: [autk-map/src/layer-manager.ts:61](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L61)

World-space origin derived from the current bounding box center.

##### Returns

`number`[]

## Methods

### addLayer()

> **addLayer**(`layerInfo`, `layerRender`, `layerData`): [`Layer`](Layer.md) \| `null`

Defined in: [autk-map/src/layer-manager.ts:99](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L99)

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

### addTileLayer()

> **addTileLayer**(`layerInfo`, `layerRender`, `options`): `TileLayer` \| `null`

Defined in: [autk-map/src/layer-manager.ts:126](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L126)

Adds a tile layer.

By default, tile layers sit below every other layer, in load order.

#### Parameters

##### layerInfo

[`LayerInfo`](../interfaces/LayerInfo.md)

Layer identity; `typeLayer` must be `'tiles'`.

##### layerRender

[`LayerRenderInfo`](../interfaces/LayerRenderInfo.md)

Initial render configuration.

##### options

`TileLayerOptions`

Tile source and tuning.

#### Returns

`TileLayer` \| `null`

The created layer, or `null` when the id is already used.

#### Throws

If the tile source is invalid.

***

### initializeOrigin()

> **initializeOrigin**(`collection`): `void`

Defined in: [autk-map/src/layer-manager.ts:84](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L84)

Computes the shared scene origin from the provided collection.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry` \| `null`\>

Source feature collection.

#### Returns

`void`

Nothing. Updates the manager's shared origin, and the bounds that go with it, in place.

#### Throws

Never throws.

***

### removeLayerById()

> **removeLayerById**(`layerId`): `void`

Defined in: [autk-map/src/layer-manager.ts:171](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L171)

Removes the layer matching `layerId` and rebuilds the stack.

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

Defined in: [autk-map/src/layer-manager.ts:190](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L190)

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

***

### setLayerOrder()

> **setLayerOrder**(`ids`): `void`

Defined in: [autk-map/src/layer-manager.ts:159](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L159)

Sets the order the layers are drawn in, bottom first.

The layers listed are drawn in this order, and the others keep their
order, with as few layers moved past others as can be: the rule is in
`applyLayerOrder`. Buildings are drawn with depth wherever they are, so
the order leaves them out. An id whose layer is not registered yet takes
its place when it is. An empty list returns to the order by type.

#### Parameters

##### ids

`string`[]

Layer ids, bottom first.

#### Returns

`void`

Nothing. Updates [layers](#layers).

#### Throws

Never throws.

***

### visibleAttribution()

> **visibleAttribution**(): [`TileCredit`](../interfaces/TileCredit.md)[]

Defined in: [autk-map/src/layer-manager.ts:200](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/layer-manager.ts#L200)

Credits of the tile layers that are drawn, without repeats. A hidden or
removed layer is no longer credited.

#### Returns

[`TileCredit`](../interfaces/TileCredit.md)[]

Credits in layer order.
