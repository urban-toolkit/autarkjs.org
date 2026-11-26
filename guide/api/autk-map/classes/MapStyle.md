# Class: MapStyle

Defined in: [autk-map/src/map-style.ts:63](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L63)

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

Defined in: [autk-map/src/map-style.ts:98](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L98)

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

Defined in: [autk-map/src/map-style.ts:117](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L117)

Returns the list of built-in preset ids.

##### Returns

[`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

***

### currentStyle

#### Get Signature

> **get** **currentStyle**(): `string`

Defined in: [autk-map/src/map-style.ts:112](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L112)

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

Defined in: [autk-map/src/map-style.ts:122](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L122)

Returns the list of built-in preset ids.

##### Returns

[`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

## Methods

### getColor()

> **getColor**(`type`): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:135](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L135)

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

Defined in: [autk-map/src/map-style.ts:204](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L204)

Returns the current highlight color.

#### Returns

`ColorRGB`

RGB highlight color.

#### Throws

Never throws.

***

### getHoverColor()

> **getHoverColor**(): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:221](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L221)

Returns the hovered-feature color as RGB.

#### Returns

`ColorRGB`

***

### getInvalidValueColor()

> **getInvalidValueColor**(): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:149](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L149)

Returns the color used for invalid thematic values.

#### Returns

`ColorRGB`

RGB fallback color.

#### Throws

Never throws.

***

### setChangeListener()

> **setChangeListener**(`listener`): `void`

Defined in: [autk-map/src/map-style.ts:163](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L163)

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

Defined in: [autk-map/src/map-style.ts:192](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L192)

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

Defined in: [autk-map/src/map-style.ts:215](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L215)

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

### setHoverColor()

> **setHoverColor**(`color`): `void`

Defined in: [autk-map/src/map-style.ts:226](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L226)

Sets the hovered-feature color independently of the selection highlight.

#### Parameters

##### color

`` `#${string}` ``

#### Returns

`void`

***

### setInvalidValueColor()

> **setInvalidValueColor**(`color`): `void`

Defined in: [autk-map/src/map-style.ts:238](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L238)

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

Defined in: [autk-map/src/map-style.ts:176](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/map-style.ts#L176)

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
