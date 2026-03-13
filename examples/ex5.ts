import type { FeatureCollection, GeoJsonProperties } from 'geojson';

import * as PlotPkg from 'autk-plot';
import { AutkMap, MapEvent, VectorLayer } from 'autk-map';

const { PlotD3, PlotEvent } = PlotPkg as any;

type NeighborhoodDatum = GeoJsonProperties & {
    ntaname?: string;
    shape_area?: number | string;
    __feature_id?: number;
};

function buildNeighborhoodBarChart(
    div: HTMLElement,
    data: GeoJsonProperties[]
): [SVGSVGElement, SVGRectElement[]] {
    const items = data as NeighborhoodDatum[];

    div.innerHTML = '';

    const width = 780;
    const height = 520;
    const margin = { top: 40, right: 20, bottom: 170, left: 70 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const values = items.map((d) => Number(d.shape_area ?? 0));
    const maxValue = Math.max(...values, 1);

    const barWidth = innerWidth / Math.max(items.length, 1);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', String(width));
    svg.setAttribute('height', String(height));
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.style.display = 'block';
    svg.style.width = '100%';
    svg.style.height = 'auto';
    svg.style.background = 'white';

    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    title.setAttribute('x', String(margin.left));
    title.setAttribute('y', '24');
    title.setAttribute('fill', '#111827');
    title.setAttribute('font-size', '16');
    title.setAttribute('font-weight', '700');
    title.textContent = 'Neighborhood Area';
    svg.appendChild(title);

    const axisColor = '#94a3b8';
    const textColor = '#334155';

    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', String(margin.left));
    xAxis.setAttribute('x2', String(margin.left + innerWidth));
    xAxis.setAttribute('y1', String(margin.top + innerHeight));
    xAxis.setAttribute('y2', String(margin.top + innerHeight));
    xAxis.setAttribute('stroke', axisColor);
    svg.appendChild(xAxis);

    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', String(margin.left));
    yAxis.setAttribute('x2', String(margin.left));
    yAxis.setAttribute('y1', String(margin.top));
    yAxis.setAttribute('y2', String(margin.top + innerHeight));
    yAxis.setAttribute('stroke', axisColor);
    svg.appendChild(yAxis);

    const tickCount = 5;
    for (let i = 0; i <= tickCount; i++) {
        const value = (maxValue / tickCount) * i;
        const y = margin.top + innerHeight - (value / maxValue) * innerHeight;

        const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        tick.setAttribute('x1', String(margin.left - 6));
        tick.setAttribute('x2', String(margin.left));
        tick.setAttribute('y1', String(y));
        tick.setAttribute('y2', String(y));
        tick.setAttribute('stroke', axisColor);
        svg.appendChild(tick);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', String(margin.left - 10));
        label.setAttribute('y', String(y + 4));
        label.setAttribute('text-anchor', 'end');
        label.setAttribute('fill', textColor);
        label.setAttribute('font-size', '11');
        label.textContent = Math.round(value).toLocaleString();
        svg.appendChild(label);
    }

    const bars: SVGRectElement[] = [];

    items.forEach((item, index) => {
        const value = Number(item.shape_area ?? 0);
        const x = margin.left + index * barWidth + 6;
        const barH = (value / maxValue) * innerHeight;
        const y = margin.top + innerHeight - barH;
        const widthRect = Math.max(barWidth - 12, 4);

        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', String(x));
        rect.setAttribute('y', String(y));
        rect.setAttribute('width', String(widthRect));
        rect.setAttribute('height', String(barH));
        rect.setAttribute('rx', '3');
        rect.setAttribute('fill', '#60a5fa');
        rect.setAttribute('fill-opacity', '0.88');
        rect.setAttribute('data-feature-id', String(item.__feature_id ?? index));
        rect.style.cursor = 'pointer';

        svg.appendChild(rect);
        bars.push(rect);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', String(x + widthRect / 2));
        label.setAttribute('y', String(margin.top + innerHeight + 14));
        label.setAttribute('transform', `rotate(50 ${x + widthRect / 2} ${margin.top + innerHeight + 14})`);
        label.setAttribute('text-anchor', 'start');
        label.setAttribute('fill', textColor);
        label.setAttribute('font-size', '10');
        label.textContent = String(item.ntaname ?? `Item ${index + 1}`);
        svg.appendChild(label);
    });

    div.appendChild(svg);
    return [svg, bars];
}

class LinkedViewsExample {
    protected map!: AutkMap;
    protected plot!: any;
    protected geojson!: FeatureCollection;
    protected plotData!: GeoJsonProperties[];

    public async run(canvas: HTMLCanvasElement, plotDiv: HTMLElement): Promise<void> {
        this.geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json());

        this.plotData = this.geojson.features.map((feature, index) => ({
            ...(feature.properties ?? {}),
            __feature_id: index,
        }));

        await this.loadAutkMap(canvas);
        await this.loadAutkPlot(plotDiv);

        this.updateMapListeners();
        this.updatePlotListeners();
        this.highlightBars([]);
    }

    protected async loadAutkMap(canvas: HTMLCanvasElement) {
        this.map = new AutkMap(canvas);
        await this.map.init();

        this.map.loadGeoJsonLayer('neighborhoods', this.geojson);
        this.map.updateRenderInfoProperty('neighborhoods', 'isPick', true);

        this.map.draw();
    }

    protected async loadAutkPlot(plotDiv: HTMLElement) {
        this.plot = new PlotD3(plotDiv, buildNeighborhoodBarChart, [PlotEvent.CLICK]);
        this.plot.data = this.plotData;
        await this.plot.draw();
    }

    protected updateMapListeners() {
        this.map.mapEvents.addEventListener(MapEvent.PICK, (selection: number[] | string[]) => {
            const ids = (selection as Array<number | string>)
                .map((v) => Number(v))
                .filter((v) => !Number.isNaN(v));

            this.highlightBars(ids);
        });
    }

    protected updatePlotListeners(layerId: string = 'neighborhoods') {
        this.plot.plotEvents.addEventListener(PlotEvent.CLICK, (selection: number[] | string[]) => {
            const ids = (selection as Array<number | string>)
                .map((v) => Number(v))
                .filter((v) => !Number.isNaN(v));

            const layer = this.map.layerManager.searchByLayerId(layerId) as VectorLayer | null;
            if (layer) {
                layer.setHighlightedIds(ids);
            }

            this.highlightBars(ids);
        });
    }

    protected highlightBars(ids: number[]) {
        const selected = new Set(ids);
        const svg = this.plot.ref as SVGSVGElement | null;
        if (!svg) return;

        const bars = svg.querySelectorAll<SVGRectElement>('rect[data-feature-id]');
        bars.forEach((bar) => {
            const id = Number(bar.getAttribute('data-feature-id'));
            const isSelected = selected.size > 0 && selected.has(id);

            bar.setAttribute('fill', isSelected ? '#ef4444' : '#60a5fa');
            bar.setAttribute('fill-opacity', isSelected ? '1' : '0.88');
        });
    }
}

async function main() {
    const example = new LinkedViewsExample();

    const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
    const plotBody = document.querySelector('#plotBody') as HTMLElement | null;
    const statusEl = document.getElementById('loading-status');
    const loadingText = document.getElementById('loading-text');

    const setStatus = (msg: string) => {
        if (loadingText) loadingText.textContent = msg;
        if (statusEl) statusEl.style.display = 'flex';
    };

    const hideStatus = () => {
        if (statusEl) statusEl.style.display = 'none';
    };

    if (!canvas || !plotBody) {
        console.error('Canvas or plot body element not found');
        return;
    }

    try {
        setStatus('Loading linked views example...');
        await example.run(canvas, plotBody);
        hideStatus();
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
        if (loadingText) loadingText.textContent = `Error: ${msg}`;
        if (statusEl) {
            statusEl.style.background = 'rgba(254,242,242,0.95)';
            const spinner = statusEl.querySelector('.autk-spinner') as HTMLElement | null;
            if (spinner) spinner.style.display = 'none';
        }
        console.error(err);
    }
}

main();