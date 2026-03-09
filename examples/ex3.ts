import { SpatialDb } from 'autk-db';
import { AutkMap, LayerType } from 'autk-map';
import type { LoadingPhase } from 'autk-db';

const phaseLabels: Record<LoadingPhase, string> = {
    'querying-osm-server': 'Querying OSM server...',
    'downloading-osm-data': 'Downloading OSM data...',
    'querying-osm-boundaries': 'Querying OSM boundaries...',
    'downloading-boundaries': 'Downloading boundaries...',
    'processing-osm-data': 'Processing OSM data...',
    'processing-boundaries': 'Processing boundaries...',
};

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
        // Initialize database
        const db = new SpatialDb();
        await db.init();

        // Load OSM data for a specific area via Overpass API
        setStatus('Starting OSM data load...');
        await db.loadOsmFromOverpassApi({
            queryArea: {
                geocodeArea: 'New York',
                areas: ['Battery Park City', 'Financial District'],
            },
            outputTableName: 'table_osm',
            autoLoadLayers: {
                coordinateFormat: 'EPSG:3395',
                layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
                dropOsmTable: true,
            },
            onProgress: (phase) => setStatus(phaseLabels[phase] ?? phase),
        });

        // Initialize map
        const map = new AutkMap(canvas);
        await map.init();

        // Add all layers from the database to the map
        for (const layer of db.getLayerTables()) {
            const geojson = await db.getLayer(layer.name);
            map.loadGeoJsonLayer(layer.name, geojson, layer.type as LayerType);
        }

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
