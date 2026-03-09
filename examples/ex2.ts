import { SpatialDb } from 'autk-db';
import { AutkMap, ColorMapInterpolator, LayerType, MapStyle } from 'autk-map';

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

        // Load road data from GeoJSON into the database
        setStatus('Loading layer data...');
        await db.loadCustomLayer({
            geojsonFileUrl: '../data/mnt_roads.geojson',
            outputTableName: 'roads',
            coordinateFormat: 'EPSG:3395',
        });

        // Initialize map with light style
        const map = new AutkMap(canvas);
        MapStyle.setPredefinedStyle('light');
        await map.init();

        // Add all layers from the database to the map
        for (const layer of db.getLayerTables()) {
            const geojson = await db.getLayer(layer.name);
            map.loadGeoJsonLayer(layer.name, geojson, layer.type as LayerType);
        }

        // Apply thematic coloring by road type
        const roadsGeojson = await db.getLayer('roads');
        map.updateRenderInfoProperty('roads', 'colorMapInterpolator', ColorMapInterpolator.OBSERVABLE10);
        map.updateGeoJsonLayerThematic('roads', roadsGeojson, (feature) => {
            const highway = feature.properties?.highway;
            return ['primary', 'secondary'].includes(highway) ? highway : 'other';
        });

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
