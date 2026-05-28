[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / MapStyle

# Class: MapStyle

Defined in: [autk-map/src/map-style.ts:77](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L77)

Static registry and accessor for map style presets and shared UI colors.

`MapStyle` stores the active semantic style used by the map renderer, along
with a small set of related shared colors such as highlight and invalid-value
fallbacks. It also validates built-in and custom style definitions before
they become active, ensuring all required semantic keys are present and use
supported hex color formats.

## Example

```ts
MapStyle.setPredefinedStyle('light');

const roads = MapStyle.getColor('roads');

MapStyle.setCustomStyle({
  background: '#ffffff',
  surface: '#f2f2f2',
  parks: '#cfe8c8',
  water: '#b9dcff',
  roads: '#d0d0d0',
  buildings: '#c8c8c8',
  points: '#555555',
  polylines: '#777777',
  polygons: '#999999',
});
```

## Constructors

### Constructor

> **new MapStyle**(): `MapStyle`

#### Returns

`MapStyle`

## Accessors

### availableStyles

#### Get Signature

> **get** `static` **availableStyles**(): [`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

Defined in: [autk-map/src/map-style.ts:113](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L113)

Returns the list of built-in preset ids.

##### Returns

[`MapStylePresetId`](../type-aliases/MapStylePresetId.md)[]

***

### currentStyle

#### Get Signature

> **get** `static` **currentStyle**(): `string`

Defined in: [autk-map/src/map-style.ts:108](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L108)

Returns the identifier of the currently active style.

Built-in presets return their preset id. Styles applied through
`setCustomStyle()` report `custom`.

##### Returns

`string`

Active style identifier.

## Methods

### getColor()

> `static` **getColor**(`type`): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:126](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L126)

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
const roadsColor = MapStyle.getColor('roads');
```

***

### getHighlightColor()

> `static` **getHighlightColor**(): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:180](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L180)

Returns the current highlight color.

#### Returns

`ColorRGB`

RGB highlight color.

#### Throws

Never throws.

***

### getInvalidValueColor()

> `static` **getInvalidValueColor**(): `ColorRGB`

Defined in: [autk-map/src/map-style.ts:141](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L141)

Returns the color used for invalid thematic values.

#### Returns

`ColorRGB`

RGB fallback color.

#### Throws

Never throws.

***

### setCustomStyle()

> `static` **setCustomStyle**(`style`): `void`

Defined in: [autk-map/src/map-style.ts:169](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L169)

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
MapStyle.setCustomStyle({ background: '#fff', surface: '#eee', parks: '#cfc', water: '#bdf', roads: '#ddd', buildings: '#ccc', points: '#555', polylines: '#777', polygons: '#999' });
```

***

### setHighlightColor()

> `static` **setHighlightColor**(`color`): `void`

Defined in: [autk-map/src/map-style.ts:191](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L191)

Sets the highlight color (no validation).

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

> `static` **setInvalidValueColor**(`color`): `void`

Defined in: [autk-map/src/map-style.ts:202](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L202)

Sets the color used for invalid thematic values (no validation).

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

> `static` **setPredefinedStyle**(`style`): `void`

Defined in: [autk-map/src/map-style.ts:154](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/map-style.ts#L154)

Applies one of the built-in map style presets.

#### Parameters

##### style

`string`

Preset identifier. Unknown ids fall back to `default`.

#### Returns

`void`

Nothing.

#### Throws

Never throws.

#### Example

```ts
MapStyle.setPredefinedStyle('light');
```
