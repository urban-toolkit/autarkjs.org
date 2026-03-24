import { AutkMap, MapEvent, VectorLayer } from 'autk-map';
import { Barchart, PlotEvent } from 'autk-plot';

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
    const plotDiv = document.querySelector('#plotBody');

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas element not found.');
    }

    if (!(plotDiv instanceof HTMLElement)) {
      throw new Error('Plot container not found.');
    }

    setLoadingState(
      'Initializing map...',
      'Preparing the rendering context for the linked map view.'
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
      'Adding the GeoJSON layer to the map and enabling picking.'
    );

    map.loadGeoJsonLayer('neighborhoods', geojson);
    map.updateRenderInfoProperty('neighborhoods', 'isPick', true);
    map.draw();

    setLoadingState(
      'Building linked bar chart...',
      'Creating a coordinated chart view for neighborhood attributes.'
    );

    const plot = new Barchart({
      div: plotDiv,
      data: geojson,
      attributes: ['ntaname', 'shape_area'],
      labels: {
        axis: ['Neighborhood', 'Area'],
        title: 'Neighborhood area',
      },
      margins: { left: 60, right: 20, top: 50, bottom: 280},
      width: plotDiv.clientWidth || 900,
      events: [PlotEvent.CLICK],
    });

    map.mapEvents.addEventListener(MapEvent.PICK, (selection: string[] | number[]) => {
      const normalizedSelection = selection.map((id) =>
        typeof id === 'string' ? Number(id) : id
      );
      plot.setHighlightedIds(normalizedSelection);
    });

    plot.plotEvents.addEventListener(PlotEvent.CLICK, (selection: number[]) => {
      const layer = map.layerManager.searchByLayerId('neighborhoods') as VectorLayer | null;
      layer?.setHighlightedIds(selection);
    });

    hideLoading();
  } catch (error) {
    console.error(error);

    showError(
      'Failed to load the linked map and chart example.',
      'Please verify the dataset and reload the page.'
    );
  }
}

main();