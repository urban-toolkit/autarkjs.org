# Type Alias: HierarchyNodeRow

> **HierarchyNodeRow** = `object`

Defined in: [transforms/presets/hierarchy.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L35)

A node of the hierarchy: one category at one level, under its parent.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/hierarchy.ts:51](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L51)

Merged source feature ids under the node, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/hierarchy.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L49)

How many rows are under the node.

***

### key

> **key**: `string`

Defined in: [transforms/presets/hierarchy.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L37)

Node key, `JSON.stringify(path)`.

***

### label

> **label**: `string`

Defined in: [transforms/presets/hierarchy.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L43)

Category of this node, the last element of `path`.

***

### level

> **level**: `number`

Defined in: [transforms/presets/hierarchy.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L39)

Level, `0` for the top level.

***

### parent

> **parent**: `string` \| `null`

Defined in: [transforms/presets/hierarchy.ts:45](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L45)

Key of the parent node, or `null` at the top level.

***

### path

> **path**: `string`[]

Defined in: [transforms/presets/hierarchy.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L41)

Categories from the top level down to this node.

***

### value

> **value**: `number`

Defined in: [transforms/presets/hierarchy.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/hierarchy.ts#L47)

Reduced numeric result over the rows under the node.
