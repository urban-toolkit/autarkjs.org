# autk-plot

`autk-plot` is a D3-based chart library that takes GeoJSON feature properties as input and supports linked views with `autk-map`. Charts react to map selections and can drive map highlights through brush and click events.

## Installation

```bash
npm install autk-plot
```

## Configuration

All plot types share the same `PlotConfig` structure:

```typescript
import { Barchart } from 'autk-plot';

const chart = new Barchart({
  div: document.querySelector('#chart-container') as HTMLElement,
  data: geojson,           // FeatureCollection — properties are used as data rows
  labels: {
    axis: ['neighborhood', 'population'], // [x-axis key, y-axis key]
    title: 'Population by Neighborhood',
  },
  width: 600,
  height: 400,
});
```

`data` is a GeoJSON `FeatureCollection`. The chart extracts `feature.properties` from each feature as its data rows. This makes it easy to pass data directly from `autk-db.getLayer()`.

## Margins

Override default margins if needed:

```typescript
const chart = new Barchart({
  ...
  margins: { left: 80, right: 20, top: 40, bottom: 60 },
});
```

## What's Next

- [Chart Types](./chart-types) — Bar chart, scatter plot, parallel coordinates
- [Interactivity](./interactivity) — click, brush, brush-X, brush-Y events
- [Linked Views](./linked-views) — sync selection between map and chart
