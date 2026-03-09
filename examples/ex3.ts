import { AutkMap, LayerType } from 'autk-map';
import { SpatialDb } from 'autk-db';
import type { LoadingPhase } from 'autk-db';

const phaseLabels: Record<LoadingPhase, string> = {
    'querying-osm-server': 'Querying OSM server...',
    'downloading-osm-data': 'Downloading OSM data...',
    'querying-osm-boundaries': 'Querying OSM boundaries...',
    'downloading-boundaries': 'Downloading boundaries...',
    'processing-osm-data': 'Processing OSM data...',
    'processing-boundaries': 'Processing boundaries...',
};

export class Map3D {
    protected map!: AutkMap;
    protected db!: SpatialDb;

    public async run(canvas: HTMLCanvasElement): Promise<void> {
        const statusEl = document.getElementById('loading-status');
        const loadingText = document.getElementById('loading-text');

        const showLoading = (msg: string) => {
            if (loadingText) loadingText.textContent = msg;
            if (statusEl) statusEl.style.display = 'flex';
        };
        const hideLoading = () => {
            if (statusEl) statusEl.style.display = 'none';
        };
        const showError = (err: unknown) => {
            const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
            if (loadingText) loadingText.textContent = `Error: ${msg}`;
            if (statusEl) {
                statusEl.style.background = 'rgba(254,242,242,0.95)';
                const spinner = statusEl.querySelector<HTMLElement>('.autk-spinner');
                if (spinner) spinner.style.display = 'none';
            }
            console.error(err);
        };

        try {
            this.db = new SpatialDb();
            await this.db.init();

            showLoading('Starting OSM data load...');
            await this.db.loadOsmFromOverpassApi({
                queryArea: {
                    geocodeArea: 'New York',
                    areas: ['Battery Park City', 'Financial District'],
                },
                outputTableName: 'table_osm',
                autoLoadLayers: {
                    coordinateFormat: 'EPSG:3395',
                    layers: ['surface', 'parks', 'water', 'roads', 'buildings'] as Array<
                        'surface' | 'parks' | 'water' | 'roads' | 'buildings'
                    >,
                    dropOsmTable: true,
                },
                onProgress: (phase) => {
                    showLoading(phaseLabels[phase] ?? phase);
                },
            });

            this.map = new AutkMap(canvas);

            await this.map.init();
            await this.loadLayers();

            this.map.draw();
            hideLoading();
        } catch (err) {
            showError(err);
        }
    }

    protected async loadLayers(): Promise<void> {
        for (const layerData of this.db.getLayerTables()) {
            const geojson = await this.db.getLayer(layerData.name);
            this.map.loadGeoJsonLayer(layerData.name, geojson, layerData.type as LayerType);
            console.log(`Loading layer: ${layerData.name} of type ${layerData.type}`);
        }
    }
}

async function main() {
    const canvas = document.querySelector('canvas');
    if (!canvas) {
        throw new Error('No canvas found');
    }

    const example = new Map3D();
    await example.run(canvas);
}
main();
