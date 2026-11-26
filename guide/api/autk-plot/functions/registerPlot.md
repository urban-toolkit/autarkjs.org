# Function: registerPlot()

> **registerPlot**(`definition`): `void`

Defined in: [plots/registered.ts:370](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L370)

Registers a plot so `{ type: 'registered', plot: name }` draws with it.

## Parameters

### definition

[`PlotDefinition`](../type-aliases/PlotDefinition.md)

Plot to register.

## Returns

`void`

## Throws

If the name is empty or taken, `draw` is not a function, or `highlight` is unknown.

## Example

```ts
registerPlot({
  name: 'dots',
  draw({ group, rows, width, height, value, axisX, axisY }) {
    const x = d3.scaleBand(rows.map(r => String(value(r, 0))), [0, width]);
    const y = d3.scaleLinear([0, d3.max(rows, r => Number(value(r, 1))) ?? 1], [height, 0]);
    group.selectAll('circle').data(rows).join('circle')
      .attr('class', 'autkMark') // a selectable mark, bound to its own row
      .attr('cx', r => x(String(value(r, 0)))! + x.bandwidth() / 2)
      .attr('cy', r => y(Number(value(r, 1))))
      .attr('r', 5);
    axisX(d3.axisBottom(x));
    axisY(d3.axisLeft(y));
  },
});

const plot = new AutkPlot(plotDiv, {
  type: 'registered',
  plot: 'dots',
  collection: geojson,
  attributes: { axis: ['category', '@transform'] },
  transform: { preset: 'binning-1d' },
  events: [PlotEvent.CLICK],
});
```
