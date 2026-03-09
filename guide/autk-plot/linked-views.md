# Linked Views

Linking `autk-map` and `autk-plot` creates coordinated views: selecting features in the map highlights them in the chart, and vice versa.

## Map → Chart

When the user clicks a feature in the map, highlight the corresponding row in the chart:

```typescript
import { MapEvent } from 'autk-map';
import { PlotEvent } from 'autk-plot';

// Enable picking on the map layer
map.updateRenderInfoProperty('buildings', 'isPick', true);

// When a feature is picked in the map, highlight it in the chart
map.mapEvents.on(MapEvent.PICK, (selectedIds, layerId) => {
  chart.setHighlightedIds(selectedIds);
});
```

`setHighlightedIds` updates the chart's visual selection state immediately.

## Chart → Map

When the user brushes or clicks in the chart, update the map layer's thematic data to reflect the selection:

```typescript
chart.plotEvents.on(PlotEvent.BRUSH, (selectedIds) => {
  // Option A: drive a thematic update on the map
  map.updateGeoJsonLayerThematic(
    'buildings',
    geojson,
    (feature, index) => selectedIds.includes(index) ? 1.0 : 0.0
  );
});
```

## Full Bidirectional Example

```typescript
import { MapEvent } from 'autk-map';
import { Scatterplot, PlotEvent } from 'autk-plot';

// Setup
map.updateRenderInfoProperty('buildings', 'isPick', true);
map.updateRenderInfoProperty('buildings', 'isColorMap', true);

const geojson = await db.getLayer('buildings');
const chart = new Scatterplot({
  div: document.querySelector('#chart') as HTMLElement,
  data: geojson,
  labels: { axis: ['area', 'height'] },
});

// Map → Chart
map.mapEvents.on(MapEvent.PICK, (ids) => {
  chart.setHighlightedIds(ids);
});

// Chart → Map
chart.plotEvents.on(PlotEvent.BRUSH, (ids) => {
  chart.setHighlightedIds(ids); // keep chart in sync too
  map.updateGeoJsonLayerThematic(
    'buildings',
    geojson,
    (_f, i) => ids.includes(i) ? 1.0 : 0.0
  );
});
```
