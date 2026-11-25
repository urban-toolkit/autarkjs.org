[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotEvent

# Enumeration: PlotEvent

Defined in: [types-events.ts:12](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L12)

Interaction events emitted by plot instances.

Each event carries a payload with `selection`, where values are source
feature ids represented by currently selected marks.

## Enumeration Members

### BRUSH

> **BRUSH**: `"brush"`

Defined in: [types-events.ts:22](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L22)

Emitted after 2D rectangular brush interactions.

***

### BRUSH\_X

> **BRUSH\_X**: `"brushX"`

Defined in: [types-events.ts:30](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L30)

Emitted after horizontal brush interactions.

***

### BRUSH\_Y

> **BRUSH\_Y**: `"brushY"`

Defined in: [types-events.ts:26](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L26)

Emitted after vertical brush interactions.

***

### CLICK

> **CLICK**: `"click"`

Defined in: [types-events.ts:16](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L16)

Emitted after click-based selection updates.

***

### HOVER

> **HOVER**: `"hover"`

Defined in: [types-events.ts:18](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L18)

Emitted when the mouse enters or leaves a mark.
