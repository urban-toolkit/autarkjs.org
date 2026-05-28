[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / EventEmitter

# Class: EventEmitter\<Events\>

Defined in: autk-core/dist/src/event-emitter.d.ts:36

Type-safe event emitter keyed by an event record.

Each event name maps to a specific payload type, and listeners are stored per
event key. Listener removal requires the original function reference.

## Example

```ts
type MapEvents = { pick: { selection: number[]; layerId: string } };
const emitter = new EventEmitter<MapEvents>();
emitter.on('pick', ({ selection, layerId }) => console.log(selection, layerId));
emitter.emit('pick', { selection: [1, 2], layerId: 'buildings' });
```

## Type Parameters

### Events

`Events` *extends* `Record`\<`string`, `unknown`\>

Record mapping event names to their payload types.

## Constructors

### Constructor

> **new EventEmitter**\<`Events`\>(): `EventEmitter`\<`Events`\>

#### Returns

`EventEmitter`\<`Events`\>

## Methods

### emit()

> **emit**\<`K`\>(`event`, `payload`): `void`

Defined in: autk-core/dist/src/event-emitter.d.ts:71

Dispatches an event payload to all registered listeners synchronously.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

Event name to dispatch.

##### payload

`Events`\[`K`\]

Payload passed to each listener.

#### Returns

`void`

#### Throws

Never throws. Listener errors propagate to the caller.

#### Example

```ts
emitter.emit('pick', { selection: [1, 2], layerId: 'buildings' });
```

***

### off()

> **off**\<`K`\>(`event`, `listener`): `void`

Defined in: autk-core/dist/src/event-emitter.d.ts:61

Removes a previously registered listener by reference.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

Event name to unsubscribe from.

##### listener

[`EventListener`](../type-aliases/EventListener.md)\<`Events`\[`K`\]\>

Exact listener reference to remove.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
const handler = (e) => console.log(e);
emitter.on('pick', handler);
emitter.off('pick', handler);
```

***

### on()

> **on**\<`K`\>(`event`, `listener`): `void`

Defined in: autk-core/dist/src/event-emitter.d.ts:49

Registers a listener for the given event.

Multiple registrations of the same callback are allowed and treated as separate entries.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

Event name to subscribe to.

##### listener

[`EventListener`](../type-aliases/EventListener.md)\<`Events`\[`K`\]\>

Callback invoked when the event fires.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
emitter.on('pick', ({ selection, layerId }) => console.log(selection));
```
