# Type Alias: PlotEventRecord

> **PlotEventRecord** = `object` & `Record`\<[`BRUSH`](../enumerations/PlotEvent.md#brush) \| [`BRUSH_X`](../enumerations/PlotEvent.md#brush_x) \| [`BRUSH_Y`](../enumerations/PlotEvent.md#brush_y), [`PlotEventData`](PlotEventData.md) & `object`\>

Defined in: [types-events.ts:70](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-events.ts#L70)

Event map consumed by the typed plot event emitter.

Each plot interaction event resolves to a `PlotEventData` payload.

## Type Declaration

### click

> **click**: [`PlotEventData`](PlotEventData.md)

### hover

> **hover**: [`PlotHoverEventData`](PlotHoverEventData.md)
