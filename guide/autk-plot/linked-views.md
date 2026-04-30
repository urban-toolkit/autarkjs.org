# Linked Views

Linking `autk-map` and `autk-plot` creates coordinated views: selecting features in the map highlights them in the chart, and vice versa.

## Map → Chart

When the user clicks a feature in the map, highlight the corresponding row in the chart:

```typescript
import { MapEvent } from 'autk-map';
import { ChartEvent } from 'autk-plot';

// Enable picking on the map layer
map.updateRenderInfo('buildings', { isPick: true });

// When a feature is picked in the map, highlight it in the chart
map.events.addEventListener(MapEvent.PICKING, (selectedIds) => {
  chart.setSelection(selectedIds);
});
```

`setSelection` updates the chart's visual selection state immediately.

## Chart → Map

When the user brushes or clicks in the chart, highlight the corresponding features on the map:

```typescript
chart.events.on(ChartEvent.BRUSH, ({ selection }) => {
  map.setHighlightedIds('buildings', selection);
});
```

## Full Bidirectional Example

```typescript
import { MapEvent } from 'autk-map';
import { AutkChart, ChartEvent } from 'autk-plot';

// Setup
map.updateRenderInfo('buildings', { isPick: true, isColorMap: true });

const geojson = await db.getLayer('buildings');
const chart = new AutkChart(document.querySelector('#chart') as HTMLElement, {
  type: 'scatterplot',
  collection: geojson,
  attributes: { axis: ['area', 'height'] },
  labels: { axis: ['Area', 'Height'] },
});

// Map → Chart
map.events.addEventListener(MapEvent.PICKING, (ids) => {
  chart.setSelection(ids);
});

// Chart → Map
chart.events.on(ChartEvent.BRUSH, ({ selection }) => {
  chart.setSelection(selection); // keep chart in sync too
  map.setHighlightedIds('buildings', selection);
});
```
