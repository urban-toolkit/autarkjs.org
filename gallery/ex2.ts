import { AutkSpatialDb } from '@urban-toolkit/autk-db';
import { AutkMap, ColorMapInterpolator, MapStyle } from '@urban-toolkit/autk-map';

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
      'Preparing the in-browser spatial engine.'
    );

    const db = new AutkSpatialDb();
    await db.init();

    setLoadingState(
      'Loading Manhattan roads dataset...',
      'Importing GeoJSON data as a spatial layer.'
    );

    await db.loadCustomLayer({
      geojsonFileUrl: '/data/mnt_roads.geojson',
      outputTableName: 'roads',
      coordinateFormat: 'EPSG:3395',
    });

    setLoadingState(
      'Initializing map...',
      'Setting up the rendering context with the light style.'
    );

    const map = new AutkMap(canvas);
    MapStyle.setPredefinedStyle('light');
    await map.init();

    setLoadingState(
      'Adding layers to the map...',
      'Retrieving all available layers from the spatial database.'
    );

    for (const layer of db.getLayerTables()) {
      const geojson = await db.getLayer(layer.name);
      map.loadCollection(layer.name, { collection: geojson, type: layer.type });
    }

    setLoadingState(
      'Applying thematic styling...',
      'Coloring roads by highway class.'
    );

    const roadsGeojson = await db.getLayer('roads');
    // Pre-compute highway classification into a GeoJSON property
    for (const feature of roadsGeojson.features) {
      const highway = feature.properties?.highway;
      feature.properties!.highway_class = ['primary', 'secondary'].includes(highway) ? highway : 'other';
    }
    map.updateColorMap('roads', { colorMap: { interpolator: ColorMapInterpolator.OBSERVABLE10 } });
    map.updateThematic('roads', { collection: roadsGeojson, property: 'properties.highway_class' });
    map.updateRenderInfo('roads', { isColorMap: true });

    map.draw();
    hideLoading();
  } catch (error) {
    console.error(error);

    showError(
      'Failed to load the map and database example.',
      'Please check the dataset path and try again.'
    );
  }
}

main();