# Type Alias: PlotEventData

> **PlotEventData** = `SelectionData` & `object`

Defined in: [types-events.ts:39](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-events.ts#L39)

Payload emitted by all plot interaction events.

Extends the shared `SelectionData` shape from `autk-core`, so consumers that
only read `selection` (e.g. `AutkMap`) keep working.

## Type Declaration

### extent?

> `optional` **extent?**: [`BrushExtent`](BrushExtent.md) \| `null`

Present on brush events; `null` means the emitting brush was cleared.

### shares?

> `optional` **shares?**: [`FeatureShare`](FeatureShare.md)[]

Share of each selected feature covered by the selected marks. Present when
the plot aggregates rows, so a receiving one-to-one plot can draw only
that part of each feature's mark.
