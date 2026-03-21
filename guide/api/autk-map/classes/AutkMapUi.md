[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / AutkMapUi

# Class: AutkMapUi

Defined in: [map-ui.ts:8](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L8)

## Constructors

### Constructor

> **new AutkMapUi**(`map`): `AutkMapUi`

Defined in: [map-ui.ts:17](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L17)

#### Parameters

##### map

[`AutkMap`](AutkMap.md)

#### Returns

`AutkMapUi`

## Properties

### \_activeLayer

> `protected` **\_activeLayer**: [`Layer`](Layer.md) \| `null` = `null`

Defined in: [map-ui.ts:11](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L11)

***

### \_legend

> `protected` **\_legend**: `HTMLDivElement` \| `null` = `null`

Defined in: [map-ui.ts:14](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L14)

***

### \_map

> `protected` **\_map**: [`AutkMap`](AutkMap.md)

Defined in: [map-ui.ts:9](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L9)

***

### \_menuIcon

> `protected` **\_menuIcon**: `HTMLDivElement` \| `null` = `null`

Defined in: [map-ui.ts:12](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L12)

***

### \_subMenu

> `protected` **\_subMenu**: `HTMLDivElement` \| `null` = `null`

Defined in: [map-ui.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L13)

***

### \_uiMargin

> `protected` **\_uiMargin**: `number` = `10`

Defined in: [map-ui.ts:10](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L10)

## Accessors

### activeLayer

#### Get Signature

> **get** **activeLayer**(): [`Layer`](Layer.md) \| `null`

Defined in: [map-ui.ts:23](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L23)

##### Returns

[`Layer`](Layer.md) \| `null`

#### Set Signature

> **set** **activeLayer**(`layer`): `void`

Defined in: [map-ui.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L24)

##### Parameters

###### layer

[`Layer`](Layer.md) \| `null`

##### Returns

`void`

***

### map

#### Get Signature

> **get** **map**(): [`AutkMap`](AutkMap.md)

Defined in: [map-ui.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L21)

##### Returns

[`AutkMap`](AutkMap.md)

#### Set Signature

> **set** **map**(`map`): `void`

Defined in: [map-ui.ts:22](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L22)

##### Parameters

###### map

[`AutkMap`](AutkMap.md)

##### Returns

`void`

## Methods

### buildActiveLayerDropdown()

> `protected` **buildActiveLayerDropdown**(): `void`

Defined in: [map-ui.ts:185](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L185)

#### Returns

`void`

***

### buildLegend()

> `protected` **buildLegend**(`width?`, `height?`): `void`

Defined in: [map-ui.ts:223](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L223)

#### Parameters

##### width?

`number` = `250`

##### height?

`number` = `80`

#### Returns

`void`

***

### buildLegendCheckbox()

> `protected` **buildLegendCheckbox**(): `void`

Defined in: [map-ui.ts:199](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L199)

#### Returns

`void`

***

### buildMenuIcon()

> `protected` **buildMenuIcon**(): `void`

Defined in: [map-ui.ts:121](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L121)

#### Returns

`void`

***

### buildSubMenu()

> `protected` **buildSubMenu**(): `void`

Defined in: [map-ui.ts:155](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L155)

#### Returns

`void`

***

### buildUi()

> **buildUi**(): `void`

Defined in: [map-ui.ts:75](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L75)

Build all UI elements once. Called from AutkMap.init().

#### Returns

`void`

***

### buildVisibleLayersDropdown()

> `protected` **buildVisibleLayersDropdown**(): `void`

Defined in: [map-ui.ts:171](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L171)

#### Returns

`void`

***

### changeActiveLayer()

> **changeActiveLayer**(`layer`): `void`

Defined in: [map-ui.ts:47](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L47)

#### Parameters

##### layer

[`Layer`](Layer.md) \| `null`

#### Returns

`void`

***

### handleResize()

> **handleResize**(): `void`

Defined in: [map-ui.ts:28](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L28)

#### Returns

`void`

***

### populateActiveLayersList()

> `protected` **populateActiveLayersList**(): `void`

Defined in: [map-ui.ts:257](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L257)

#### Returns

`void`

***

### populateVisibleLayersList()

> `protected` **populateVisibleLayersList**(): `void`

Defined in: [map-ui.ts:242](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L242)

#### Returns

`void`

***

### refreshLegend()

> **refreshLegend**(`layer`): `void`

Defined in: [map-ui.ts:89](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L89)

Called externally (e.g. from updateRenderInfoProperty) when isColorMap changes.
Updates the legend and checkbox to reflect the new state.

#### Parameters

##### layer

[`Layer`](Layer.md) \| `null`

#### Returns

`void`

***

### syncCheckbox()

> `protected` **syncCheckbox**(): `void`

Defined in: [map-ui.ts:100](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L100)

#### Returns

`void`

***

### syncLayerLists()

> `protected` **syncLayerLists**(): `void`

Defined in: [map-ui.ts:114](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L114)

#### Returns

`void`

***

### syncLegendVisibility()

> `protected` **syncLegendVisibility**(): `void`

Defined in: [map-ui.ts:107](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L107)

#### Returns

`void`

***

### updateLegendContent()

> `protected` **updateLegendContent**(`width?`, `height?`): `void`

Defined in: [map-ui.ts:295](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-ui.ts#L295)

#### Parameters

##### width?

`number` = `250`

##### height?

`number` = `80`

#### Returns

`void`
