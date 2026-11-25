[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / RowShape

# Type Alias: RowShape

> **RowShape** = `"category-value"` \| `"series"` \| `"sort"` \| `"binning-2d"` \| `"binning-hex"` \| `"box-stats"` \| `"flows"` \| `"hierarchy"` \| `"cumulative"` \| `"fold"` \| `"density"`

Defined in: [transforms/registry.ts:33](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L33)

Output row families. Each built-in transform defines one, so a user
transform that yields rows of the same family is read by the same plots.

- `category-value`: `label`, `value` (from `binning-1d`); bar, pie, donut, waffle (counts).
- `series`: `bucket`, `value` (from `binning-events`, `reduce-series`); line, area, calendar (daily buckets).
- `sort`: the source rows themselves, one per feature; table.
- `binning-2d`: cells `x`, `y` with their order and a `value`; heat matrix.
- `binning-hex`: hexagons centered at `cx`, `cy`; hexbin.
- `box-stats`: quartiles, whiskers, and outliers per `category`; box plot.
- `flows`: nodes and links between consecutive columns, each link naming its nodes in `source`
  and `target`; Sankey, chord.
- `hierarchy`: nodes with `key`, `parent`, `level`, `path`; treemap, sunburst, stacked bars.
- `cumulative`: bars and cumulative points with their `share`; ECDF, Pareto.
- `fold`: one cell per `category` and `measure`; radar.
- `density`: points `x` of one curve per `group`; density, violin.
