# Chart Types

All chart types are created through the unified `AutkChart` constructor with a `type` discriminator.

## Bar Chart

Displays one categorical axis (X) and one numeric axis (Y). Supports click selection.

```typescript
import { AutkChart } from 'autk-plot';

const chart = new AutkChart(document.querySelector('#chart') as HTMLElement, {
  type: 'barchart',
  collection: geojson,
  attributes: { axis: ['neighborhood', 'population'] },
  labels: {
    axis: ['Neighborhood', 'Population'],
    title: 'Population by Neighborhood',
  },
  width: 600,
  height: 400,
});
```

`axis[0]` is the X (categorical), `axis[1]` is the Y (numeric). Values are read from `feature.properties`.

## Scatter Plot

Displays two numeric axes. Supports brush selection.

```typescript
import { AutkChart } from 'autk-plot';

const chart = new AutkChart(document.querySelector('#chart') as HTMLElement, {
  type: 'scatterplot',
  collection: geojson,
  attributes: { axis: ['area', 'height'] },
  labels: {
    axis: ['Area', 'Height'],
    title: 'Building Area vs Height',
  },
  width: 600,
  height: 400,
});
```

## Parallel Coordinates

Displays multiple numeric axes as parallel vertical lines. Features are drawn as polylines connecting their values across axes. Supports brush selection on individual axes.

```typescript
import { AutkChart } from 'autk-plot';

const chart = new AutkChart(document.querySelector('#chart') as HTMLElement, {
  type: 'parallel-coordinates',
  collection: geojson,
  attributes: { axis: ['area', 'height', 'floors', 'year_built'] },
  labels: {
    axis: ['Area', 'Height', 'Floors', 'Year Built'],
    title: 'Building Attributes',
  },
  width: 800,
  height: 400,
});
```

`axis` lists all the property keys to display as parallel axes. Each key must be numeric.

## Line Chart

Displays a time series or sequential data.

```typescript
import { AutkChart } from 'autk-plot';

const chart = new AutkChart(document.querySelector('#chart') as HTMLElement, {
  type: 'linechart',
  collection: geojson,
  attributes: { axis: ['year', 'temperature'] },
  labels: {
    axis: ['Year', 'Temperature (°C)'],
    title: 'Temperature Over Time',
  },
  width: 600,
  height: 300,
});
```

## Table

Displays data as a scrollable table.

```typescript
const chart = new AutkChart(div, {
  type: 'table',
  collection: geojson,
  attributes: { axis: ['name', 'area', 'population'] },
  labels: { axis: ['Name', 'Area', 'Population'], title: 'Neighborhoods' },
  width: 800,
});
```

## Heat Matrix

Displays a 2D binning heatmap.

```typescript
const chart = new AutkChart(div, {
  type: 'heatmatrix',
  collection: geojson,
  attributes: { axis: ['x', 'y'], color: '@transform' },
  transform: { preset: 'binning-2d' },
  labels: { axis: ['X', 'Y'], title: 'Density' },
  width: 600,
  height: 400,
});
```
