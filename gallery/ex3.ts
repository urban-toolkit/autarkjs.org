import { AutkSpatialDb } from '@urban-toolkit/autk-db';
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

async function main() {
  try {
    const canvas = document.querySelector('canvas');
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas element not found.');
    }

    setLoadingState(
      'Initializing spatial database...',
      'Preparing the in-browser environment.'
    );

    const db = new AutkSpatialDb();
    await db.init();

    setLoadingState(
      'Fetching OSM data from Overpass API...',
      'This remote request may take longer depending on server load.'
    );

    await db.loadOsm({
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Battery Park City','Financial District'],
      },
      outputTableName: 'table_osm',
      autoLoadLayers: {
        coordinateFormat: 'EPSG:3395',
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
        dropOsmTable: true,
      },
    });

    setLoadingState(
      'Initializing map...',
      'Setting up the rendering context.'
    );

    const map = new AutkMap(canvas);
    await map.init();

    setLoadingState(
      'Adding layers to the map...',
      'Rendering roads, buildings, water, parks, and surface.'
    );

    for (const layer of db.getLayerTables()) {
      const geojson = await db.getLayer(layer.name);
      map.loadCollection(layer.name, { collection: geojson, type: layer.type });
    }

    map.draw();
    hideLoading();
  } catch (error) {
    console.error(error);

    showError(
      'Failed to load OSM data from Overpass API.',
      'The remote service may be temporarily unavailable or timing out. Please try again in a few moments.'
    );
  }
}

main();