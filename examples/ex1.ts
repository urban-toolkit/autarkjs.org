import { AutkMap } from 'autk-map';

export class StandaloneGeojsonVis {
    protected map!: AutkMap;

    public async run(canvas: HTMLCanvasElement): Promise<void> {
        const statusEl = document.getElementById('loading-status');
        const loadingText = document.getElementById('loading-text');

        const showLoading = (msg: string) => {
            if (loadingText) loadingText.textContent = msg;
            if (statusEl) statusEl.style.display = 'flex';
        };
        const hideLoading = () => {
            if (statusEl) statusEl.style.display = 'none';
        };
        const showError = (err: unknown) => {
            const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
            if (loadingText) loadingText.textContent = `Error: ${msg}`;
            if (statusEl) {
                statusEl.style.background = 'rgba(254,242,242,0.95)';
                const spinner = statusEl.querySelector<HTMLElement>('.autk-spinner');
                if (spinner) spinner.style.display = 'none';
            }
            console.error(err);
        };

        try {
            this.map = new AutkMap(canvas);
            await this.map.init();

            showLoading('Loading GeoJSON data...');
            const geojson = await fetch('../data/mnt_neighs_proj.geojson').then(res => res.json());
            this.map.loadGeoJsonLayer('neighborhoods', geojson);
            this.map.draw();
            hideLoading();
        } catch (err) {
            showError(err);
        }
    }
}

async function main() {
    const example = new StandaloneGeojsonVis();

    const canvas = document.querySelector('canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    await example.run(canvas);
}
main();
