# Type Alias: BrushExtent

> **BrushExtent** = `object`

Defined in: [types-events.ts:56](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L56)

Bounds of the brush that emitted an event, separate from the combined selection.

## Properties

### data?

> `optional` **data?**: `Partial`\<`Record`\<`"x"` \| `"y"`, [`BrushAxisExtent`](BrushAxisExtent.md)\>\>

Defined in: [types-events.ts:60](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L60)

Data bounds on axes whose scales are available.

***

### dimension?

> `optional` **dimension?**: `string`

Defined in: [types-events.ts:62](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L62)

The named dimension for brushes on their own axes (e.g. parallel coordinates).

***

### pixels

> **pixels**: `Partial`\<`Record`\<`"x"` \| `"y"`, \[`number`, `number`\]\>\>

Defined in: [types-events.ts:58](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/types-events.ts#L58)

Bounds in the brush group's local SVG coordinates, on the brushed axes only.
