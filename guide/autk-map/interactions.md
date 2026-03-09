# Interactions

## Picking (Click to Select)

Enable picking on a layer so that clicking on a feature fires a `MapEvent.PICK` event:

```typescript
import { MapEvent } from 'autk-map';

map.updateRenderInfoProperty('buildings', 'isPick', true);
```

Listen for pick events via `mapEvents`:

```typescript
map.mapEvents.on(MapEvent.PICK, (selectedIds, layerId) => {
  console.log(`Selected feature IDs on layer "${layerId}":`, selectedIds);
});
```

`selectedIds` is an array of internal component IDs. An empty array means the user clicked on empty space (deselected).

:::tip Linked views
Use `selectedIds` to drive selection in `autk-plot`. Pass the IDs to `plot.setHighlightedIds(selectedIds)` to highlight the same features in a chart. See [Linked Views](/autk-plot/linked-views).
:::

## Show / Hide a Layer

Toggle a layer's visibility without removing it:

```typescript
map.updateRenderInfoProperty('parks', 'isSkip', true);  // hide
map.updateRenderInfoProperty('parks', 'isSkip', false); // show
```

Hidden layers are skipped entirely in the render loop, so this has no GPU cost.

## Updating Geometry

If you need to update the geometry of an existing layer (e.g. after a user-driven filter), use `updateLayerGeometry`. This replaces the vertex data on the GPU without recreating the layer:

```typescript
map.updateLayerGeometry('buildings', newGeometryData);
```

:::warning Low-level API
`updateLayerGeometry` takes internal geometry data (`ILayerGeometry[]`), not a `FeatureCollection`. In most cases, removing and re-adding the layer with `loadGeoJsonLayer` is simpler. Use `updateLayerGeometry` only for performance-critical updates on large datasets.
:::
