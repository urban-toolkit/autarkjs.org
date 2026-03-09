import { AutkMap } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;
    const statusEl = document.getElementById('loading-status');
    const loadingText = document.getElementById('loading-text');

    const setStatus = (msg: string) => {
        if (loadingText) loadingText.textContent = msg;
        if (statusEl) statusEl.style.display = 'flex';
    };
    const hideStatus = () => {
        if (statusEl) statusEl.style.display = 'none';
    };

    try {
        // Initialize map
        const map = new AutkMap(canvas);
        await map.init();

        // Load GeoJSON data
        setStatus('Loading GeoJSON data...');
        const geojson = await fetch('../data/mnt_neighs_proj.geojson').then(r => r.json());

        // Add layer and render
        map.loadGeoJsonLayer('neighborhoods', geojson);
        map.draw();
        hideStatus();
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
        if (loadingText) loadingText.textContent = `Error: ${msg}`;
        if (statusEl) {
            statusEl.style.background = 'rgba(254,242,242,0.95)';
            const spinner = statusEl.querySelector<HTMLElement>('.autk-spinner');
            if (spinner) spinner.style.display = 'none';
        }
        console.error(err);
    }
}

main();
