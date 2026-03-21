[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / MouseEvents

# Class: MouseEvents

Defined in: [mouse-events.ts:8](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L8)

MouseEvents class handles mouse interactions with the map.
It allows for panning, zooming, and picking features on the map.

## Constructors

### Constructor

> **new MouseEvents**(`map`): `MouseEvents`

Defined in: [mouse-events.ts:33](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L33)

Constructor for MouseEvents

#### Parameters

##### map

[`AutkMap`](AutkMap.md)

The map instance

#### Returns

`MouseEvents`

## Methods

### bindEvents()

> **bindEvents**(): `void`

Defined in: [mouse-events.ts:43](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L43)

Mouse events binding function

#### Returns

`void`

***

### contextMenu()

> **contextMenu**(`event`): `void`

Defined in: [mouse-events.ts:58](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L58)

Handles mouse right click event

#### Parameters

##### event

`MouseEvent`

The fired event

#### Returns

`void`

***

### mouseDoubleClick()

> **mouseDoubleClick**(`event`): `void`

Defined in: [mouse-events.ts:145](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L145)

Handles mouse double click event

#### Parameters

##### event

`MouseEvent`

The fired event

#### Returns

`void`

***

### mouseDown()

> **mouseDown**(`event`): `void`

Defined in: [mouse-events.ts:67](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L67)

Handles mouse down event

#### Parameters

##### event

`MouseEvent`

The fired event

#### Returns

`void`

***

### mouseMove()

> **mouseMove**(`event`): `void`

Defined in: [mouse-events.ts:83](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L83)

Handles mouse move event

#### Parameters

##### event

`MouseEvent`

The fired event

#### Returns

`void`

***

### mouseUp()

> **mouseUp**(`event`): `void`

Defined in: [mouse-events.ts:112](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L112)

Handles mouse up event

#### Parameters

##### event

`MouseEvent`

The fired event

#### Returns

`void`

***

### mouseWheel()

> **mouseWheel**(`event`): `void`

Defined in: [mouse-events.ts:125](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/mouse-events.ts#L125)

Handles mouse down event

#### Parameters

##### event

`WheelEvent`

The fired event

#### Returns

`void`
