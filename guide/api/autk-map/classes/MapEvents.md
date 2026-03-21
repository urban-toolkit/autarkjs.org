[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / MapEvents

# Class: MapEvents

Defined in: [map-events.ts:7](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-events.ts#L7)

Class to handle map events.
It allows adding, removing, and emitting events for map interactions.

## Constructors

### Constructor

> **new MapEvents**(`events`): `MapEvents`

Defined in: [map-events.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-events.ts#L18)

Constructor for MapEvents

#### Parameters

##### events

[`PICK`](../enumerations/MapEvent.md#pick)[]

The list of map events to initialize.

#### Returns

`MapEvents`

## Methods

### addEventListener()

> **addEventListener**(`event`, `listener`): `void`

Defined in: [map-events.ts:29](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-events.ts#L29)

Adds an event listener for a specific map event.

#### Parameters

##### event

`string`

The name of the event to listen for.

##### listener

[`MapEventListener`](../type-aliases/MapEventListener.md)

The listener function to call when the event is emitted.

#### Returns

`void`

***

### emit()

> **emit**(`event`, `selection`, `layerId`): `void`

Defined in: [map-events.ts:52](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-events.ts#L52)

Emits an event with the provided selection and layer ID.

#### Parameters

##### event

`string`

The name of the event to emit.

##### selection

`number`[]

The selection data to pass to the listeners.

##### layerId

`string`

The ID of the layer associated with the event.

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**(`event`, `listener`): `void`

Defined in: [map-events.ts:40](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/map-events.ts#L40)

Removes an event listener for a specific map event.

#### Parameters

##### event

`string`

The name of the event to stop listening for.

##### listener

[`MapEventListener`](../type-aliases/MapEventListener.md)

The listener function to remove.

#### Returns

`void`
