# Type Alias: HighlightRule

> **HighlightRule** = \{ `mode`: `"boolean"`; \} \| \{ `anchor?`: `"start"` \| `"end"` \| `"center"`; `axis?`: `"x"` \| `"y"` \| `"radial"`; `baseline?`: `number`; `channel`: [`SubsetChannel`](SubsetChannel.md); `mode`: `"subset"`; `shape?`: `"flow"` \| `"ribbon"`; \} \| \{ `axis?`: `"x"` \| `"y"`; `mode`: `"custom"`; `preset`: [`CustomPreset`](CustomPreset.md); `scale?`: \{ `a`: `number`; `fields`: \[`string`, `string`\]; `k`: `number`; \}; \}

Defined in: [plots/partial-design.ts:44](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/partial-design.ts#L44)

Highlight of one mark family, as a plot declares it.

- `{ mode: 'boolean' }`: the whole mark.
- `{ mode: 'subset', channel }`: the mark drawn with the subset's value on `channel`.
- `{ mode: 'custom', preset }`: a ready-made metaphor (a plot's own one is `highlight` as a function).

## Union Members

### Type Literal

\{ `mode`: `"boolean"`; \}

***

### Type Literal

\{ `anchor?`: `"start"` \| `"end"` \| `"center"`; `axis?`: `"x"` \| `"y"` \| `"radial"`; `baseline?`: `number`; `channel`: [`SubsetChannel`](SubsetChannel.md); `mode`: `"subset"`; `shape?`: `"flow"` \| `"ribbon"`; \}

#### anchor?

> `optional` **anchor?**: `"start"` \| `"end"` \| `"center"`

Side `length` grows from: top/left (`start`), bottom/right (`end`), or `center`.

#### axis?

> `optional` **axis?**: `"x"` \| `"y"` \| `"radial"`

Axis of `length` and `position`.

#### baseline?

> `optional` **baseline?**: `number`

Coordinate of the value 0 for `position` on x or y.

#### channel

> **channel**: [`SubsetChannel`](SubsetChannel.md)

#### mode

> **mode**: `"subset"`

#### shape?

> `optional` **shape?**: `"flow"` \| `"ribbon"`

Path of a `band`: a flow (`flow`, as a Sankey link) or a ribbon (`ribbon`, as a chord).

***

### Type Literal

\{ `axis?`: `"x"` \| `"y"`; `mode`: `"custom"`; `preset`: [`CustomPreset`](CustomPreset.md); `scale?`: \{ `a`: `number`; `fields`: \[`string`, `string`\]; `k`: `number`; \}; \}

#### axis?

> `optional` **axis?**: `"x"` \| `"y"`

Axis of `members`.

#### mode

> **mode**: `"custom"`

#### preset

> **preset**: [`CustomPreset`](CustomPreset.md)

#### scale?

> `optional` **scale?**: `object`

`members`: coordinate of a value, `a + k·value`, and the two fields the mark spans.

##### scale.a

> **a**: `number`

##### scale.fields

> **fields**: \[`string`, `string`\]

##### scale.k

> **k**: `number`
