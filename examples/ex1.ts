import { AutkMap } from 'autk-map';

async function main() {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
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
    if (!canvas) {
      throw new Error('Canvas element not found.');
    }

    setStatus('Initializing map...');
    const map = new AutkMap(canvas);
    await map.init();

    setStatus('Loading Manhattan neighborhoods...');
    const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json());

    setStatus('Rendering neighborhood layer...');
    map.loadGeoJsonLayer('neighborhoods', geojson);
    map.draw();

    hideStatus();
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
    if (loadingText) loadingText.textContent = `Error: ${msg}`;
    if (statusEl) {
      statusEl.style.background = 'rgba(127, 29, 29, 0.92)';
    }
    console.error(err);
  }
}

main();