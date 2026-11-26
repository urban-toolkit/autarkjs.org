# Interface: LayerRenderInfo

Defined in: [autk-map/src/types-layers.ts:48](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L48)

Mutable render state associated with a layer.

## Properties

### color?

> `optional` **color?**: `ColorRGB`

Defined in: [autk-map/src/types-layers.ts:56](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L56)

Optional fixed layer color used when thematic color mapping is disabled.

***

### colormap

> **colormap**: [`LayerColormap`](LayerColormap.md)

Defined in: [autk-map/src/types-layers.ts:72](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L72)

Current colormap configuration and derived runtime domain or label state.

***

### isClick?

> `optional` **isClick?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:68](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L68)

Enables click and double-click picking for this layer when `true`. Only one layer is the click layer.

***

### isColorMap?

> `optional` **isColorMap?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:64](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L64)

Enables thematic color interpolation when `true`.

***

### isHover?

> `optional` **isHover?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:70](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L70)

Enables pointer hover for this layer when `true`. Only one layer is the hover layer.

***

### isSkip?

> `optional` **isSkip?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:66](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L66)

Skips rendering work for this layer when `true`.

***

### opacity

> **opacity**: `number`

Defined in: [autk-map/src/types-layers.ts:62](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L62)

Layer opacity in the range `[0, 1]`.

***

### pickedComps?

> `optional` **pickedComps?**: `number`[]

Defined in: [autk-map/src/types-layers.ts:74](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L74)

Pending canvas-relative pick coordinates `[x, y]` in CSS pixels, if any.

***

### pointSize?

> `optional` **pointSize?**: `number`

Defined in: [autk-map/src/types-layers.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L50)

Point radius in local planar units. Defaults to DEFAULT_POINT_SIZE (64); camera transforms provide all zoom scaling.

***

### polylinesWidth?

> `optional` **polylinesWidth?**: `number`

Defined in: [autk-map/src/types-layers.ts:52](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L52)

Full polyline/road width in local planar units. Defaults to DEFAULT_LINE_WIDTH (12) for polylines; overrides road category widths when set.

***

### polylinesWidthByComponent?

> `optional` **polylinesWidthByComponent?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:54](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L54)

Default full widths per component, used for OSM road styling when polylinesWidth is omitted.

***

### showBorders?

> `optional` **showBorders?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:60](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L60)

Draws available polygon borders unless false. Can be toggled through updateRenderInfo without rebuilding geometry.

***

### strokeColor?

> `optional` **strokeColor?**: `ColorRGB`

Defined in: [autk-map/src/types-layers.ts:58](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-layers.ts#L58)

Optional fixed border/outline color used by layers with a border pass.
