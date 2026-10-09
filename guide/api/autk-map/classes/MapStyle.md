[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / MapStyle

# Class: MapStyle

Defined in: [autk-map/src/map-style.ts:63](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L63)

Instance-owned map style state and semantic color resolver.

`MapStyle` stores the active semantic style for one map, along with related
colors such as highlight and invalid-value fallbacks. Built-in and custom
styles are validated before they become active.

## Example

```ts
const style = new MapStyle('apple');
style.setPredefinedStyle('light');
const roads = style.getColor('roads');
```

## Constructors

### Constructor

> **new MapStyle**(`style?`): `MapStyle`

Defined in: [autk-map/src/map-style.ts:96](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L96)

Creates a style state initialized from a built-in preset.

#### Parameters

##### style?

`string` = `MapStyle._defaultStyleId`

Initial built-in style id. Unknown ids fall back to `apple`.

#### Returns

`MapStyle`

#### Throws

Never throws.

#### Example

```ts
const style = new MapStyle('apple');
```

## Accessors

### availableStyles

#### Get Signature

> **get** **availableStyles**(): [`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

Defined in: [autk-map/src/map-style.ts:115](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L115)

Returns the list of built-in preset ids.

##### Returns

[`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

***

### currentStyle

#### Get Signature

> **get** **currentStyle**(): `string`

Defined in: [autk-map/src/map-style.ts:110](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L110)

Returns the identifier of the currently active style.

Built-in presets return their preset id. Styles applied through
`setCustomStyle()` report `custom`.

##### Returns

`string`

Active style identifier.

***

### availableStyles

#### Get Signature

> **get** `static` **availableStyles**(): [`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

Defined in: [autk-map/src/map-style.ts:120](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L120)

Returns the list of built-in preset ids.

##### Returns

[`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

## Methods

### getColor()

> **getColor**(`type`): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:133](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L133)

Returns the feature color for a style key, falling back to polygons color.

#### Parameters

##### type

`string`

Semantic style key to resolve.

#### Returns

`ColorRGB`

RGB color for the requested key.

#### Throws

Never throws.

#### Example

```ts
const roadsColor = style.getColor('roads');
```

***

### getHighlightColor()

> **getHighlightColor**(): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:202](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L202)

Returns the current highlight color.

#### Returns

`ColorRGB`

RGB highlight color.

#### Throws

Never throws.

***

### getInvalidValueColor()

> **getInvalidValueColor**(): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:147](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L147)

Returns the color used for invalid thematic values.

#### Returns

`ColorRGB`

RGB fallback color.

#### Throws

Never throws.

***

### setChangeListener()

> **setChangeListener**(`listener`): `void`

Defined in: [autk-map/src/map-style.ts:161](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L161)

Registers the callback run after the style changes.

`AutkMap` uses it to schedule a frame in on-demand mode. Pass `null` to
remove the callback.

#### Parameters

##### listener

(() => `void`) \| `null`

Callback run after each style change, or `null`.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

***

### setCustomStyle()

> **setCustomStyle**(`style`): `void`

Defined in: [autk-map/src/map-style.ts:190](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L190)

Applies a runtime custom style after validation.

#### Parameters

##### style

[`MapStyleShape`](../interfaces/MapStyleShape.md)

Style object with all required semantic color keys.

#### Returns

`void`

Nothing. The style id becomes `custom`.

#### Throws

If the style is missing required keys or has invalid hex color values.

#### Example

```ts
style.setCustomStyle({ background: '#fff', surface: '#eee', parks: '#cfc', water: '#bdf', roads: '#ddd', buildings: '#ccc', points: '#555', polylines: '#777', polygons: '#999' });
```

***

### setHighlightColor()

> **setHighlightColor**(`color`): `void`

Defined in: [autk-map/src/map-style.ts:213](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L213)

Sets the highlight color.

#### Parameters

##### color

`` `#${string}` ``

New highlight color in hex format.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

***

### setInvalidValueColor()

> **setInvalidValueColor**(`color`): `void`

Defined in: [autk-map/src/map-style.ts:225](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L225)

Sets the color used for invalid thematic values.

#### Parameters

##### color

`` `#${string}` ``

New fallback color for invalid thematic values.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

***

### setPredefinedStyle()

> **setPredefinedStyle**(`style`): `void`

Defined in: [autk-map/src/map-style.ts:174](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/map-style.ts#L174)

Applies one of the built-in map style presets.

#### Parameters

##### style

`string`

Preset identifier. Unknown ids fall back to `apple`.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

#### Example

```ts
style.setPredefinedStyle('light');
```
