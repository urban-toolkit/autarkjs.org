# Chart Types

## Bar Chart

Displays one categorical axis (X) and one numeric axis (Y). Supports click selection.

```typescript
import { Barchart } from 'autk-plot';

const chart = new Barchart({
  div: document.querySelector('#chart') as HTMLElement,
  data: geojson,
  labels: {
    axis: ['neighborhood', 'population'],
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
import { Scatterplot } from 'autk-plot';

const chart = new Scatterplot({
  div: document.querySelector('#chart') as HTMLElement,
  data: geojson,
  labels: {
    axis: ['area', 'height'],
    title: 'Building Area vs Height',
  },
  width: 600,
  height: 400,
});
```

## Parallel Coordinates

Displays multiple numeric axes as parallel vertical lines. Features are drawn as polylines connecting their values across axes. Supports brush selection on individual axes.

```typescript
import { ParallelCoordinates } from 'autk-plot';

const chart = new ParallelCoordinates({
  div: document.querySelector('#chart') as HTMLElement,
  data: geojson,
  labels: {
    axis: ['area', 'height', 'floors', 'year_built'],
    title: 'Building Attributes',
  },
  width: 800,
  height: 400,
});
```

`axis` lists all the property keys to display as parallel axes. Each key must be numeric.
