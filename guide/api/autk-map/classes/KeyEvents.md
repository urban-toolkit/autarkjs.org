[**autk-map**](../index.md)

***

[autk-map](../globals.md) / KeyEvents

# Class: KeyEvents

Defined in: [key-events.ts:8](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/key-events.ts#L8)

KeyEvents class handles keyboard interactions with the map.
It allows toggling layer properties and changing map styles using keyboard shortcuts.

## Constructors

### Constructor

> **new KeyEvents**(`map`): `KeyEvents`

Defined in: [key-events.ts:19](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/key-events.ts#L19)

Constructor for KeyEvents

#### Parameters

##### map

[`AutkMap`](AutkMap.md)

The map instance

#### Returns

`KeyEvents`

## Methods

### bindEvents()

> **bindEvents**(): `void`

Defined in: [key-events.ts:26](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/key-events.ts#L26)

Key events binding function

#### Returns

`void`

***

### keyUp()

> **keyUp**(`event`): `Promise`\<`void`\>

Defined in: [key-events.ts:35](https://github.com/urban-toolkit/autark/blob/5468c9f1ec2214c4620bc007aaa7457c8a34ad4c/autk-map/src/key-events.ts#L35)

Handles key up event

#### Parameters

##### event

`KeyboardEvent`

The fired event

#### Returns

`Promise`\<`void`\>
