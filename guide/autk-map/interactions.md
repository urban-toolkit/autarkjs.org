# Interactions

## Picking (Click to Select)

Enable picking on a layer so that clicking on a feature fires a `MapEvent.PICKING` event:

```typescript
import { MapEvent } from 'autk-map';

map.updateRenderInfo('buildings', { isPick: true });
```

Listen for pick events via `events`:

```typescript
map.events.addEventListener(MapEvent.PICKING, (selectedIds, layerId) => {
  console.log(`Selected feature IDs on layer "${layerId}":`, selectedIds);
});
```

`selectedIds` is an array of internal component IDs. An empty array means the user clicked on empty space (deselected).

:::tip Linked views
Use `selectedIds` to drive selection in `autk-plot`. Pass the IDs to `plot.setSelection(selectedIds)` to highlight the same features in a chart. See [Linked Views](/autk-plot/linked-views).
:::

## Show / Hide a Layer

Toggle a layer's visibility without removing it:

```typescript
map.updateRenderInfo('parks', { isSkip: true });  // hide
map.updateRenderInfo('parks', { isSkip: false }); // show
```

Hidden layers are skipped entirely in the render loop, so this has no GPU cost.
