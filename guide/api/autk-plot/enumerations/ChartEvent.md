[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ChartEvent

# Enumeration: ChartEvent

Defined in: [autk-plot/src/types-events.ts:9](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/types-events.ts#L9)

Interaction events emitted by chart instances.

Each event carries a payload with `selection`, where values are source
feature ids represented by currently selected marks.

## Enumeration Members

### BRUSH

> **BRUSH**: `"brush"`

Defined in: [autk-plot/src/types-events.ts:17](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/types-events.ts#L17)

Emitted after 2D rectangular brush interactions.

***

### BRUSH\_X

> **BRUSH\_X**: `"brushX"`

Defined in: [autk-plot/src/types-events.ts:25](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/types-events.ts#L25)

Emitted after horizontal brush interactions.

***

### BRUSH\_Y

> **BRUSH\_Y**: `"brushY"`

Defined in: [autk-plot/src/types-events.ts:21](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/types-events.ts#L21)

Emitted after vertical brush interactions.

***

### CLICK

> **CLICK**: `"click"`

Defined in: [autk-plot/src/types-events.ts:13](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/types-events.ts#L13)

Emitted after click-based selection updates.
