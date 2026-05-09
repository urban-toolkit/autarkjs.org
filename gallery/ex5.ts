import { AutkSpatialDb } from '@urban-toolkit/autk-db';
import { AutkComputeEngine } from '@urban-toolkit/autk-compute';
import { AutkMap } from '@urban-toolkit/autk-map';

import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

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

export class ComputeFunction {
    protected map!: AutkMap;
    protected db!: AutkSpatialDb;

    public async run(canvas: HTMLCanvasElement): Promise<void> {
        setLoadingState(
            'Initializing spatial database...',
            'Preparing the in-browser data environment.'
        );

        this.db = new AutkSpatialDb();
        await this.db.init();

        setLoadingState(
            'Loading neighborhood dataset...',
            'Importing Manhattan neighborhoods from GeoJSON.'
        );

        await this.db.loadCustomLayer({
            geojsonFileUrl: '/data/mnt_neighs.geojson',
            outputTableName: 'neighborhoods',
            coordinateFormat: 'EPSG:3395',
        });

        setLoadingState(
            'Computing derived attribute...',
            'Applying a compute function over neighborhood properties.'
        );

        let geojson = await this.db.getLayer('neighborhoods');

        const compute = new AutkComputeEngine();
        geojson = await compute.gpgpuPipeline({
            collection: geojson,
            variableMapping: {
                x: 'shape_area',
                y: 'shape_leng',
            },
            resultField: 'result',
            wgslBody: 'return x / y;',
        });

        setLoadingState(
            'Initializing map...',
            'Preparing the thematic rendering context.'
        );

        this.map = new AutkMap(canvas);
        await this.map.init();

        setLoadingState(
            'Rendering computed thematic layer...',
            'Coloring neighborhoods by the computed result attribute.'
        );

        this.map.loadCollection('neighborhoods', { collection: geojson });
        await this.updateThematicData(geojson);
        this.map.draw();

        hideLoading();
    }

    protected async updateThematicData(geojson: FeatureCollection<Geometry, GeoJsonProperties>) {
        this.map.updateThematic('neighborhoods', {
            collection: geojson,
            property: 'properties.compute.result',
        });
        this.map.updateRenderInfo('neighborhoods', { isColorMap: true });
    }
}

async function main() {
    try {
        const canvas = document.querySelector('canvas');
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas element not found.');
        }

        const example = new ComputeFunction();
        await example.run(canvas);
    } catch (error) {
        console.error(error);

        showError(
            'Failed to load the compute example.',
            'Please verify the dataset path and reload the page.'
        );
    }
}

main();