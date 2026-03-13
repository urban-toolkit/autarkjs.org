---
title: 3D OSM City Explorer
aside: false
outline: false
---

<script setup>
const ex3Code = `import { AutkMap, LayerType } from 'autk-map';
import { SpatialDb } from 'autk-db';

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
        setStatus('Initializing spatial database...');
        const db = new SpatialDb();
        await db.init();

        setStatus('Loading OpenStreetMap layers...');
        await db.loadOsmFromOverpassApi({
            queryArea: {
                geocodeArea: 'New York',
                areas: ['Manhattan Island'],
            },
            outputTableName: 'table_osm',
            autoLoadLayers: {
                coordinateFormat: 'EPSG:3395',
                layers: [
                    'surface',
                    'parks',
                    'water',
                    'roads',
                    'buildings',
                ] as Array<'surface' | 'parks' | 'water' | 'roads' | 'buildings'>,
                dropOsmTable: true,
            },
        });

        setStatus('Rendering 3D city layers...');
        const map = new AutkMap(canvas);
        await map.init();

        for (const layerData of db.getLayerTables()) {
            const geojson = await db.getLayer(layerData.name);
            map.loadGeoJsonLayer(layerData.name, geojson, layerData.type as LayerType);
        }

        map.draw();
        hideStatus();
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
        if (loadingText) loadingText.textContent = \`Error: \${msg}\`;
        if (statusEl) {
            statusEl.style.background = 'rgba(254,242,242,0.95)';
            const spinner = statusEl.querySelector('.autk-spinner') as HTMLElement | null;
            if (spinner) spinner.style.display = 'none';
        }
        console.error(err);
    }
}

main();`
</script>

<ExamplePage
  title="3D OSM City Explorer"
  description="Load urban layers from OpenStreetMap and explore city scenes in 3D. This example fetches OSM data for Manhattan with autk-db and renders buildings, roads, water, parks, and surface layers with autk-map."
  objective="Fetch OpenStreetMap data for Manhattan and render buildings, roads, water, parks, and urban surfaces in 3D. This is a visually strong example that showcases the urban exploration capabilities of Autark."
  iframe-src="/examples/raw/ex3.html"
  :tags="['autk-db', 'autk-map']"
  :code="ex3Code"
/>