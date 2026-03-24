import { AutkMap } from 'autk-map';

function setLoadingState(message: string, note?: string) {
  const text = document.getElementById('loading-text');
  const noteEl = document.getElementById('loading-note');
  if (text) text.textContent = message;
  if (noteEl && note) noteEl.textContent = note;
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  overlay?.classList.add('hidden');
  overlay?.classList.remove('error');
}

function showError(message: string, note?: string) {
  const overlay = document.getElementById('loading-overlay');
  const title = document.getElementById('loading-title');
  const text = document.getElementById('loading-text');
  const noteEl = document.getElementById('loading-note');

  overlay?.classList.remove('hidden');
  overlay?.classList.add('error');

  if (title) title.textContent = 'Loading Error';
  if (text) text.textContent = message;
  if (noteEl) {
    noteEl.textContent = note ?? 'Please reload the page and try again.';
  }
}

async function main() {
  try {
    const canvas = document.querySelector('canvas');
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas element not found.');
    }

    setLoadingState(
      'Initializing map...',
      'Preparing the browser rendering context.'
    );

    const map = new AutkMap(canvas);
    await map.init();

    setLoadingState(
      'Loading Manhattan neighborhoods...',
      'Fetching projected GeoJSON data from the local dataset.'
    );

    const response = await fetch('/data/mnt_neighs_proj.geojson');
    if (!response.ok) {
      throw new Error(`Failed to fetch dataset: ${response.status} ${response.statusText}`);
    }
    const geojson = await response.json();

    setLoadingState(
      'Rendering neighborhood layer...',
      'Drawing the standalone GeoJSON layer on the map.'
    );

    map.loadGeoJsonLayer('neighborhoods', geojson);
    map.draw();

    hideLoading();
  } catch (error) {
    console.error(error);

    showError(
      'Failed to load the GeoJSON example.',
      'Please check the dataset path and reload the page.'
    );
  }
}

main();