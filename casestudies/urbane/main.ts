import './main.css';
import { Feature, FeatureCollection, GeoJsonProperties } from 'geojson';
import { SpatialDb } from 'autk-db';
import { AutkMap, LayerType, MapEvent, VectorLayer } from 'autk-map';
import { ParallelCoordinates, TableVis, PlotEvent } from 'autk-plot';
import { GeojsonCompute } from 'autk-compute';

export class Urbane {
    protected map!: AutkMap;
    protected db!: SpatialDb;
    protected table!: TableVis;
    protected parallel!: ParallelCoordinates;

    protected neighs!: FeatureCollection;
    protected activeBuildings!: FeatureCollection;

    protected distance: number = 1000;
    protected currentLevel: 'neighborhoods' | 'active_buildings' = 'neighborhoods';
    protected selectedNeighIds: number[] = [];

    protected mapCanvas!: HTMLCanvasElement;
    protected plotDivTable!: HTMLElement;
    protected plotDivParallel!: HTMLElement;

    public datasets: string[] = ['arrest', 'new_building', 'noise', 'restaurants', 'school', 'subway', 'tree'];
    public weights: number[] = [0.3, 0.2, 0.0, 0.5, 0.0, 0.0, 0.0];

    public async run(canvas: HTMLCanvasElement, plotDivParallel: HTMLElement, plotDivTable: HTMLElement): Promise<void> {
        this.mapCanvas = canvas;
        this.plotDivParallel = plotDivParallel;
        this.plotDivTable = plotDivTable;

        await this.loadDb();
        await this.loadMap();
        this.reloadPlot();

        this.updateMapListeners();
        this.updatePlotListeners();
    }

    // Troquei loadCsv por GeoJSON (loadCustomLayer), o que mudou o modelo de dados; por isso criei uma tabela auxiliar com point_id para manter o mesmo spatialJoin + count, sem alterar a lógica do Autark.
    // ── Adicionado em 22-03-2026 ──────────────────────────────────────────────────────────────

    protected parseCsv(text: string): Record<string, string>[] {
        const rows: string[][] = [];
        let current = '';
        let row: string[] = [];
        let inQuotes = false;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const next = text[i + 1];

            if (char === '"') {
                if (inQuotes && next === '"') {
                    current += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
                continue;
            }

            if (char === ',' && !inQuotes) {
                row.push(current);
                current = '';
                continue;
            }

            if ((char === '\n' || char === '\r') && !inQuotes) {
                if (char === '\r' && next === '\n') i++;
                row.push(current);
                current = '';

                if (row.some((cell) => cell.trim() !== '')) {
                    rows.push(row);
                }
                row = [];
                continue;
            }

            current += char;
        }

        if (current.length > 0 || row.length > 0) {
            row.push(current);
            if (row.some((cell) => cell.trim() !== '')) {
                rows.push(row);
            }
        }

        if (rows.length === 0) return [];

        const headers = rows[0].map((h) => h.trim());
        return rows.slice(1).map((values) => {
            const obj: Record<string, string> = {};
            headers.forEach((header, idx) => {
                obj[header] = (values[idx] ?? '').trim();
            });
            return obj;
        });
    }

    protected async loadCsvAsPointLayer(dataset: string): Promise<void> {
        const response = await fetch(`/data/${dataset}_manhattan_clean.csv`);
        if (!response.ok) {
            throw new Error(`Failed to fetch dataset: ${dataset}`);
        }

        const text = await response.text();
        const rows = this.parseCsv(text);

        const geojson: FeatureCollection = {
            type: 'FeatureCollection',
            features: rows
                .map((row) => {
                    const longitude = Number(row.longitude);
                    const latitude = Number(row.latitude);

                    if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) {
                        return null;
                    }

                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        properties: {
                            ...row,
                        },
                    } as Feature;
                })
                .filter((feature): feature is Feature => feature !== null),
        };

        const blob = new Blob(
            [JSON.stringify(geojson)],
            { type: 'application/geo+json' }
        );
        const blobUrl = URL.createObjectURL(blob);

        try {
            await this.db.loadCustomLayer({
                geojsonFileUrl: blobUrl,
                outputTableName: dataset,
                coordinateFormat: 'EPSG:3395',
            });
        } finally {
            URL.revokeObjectURL(blobUrl);
        }
    }

    // ── Fim 22-03-2026 ──────────────────────────────────────────────────────────────

    // ── Adicionado em 22-03-2026 ──────────────────────────────────────────────────────────────

    protected async materializePointDataset(dataset: string): Promise<string> {
        const tableName = `${dataset}_pts`;

        await this.db.rawQuery({
            query: `
                SELECT
                    geometry,
                    properties,
                    (ROW_NUMBER() OVER ()) AS point_id
                FROM ${dataset}
            `,
            output: {
                type: 'CREATE_TABLE',
                tableName,
                source: 'user',
            },
        });

        return tableName;
    }

    // ── Fim 22-03-2026 ──────────────────────────────────────────────────────────────
    
    // ── Database ──────────────────────────────────────────────────────────────

    protected async loadDb(): Promise<void> {
        this.db = new SpatialDb();
        await this.db.init();

        await this.db.loadOsmFromOverpassApi({
            queryArea: { geocodeArea: 'New York', areas: ['Manhattan Island'] },
            outputTableName: 'table_osm',
            autoLoadLayers: {
                coordinateFormat: 'EPSG:3395',
                layers: ['surface', 'parks', 'water', 'roads', 'buildings'] as Array<
                    'surface' | 'parks' | 'water' | 'roads' | 'buildings'
                >,
                dropOsmTable: true,
            },
        });

        await this.db.loadCustomLayer({
            geojsonFileUrl: '/data/mnt_neighs.geojson',
            outputTableName: 'neighborhoods',
            coordinateFormat: 'EPSG:3395',
        });

        await this.db.spatialJoin({
            tableRootName: 'table_osm_buildings',
            tableJoinName: 'neighborhoods',
            spatialPredicate: 'INTERSECT',
            output: { type: 'MODIFY_ROOT' },
            joinType: 'LEFT',
        });

        for (const dataset of this.datasets) {
            await this.loadCsvAsPointLayer(dataset);
            
            const pointTable = await this.materializePointDataset(dataset);
            
            await this.db.spatialJoin({
                tableRootName: 'neighborhoods',
                //tableJoinName: dataset, alterado em 22/03/2026
                tableJoinName: pointTable,
                spatialPredicate: 'INTERSECT',
                output: { type: 'MODIFY_ROOT' },
                joinType: 'LEFT',
                groupBy: {
                    selectColumns: [{
                        //tableName: dataset, alterado em 22/03/2026
                        tableName: pointTable,
                        // column: 'key', alterado em 22/03/2026
                        column: 'point_id',
                        aggregateFn: 'count',
                        normalize: true,
                    }],
                },
            });
        }

        this.neighs = await this.computeScore(await this.db.getLayer('neighborhoods'));
    }

    // ── Compute ───────────────────────────────────────────────────────────────

    protected async computeScore(geojson: FeatureCollection): Promise<FeatureCollection> {
        const variableMapping = Object.fromEntries(
            this.datasets.map(d => [d, `sjoin.count.${d}_norm`])
        );
        const invertedDatasets = new Set(['arrest', 'noise']);
        const wglsFunction = `return ${this.datasets.map((d, i) => `${invertedDatasets.has(d) ? `(1.0 - ${d})` : d} * ${this.weights[i]}`).join(' + ')};`;

        return new GeojsonCompute().computeFunctionIntoProperties({
            geojson,
            variableMapping,
            outputColumnName: 'score',
            wglsFunction,
        });
    }

    // ── Map ───────────────────────────────────────────────────────────────────

    protected async loadMap(): Promise<void> {
        this.map = new AutkMap(this.mapCanvas);
        await this.map.init();

        for (const layerData of this.db.getLayerTables()) {
            const geojson = layerData.name === 'neighborhoods'
                ? this.neighs
                : await this.db.getLayer(layerData.name);
            this.map.loadGeoJsonLayer(layerData.name, geojson, layerData.type as LayerType);
        }

        this.map.updateRenderInfoProperty('table_osm_buildings', 'isSkip', true);
        this.map.updateRenderInfoProperty('neighborhoods', 'opacity', 0.75);
        this.map.updateRenderInfoProperty('neighborhoods', 'isPick', true);
        this.map.draw();
    }

    protected updateThematicData(column: string): void {
        const layerId = this.currentLevel;
        const geojson = this.currentLevel === 'neighborhoods' ? this.neighs : this.activeBuildings;

        if (column === 'none') {
            this.map.updateRenderInfoProperty(layerId, 'isColorMap', false);
            this.map.draw();
            return;
        }

        const getFnv = (feature: Feature) => {
            const parts = column.split('.');
            let value: any = feature.properties as GeoJsonProperties;
            for (const part of parts) value = value?.[part];
            return value || 0;
        };

        this.map.updateGeoJsonLayerThematic(layerId, geojson, getFnv, this.currentLevel === 'active_buildings');
        this.map.updateRenderInfoProperty(layerId, 'isColorMap', true);
    }

    // ── Plot ──────────────────────────────────────────────────────────────────

    protected reloadPlot(): void {
        this.plotDivParallel.innerHTML = '';
        this.plotDivTable.innerHTML = '';

        const attributes = [...this.datasets.map(d => `sjoin.count.${d}`), 'compute.score'];
        const axisLabels = [...this.datasets, 'Score'];
        const plotData = this.currentLevel === 'neighborhoods' ? this.neighs : this.activeBuildings;
        const titleCol = this.currentLevel === 'neighborhoods' ? 'ntaname' : 'addr:street';
        const title = `${this.currentLevel} characteristics`;

        this.parallel = new ParallelCoordinates({
            div: this.plotDivParallel,
            data: plotData,
            attributes,
            labels: { axis: axisLabels, title },
            width: 790,
            events: [PlotEvent.BRUSH_Y],
        });

        this.table = new TableVis({
            div: this.plotDivTable,
            data: plotData,
            attributes: [titleCol, ...attributes],
            labels: { axis: ['Id', ...axisLabels], title },
            width: 790,
            events: [PlotEvent.CLICK],
        });
    }

    // ── Event Listeners ───────────────────────────────────────────────────────

    protected updateMapListeners(): void {
        this.map.mapEvents.addEventListener(MapEvent.PICK, (selection: string[] | number[]) => {
        const normalizedSelection = selection.map((id) =>
            typeof id === 'string' ? Number(id) : id
        );

        if (this.currentLevel === 'neighborhoods') {
            this.selectedNeighIds = normalizedSelection;
        }

        this.table.setHighlightedIds(normalizedSelection);
        this.parallel.setHighlightedIds(normalizedSelection);
        });
    }

    protected updatePlotListeners(): void {
        this.table.plotEvents.addEventListener(PlotEvent.CLICK, (selection: number[]) => {
            if (this.currentLevel === 'neighborhoods')
                this.selectedNeighIds = selection;

            (<VectorLayer>this.map.layerManager.searchByLayerId(this.currentLevel))!.setHighlightedIds(selection);
            this.parallel.setHighlightedIds(selection);
        });

        this.parallel.plotEvents.addEventListener(PlotEvent.BRUSH_Y, (selection: number[]) => {
            if (this.currentLevel === 'neighborhoods')
                this.selectedNeighIds = selection;

            (<VectorLayer>this.map.layerManager.searchByLayerId(this.currentLevel))!.setHighlightedIds(selection);
            this.table.setHighlightedIds(selection);
        });
    }

    // ── Weights ───────────────────────────────────────────────────────────────

    public async updateWeights(newWeights: number[]): Promise<void> {
        this.weights = newWeights;

        const rawLayer = await this.db.getLayer(this.currentLevel);
        if (this.currentLevel === 'neighborhoods')
            this.neighs = await this.computeScore(rawLayer);
        else
            this.activeBuildings = await this.computeScore(rawLayer);

        this.reloadPlot();
        this.updatePlotListeners();

        const thematicSelect = document.querySelector('#thematicSelect') as HTMLSelectElement;
        this.updateThematicData(thematicSelect.value);
    }

    // ── Drill-down ────────────────────────────────────────────────────────────

    protected async updateBuildingsSelection(): Promise<void> {
        const source = this.selectedNeighIds.length > 0
            ? this.selectedNeighIds.map(id => this.neighs.features[id])
            : this.neighs.features;

        const inList = [...new Set(source.map(f => f?.properties?.ntaname))]
            .map(n => `'${n.replace(/'/g, "''")}'`)
            .join(', ');

        await this.db.rawQuery({
            query: `
                WITH grouped AS (
                    SELECT building_id,
                           ST_Union_Agg(geometry) AS geometry,
                           ANY_VALUE(properties)  AS properties
                    FROM   table_osm_buildings
                    WHERE  properties->'sjoin'->>'ntaname' IN (${inList})
                    GROUP  BY building_id
                )
                SELECT geometry, properties, (ROW_NUMBER() OVER () - 1) AS building_id
                FROM   grouped
            `,
            output: { type: 'CREATE_TABLE', tableName: 'active_buildings', source: 'osm', tableType: LayerType.AUTK_OSM_BUILDINGS },
        });

        for (const dataset of this.datasets) {
            await this.db.spatialJoin({
                tableRootName: 'active_buildings',
                tableJoinName: dataset,
                spatialPredicate: 'NEAR',
                nearDistance: this.distance,
                nearUseCentroid: true,
                output: { type: 'MODIFY_ROOT' },
                joinType: 'LEFT',
                groupBy: {
                    selectColumns: [{
                        tableName: dataset,
                        //column: 'key', alterado em 23/03/2026
                        column: 'properties',
                        aggregateFn: 'count',
                        normalize: true,
                    }],
                },
            });
        }

        this.activeBuildings = await this.computeScore(await this.db.getLayer('active_buildings'));
    }

    public async drillDown(): Promise<void> {
        if (this.currentLevel === 'neighborhoods' && this.selectedNeighIds.length === 0) {
            alert('Please select at least one neighborhood to drill down into its buildings.');
            return;
        }

        const btn = document.querySelector('#levelBtn') as HTMLButtonElement;
        const thematicSelect = document.querySelector('#thematicSelect') as HTMLSelectElement;
        const iconDown = document.querySelector('#levelBtnDown') as HTMLElement;
        const iconUp = document.querySelector('#levelBtnUp') as HTMLElement;

        btn.disabled = true;

        if (this.currentLevel === 'neighborhoods') {
            this.currentLevel = 'active_buildings';
            await this.updateBuildingsSelection();

            this.map.loadGeoJsonLayer('active_buildings', this.activeBuildings, LayerType.AUTK_OSM_BUILDINGS);
            this.map.updateRenderInfoProperty('neighborhoods', 'isSkip', true);
            this.map.updateRenderInfoProperty('neighborhoods', 'isPick', false);
            this.map.updateRenderInfoProperty('active_buildings', 'isSkip', false);
            this.map.updateRenderInfoProperty('active_buildings', 'isPick', true);

            iconDown.style.display = 'none';
            iconUp.style.display = '';
            btn.title = 'Back to neighborhoods';
        } else {
            this.currentLevel = 'neighborhoods';
            this.selectedNeighIds = [];

            await this.db.removeLayer('active_buildings');
            
            const activeBuildingsLayer = this.map.layerManager.searchByLayerId('active_buildings');

            if (activeBuildingsLayer) {
                this.map.updateRenderInfoProperty('active_buildings', 'isSkip', true);
                this.map.updateRenderInfoProperty('active_buildings', 'isPick', false);
            }
            
            this.map.updateRenderInfoProperty('neighborhoods', 'isSkip', false);
            this.map.updateRenderInfoProperty('neighborhoods', 'isPick', true);

            iconDown.style.display = '';
            iconUp.style.display = 'none';
            btn.title = 'Drill into buildings';
        }

        this.map.draw();
        this.reloadPlot();
        this.updatePlotListeners();
        this.updateThematicData(thematicSelect.value);

        btn.disabled = false;
    }
}

async function main() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const plotDivParallel = document.querySelector('#plotBodyParallel') as HTMLElement;
    const plotDivTable = document.querySelector('#plotBodyTable') as HTMLElement;

    if (!canvas || !plotDivParallel || !plotDivTable) {
        console.error('Canvas or plot body element not found');
        return;
    }

    const urbane = new Urbane();
    await urbane.run(canvas, plotDivParallel, plotDivTable);

    (window as any).urbane = urbane;
    window.dispatchEvent(new CustomEvent('urbane-ready'));
}
main();