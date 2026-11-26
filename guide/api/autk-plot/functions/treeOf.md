# Function: treeOf()

> **treeOf**(`rows`): `HierarchyNode`\<[`TreeDatum`](../type-aliases/TreeDatum.md)\>

Defined in: [plots/hierarchy-tree.ts:27](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/hierarchy-tree.ts#L27)

Builds a d3 hierarchy from the rows of the `hierarchy` preset.

Leaf sizes are their reduced values, so every node is as large as the sum
of its leaves, which equals its own value for additive reducers. Children
are ordered by size, largest first.

## Parameters

### rows

[`HierarchyNodeRow`](../type-aliases/HierarchyNodeRow.md)[]

Nodes of every level, as produced by the preset.

## Returns

`HierarchyNode`\<[`TreeDatum`](../type-aliases/TreeDatum.md)\>

Root of the hierarchy, above the top level.
