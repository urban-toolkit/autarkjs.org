[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / BuildingWindowLayoutEntry

# Interface: BuildingWindowLayoutEntry

Defined in: [triangulator-windows.ts:32](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L32)

Metadata for one generated facade window.

Each entry is derived from a convex hull edge and floor index, and mirrors a
GeoJSON point feature in the returned layout collection.

## Properties

### buildingHeight

> **buildingHeight**: `number`

Defined in: [triangulator-windows.ts:52](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L52)

Resolved building height used when generating the window.

***

### center

> **center**: \[`number`, `number`, `number`\]

Defined in: [triangulator-windows.ts:44](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L44)

World-space window center `[x, y, z]`.

***

### edgeIndex

> **edgeIndex**: `number`

Defined in: [triangulator-windows.ts:38](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L38)

Index of the hull edge on which the window is placed.

***

### floorIndex

> **floorIndex**: `number`

Defined in: [triangulator-windows.ts:40](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L40)

Zero-based floor index of the window.

***

### height

> **height**: `number`

Defined in: [triangulator-windows.ts:50](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L50)

Window height in local vertical units.

***

### normal

> **normal**: \[`number`, `number`, `number`\]

Defined in: [triangulator-windows.ts:46](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L46)

Outward-facing facade normal `[x, y, z]`.

***

### sourceFeatureIndex

> **sourceFeatureIndex**: `number`

Defined in: [triangulator-windows.ts:36](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L36)

Index of the source feature that produced this window.

***

### width

> **width**: `number`

Defined in: [triangulator-windows.ts:48](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L48)

Window width in local planar units.

***

### windowId

> **windowId**: `string`

Defined in: [triangulator-windows.ts:34](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L34)

Stable identifier for the generated window instance.

***

### windowIndex

> **windowIndex**: `number`

Defined in: [triangulator-windows.ts:42](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/triangulator-windows.ts#L42)

Zero-based window index within its edge and floor.
