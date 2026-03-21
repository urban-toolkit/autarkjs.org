[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / MapStyle

# Class: MapStyle

Defined in: [map-style.ts:9](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L9)

## Constructors

### Constructor

> **new MapStyle**(): `MapStyle`

#### Returns

`MapStyle`

## Properties

### \_current

> `protected` `static` **\_current**: [`IMapStyle`](../interfaces/IMapStyle.md) = `MapStyle._default`

Defined in: [map-style.ts:37](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L37)

Current map style

***

### \_currentStyle

> `protected` `static` **\_currentStyle**: `string` = `'default'`

Defined in: [map-style.ts:41](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L41)

Current map style id

***

### \_default

> `protected` `static` **\_default**: [`IMapStyle`](../interfaces/IMapStyle.md)

Defined in: [map-style.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L13)

Default map style

***

### \_highlight

> `protected` `static` **\_highlight**: `` `#${string}` `` = `'#5dade2'`

Defined in: [map-style.ts:32](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L32)

Highlight color

***

### \_notFound

> `protected` `static` **\_notFound**: `` `#${string}` `` = `'#FFFFFF'`

Defined in: [map-style.ts:28](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L28)

Not found color

## Accessors

### currentStyle

#### Get Signature

> **get** `static` **currentStyle**(): `string`

Defined in: [map-style.ts:47](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L47)

Get the current map style id

##### Returns

`string`

The current map style id

## Methods

### getColor()

> `static` **getColor**(`type`): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [map-style.ts:55](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L55)

Get the feature color

#### Parameters

##### type

keyof [`IMapStyle`](../interfaces/IMapStyle.md)

Feature type

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)

***

### getHighlightColor()

> `static` **getHighlightColor**(): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [map-style.ts:95](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L95)

Get the highlight color

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)

The highlight color

***

### setCustomStyle()

> `static` **setCustomStyle**(`style`): `void`

Defined in: [map-style.ts:87](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L87)

Set the feature color

#### Parameters

##### style

[`IMapStyle`](../interfaces/IMapStyle.md)

new map style json

#### Returns

`void`

***

### setPredefinedStyle()

> `static` **setPredefinedStyle**(`style`): `void`

Defined in: [map-style.ts:67](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-style.ts#L67)

Set the feature color

#### Parameters

##### style

`string`

new map style in id: #rrggbb format

#### Returns

`void`
