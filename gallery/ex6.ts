import { AutkMap } from '@urban-toolkit/autk-map';

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

export class StandaloneGeojsonLayersVis {
  protected map!: AutkMap;

  public async run(canvas: HTMLCanvasElement): Promise<void> {
    setLoadingState(
      'Initializing map...',
      'Preparing the standalone visualization environment.'
    );

    this.map = new AutkMap(canvas);
    await this.map.init();

    setLoadingState(
      'Loading neighborhood polygons...',
      'Fetching the projected Manhattan neighborhoods dataset.'
    );

    const neighsResponse = await fetch('/data/mnt_neighs_proj.geojson');
    if (!neighsResponse.ok) {
      throw new Error(
        `Failed to fetch neighborhoods dataset: ${neighsResponse.status} ${neighsResponse.statusText}`
      );
    }
    const neighs = await neighsResponse.json();

    setLoadingState(
      'Loading projected points...',
      'Fetching the standalone point dataset.'
    );

    const pointsResponse = await fetch('/data/mnt_points_test_proj.geojson');
    if (!pointsResponse.ok) {
      throw new Error(
        `Failed to fetch points dataset: ${pointsResponse.status} ${pointsResponse.statusText}`
      );
    }
    const points = await pointsResponse.json();

    setLoadingState(
      'Rendering GeoJSON layers...',
      'Drawing polygons and points in the same map view.'
    );

    this.map.loadCollection('neighborhoods', { collection: neighs });
    this.map.loadCollection('points', { collection: points });

    this.map.draw();
    hideLoading();
  }
}

async function main() {
  try {
    const canvas = document.querySelector('canvas');
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas element not found.');
    }

    const example = new StandaloneGeojsonLayersVis();
    await example.run(canvas);
  } catch (error) {
    console.error(error);

    showError(
      'Failed to load the standalone GeoJSON layers example.',
      'Please verify the dataset paths and reload the page.'
    );
  }
}

main();