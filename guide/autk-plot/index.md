# autk-plot

[![npm version](https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-plot?logo=npm)](https://www.npmjs.com/package/@urban-toolkit/autk-plot)

`autk-plot` is a D3-based chart library that takes GeoJSON feature properties as input and supports linked views with `autk-map`. Charts react to map selections and can drive map highlights through brush and click events.

## Installation

```bash
npm install autk-plot
```

## Configuration

All chart types are instantiated through the unified `AutkChart` constructor. Pass the host element as the first argument and a `UnifiedChartConfig` as the second:

```typescript
import { AutkChart } from 'autk-plot';

const chart = new AutkChart(
  document.querySelector('#chart-container') as HTMLElement,
  {
    type: 'barchart',
    collection: geojson,    // FeatureCollection — properties are used as data rows
    attributes: { axis: ['neighborhood', 'population'] },
    labels: {
      axis: ['Neighborhood', 'Population'],
      title: 'Population by Neighborhood',
    },
    width: 600,
    height: 400,
  }
);
```

`collection` is a GeoJSON `FeatureCollection`. The chart extracts `feature.properties` from each feature as its data rows. This makes it easy to pass data directly from `autk-db.getLayer()`.

## Margins

Override default margins if needed:

```typescript
new AutkChart(div, {
  type: 'barchart',
  collection: geojson,
  ...
  margins: { left: 80, right: 20, top: 40, bottom: 60 },
});
```

## What's Next

- [Chart Types](./chart-types) — Bar chart, scatter plot, parallel coordinates
- [Interactivity](./interactivity) — click, brush, brush-X, brush-Y events
- [Linked Views](./linked-views) — sync selection between map and chart
