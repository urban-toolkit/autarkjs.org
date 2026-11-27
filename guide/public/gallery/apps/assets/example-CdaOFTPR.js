import{e as ht,s as En,m as ut,a as wn}from"./catalog-BUTThS0V.js";const yt=`
var total = 0.0;
for (var n = road.index; n < road.next; n++) {
    let line = road_node(n);
    if line.kind != 3u { continue; } // LineString
    for (var i = line.pointStart; i + 1u < line.pointEnd; i++) {
        total += distance(road_points[i].xy, road_points[i + 1u].xy);
    }
}
return total;
`.trim();function kn(a,i){const u=i["source-select"]||"osmLight",n=i.variant;switch(a){case"D01":{const[f,h,E]=n==="lines"?["neighborhood-boundaries",", type: 'polylines'",`map.updateRenderInfo('neighborhood-boundaries', { polylinesWidth: 120 });
`]:n==="points"?["neighborhood-centers",", type: 'points'",`map.updateRenderInfo('neighborhood-centers', { pointSize: 160 });
`]:["neighborhoods","",""];return`map.loadCollection('${f}', { collection${h} });
${E}`}case"D02":return`const map = new AutkMap(canvas, { crs: '${i.crs||"EPSG:3395"}' });
map.loadCollection('community-areas', {
  collection,              // longitude/latitude
  sourceCrs: 'EPSG:4326',  // projected into the workspace CRS
});`;case"D03":{const f=i.workspace||"paris",[h,E,S]=f==="new_york"?["new_york","geojsonObject: collection","neighborhoods"]:f==="chicago"?["chicago","geojsonObject: collection","community_areas"]:["paris","geojsonFileUrl: '/data/paris-arrondissements.geojson'","arrondissements"];return`await db.setWorkspace('${h}');
await db.loadGeojson({ ${E}, outputTableName: '${S}' });
map.loadCollection('${S}', { collection: await db.getLayer('${S}') });`}case"D04":return`const wkt = { wktColumnName: 'wkt' };
await db.loadCsv({ csvFileUrl: '/data/london-boroughs.csv',
  outputTableName: 'boroughs', geometryColumns: wkt });
await db.loadJson({ jsonFileUrl: '/data/london-tube-lines.json',
  outputTableName: 'tube_lines', geometryColumns: wkt });
await db.loadCsv({ csvFileUrl: '/data/london-tube-entrances.csv',
  outputTableName: 'tube_entrances',
  geometryColumns: { latColumnName: 'lat', longColumnName: 'lon' } });`;case"D06":return`await db.loadOsm({
  pbfFileUrl: '/data/monaco.osm.pbf',
  queryArea: ${n==="place"||n==="tags"?"{ geocodeArea: 'Monaco', areas: ['Monaco'] }":"{ bbox: [7.405, 43.720, 7.445, 43.7525] }"},${n==="tags"?`
  tagSets: [{ name: 'cafes', type: 'points', tags: [{ key: 'amenity', value: 'cafe' }] }],`:""}
  autoLoadLayers: { layers: ${n==="tags"?"['surface', 'parks', 'water', 'roads']":"['surface', 'parks', 'water', 'roads', 'buildings']"} },
});`;case"I01":return`map.updateRenderInfo('table_osm_buildings', { isClick: true });
map.events.on(MapEvent.CLICK, ({ selection }) => {
  const picked = selection.map(id => buildings.features[id]);
  console.log(picked.length, 'buildings selected');
});`;case"I02":return`const hidden = new Set<number>();
map.events.on(MapEvent.CLICK, ({ selection }) => {
  for (const id of selection) hidden.add(id);
  map.setSkipped('table_osm_buildings', [...hidden]);
});
map.setSkipped('table_osm_buildings', []); // restore all`;case"I03":return`// Reset the camera on every frame; eye and lookAt move along the path.
const step = () => {
  map.camera.resetCamera([0, 0, 1], lookAt, eye);
  map.requestRender();
  requestAnimationFrame(step);
};
requestAnimationFrame(step);`;case"S01":return n==="category"?`// Explicit color per category, in domain order.
map.updateColorMap('ortsteile', { colorMap: {
  interpolator: ColorMapInterpolator.CAT_PAIRED,
  domainSpec: { type: ColorMapDomainStrategy.USER, params: bezirke },
} });
map.updateThematic('ortsteile', { collection: ortsteile, property: 'properties.bezirk' });
map.updateRenderInfo('ortsteile', { isColorMap: true });`:`map.updateColorMap('ortsteile', { colorMap: {
  interpolator: ColorMapInterpolator.${n==="diverging"?"DIV_RED_BLUE":"SEQ_BLUES"},
  domainSpec: { type: ColorMapDomainStrategy.PERCENTILE },
} });
map.updateThematic('ortsteile', { collection: ortsteile, property: 'properties.area_km2' });
map.updateRenderInfo('ortsteile', { isColorMap: true });`;case"S03":return`// Before init(): the style applies to every layer loaded after it.
map.style.setPredefinedStyle('${n||"google"}');`;case"S04":return`map.updateRenderInfo('table_osm_buildings', { opacity: ${i.opacity||"0.75"} });
map.updateRenderInfo('salzburg-districts', {
  opacity: ${i["district-opacity"]||"0.30"},
  showBorders: ${i["show-borders"]!=="false"},
});`;case"B01":return`map.loadTiles('imagery', { source: TILE_SOURCES.${u} });
map.updateRenderInfo('imagery', { isSkip: ${i["show-tiles"]==="false"} });`;case"B02":return`map.loadTiles('imagery', { source: TILE_SOURCES.osmLight });
map.loadCollection('table_osm_surface', { collection, type: 'polygons' });
// An opaque surface would cover the imagery beneath the vectors.
map.updateRenderInfo('table_osm_surface', { isSkip: true });`;case"B03":return n==="rgb"?`await db.loadGeoTiff({ geotiffFileUrl: '/data/lisbon-corine-2018-rgb.tif',
  sourceCrs: 'EPSG:4326', outputTableName: 'land_cover', resampleMethod: 'nearest' });
map.loadCollection('land_cover', {
  collection: await db.getRaster('land_cover'),
  type: 'raster',
  property: ['band_1', 'band_2', 'band_3'], // RGB bands
});`:`await db.loadGeoTiff({ geotiffFileUrl: '/data/lisbon-population-2020.tif',
  sourceCrs: 'EPSG:4326', outputTableName: 'population' });
map.loadCollection('population', {
  collection: await db.getRaster('population'),
  type: 'raster',
  property: 'band_1',
});`;case"T01":return"map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });";case"T02":return`map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
map.loadTiles('imagery', { source: TILE_SOURCES.${u} });
map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });`;case"T03":return`map.loadTiles('imagery', { source: TILE_SOURCES.osmLight });
map.updateRenderInfo('table_osm_surface', { isSkip: true });
map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });`;case"T04":return`await db.loadGeoTiff({ geotiffFileUrl: '/data/niteroi-elevation.tif',
  sourceCrs: 'EPSG:3395', outputTableName: 'elevation' });
map.loadTerrain({ source: { collection: await db.getRaster('elevation'), property: 'band_1' } });`;case"P10":return`const timeline = new AutkPlot(timelineHost, {
  type: 'linechart', collection,
  attributes: { axis: ['hourly'], series: 'group' },
  transform: { preset: 'reduce-series', options: { reducer: 'sum' } },
  scales: { x: { domain: hours } },
  events: [PlotEvent.CLICK, PlotEvent.BRUSH],
});
timeline.setAnnotations([
  { id: 'overnight', type: 'band', x: [hours[0], hours[5]], label: 'Overnight' },
  { id: 'mean', type: 'line', y: 'mean', label: 'Mean hourly rate' },
  { id: 'peak', type: 'point', series: 'Weekends', x: hours[peak], label: 'Weekend peak' },
]);
// The hexbin and line chart share original report indexes, not aggregate rows.
timeline.events.on(PlotEvent.BRUSH, ({ selection }) => locations.setSelection(selection));
locations.events.on(PlotEvent.CLICK, ({ selection }) => timeline.setSelection(selection));`;case"P11":return`const timeline = new AutkPlot(timelineHost, {
  type: 'linechart', collection: profile(trips),
  attributes: { axis: ['series'], series: 'airport' },
  transform: { preset: 'reduce-series' },
  scales: { x: { domain: hourBuckets } },
  events: [PlotEvent.BRUSH_X],
});
timeline.events.on(PlotEvent.BRUSH_X, ({ extent }) => {
  const x = extent?.data?.x;
  const selected = x?.kind === 'categorical' ? new Set(x.keys.map(key => hourBuckets.indexOf(key))) : null;
  histogram.updateCollection(distribution(trips, selected));
});`;case"P12":return`// Use the same numeric domains in both cohorts for a fair comparison.
const weekday = new AutkPlot(weekdayHost, {
  type: 'scatterplot', collection: weekdayTrips, scales: bounds,
  attributes: { axis: ['minutes', 'fare'] }, events: [PlotEvent.BRUSH],
});
weekday.setAnnotations([
  { id: 'fit', type: 'line', fit: 'linear', label: 'Fit' },
  { id: 'centroid', type: 'point', x: 'mean', y: 'mean', label: 'Centroid' },
]);
// The hourly view stores weekday trips first; weekend IDs are offset accordingly.
weekday.events.on(PlotEvent.BRUSH, ({ selection }) => hourly.setSelection(selection));
weekend.events.on(PlotEvent.BRUSH, ({ selection }) =>
  hourly.setSelection(selection.map(id => id + weekdayTrips.features.length)));`;case"P01":return ne("barchart","{ axis: ['ntaname', 'shape_area'] }","CLICK");case"P02":return ne("scatterplot","{ axis: ['shape_area', 'shape_leng'] }","BRUSH");case"P03":return ne("barchart","{ axis: ['shape_area', '@transform'] }","BRUSH_X","{ preset: 'binning-1d', options: { bins: 10 } }");case"P04":return ne("heatmatrix","{ axis: ['shape_area', 'shape_leng'], color: '@transform' }","CLICK","{ preset: 'binning-2d' }");case"P05":return ne("table","{ axis: ['ntaname', 'shape_area', 'shape_leng'] }","CLICK","{ preset: 'sort', options: { direction: 'asc' } }");case"P06":return ne("parallel-coordinates","{ axis: ['shape_area', 'shape_leng', 'cdta2020'] }","BRUSH_Y");case"P07":return ne("linechart","{ axis: ['sjoin.collect.noise', '@transform'] }","BRUSH_X","{ preset: 'binning-events', options: { timestamp: 'date', resolution: 'day', reducer: 'count' } }",n==="roads"?"roads":"neighborhoods");case"P08":return ne("boxplot","{ axis: ['cdta2020', 'shape_area', '@transform'] }","CLICK","{ preset: 'box-stats' }");case"P09":return`const scatter = new AutkPlot(document.querySelector('#plotScatter')!, {
  type: 'scatterplot', collection, attributes: { axis: ['shape_area', 'shape_leng'] },
  events: [PlotEvent.BRUSH],
});
const histogram = new AutkPlot(document.querySelector('#plotHistogram')!, {
  type: 'barchart', collection, attributes: { axis: ['shape_area', '@transform'] },
  transform: { preset: 'binning-1d', options: { bins: 10 } },
  events: [PlotEvent.CLICK],
});

scatter.events.on(PlotEvent.BRUSH, ({ selection }) => {
  map.setSelection('neighborhoods', selection);
  histogram.setSelection(selection);
});`;case"A01":return`await db.spatialQuery({
  tableRootName: 'neighborhoods',
  tableJoinName: 'noise',
  groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
});
map.updateThematic('neighborhoods', {
  collection: await db.getLayer('neighborhoods'),
  property: 'properties.sjoin.count.noise',
});
map.updateRenderInfo('neighborhoods', { isColorMap: true });`;case"A02":return`const groupBy = [{ column: 'Unique Key', aggregateFn: 'count' }];
for (const table of ['noise', 'parking']) {
  await db.spatialQuery({ tableRootName: 'neighborhoods', tableJoinName: table, groupBy });
}
// Both counts are available on the same neighborhood collection.
const neighborhoods = await db.getLayer('neighborhoods');
const complaint = document.querySelector<HTMLSelectElement>('#select')!;
const updateThematic = () => map.updateThematic('neighborhoods', {
  collection: neighborhoods,
  property: \`properties.sjoin.count.\${complaint.value}\`,
});
updateThematic();
map.updateRenderInfo('neighborhoods', { isColorMap: true });
complaint.addEventListener('change', updateThematic);`;case"A03":return`await db.spatialQuery({
  tableRootName: ${n==="buildings"?"'table_osm_buildings'":"'table_osm_roads'"},
  tableJoinName: 'noise',
  near: { distance: 200 },
  groupBy: [{ column: 'key', aggregateFn: 'count' }],
});`;case"A04":return`await db.buildHeatmap({
  tableJoinName: 'noise',
  near: { distance: 200 },
  outputTableName: 'heatmap',
  grid: { rows: ${n==="fine"?120:60}, columns: ${n==="fine"?120:60} },
  smoothingSigma: ${n==="fine"?3:1.5},
  groupBy: [{ column: 'key', aggregateFn: 'count' }],
});
map.loadCollection('heatmap', {
  collection: await db.getRaster('heatmap'), type: 'raster', property: 'band_1',
});
map.updateRenderInfo('heatmap', { opacity: 0.5, isColorMap: true });`;case"A05":return`const layer = ${n==="roads"?"'table_osm_roads'":"'neighborhoods'"};
const result = await new ComputeGpgpu().run({
  collection: await db.getLayer(layer),
  variableMapping: ${n==="roads"?"{ road: 'geometry' }":"{ x: 'shape_area', y: 'shape_leng' }"},
  resultField: 'result',
  wgslBody: ${n==="roads"?`\`
${yt}
\``:"'return (4 * 3.1415927 * x) / (y * y);'"},
});
map.updateThematic(layer, { collection: result, property: 'properties.compute.result' });
map.updateRenderInfo(layer, { isColorMap: true });`;case"A06":return`const result = await new ComputeRender().run({
  layers: [{ id: 'table_osm_buildings', collection: buildings, type: 'buildings' }],
  viewpoints: { collection: roads, sampling: { directions: 1 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
});
// Each road viewpoint gets a share of sky in properties.compute.render.classes.sky.
map.updateThematic('table_osm_roads', {
  collection: result, property: 'properties.compute.render.classes.sky',
});`;case"A07":return`const result = await new ComputeRender().run({
  layers: [
    { id: 'table_osm_parks', collection: parks, type: 'parks' },
    { id: 'table_osm_water', collection: water, type: 'water' },
  ],
  // One viewpoint per window of the picked building.
  viewpoints: { collection: picked, strategy: { type: 'building-windows', floors: 3 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
  tileSize: 32,
});`;case"A08":return`const result = await new ComputeRender().run({
  layers: [{
    id: 'table_osm_buildings',
    collection: scene,
    type: 'buildings',
    objectIdProperty: '_renderObjectId',
  }],
  viewpoints: { collection: picked, sampling: { directions: 36 } },
  aggregation: { type: 'objects' },
  tileSize: 64,
});
// Each viewpoint reports every sampled building under compute.render.objects.
const objects = result.features[0].properties?.compute?.render?.objects ?? {};`;default:throw new Error(`Missing code excerpt for ${a}`)}}function ne(a,i,u,n,f="neighborhoods"){const h=u!=="CLICK",E=(h?[u,"HOVER"]:["CLICK","HOVER"]).map(_=>`PlotEvent.${_}`).join(", "),S=h?`plot.events.on(PlotEvent.${u}, ({ selection }) => map.setSelection('${f}', selection));`:`plot.events.on(PlotEvent.CLICK, ({ selection }) => map.setSelection('${f}', selection));`;return`const plot = new AutkPlot(document.querySelector('#plotBody')!, {
  type: '${a}',
  collection,
  attributes: ${i},${n?`
  transform: ${n},`:""}
  events: [${E}],
});

map.updateRenderInfo('neighborhoods', { isHover: true });
map.events.on(MapEvent.CLICK, ({ selection }) => plot.setSelection(selection));
map.events.on(MapEvent.HOVER, ({ selection, source }) => {
  if (source === 'pointer') plot.setHover(selection);
});
${S}
plot.events.on(PlotEvent.HOVER, ({ selection }) => map.setHover('${f}', selection));`}const Sn=`import { csvParse } from 'd3-dsv';
import type { FeatureCollection, LineString, MultiPolygon, Point, Polygon } from 'geojson';
import { lonLatToCrs } from '@urban-toolkit/autk-core';
import { AutkMap, MapEvent } from '@urban-toolkit/autk-map';

const DATA_URL = \`\${import.meta.env.BASE_URL}data/\`;
export const airports = [132, 138];
export const origins = [237, 186, 79, 87, ...airports];
export const destinations = [161, 162, 163, 164, 186, 230];
export const hours = Array.from({ length: 24 }, (_, hour) => \`\${String(hour).padStart(2, '0')}:00\`);
export const hourBuckets = hours.map(hour => \`2000-01-01T\${hour}:00Z\`);

export type TaxiTrip = { hour: number; weekend: boolean; minutes: number; fare: number };
export type TaxiZone = { id: number; name: string; center: [number, number] };
export type TaxiZones = FeatureCollection<Polygon | MultiPolygon, TaxiZone>;

export async function loadTaxiData() {
    const [tripsResponse, zonesResponse] = await Promise.all([
        fetch(\`\${DATA_URL}taxi-gallery-trips.csv\`), fetch(\`\${DATA_URL}taxi-gallery-zones.geojson\`),
    ]);
    if (!tripsResponse.ok || !zonesResponse.ok) throw new Error('Could not load the bundled NYC taxi data.');
    const [csv, zoneData]: [string, TaxiZones] = await Promise.all([tripsResponse.text(), zonesResponse.json()]);
    const routes = new Map<string, TaxiTrip[]>();
    for (const row of csvParse(csv)) {
        const key = \`\${row.pickup}:\${row.dropoff}\`;
        if (!routes.has(key)) routes.set(key, []);
        routes.get(key)!.push({ hour: +row.hour, weekend: row.weekend === '1', minutes: +row.seconds / 60, fare: +row.cents / 100 });
    }
    const zones = new Map(zoneData.features.map(feature => [feature.properties.id, feature.properties]));
    return { routes, zones, zoneData };
}

export function chartCollection<T extends Record<string, unknown>>(rows: T[]): FeatureCollection<Point, T> {
    return { type: 'FeatureCollection', features: rows.map(properties => ({
        type: 'Feature', geometry: { type: 'Point', coordinates: [0, 0] }, properties,
    })) };
}

/** Accessible zone selectors mirror the map and continue to work without WebGPU. */
export function zoneOptions(select: HTMLSelectElement, ids: number[], zones: Map<number, TaxiZone>, value: number): void {
    select.replaceChildren(...ids.map(id => new Option(zones.get(id)!.name, String(id))));
    select.value = String(value);
}

export async function taxiMap(zoneData: TaxiZones, selectable: number[], pick: (id: number) => void, cityOnly = false) {
    const canvas = document.querySelector<HTMLCanvasElement>('#taxi-map')!;
    const status = document.querySelector<HTMLElement>('#taxi-map-status')!;
    const map = new AutkMap(canvas, { crs: 'EPSG:3857', showUi: false });
    const features = zoneData.features.filter(feature => selectable.includes(feature.properties.id));
    const zones = new Map(zoneData.features.map(feature => [feature.properties.id, feature.properties]));
    let active: number[] = [];
    let hasLinks = false;
    let compactView = cityOnly;
    const frame = (compact: boolean) => {
        const lower = compact ? [-74.02, 40.697] : [-74.05, 40.625];
        const upper = compact ? [-73.95, 40.797] : [-73.73, 40.805];
        const [x0, y0] = lonLatToCrs(map.workspaceCrs, lower[0], lower[1]);
        const [x1, y1] = lonLatToCrs(map.workspaceCrs, upper[0], upper[1]);
        map.fitBounds([x0, y0, x1, y1]);
    };
    try {
        await map.init();
        map.loadCollection('city', { collection: { ...zoneData, features: zoneData.features.filter(feature => !features.includes(feature)) }, sourceCrs: 'EPSG:4326' });
        map.updateRenderInfo('city', { opacity: 0.29, showBorders: true });
        map.loadCollection('choices', { collection: { ...zoneData, features }, sourceCrs: 'EPSG:4326' });
        map.updateRenderInfo('choices', { isClick: true, showBorders: true });
        frame(compactView);
        map.draw();
        status.textContent = 'Double-click a taxi zone';
    } catch {
        status.textContent = 'Map unavailable. Use the zone selectors.';
        canvas.hidden = true;
        map.destroy();
        return undefined;
    }
    map.events.on(MapEvent.CLICK, ({ layerId, selection }) => {
        if (layerId !== 'choices') return;
        const changed = selection.length ? selection.find(i => !active.includes(i)) ?? active.find(i => !selection.includes(i)) : undefined;
        if (changed !== undefined && features[changed]) pick(features[changed].properties.id);
        map.setSelection('choices', active);
    });
    return {
        show(pickups: number[], destination: number, routeColors?: {
            labels: readonly string[]; colorMap: import('@urban-toolkit/autk-core').ColorMapOptions;
        }) {
            active = features.flatMap(({ properties }, i) => pickups.includes(properties.id) || properties.id === destination ? [i] : []);
            if (hasLinks) map.removeLayer('links');
            const links: FeatureCollection<LineString> = { type: 'FeatureCollection', features: pickups.map((id, i) => ({
                type: 'Feature', geometry: { type: 'LineString', coordinates: [zones.get(id)!.center, zones.get(destination)!.center] },
                properties: routeColors ? { route: routeColors.labels[i] } : {},
            })) };
            map.loadCollection('links', { collection: links, type: 'polylines', sourceCrs: 'EPSG:4326' });
            const compact = cityOnly && !pickups.some(id => airports.includes(id));
            if (compact !== compactView) {
                frame(compact);
                compactView = compact;
            }
            if (routeColors) {
                map.updateColorMap('links', { colorMap: routeColors.colorMap });
                map.updateThematic('links', { collection: links, property: 'properties.route' });
                map.updateRenderInfo('links', { isColorMap: true, opacity: 1, polylinesWidth: 220 });
            } else {
                map.updateRenderInfo('links', { opacity: 0.8, polylinesWidth: compact ? 45 : 100 });
            }
            hasLinks = true;
            map.setSelection('choices', active);
        },
        destroy: () => map.destroy(),
    };
}
`,_n=`import { csvParse } from 'd3-dsv';
import type { FeatureCollection, Point } from 'geojson';
import { ColorMapDomainStrategy } from '@urban-toolkit/autk-core';
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot';
import { onExampleDispose, runExample } from '../example';

const groups = ['Weekdays', 'Weekends'] as const;
const hours = Array.from({ length: 24 }, (_, hour) => \`2000-01-01T\${String(hour).padStart(2, '0')}:00:00Z\`);
const timeLabel = (key: string) => key.slice(11, 16);

type Report = { date: string; hour: number; group: typeof groups[number]; longitude: number; latitude: number };

async function main(): Promise<() => void> {
    const response = await fetch(\`\${import.meta.env.BASE_URL}data/noise_manhattan_clean.csv\`);
    if (!response.ok) throw new Error(\`Unable to load Manhattan noise reports (\${response.status}).\`);
    const reports: Report[] = [];
    for (const row of csvParse(await response.text())) {
        const time = /^(\\d{2})\\/(\\d{2})\\/(\\d{4}) (\\d{1,2}):\\d{2}:\\d{2} (AM|PM)$/.exec(row.date);
        if (!time || !row.longitude.trim() || !row.latitude.trim()) continue;
        const [, month, day, year, clock, period] = time;
        const weekday = new Date(Date.UTC(+year, +month - 1, +day)).getUTCDay();
        const longitude = Number(row.longitude), latitude = Number(row.latitude);
        if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) continue;
        reports.push({ date: \`\${year}-\${month}-\${day}\`, hour: +clock % 12 + (period === 'PM' ? 12 : 0),
            group: weekday === 0 || weekday === 6 ? 'Weekends' : 'Weekdays', longitude, latitude });
    }
    if (reports.length === 0) throw new Error('No valid reports in the sample.');
    const days = new Map(groups.map(group => [group, new Set(reports.filter(row => row.group === group).map(row => row.date)).size]));
    const collection: FeatureCollection<Point> = {
        type: 'FeatureCollection', features: reports.map(report => ({
            type: 'Feature', geometry: { type: 'Point', coordinates: [report.longitude, report.latitude] },
            properties: { ...report, hourly: [{ timestamp: hours[report.hour], value: 1 / days.get(report.group)! }] },
        })),
    };
    // Use the same source indexes in both plots: each source feature is one report.
    const timeline = new AutkPlot(document.querySelector<HTMLElement>('#noiseTimeline')!, {
        type: 'linechart', collection, width: 'auto', height: 360,
        attributes: { axis: ['hourly'], series: 'group' },
        transform: { preset: 'reduce-series', options: { reducer: 'sum' } },
        scales: { x: { domain: hours } },
        ticks: { x: { label: key => +key.slice(11, 13) % 3 === 0 ? timeLabel(key) : '' } },
        labels: { title: '', axis: ['Hour of day (local)', 'Reports per day'] },
        margins: { top: 38, right: 20, bottom: 62, left: 58 },
        style: { colorMap: { type: 'categorical', colors: ['#126a82', '#aa4619'],
            domainSpec: { type: ColorMapDomainStrategy.USER, params: [...groups] } } },
        events: [PlotEvent.CLICK, PlotEvent.BRUSH],
    });
    const locations = new AutkPlot(document.querySelector<HTMLElement>('#noiseLocations')!, {
        type: 'hexbin', collection, width: 'auto', height: 360,
        attributes: { axis: ['longitude', 'latitude'], color: '@transform' },
        transform: { preset: 'binning-hex', options: { radius: 10 } },
        labels: { title: '', axis: ['Longitude', 'Latitude'] },
        margins: { top: 20, right: 25, bottom: 52, left: 72 },
        ticks: { x: { format: '.2f', count: 4 }, y: { format: '.2f', count: 5 } },
        style: { colorMap: { type: 'sequential', colors: ['#d4e5e8', '#4c7b88', '#244857'] } },
        events: [PlotEvent.CLICK],
    });

    const weekendCounts = Array<number>(24).fill(0);
    for (const report of reports) if (report.group === 'Weekends') weekendCounts[report.hour]++;
    const peak = weekendCounts.indexOf(Math.max(...weekendCounts));
    timeline.setAnnotations([
        { id: 'overnight', type: 'band', x: [hours[0], hours[5]], label: 'Overnight', color: '#126a82' },
        { id: 'mean', type: 'line', y: 'mean', label: 'Mean hourly rate', color: '#526073' },
        { id: 'peak', type: 'point', series: 'Weekends', x: hours[peak], label: 'Weekend peak' },
    ]);
    document.querySelector<HTMLElement>('[data-example-status]')!.textContent = \`\${days.get('Weekdays')} weekdays · \${days.get('Weekends')} weekend days\`;
    for (const event of [PlotEvent.CLICK, PlotEvent.BRUSH] as const) {
        timeline.events.on(event, ({ selection }) => locations.setSelection(selection));
    }
    locations.events.on(PlotEvent.CLICK, ({ selection }) => timeline.setSelection(selection));
    return () => { timeline.destroy(); locations.destroy(); };
}

void runExample(async () => onExampleDispose(await main()), true);
`,Cn=`import { ColorMapDomainStrategy } from '@urban-toolkit/autk-core';
import type { ColorMapOptions } from '@urban-toolkit/autk-core';
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot';
import { onExampleDispose, runExample } from '../example';
import { airports, chartCollection, destinations, hourBuckets, hours, loadTaxiData, taxiMap, zoneOptions } from './reference-data';
import type { TaxiTrip } from './reference-data';

const groups = ['JFK', 'LaGuardia'];
const colorMap: ColorMapOptions = { type: 'categorical', colors: ['#126a82', '#ad501f'],
    domainSpec: { type: ColorMapDomainStrategy.USER, params: groups } };
const binWidth = 15;
const bins = Array.from({ length: 8 }, (_, i) => \`\${i * binWidth}–\${(i + 1) * binWidth}\`);

function profile(trips: TaxiTrip[][]) {
    return chartCollection(trips.flatMap((cohort, airport) => hours.flatMap((hour, index) => {
        const values = cohort.filter(trip => trip.hour === index).map(trip => trip.minutes).sort((a, b) => a - b);
        if (!values.length) return [];
        const value = (values[Math.floor((values.length - 1) / 2)] + values[Math.floor(values.length / 2)]) / 2;
        return [{ airport: groups[airport], hour, count: values.length, value, series: [{ timestamp: hourBuckets[index], value }] }];
    })));
}

function distribution(trips: TaxiTrip[][], selectedHours: Set<number> | null) {
    return chartCollection(trips.flatMap((cohort, airport) => {
        const selected = selectedHours ? cohort.filter(trip => selectedHours.has(trip.hour)) : cohort;
        const counts = new Array<number>(bins.length).fill(0);
        for (const trip of selected) counts[Math.min(bins.length - 1, Math.floor(trip.minutes / binWidth))]++;
        return selected.length === 0 ? [] : bins.map((bin, i) => ({ bin, airport: groups[airport], share: counts[i] / selected.length }));
    }));
}

async function main(): Promise<() => void> {
    const { routes, zones, zoneData } = await loadTaxiData();
    let destination = 161;
    const routeTrips = () => airports.map(airport => routes.get(\`\${airport}:\${destination}\`) ?? []);
    let trips = routeTrips();
    let points = profile(trips);
    const destinationControl = document.querySelector<HTMLSelectElement>('#taxi-destination')!;
    const summary = document.querySelector<HTMLElement>('#taxi-route-status')!;
    const pointStatus = document.querySelector<HTMLElement>('#taxi-point-status')!;
    const distributionStatus = document.querySelector<HTMLElement>('#taxi-hours-status')!;
    const timeline = new AutkPlot(document.querySelector<HTMLElement>('#taxi-timeline')!, {
        type: 'linechart', collection: points, width: 'auto', height: 325,
        attributes: { axis: ['series'], series: 'airport' }, transform: { preset: 'reduce-series' },
        scales: { x: { domain: hourBuckets } }, ticks: { x: { label: key => +key.slice(11, 13) % 4 === 0 ? key.slice(11, 16) : '' } },
        labels: { title: '', axis: ['Pickup hour (NYC local time)', 'Median minutes'] },
        margins: { top: 34, right: 18, bottom: 56, left: 58 }, style: { colorMap },
        events: [PlotEvent.HOVER, PlotEvent.BRUSH_X, PlotEvent.CLICK],
    });
    timeline.setAnnotations([{ id: 'morning', type: 'band', x: [hourBuckets[7], hourBuckets[9]], label: 'Morning rush', color: '#126a82' }]);
    const histogram = new AutkPlot(document.querySelector<HTMLElement>('#taxi-distribution')!, {
        type: 'barchart', collection: distribution(trips, null), width: 'auto', height: 325,
        attributes: { axis: ['bin', 'share'], series: 'airport' }, scales: { x: { domain: bins }, y: { domain: [0, 1] } },
        ticks: { x: { label: key => key }, y: { format: '.0%' } },
        labels: { axis: ['Trip duration (minutes)', 'Share of trips'] },
        margins: { top: 34, right: 16, bottom: 53, left: 58 }, style: { colorMap },
    });
    const showHours = (selection: number[] | null) => {
        const selected = selection ? new Set(selection) : null;
        const counts = trips.map(cohort => selected ? cohort.filter(trip => selected.has(trip.hour)).length : cohort.length);
        histogram.updateCollection(distribution(trips, selected));
        const label = selected ? [...selected].sort((a, b) => a - b).map(hour => hours[hour]).join(', ') || 'No pickup hours' : 'All pickup hours';
        distributionStatus.textContent = \`\${label} · \${counts[0].toLocaleString('en-US')} JFK · \${counts[1].toLocaleString('en-US')} LaGuardia\`;
    };
    const updateLabels = () => {
        const total = trips.reduce((count, cohort) => count + cohort.length, 0);
        summary.textContent = \`\${total.toLocaleString('en-US')} trips to \${zones.get(destination)!.name}\`;
        pointStatus.textContent = 'Hover a point for its trip count. Click an hour or brush across the timeline.';
    };
    const map = await taxiMap(zoneData, [...airports, ...destinations], id => {
        if (destinations.includes(id) && id !== destination) {
            destinationControl.value = String(id);
            destinationControl.dispatchEvent(new Event('change'));
        }
    });
    const onDestination = () => {
        destination = Number(destinationControl.value);
        trips = routeTrips();
        points = profile(trips);
        timeline.updateCollection(points);
        showHours(null);
        updateLabels();
        map?.show(airports, destination, { labels: groups, colorMap });
    };
    zoneOptions(destinationControl, destinations, zones, destination);
    destinationControl.addEventListener('change', onDestination);
    timeline.events.on(PlotEvent.BRUSH_X, ({ extent }) => {
        const x = extent?.data?.x;
        showHours(x?.kind === 'categorical' ? x.keys.map(key => hourBuckets.indexOf(key)).filter(hour => hour >= 0) : null);
    });
    timeline.events.on(PlotEvent.CLICK, ({ selection }) => showHours(selection.length
        ? selection.map(id => hours.indexOf(points.features[id].properties.hour)) : null));
    timeline.events.on(PlotEvent.HOVER, ({ selection }) => {
        const point = points.features[selection[0]]?.properties;
        if (!point) { updateLabels(); return; }
        pointStatus.textContent = \`\${point.airport} · \${point.hour} · \${point.value.toFixed(1)} min median · \${point.count.toLocaleString('en-US')} trips\`;
    });
    map?.show(airports, destination, { labels: groups, colorMap });
    updateLabels();
    showHours(null);
    return () => { destinationControl.removeEventListener('change', onDestination); timeline.destroy(); histogram.destroy(); map?.destroy(); };
}

void runExample(async () => onExampleDispose(await main()), true);
`,vn=`import { ColorMapDomainStrategy } from '@urban-toolkit/autk-core';
import type { ColorMapOptions } from '@urban-toolkit/autk-core';
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot';
import { onExampleDispose, runExample } from '../example';
import { chartCollection, destinations, hours, loadTaxiData, origins, taxiMap, zoneOptions } from './reference-data';
import type { TaxiTrip } from './reference-data';

const limit = 400;
const labels = ['Weekday', 'Weekend'];
const colors = ['#126a82', '#ad501f'] as const;

async function main(): Promise<() => void> {
    const { routes, zones, zoneData } = await loadTaxiData();
    const pickupControl = document.querySelector<HTMLSelectElement>('#taxi-pickup')!;
    const destinationControl = document.querySelector<HTMLSelectElement>('#taxi-destination')!;
    const roleControl = document.querySelector<HTMLSelectElement>('#taxi-role')!;
    const status = document.querySelector<HTMLElement>('#taxi-route-status')!;
    const sampleStatus = document.querySelector<HTMLElement>('#taxi-sample-status')!;
    const scatterHosts = ['#taxi-weekday', '#taxi-weekend'].map(id => document.querySelector<HTMLElement>(id)!);
    const hourHost = document.querySelector<HTMLElement>('#taxi-hourly')!;
    let pickup = 237, destination = 230;
    let plots: AutkPlot[] = [];
    const map = await taxiMap(zoneData, [...new Set([...origins, ...destinations])], id => {
        if (roleControl.value === 'pickup' && origins.includes(id) && id !== destination) {
            pickupControl.value = String(id);
            updateRoute();
        } else if (roleControl.value === 'destination' && destinations.includes(id) && id !== pickup) {
            destinationControl.value = String(id);
            updateRoute();
        }
    }, true);

    function updateRoute() {
        pickup = Number(pickupControl.value);
        destination = Number(destinationControl.value);
        if (destination === pickup) destination = destinations.find(id => id !== pickup)!;
        zoneOptions(destinationControl, destinations.filter(id => id !== pickup), zones, destination);
        plots.forEach(plot => plot.destroy());
        const trips = routes.get(\`\${pickup}:\${destination}\`) ?? [];
        const cohorts: TaxiTrip[][] = [trips.filter(trip => !trip.weekend), trips.filter(trip => trip.weekend)];
        const sampled = cohorts.map(cohort => cohort.slice(0, limit));
        const rows = sampled.map((cohort, index) => cohort.map(trip => ({ ...trip, cohort: labels[index], hourLabel: hours[trip.hour] })));
        const combined = rows.flat();
        const bounds = {
            x: { domain: [0, Math.max(5, Math.ceil(Math.max(...combined.map(trip => trip.minutes)) / 5) * 5)] as [number, number] },
            y: { domain: [0, Math.max(5, Math.ceil(Math.max(...combined.map(trip => trip.fare)) / 5) * 5)] as [number, number] },
        };
        const style: { colorMap: ColorMapOptions; radius: number } = { radius: 3, colorMap: {
            type: 'categorical', colors, domainSpec: { type: ColorMapDomainStrategy.USER, params: labels },
        } };
        const scatters = rows.map((cohort, i) => {
            const plot = new AutkPlot(scatterHosts[i], {
                type: 'scatterplot', collection: chartCollection(cohort), width: 'auto', height: 290,
                attributes: { axis: ['minutes', 'fare'], color: 'cohort' }, scales: bounds, style,
                labels: { axis: ['Trip duration (minutes)', 'Metered fare ($)'] },
                margins: { top: 16, right: 18, bottom: 48, left: 60 }, events: [PlotEvent.BRUSH, PlotEvent.CLICK],
            });
            plot.setAnnotations([
                { id: 'fit', type: 'line', fit: 'linear', label: 'Fit', color: '#384859' },
                { id: 'centroid', type: 'point', x: 'mean', y: 'mean', label: 'Centroid', color: '#384859' },
            ]);
            return plot;
        });
        const hourly = new AutkPlot(hourHost, {
            type: 'barchart', collection: chartCollection(combined), width: 'auto', height: 235,
            attributes: { axis: ['hourLabel', '@transform'] }, transform: { preset: 'binning-1d', options: { reducer: 'count' } },
            scales: { x: { domain: hours } }, ticks: { x: { label: hour => +hour.slice(0, 2) % 3 === 0 ? hour : '' } },
            labels: { title: '', axis: ['Pickup hour (NYC local time)', 'Sampled trips'] },
            margins: { top: 14, right: 20, bottom: 52, left: 58 }, events: [PlotEvent.CLICK],
        });
        const offset = sampled[0].length;
        const setStatus = (selected: number) => {
            sampleStatus.textContent = \`\${sampled[0].length} weekday · \${sampled[1].length} weekend sampled trips\${selected ? \` · \${selected} selected\` : ''}\`;
        };
        scatters.forEach((scatter, i) => {
            for (const event of [PlotEvent.BRUSH, PlotEvent.CLICK] as const) {
                scatter.events.on(event, ({ selection }) => {
                    scatters[1 - i].setSelection([]);
                    hourly.setSelection(selection.map(id => id + (i === 1 ? offset : 0)));
                    setStatus(selection.length);
                });
            }
        });
        hourly.events.on(PlotEvent.CLICK, ({ selection }) => {
            scatters[0].setSelection(selection.filter(id => id < offset));
            scatters[1].setSelection(selection.filter(id => id >= offset).map(id => id - offset));
            setStatus(selection.length);
        });
        plots = [...scatters, hourly];
        status.textContent = \`\${zones.get(pickup)!.name} → \${zones.get(destination)!.name} · \${trips.length.toLocaleString('en-US')} trips before sampling\`;
        setStatus(0);
        map?.show([pickup], destination);
    }

    zoneOptions(pickupControl, origins, zones, pickup);
    zoneOptions(destinationControl, destinations, zones, destination);
    for (const select of [pickupControl, destinationControl]) select.addEventListener('change', updateRoute);
    updateRoute();
    return () => {
        for (const select of [pickupControl, destinationControl]) select.removeEventListener('change', updateRoute);
        plots.forEach(plot => plot.destroy());
        map?.destroy();
    };
}

void runExample(async () => onExampleDispose(await main()), true);
`;function pt(a,i){const u=i["source-select"]||"osmLight",n=i.variant;switch(a){case"D01":{const[f,h,E,S]=n==="lines"?["neighborhood-boundaries","mnt_neigh_boundaries",", type: 'polylines'","polylinesWidth: 120"]:n==="points"?["neighborhood-centers","mnt_neigh_centers",", type: 'points'","pointSize: 160"]:["neighborhoods","mnt_neighs_proj","",""];return`import { AutkMap } from '@urban-toolkit/autk-map';

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();

const collection = await fetch('/data/${h}.geojson').then(response => response.json());
map.loadCollection('${f}', { collection${E} });${S?`
map.updateRenderInfo('${f}', { ${S} });`:""}
map.fitBounds();
map.draw();`}case"D02":return`import { AutkMap } from '@urban-toolkit/autk-map';

const map = new AutkMap(document.querySelector('canvas')!, { crs: '${i.crs||"EPSG:3395"}' });
await map.init();
map.setView({ center: { latitude: 41.855, longitude: -87.665 }, zoom: 11 });

// The source is longitude/latitude; the map projects it into the workspace CRS.
const collection = await fetch('/data/chi-community-areas.geojson').then(response => response.json());
map.loadCollection('community-areas', { collection, sourceCrs: 'EPSG:4326' });
map.draw();`;case"D03":{const{workspace:f,table:h,file:E,input:S}=mt[i.workspace||"paris"]??mt.paris,_=S==="url"?`await db.loadGeojson({ geojsonFileUrl: '/data/${E}', outputTableName: '${h}' });`:`const collection = await fetch('/data/${E}').then(response => response.json());
await db.loadGeojson({ geojsonObject: collection, outputTableName: '${h}' });`;return`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap } from '@urban-toolkit/autk-map';

const db = new AutkDb();
await db.init();

// One workspace per city; switching workspaces swaps the visible dataset.
await db.setWorkspace('${f}');
${_}

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
map.loadCollection('${h}', { collection: await db.getLayer('${h}') });
map.fitBounds();
map.draw();`}case"D04":return`${F}
// CSV + WKT: boroughs first, so they set the workspace extent.
await db.loadCsv({ csvFileUrl: '/data/london-boroughs.csv',
  outputTableName: 'boroughs', geometryColumns: { wktColumnName: 'wkt' } });
// JSON + WKT: the same geometry option.
await db.loadJson({ jsonFileUrl: '/data/london-tube-lines.json',
  outputTableName: 'tube_lines', geometryColumns: { wktColumnName: 'wkt' } });
// CSV + coordinates instead of WKT.
await db.loadCsv({ csvFileUrl: '/data/london-tube-entrances.csv',
  outputTableName: 'tube_entrances',
  geometryColumns: { latColumnName: 'lat', longColumnName: 'lon' } });

for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();
map.draw();`;case"D06":return`${F}
await db.loadOsm({
  pbfFileUrl: '/data/monaco.osm.pbf',
  queryArea: ${n==="place"||n==="tags"?"{ geocodeArea: 'Monaco', areas: ['Monaco'] }":"{ bbox: [7.405, 43.720, 7.445, 43.7525] }"},${n==="tags"?`
  tagSets: [{ name: 'cafes', type: 'points', tags: [{ key: 'amenity', value: 'cafe' }] }],`:""}
  autoLoadLayers: { layers: ${n==="tags"?"['surface', 'parks', 'water', 'roads']":"['surface', 'parks', 'water', 'roads', 'buildings']"} },
});

for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();
map.draw();`;case"I01":return`${dt}
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'buildings'] },
});
const buildings = await db.getLayer('table_osm_buildings');
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: name === 'table_osm_buildings'
    ? buildings : await db.getLayer(name), type });
}
map.updateRenderInfo('table_osm_buildings', { isClick: true });
map.fitBounds();

map.events.on(MapEvent.CLICK, ({ selection }) => {
  const picked = selection.map(id => buildings.features[id]);
  const heights = picked.map(feature => Number(feature.properties?.height) || 0);
  console.log(picked.length, 'selected; tallest', Math.max(0, ...heights));
});
map.draw();`;case"I02":return`${dt}
await db.loadOsm({
  pbfFileUrl: '/data/boston-harbor.osm.pbf',
  queryArea: { bbox: [-71.090, 42.340, -71.035, 42.377] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads', 'buildings'] },
});

for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.updateRenderInfo('table_osm_buildings', { isClick: true });
map.fitBounds();

const hidden = new Set<number>();
map.events.on(MapEvent.CLICK, ({ selection }) => {
  for (const id of selection) hidden.add(id);
  map.setSkipped('table_osm_buildings', [...hidden]);
});
// map.setSkipped('table_osm_buildings', []) restores every hidden building.
map.draw();`;case"I03":return`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap } from '@urban-toolkit/autk-map';
import { computeOrigin, lonLatToCrs } from '@urban-toolkit/autk-core';

const db = new AutkDb();
await db.init();
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'roads', 'buildings'] },
});
const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();
map.draw();

// Two points on the route, in map coordinates.
const origin = computeOrigin(await db.getLayer('table_osm_roads'));
const start = lonLatToCrs(map.workspaceCrs, -74.010, 40.707).map((v, i) => v - origin[i]);
const end = lonLatToCrs(map.workspaceCrs, -74.005, 40.710).map((v, i) => v - origin[i]);

// Drive the camera from start to end in 8 seconds.
const began = performance.now();
const step = (time: number) => {
  const t = Math.min((time - began) / 8000, 1);
  const x = start[0] + (end[0] - start[0]) * t;
  const y = start[1] + (end[1] - start[1]) * t;
  map.camera.resetCamera([0, 0, 1], [x + 45, y, 15], [x, y, 12]);
  map.requestRender();
  if (t < 1) requestAnimationFrame(step);
};
requestAnimationFrame(step);`;case"S01":return`${F.replace("import { AutkMap }",`import { ColorMapDomainStrategy, ColorMapInterpolator } from '@urban-toolkit/autk-core';
import { AutkMap }`)}
await db.loadGeojson({ geojsonFileUrl: '/data/berlin-ortsteile.geojson', outputTableName: 'ortsteile' });
const ortsteile = await db.getLayer('ortsteile');
map.loadCollection('ortsteile', { collection: ortsteile });
${n==="category"?`const bezirke = [...new Set(ortsteile.features.map(feature => feature.properties?.bezirk))];
map.updateColorMap('ortsteile', { colorMap: {
  interpolator: ColorMapInterpolator.CAT_PAIRED,
  domainSpec: { type: ColorMapDomainStrategy.USER, params: bezirke },
} });
map.updateThematic('ortsteile', { collection: ortsteile, property: 'properties.bezirk' });`:`map.updateColorMap('ortsteile', { colorMap: {
  interpolator: ColorMapInterpolator.${n==="diverging"?"DIV_RED_BLUE":"SEQ_BLUES"},
  domainSpec: { type: ColorMapDomainStrategy.PERCENTILE },
} });
map.updateThematic('ortsteile', { collection: ortsteile, property: 'properties.area_km2' });`}
map.updateRenderInfo('ortsteile', { isColorMap: true });
map.fitBounds();
map.draw();`;case"S03":return`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap } from '@urban-toolkit/autk-map';

const db = new AutkDb();
await db.init();
await db.loadOsm({
  pbfFileUrl: '/data/venice.osm.pbf',
  queryArea: { bbox: [12.300, 45.420, 12.360, 45.450] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads', 'buildings'] },
});

const map = new AutkMap(document.querySelector('canvas')!);
map.style.setPredefinedStyle('${n||"google"}');
await map.init();
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();
map.draw();`;case"S04":return`${F}
await db.loadOsm({
  pbfFileUrl: '/data/salzburg.osm.pbf',
  queryArea: { bbox: [13.030, 47.790, 13.065, 47.815] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads', 'buildings'] },
});
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
const districts = await fetch('/data/salzburg-districts.geojson').then(response => response.json());
map.loadCollection('salzburg-districts', { collection: districts, sourceCrs: 'EPSG:4326' });

map.updateRenderInfo('table_osm_buildings', { opacity: ${i.opacity||"0.75"} });
map.updateRenderInfo('salzburg-districts', {
  opacity: ${i["district-opacity"]||"0.30"},
  showBorders: ${i["show-borders"]!=="false"},
});
map.fitBounds();
map.draw();`;case"B01":return`${gt}
map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
map.loadTiles('imagery', { source: TILE_SOURCES.${u} });
map.draw();`;case"B02":return`${xn}
await db.loadOsm({
  pbfFileUrl: '/data/niteroi.osm.pbf',
  queryArea: { bbox: [-43.14, -22.97, -43.03, -22.85] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads', 'buildings'] },
});

map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
map.loadTiles('imagery', { source: TILE_SOURCES.osmLight });
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
// An opaque surface would cover the imagery beneath the vectors.
map.updateRenderInfo('table_osm_surface', { isSkip: true });
map.draw();`;case"B03":return n==="rgb"?`${F}
await db.loadGeoTiff({
  geotiffFileUrl: '/data/lisbon-corine-2018-rgb.tif',
  sourceCrs: 'EPSG:4326',
  outputTableName: 'land_cover',
  resampleMethod: 'nearest',
});
map.loadCollection('land_cover', {
  collection: await db.getRaster('land_cover'),
  type: 'raster',
  property: ['band_1', 'band_2', 'band_3'],
});
map.fitBounds();
map.draw();`:`${F.replace("import { AutkMap }",`import { ColorMapDomainStrategy, ColorMapInterpolator } from '@urban-toolkit/autk-core';
import { AutkMap }`)}
await db.loadGeoTiff({
  geotiffFileUrl: '/data/lisbon-population-2020.tif',
  sourceCrs: 'EPSG:4326',
  outputTableName: 'population',
});
map.loadCollection('population', {
  collection: await db.getRaster('population'),
  type: 'raster',
  property: 'band_1',
});
map.updateColorMap('population', { colorMap: {
  interpolator: ColorMapInterpolator.SEQ_YL_OR_RD,
  domainSpec: { type: ColorMapDomainStrategy.PERCENTILE, params: [0, 98] },
} });
map.updateRenderInfo('population', { isColorMap: true });
map.fitBounds();
map.draw();`;case"T01":return`${Mn}
await db.loadOsm({
  pbfFileUrl: '/data/niteroi.osm.pbf',
  queryArea: { bbox: [-43.14, -22.97, -43.03, -22.85] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads', 'buildings'] },
});

map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });
map.draw();`;case"T02":return`${gt}
map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
map.loadTiles('imagery', { source: TILE_SOURCES.${u} });
map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });
map.draw();`.replace("import { AutkMap, TILE_SOURCES }","import { AutkMap, TERRAIN_TILE_SOURCES, TILE_SOURCES }");case"T03":return`${Rn}
await db.loadOsm({
  pbfFileUrl: '/data/niteroi.osm.pbf',
  queryArea: { bbox: [-43.14, -22.97, -43.03, -22.85] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads', 'buildings'] },
});

map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
map.loadTiles('imagery', { source: TILE_SOURCES.osmLight });
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.updateRenderInfo('table_osm_surface', { isSkip: true });
map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium });
map.draw();`;case"T04":return`${F}
await db.loadGeoTiff({
  geotiffFileUrl: '/data/niteroi-elevation.tif',
  sourceCrs: 'EPSG:3395',
  outputTableName: 'elevation',
});
map.setView({ center: { latitude: -22.9, longitude: -43.1 }, zoom: 13 });
map.loadTerrain({ source: { collection: await db.getRaster('elevation'), property: 'band_1' } });
map.draw();`;case"P10":return _n.replace(`import { onExampleDispose, runExample } from '../example';
`,"").replace("void runExample(async () => onExampleDispose(await main()), true);","await main();");case"P11":case"P12":{const h=(a==="P11"?Cn:vn).replace(/^import .* from '\.\.?\/.*';\n/gm,"").replace("void runExample(async () => onExampleDispose(await main()), true);","await main();");return`${Sn.replace("import { lonLatToCrs } from '@urban-toolkit/autk-core';","import { ColorMapDomainStrategy, lonLatToCrs } from '@urban-toolkit/autk-core';")}
${h.replace(`import { ColorMapDomainStrategy } from '@urban-toolkit/autk-core';
`,"")}`}case"P01":return oe("barchart","{ axis: ['ntaname', 'shape_area'] }","CLICK");case"P02":return oe("scatterplot","{ axis: ['shape_area', 'shape_leng'] }","BRUSH");case"P03":return oe("barchart","{ axis: ['shape_area', '@transform'] }","BRUSH_X","{ preset: 'binning-1d', options: { bins: 10 } }");case"P04":return oe("heatmatrix","{ axis: ['shape_area', 'shape_leng'], color: '@transform' }","CLICK","{ preset: 'binning-2d' }");case"P05":return oe("table","{ axis: ['ntaname', 'shape_area', 'shape_leng'] }","CLICK","{ preset: 'sort', options: { direction: 'asc' } }");case"P06":return oe("parallel-coordinates","{ axis: ['shape_area', 'shape_leng', 'cdta2020'] }","BRUSH_Y");case"P07":return oe("linechart","{ axis: ['sjoin.collect.noise', '@transform'] }","BRUSH_X","{ preset: 'binning-events', options: { timestamp: 'date', resolution: 'day', reducer: 'count' } }",n==="roads"?"roads":"neighborhoods");case"P08":return oe("boxplot","{ axis: ['cdta2020', 'shape_area', '@transform'] }","CLICK","{ preset: 'box-stats' }");case"P09":return`import { AutkMap, MapEvent } from '@urban-toolkit/autk-map';
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot';

const collection = await fetch('/data/mnt_neighs_proj.geojson').then(response => response.json());
const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
map.loadCollection('neighborhoods', { collection });
map.updateRenderInfo('neighborhoods', { isClick: true, isHover: true });
map.fitBounds();
map.draw();

const scatter = new AutkPlot(document.querySelector('#plotScatter')!, {
  type: 'scatterplot', collection, attributes: { axis: ['shape_area', 'shape_leng'] },
  events: [PlotEvent.CLICK, PlotEvent.HOVER],
});
const histogram = new AutkPlot(document.querySelector('#plotHistogram')!, {
  type: 'barchart', collection, attributes: { axis: ['shape_area', '@transform'] },
  transform: { preset: 'binning-1d', options: { bins: 10 } },
  events: [PlotEvent.CLICK, PlotEvent.HOVER],
});

scatter.events.on(PlotEvent.CLICK, ({ selection }) => {
  map.setSelection('neighborhoods', selection);
  histogram.setSelection(selection);
});
scatter.events.on(PlotEvent.HOVER, ({ selection }) => {
  map.setHover('neighborhoods', selection);
  histogram.setHover(selection);
});
histogram.events.on(PlotEvent.CLICK, ({ selection }) => {
  map.setSelection('neighborhoods', selection);
  scatter.setSelection(selection);
});
histogram.events.on(PlotEvent.HOVER, ({ selection }) => {
  map.setHover('neighborhoods', selection);
  scatter.setHover(selection);
});

map.events.on(MapEvent.CLICK, ({ selection }) => {
  scatter.setSelection(selection);
  histogram.setSelection(selection);
});
map.events.on(MapEvent.HOVER, ({ selection, source }) => {
  if (source !== 'pointer') return;
  scatter.setHover(selection);
  histogram.setHover(selection);
});`;case"A01":return`${F}
await db.loadGeojson({ geojsonFileUrl: '/data/mnt_neighs.geojson', outputTableName: 'neighborhoods' });
await db.loadCsv({ csvFileUrl: '/data/noise.csv', outputTableName: 'noise', geometryColumns: true });

await db.spatialQuery({
  tableRootName: 'neighborhoods',
  tableJoinName: 'noise',
  groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
});

const neighborhoods = await db.getLayer('neighborhoods');
map.loadCollection('neighborhoods', { collection: neighborhoods });
map.updateThematic('neighborhoods', {
  collection: neighborhoods,
  property: 'properties.sjoin.count.noise',
});
map.updateRenderInfo('neighborhoods', { isColorMap: true });
map.fitBounds();
map.draw();`;case"A02":return`${F}
await db.loadGeojson({ geojsonFileUrl: '/data/mnt_neighs.geojson', outputTableName: 'neighborhoods' });
for (const table of ['noise', 'parking']) {
  await db.loadCsv({ csvFileUrl: \`/data/\${table}.csv\`, outputTableName: table, geometryColumns: true });
  await db.spatialQuery({
    tableRootName: 'neighborhoods',
    tableJoinName: table,
    groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
  });
}

const neighborhoods = await db.getLayer('neighborhoods');
map.loadCollection('neighborhoods', { collection: neighborhoods });
const complaint = document.querySelector<HTMLSelectElement>('#select')!;
const updateThematic = () => map.updateThematic('neighborhoods', {
  collection: neighborhoods,
  property: \`properties.sjoin.count.\${complaint.value}\`,
});
updateThematic();
map.updateRenderInfo('neighborhoods', { isColorMap: true });
complaint.addEventListener('change', updateThematic);
map.fitBounds();
map.draw();`;case"A03":return`${F}
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'roads', 'buildings'] },
});
await db.loadCsv({
  csvFileUrl: '/data/noise_manhattan_clean.csv',
  outputTableName: 'noise',
  geometryColumns: { latColumnName: 'latitude', longColumnName: 'longitude' },
  sourceCrs: 'EPSG:4326',
});

const target = ${n==="buildings"?"'table_osm_buildings'":"'table_osm_roads'"};
await db.spatialQuery({
  tableRootName: target,
  tableJoinName: 'noise',
  near: { distance: 200 },
  groupBy: [{ column: 'key', aggregateFn: 'count' }],
});

const nearby = await db.getLayer(target);
map.loadCollection(target, { collection: nearby, type: ${n==="buildings"?"'buildings'":"'roads'"} });
map.updateThematic(target, { collection: nearby, property: 'properties.sjoin.count.noise' });
map.updateRenderInfo(target, { isColorMap: true });
map.loadCollection('noise', { collection: await db.getLayer('noise'), type: 'points' });
map.updateRenderInfo('noise', { pointSize: 12, color: { r: 46, g: 65, b: 116, alpha: 1 } });
map.fitBounds();
map.draw();`;case"A04":return`${F}
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'roads'] },
});
await db.loadCsv({
  csvFileUrl: '/data/noise_manhattan_clean.csv',
  outputTableName: 'noise',
  geometryColumns: { latColumnName: 'latitude', longColumnName: 'longitude' },
  sourceCrs: 'EPSG:4326',
});

await db.buildHeatmap({
  tableJoinName: 'noise',
  near: { distance: 200 },
  outputTableName: 'heatmap',
  grid: { rows: ${n==="fine"?120:60}, columns: ${n==="fine"?120:60} },
  smoothingSigma: ${n==="fine"?3:1.5},
  groupBy: [{ column: 'key', aggregateFn: 'count' }],
});
map.loadCollection('noise', { collection: await db.getLayer('noise'), type: 'points' });
map.updateRenderInfo('noise', { pointSize: 12, color: { r: 46, g: 65, b: 116, alpha: 1 } });
map.loadCollection('heatmap', {
  collection: await db.getRaster('heatmap'), type: 'raster', property: 'band_1',
});
map.updateRenderInfo('heatmap', { opacity: 0.5, isColorMap: true });
map.fitBounds();
map.draw();`;case"A05":return`${F.replace("import { AutkMap }",`import { ComputeGpgpu } from '@urban-toolkit/autk-compute';
import { AutkMap }`)}
${n==="roads"?`await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['roads'] },
});
const layer = 'table_osm_roads';`:`await db.loadGeojson({ geojsonFileUrl: '/data/mnt_neighs.geojson', outputTableName: 'neighborhoods' });
const layer = 'neighborhoods';`}

const result = await new ComputeGpgpu().run({
  collection: await db.getLayer(layer),
  variableMapping: ${n==="roads"?"{ road: 'geometry' }":"{ x: 'shape_area', y: 'shape_leng' }"},
  resultField: 'result',
  wgslBody: ${n==="roads"?`\`
${yt}
\``:"'return (4 * 3.1415927 * x) / (y * y);'"},
});

map.loadCollection(layer, { collection: result${n==="roads"?", type: 'roads'":""} });
map.updateThematic(layer, { collection: result, property: 'properties.compute.result' });
map.updateRenderInfo(layer, { isColorMap: true });
map.fitBounds();
map.draw();`;case"A06":return`${F.replace("import { AutkMap }",`import { ComputeRender } from '@urban-toolkit/autk-compute';
import { AutkMap }`)}
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'roads', 'buildings'] },
});
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();

const result = await new ComputeRender().run({
  layers: [{
    id: 'table_osm_buildings',
    collection: await db.getLayer('table_osm_buildings'),
    type: 'buildings',
  }],
  viewpoints: { collection: await db.getLayer('table_osm_roads'), sampling: { directions: 1 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
});
map.updateThematic('table_osm_roads', {
  collection: result, property: 'properties.compute.render.classes.sky',
});
map.updateRenderInfo('table_osm_roads', { isColorMap: true });
map.draw();`;case"A07":return`${F.replace("import { AutkMap }",`import { ComputeRender } from '@urban-toolkit/autk-compute';
import { AutkMap }`)}
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'parks', 'water', 'buildings'] },
});
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();

// Three buildings are enough to show the window viewpoints.
const buildings = await db.getLayer('table_osm_buildings');
const picked = { ...buildings, features: buildings.features.slice(0, 3) };
const result = await new ComputeRender().run({
  layers: [
    { id: 'table_osm_parks', collection: await db.getLayer('table_osm_parks'), type: 'parks' },
    { id: 'table_osm_water', collection: await db.getLayer('table_osm_water'), type: 'water' },
  ],
  viewpoints: { collection: picked, strategy: { type: 'building-windows', floors: 3 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
  tileSize: 32,
});
const sky = result.features.map(feature => Number(feature.properties?.compute?.render?.classes?.sky) || 0);
console.log(sky.length, 'windows; max sky exposure', Math.max(0, ...sky));
map.draw();`;case"A08":return`${F.replace("import { AutkMap }",`import { ComputeRender } from '@urban-toolkit/autk-compute';
import { AutkMap }`)}
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: ['surface', 'roads', 'buildings'] },
});
for (const { name, type } of db.getLayersMetadata()) {
  map.loadCollection(name, { collection: await db.getLayer(name), type });
}
map.fitBounds();

const result = await new ComputeRender().run({
  layers: [{
    id: 'table_osm_buildings',
    collection: await db.getLayer('table_osm_buildings'),
    type: 'buildings',
  }],
  viewpoints: { collection: await db.getLayer('table_osm_roads'), sampling: { directions: 8 } },
  aggregation: { type: 'objects' },
  tileSize: 64,
});
// Each viewpoint reports every sampled building under compute.render.objects.
const samples = result.features.reduce((count, feature) =>
  count + Object.keys(feature.properties?.compute?.render?.objects ?? {}).length, 0);
console.log(samples, 'building samples from', result.features.length, 'road viewpoints');
map.draw();`;default:throw new Error(`Missing source excerpt for ${a}`)}}const F=`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap } from '@urban-toolkit/autk-map';

const db = new AutkDb();
await db.init();

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
`,dt=F.replace("import { AutkMap }","import { MapEvent, AutkMap }"),mt={paris:{workspace:"paris",table:"arrondissements",file:"paris-arrondissements.geojson",input:"url"},new_york:{workspace:"new_york",table:"neighborhoods",file:"mnt_neighs.geojson",input:"object"},chicago:{workspace:"chicago",table:"community_areas",file:"chi-community-areas.geojson",input:"object"}},gt=`import { AutkMap, TILE_SOURCES } from '@urban-toolkit/autk-map';

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
`,xn=`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap, TILE_SOURCES } from '@urban-toolkit/autk-map';

const db = new AutkDb();
await db.init();

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
`,Mn=`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap, TERRAIN_TILE_SOURCES } from '@urban-toolkit/autk-map';

const db = new AutkDb();
await db.init();

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
`,Rn=`import { AutkDb } from '@urban-toolkit/autk-db';
import { AutkMap, TILE_SOURCES, TERRAIN_TILE_SOURCES } from '@urban-toolkit/autk-map';

const db = new AutkDb();
await db.init();

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
`;function oe(a,i,u,n,f="neighborhoods"){const h=u!=="CLICK",E=(h?[u,"HOVER"]:["CLICK","HOVER"]).map(_=>`PlotEvent.${_}`).join(", "),S=h?`plot.events.on(PlotEvent.${u}, ({ selection }) => map.setSelection('${f}', selection));`:`plot.events.on(PlotEvent.CLICK, ({ selection }) => map.setSelection('${f}', selection));`;return`import { AutkMap, MapEvent } from '@urban-toolkit/autk-map';
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot';

const collection = await fetch('/data/mnt_neighs_proj.geojson').then(response => response.json());

const map = new AutkMap(document.querySelector('canvas')!);
await map.init();
map.loadCollection('neighborhoods', { collection });
map.updateRenderInfo('neighborhoods', { isClick: true });
map.fitBounds();
map.draw();

const plot = new AutkPlot(document.querySelector('#plotBody')!, {
  type: '${a}',
  collection,
  attributes: ${i},${n?`
  transform: ${n},`:""}
  events: [${E}],
});

map.updateRenderInfo('neighborhoods', { isHover: true });
map.events.on(MapEvent.CLICK, ({ selection }) => plot.setSelection(selection));
map.events.on(MapEvent.HOVER, ({ selection, source }) => {
  if (source === 'pointer') plot.setHover(selection);
});
${S}
plot.events.on(PlotEvent.HOVER, ({ selection }) => map.setHover('${f}', selection));`}function Tn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var qe,bt;function An(){if(bt)return qe;bt=1;function a(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const r=e[t],g=typeof r;(g==="object"||g==="function")&&!Object.isFrozen(r)&&a(r)}),e}class i{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function n(e,...t){const r=Object.create(null);for(const g in e)r[g]=e[g];return t.forEach(function(g){for(const L in g)r[L]=g[L]}),r}const f="</span>",h=e=>!!e.scope,E=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const r=e.split(".");return[`${t}${r.shift()}`,...r.map((g,L)=>`${g}${"_".repeat(L+1)}`)].join(" ")}return`${t}${e}`};class S{constructor(t,r){this.buffer="",this.classPrefix=r.classPrefix,t.walk(this)}addText(t){this.buffer+=u(t)}openNode(t){if(!h(t))return;const r=E(t.scope,{prefix:this.classPrefix});this.span(r)}closeNode(t){h(t)&&(this.buffer+=f)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const _=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class v{constructor(){this.rootNode=_(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const r=_({scope:t});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,r){return typeof r=="string"?t.addText(r):r.children&&(t.openNode(r),r.children.forEach(g=>this._walk(t,g)),t.closeNode(r)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(r=>typeof r=="string")?t.children=[t.children.join("")]:t.children.forEach(r=>{v._collapse(r)}))}}class O extends v{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,r){const g=t.root;r&&(g.scope=`language:${r}`),this.add(g)}toHTML(){return new S(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function x(e){return e?typeof e=="string"?e:e.source:null}function B(e){return A("(?=",e,")")}function G(e){return A("(?:",e,")*")}function X(e){return A("(?:",e,")?")}function A(...e){return e.map(r=>x(r)).join("")}function J(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function k(...e){return"("+(J(e).capture?"":"?:")+e.map(g=>x(g)).join("|")+")"}function T(e){return new RegExp(e.toString()+"|").exec("").length-1}function P(e,t){const r=e&&e.exec(t);return r&&r.index===0}const ae=new RegExp(k(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function K(e,{joinWith:t}){let r=0;return e.map(g=>{r+=1;const L=r;let I=x(g),c="";for(;I.length>0;){const l=ae.exec(I);if(!l){c+=I;break}c+=I.substring(0,l.index),I=I.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?c+="\\"+String(Number(l[1])+L):(c+=l[0],(l[0]==="("||/^\(\?[<']/.test(l[0]))&&r++)}return c}).map(g=>`(${g})`).join(t)}const re=/\b\B/,he="[a-zA-Z]\\w*",ue="[a-zA-Z_]\\w*",ye="\\b\\d+(\\.\\d+)?",Ee="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",we="\\b(0b[01]+)",Ne="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Oe=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=A(t,/.*\b/,e.binary,/\b.*/)),n({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(r,g)=>{r.index!==0&&g.ignoreMatch()}},e)},se={begin:"\\\\[\\s\\S]",relevance:0},Pe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[se]},ke={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[se]},$e={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},U=function(e,t,r={}){const g=n({scope:"comment",begin:e,end:t,contains:[]},r);g.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const L=k("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return g.contains.push({begin:A(/[ ]+/,"(",L,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),g},Q=U("//","$"),ie=U("/\\*","\\*/"),pe=U("#","$"),ge={scope:"number",begin:ye,relevance:0},Se={scope:"number",begin:Ee,relevance:0},Tt={scope:"number",begin:we,relevance:0},At={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[se,{begin:/\[/,end:/\]/,relevance:0,contains:[se]}]},Lt={scope:"title",begin:he,relevance:0},It={scope:"title",begin:ue,relevance:0},Nt={begin:"\\.\\s*"+ue,relevance:0};var _e=Object.freeze({__proto__:null,APOS_STRING_MODE:Pe,BACKSLASH_ESCAPE:se,BINARY_NUMBER_MODE:Tt,BINARY_NUMBER_RE:we,COMMENT:U,C_BLOCK_COMMENT_MODE:ie,C_LINE_COMMENT_MODE:Q,C_NUMBER_MODE:Se,C_NUMBER_RE:Ee,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,r)=>{r.data._beginMatch=t[1]},"on:end":(t,r)=>{r.data._beginMatch!==t[1]&&r.ignoreMatch()}})},HASH_COMMENT_MODE:pe,IDENT_RE:he,MATCH_NOTHING_RE:re,METHOD_GUARD:Nt,NUMBER_MODE:ge,NUMBER_RE:ye,PHRASAL_WORDS_MODE:$e,QUOTE_STRING_MODE:ke,REGEXP_MODE:At,RE_STARTERS_RE:Ne,SHEBANG:Oe,TITLE_MODE:Lt,UNDERSCORE_IDENT_RE:ue,UNDERSCORE_TITLE_MODE:It});function Ot(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Pt(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function $t(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Ot,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Bt(e,t){Array.isArray(e.illegal)&&(e.illegal=k(...e.illegal))}function Dt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Ut(e,t){e.relevance===void 0&&(e.relevance=1)}const Ht=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},e);Object.keys(e).forEach(g=>{delete e[g]}),e.keywords=r.keywords,e.begin=A(r.beforeMatch,B(r.begin)),e.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},e.relevance=0,delete r.beforeMatch},jt=["of","and","for","in","not","or","if","then","parent","list","value"],Ft="keyword";function Ve(e,t,r=Ft){const g=Object.create(null);return typeof e=="string"?L(r,e.split(" ")):Array.isArray(e)?L(r,e):Object.keys(e).forEach(function(I){Object.assign(g,Ve(e[I],t,I))}),g;function L(I,c){t&&(c=c.map(l=>l.toLowerCase())),c.forEach(function(l){const m=l.split("|");g[m[0]]=[I,zt(m[0],m[1])]})}}function zt(e,t){return t?Number(t):qt(e)?0:1}function qt(e){return jt.includes(e.toLowerCase())}const Ze={},le=e=>{console.error(e)},Xe=(e,...t)=>{console.log(`WARN: ${e}`,...t)},de=(e,t)=>{Ze[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ze[`${e}/${t}`]=!0)},Ce=new Error;function Je(e,t,{key:r}){let g=0;const L=e[r],I={},c={};for(let l=1;l<=t.length;l++)c[l+g]=L[l],I[l+g]=!0,g+=T(t[l-1]);e[r]=c,e[r]._emit=I,e[r]._multi=!0}function Gt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw le("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ce;if(typeof e.beginScope!="object"||e.beginScope===null)throw le("beginScope must be object"),Ce;Je(e,e.begin,{key:"beginScope"}),e.begin=K(e.begin,{joinWith:""})}}function Kt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw le("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ce;if(typeof e.endScope!="object"||e.endScope===null)throw le("endScope must be object"),Ce;Je(e,e.end,{key:"endScope"}),e.end=K(e.end,{joinWith:""})}}function Wt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Vt(e){Wt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Gt(e),Kt(e)}function Zt(e){function t(c,l){return new RegExp(x(c),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,m){m.position=this.position++,this.matchIndexes[this.matchAt]=m,this.regexes.push([m,l]),this.matchAt+=T(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(m=>m[1]);this.matcherRe=t(K(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const m=this.matcherRe.exec(l);if(!m)return null;const D=m.findIndex((be,De)=>De>0&&be!==void 0),N=this.matchIndexes[D];return m.splice(0,D),Object.assign(m,N)}}class g{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const m=new r;return this.rules.slice(l).forEach(([D,N])=>m.addRule(D,N)),m.compile(),this.multiRegexes[l]=m,m}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,m){this.rules.push([l,m]),m.type==="begin"&&this.count++}exec(l){const m=this.getMatcher(this.regexIndex);m.lastIndex=this.lastIndex;let D=m.exec(l);if(this.resumingScanAtSamePosition()&&!(D&&D.index===this.lastIndex)){const N=this.getMatcher(0);N.lastIndex=this.lastIndex+1,D=N.exec(l)}return D&&(this.regexIndex+=D.position+1,this.regexIndex===this.count&&this.considerAll()),D}}function L(c){const l=new g;return c.contains.forEach(m=>l.addRule(m.begin,{rule:m,type:"begin"})),c.terminatorEnd&&l.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&l.addRule(c.illegal,{type:"illegal"}),l}function I(c,l){const m=c;if(c.isCompiled)return m;[Pt,Dt,Vt,Ht].forEach(N=>N(c,l)),e.compilerExtensions.forEach(N=>N(c,l)),c.__beforeBegin=null,[$t,Bt,Ut].forEach(N=>N(c,l)),c.isCompiled=!0;let D=null;return typeof c.keywords=="object"&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),D=c.keywords.$pattern,delete c.keywords.$pattern),D=D||/\w+/,c.keywords&&(c.keywords=Ve(c.keywords,e.case_insensitive)),m.keywordPatternRe=t(D,!0),l&&(c.begin||(c.begin=/\B|\b/),m.beginRe=t(m.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(m.endRe=t(m.end)),m.terminatorEnd=x(m.end)||"",c.endsWithParent&&l.terminatorEnd&&(m.terminatorEnd+=(c.end?"|":"")+l.terminatorEnd)),c.illegal&&(m.illegalRe=t(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(N){return Xt(N==="self"?c:N)})),c.contains.forEach(function(N){I(N,m)}),c.starts&&I(c.starts,l),m.matcher=L(m),m}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=n(e.classNameAliases||{}),I(e)}function Ye(e){return e?e.endsWithParent||Ye(e.starts):!1}function Xt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return n(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ye(e)?n(e,{starts:e.starts?n(e.starts):null}):Object.isFrozen(e)?n(e):e}var Jt="11.12.0";class Yt extends Error{constructor(t,r){super(t),this.name="HTMLInjectionError",this.html=r}}const Be=u,Qe=n,et=Symbol("nomatch"),Qt=7,tt=function(e){const t=Object.create(null),r=Object.create(null),g=[];let L=!0;const I="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:O};function m(o){return l.noHighlightRe.test(o)}function D(o){let d=o.className+" ";d+=o.parentNode?o.parentNode.className:"";const w=l.languageDetectRe.exec(d);if(w){const M=ee(w[1]);return M||(Xe(I.replace("{}",w[1])),Xe("Falling back to no-highlight mode for this block.",o)),M?w[1]:"no-highlight"}return d.split(/\s+/).find(M=>m(M)||ee(M))}function N(o,d,w){let M="",$="";typeof d=="object"?(M=o,w=d.ignoreIllegals,$=d.language):(de("10.7.0","highlight(lang, code, ...args) has been deprecated."),de("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=o,M=d),w===void 0&&(w=!0);const W={code:M,language:$};xe("before:highlight",W);const te=W.result?W.result:be(W.language,W.code,w);return te.code=W.code,xe("after:highlight",te),te}function be(o,d,w,M){const $=Object.create(null);function W(s,p){return s.keywords[p]}function te(){if(!b.keywords){H.addText(R);return}let s=0;b.keywordPatternRe.lastIndex=0;let p=b.keywordPatternRe.exec(R),y="";for(;p;){y+=R.substring(s,p.index);const C=Z.case_insensitive?p[0].toLowerCase():p[0],j=W(b,C);if(j){const[Y,hn]=j;if(H.addText(y),y="",$[C]=($[C]||0)+1,$[C]<=Qt&&(Te+=hn),Y.startsWith("_"))y+=p[0];else{const yn=Z.classNameAliases[Y]||Y;V(p[0],yn)}}else y+=p[0];s=b.keywordPatternRe.lastIndex,p=b.keywordPatternRe.exec(R)}y+=R.substring(s),H.addText(y)}function Me(){if(R==="")return;let s=null;if(typeof b.subLanguage=="string"){if(!t[b.subLanguage]){H.addText(R);return}s=be(b.subLanguage,R,!0,ct[b.subLanguage]),ct[b.subLanguage]=s._top}else s=Ue(R,b.subLanguage.length?b.subLanguage:null);b.relevance>0&&(Te+=s.relevance),H.__addSublanguage(s._emitter,s.language)}function z(){b.subLanguage!=null?Me():te(),R=""}function V(s,p){s!==""&&(H.startScope(p),H.addText(s),H.endScope())}function rt(s,p){let y=1;const C=p.length-1;for(;y<=C;){if(!s._emit[y]){y++;continue}const j=Z.classNameAliases[s[y]]||s[y],Y=p[y];j?V(Y,j):(R=Y,te(),R=""),y++}}function st(s,p){return s.scope&&typeof s.scope=="string"&&H.openNode(Z.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(V(R,Z.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),R=""):s.beginScope._multi&&(rt(s.beginScope,p),R="")),b=Object.create(s,{parent:{value:b}}),b}function it(s,p,y){let C=P(s.endRe,y);if(C){if(s["on:end"]){const j=new i(s);s["on:end"](p,j),j.isMatchIgnored&&(C=!1)}if(C){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return it(s.parent,p,y)}function dn(s){return b.matcher.regexIndex===0?(R+=s[0],1):(ze=!0,0)}function mn(s){const p=s[0],y=s.rule,C=new i(y),j=[y.__beforeBegin,y["on:begin"]];for(const Y of j)if(Y&&(Y(s,C),C.isMatchIgnored))return dn(p);return y.skip?R+=p:(y.excludeBegin&&(R+=p),z(),!y.returnBegin&&!y.excludeBegin&&(R=p)),st(y,s),y.returnBegin?0:p.length}function gn(s){const p=s[0],y=d.substring(s.index),C=it(b,s,y);if(!C)return et;const j=b;b.endScope&&b.endScope._wrap?(z(),V(p,b.endScope._wrap)):b.endScope&&b.endScope._multi?(z(),rt(b.endScope,s)):j.skip?R+=p:(j.returnEnd||j.excludeEnd||(R+=p),z(),j.excludeEnd&&(R=p));do b.scope&&H.closeNode(),!b.skip&&!b.subLanguage&&(Te+=b.relevance),b=b.parent;while(b!==C.parent);return C.starts&&st(C.starts,s),j.returnEnd?0:p.length}function bn(){const s=[];for(let p=b;p!==Z;p=p.parent)p.scope&&s.unshift(p.scope);s.forEach(p=>H.openNode(p))}let Re={};function lt(s,p){const y=p&&p[0];if(R+=s,y==null)return z(),0;if(Re.type==="begin"&&p.type==="end"&&Re.index===p.index&&y===""){if(R+=d.slice(p.index,p.index+1),!L){const C=new Error(`0 width match regex (${o})`);throw C.languageName=o,C.badRule=Re.rule,C}return 1}if(Re=p,p.type==="begin")return mn(p);if(p.type==="illegal"&&!w){const C=new Error('Illegal lexeme "'+y+'" for mode "'+(b.scope||"<unnamed>")+'"');throw C.mode=b,C}else if(p.type==="end"){const C=gn(p);if(C!==et)return C}if(p.type==="illegal"&&y==="")return p.index===d.length||(R+=`
`),1;if(Fe>1e5&&Fe>p.index*3)throw new Error("potential infinite loop, way more iterations than matches");return R+=y,y.length}const Z=ee(o);if(!Z)throw le(I.replace("{}",o)),new Error('Unknown language: "'+o+'"');const fn=Zt(Z);let je="",b=M||fn;const ct={},H=new l.__emitter(l);bn();let R="",Te=0,ce=0,Fe=0,ze=!1;try{if(Z.__emitTokens)Z.__emitTokens(d,H);else{for(b.matcher.considerAll();;){Fe++,ze?ze=!1:b.matcher.considerAll(),b.matcher.lastIndex=ce;const s=b.matcher.exec(d);if(!s)break;const p=d.substring(ce,s.index),y=lt(p,s);ce=s.index+y}lt(d.substring(ce))}return H.finalize(),je=H.toHTML(),{language:o,value:je,relevance:Te,illegal:!1,_emitter:H,_top:b}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:o,value:Be(d),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:ce,context:d.slice(ce-100,ce+100),mode:s.mode,resultSoFar:je},_emitter:H};if(L)return{language:o,value:Be(d),illegal:!1,relevance:0,errorRaised:s,_emitter:H,_top:b};throw s}}function De(o){const d={value:Be(o),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return d._emitter.addText(o),d}function Ue(o,d){d=d||l.languages||Object.keys(t);const w=De(o),M=d.filter(ee).filter(at).map(z=>be(z,o,!1));M.unshift(w);const $=M.sort((z,V)=>{if(z.relevance!==V.relevance)return V.relevance-z.relevance;if(z.language&&V.language){if(ee(z.language).supersetOf===V.language)return 1;if(ee(V.language).supersetOf===z.language)return-1}return 0}),[W,te]=$,Me=W;return Me.secondBest=te,Me}function en(o,d,w){const M=d&&r[d]||w;o.classList.add("hljs"),o.classList.add(`language-${M}`)}function He(o){let d=null;const w=D(o);if(m(w))return;if(xe("before:highlightElement",{el:o,language:w}),o.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",o);return}if(o.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(o)),l.throwUnescapedHTML))throw new Yt("One of your code blocks includes unescaped HTML.",o.innerHTML);d=o;const M=d.textContent,$=w?N(M,{language:w,ignoreIllegals:!0}):Ue(M);o.innerHTML=$.value,o.dataset.highlighted="yes",en(o,w,$.language),o.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(o.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),xe("after:highlightElement",{el:o,result:$,text:M})}function tn(o){l=Qe(l,o)}const nn=()=>{ve(),de("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function on(){ve(),de("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let nt=!1;function ve(){function o(){ve()}if(document.readyState==="loading"){nt||window.addEventListener("DOMContentLoaded",o,!1),nt=!0;return}document.querySelectorAll(l.cssSelector).forEach(He)}function an(o,d){let w=null;try{w=d(e)}catch(M){if(le("Language definition for '{}' could not be registered.".replace("{}",o)),L)le(M);else throw M;w=c}w.name||(w.name=o),t[o]=w,w.rawDefinition=d.bind(null,e),w.aliases&&ot(w.aliases,{languageName:o})}function rn(o){delete t[o];for(const d of Object.keys(r))r[d]===o&&delete r[d]}function sn(){return Object.keys(t)}function ee(o){return o=(o||"").toLowerCase(),t[o]||t[r[o]]}function ot(o,{languageName:d}){typeof o=="string"&&(o=[o]),o.forEach(w=>{r[w.toLowerCase()]=d})}function at(o){const d=ee(o);return d&&!d.disableAutodetect}function ln(o){o["before:highlightBlock"]&&!o["before:highlightElement"]&&(o["before:highlightElement"]=d=>{o["before:highlightBlock"](Object.assign({block:d.el},d))}),o["after:highlightBlock"]&&!o["after:highlightElement"]&&(o["after:highlightElement"]=d=>{o["after:highlightBlock"](Object.assign({block:d.el},d))})}function cn(o){ln(o),g.push(o)}function un(o){const d=g.indexOf(o);d!==-1&&g.splice(d,1)}function xe(o,d){const w=o;g.forEach(function(M){M[w]&&M[w](d)})}function pn(o){return de("10.7.0","highlightBlock will be removed entirely in v12.0"),de("10.7.0","Please use highlightElement now."),He(o)}Object.assign(e,{highlight:N,highlightAuto:Ue,highlightAll:ve,highlightElement:He,highlightBlock:pn,configure:tn,initHighlighting:nn,initHighlightingOnLoad:on,registerLanguage:an,unregisterLanguage:rn,listLanguages:sn,getLanguage:ee,registerAliases:ot,autoDetection:at,inherit:Qe,addPlugin:cn,removePlugin:un}),e.debugMode=function(){L=!1},e.safeMode=function(){L=!0},e.versionString=Jt,e.regex={concat:A,lookahead:B,either:k,optional:X,anyNumberOfTimes:G};for(const o in _e)typeof _e[o]=="object"&&a(_e[o]);return Object.assign(e,_e),e},me=tt({});return me.newInstance=()=>tt({}),qe=me,me.HighlightJS=me,me.default=me,qe}var Ln=An();const Et=Tn(Ln),Ae="[A-Za-z$_][0-9A-Za-z$_]*",wt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],kt=["true","false","null","undefined","NaN","Infinity"],St=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],_t=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ct=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],vt=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],xt=[].concat(Ct,St,_t);function In(a){const i=a.regex,u=(U,{after:Q})=>{const ie="</"+U[0].slice(1);return U.input.indexOf(ie,Q)!==-1},n=Ae,f={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,E={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,Q)=>{const ie=U[0].length+U.index,pe=U.input[ie];if(pe==="<"||pe===","){Q.ignoreMatch();return}pe===">"&&(u(U,{after:ie})||Q.ignoreMatch());let ge;const Se=U.input.substring(ie);if(ge=Se.match(/^\s*=/)){Q.ignoreMatch();return}if((ge=Se.match(/^\s+extends\s+/))&&ge.index===0){Q.ignoreMatch();return}}},S={$pattern:Ae,keyword:wt,literal:kt,built_in:xt,"variable.language":vt},_="[0-9](_?[0-9])*",v=`\\.(${_})`,O="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",x={className:"number",variants:[{begin:`(\\b(${O})((${v})|\\.)?|(${v}))[eE][+-]?(${_})\\b`},{begin:`\\b(${O})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},B={className:"subst",begin:"\\$\\{",end:"\\}",keywords:S,contains:[]},G={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,B],subLanguage:"xml"}},X={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,B],subLanguage:"css"}},A={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,B],subLanguage:"graphql"}},J={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,B]},T={className:"comment",variants:[a.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),a.C_BLOCK_COMMENT_MODE,a.C_LINE_COMMENT_MODE]},P=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,G,X,A,J,{match:/\$\d+/},x];B.contains=P.concat({begin:/\{/,end:/\}/,keywords:S,contains:["self"].concat(P)});const ae=[].concat(T,B.contains),K=ae.concat([{begin:/(\s*)\(/,end:/\)/,keywords:S,contains:["self"].concat(ae)}]),re={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:S,contains:K},he={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,i.concat(n,"(",i.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},ue={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...St,..._t]}},ye={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ee={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[re],illegal:/%/},we={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ne(U){return i.concat("(?!",U.join("|"),")")}const Oe={match:i.concat(/\b/,Ne([...Ct,"super","import","await"].map(U=>`${U}\\s*\\(`)),n,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},se={begin:i.concat(/\./,i.lookahead(i.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Pe={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},re]},ke="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",$e={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(ke)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[re]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:S,exports:{PARAMS_CONTAINS:K,CLASS_REFERENCE:ue},illegal:/#(?![$_A-Za-z])/,contains:[a.SHEBANG({label:"shebang",binary:"node",relevance:5}),ye,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,G,X,A,J,T,{match:/\$\d+/},x,ue,{scope:"attr",match:n+i.lookahead(":"),relevance:0},$e,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,a.REGEXP_MODE,{className:"function",begin:ke,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:S,contains:K}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:h},{begin:E.begin,"on:begin":E.isTrulyOpeningTag,end:E.end}],subLanguage:"xml",contains:[{begin:E.begin,end:E.end,skip:!0,contains:["self"]}]}]},Ee,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+a.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[re,a.inherit(a.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},se,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[re]},Oe,we,he,Pe,{match:/\$[(.]/}]}}function Nn(a){const i=a.regex,u=In(a),n=Ae,f=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],h={begin:[/namespace/,/\s+/,a.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},E={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:f},contains:[u.exports.CLASS_REFERENCE]},S={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},_=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],v={$pattern:Ae,keyword:wt.concat(_),literal:kt,built_in:xt.concat(f),"variable.language":vt},O={className:"meta",begin:"@"+n},x=(A,J,k)=>{const T=A.contains.findIndex(P=>P.label===J);if(T===-1)throw new Error("can not find mode to replace");A.contains.splice(T,1,k)};Object.assign(u.keywords,v),u.exports.PARAMS_CONTAINS.push(O);const B=u.contains.find(A=>A.scope==="attr"),G=Object.assign({},B,{match:i.concat(n,i.lookahead(/\s*\?:/))});u.exports.PARAMS_CONTAINS.push([u.exports.CLASS_REFERENCE,B,G]),u.contains=u.contains.concat([O,h,E,G]),x(u,"shebang",a.SHEBANG()),x(u,"use_strict",S);const X=u.contains.find(A=>A.label==="func.def");return X.relevance=0,Object.assign(u,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),u}Et.registerLanguage("typescript",Nn);function Ge(a){return Et.highlight(a,{language:"typescript",ignoreIllegals:!0}).value}const q=ht.find(a=>location.pathname.endsWith(`/${a.path}`));if(new URLSearchParams(location.search).has("embed")){document.documentElement.classList.add("gallery-embed");const a=()=>{const i=Math.ceil(document.documentElement.getBoundingClientRect().height);parent.postMessage({type:"autk-gallery-height",height:i},"*")};new ResizeObserver(a).observe(document.body),addEventListener("load",a),addEventListener("message",i=>{i.data?.type==="autk-gallery-measure"&&a()}),a()}const fe=new Set;let Le,Mt=!1,Ie=!1,Ke=!1;function On(a){fe.add(a)}window.addEventListener("pagehide",()=>{for(const a of fe)a();fe.clear()},{once:!0});if(q){const a=En.find(k=>k.id===q.section);document.title=`Autark — ${q.title}`;const i=document.querySelector(".introduction");if(i){i.querySelector("h1").textContent=q.title,i.querySelector(".description").textContent=q.description,i.querySelector(".eyebrow").textContent=a.title;const k=document.createElement("div");k.className="example-modules";for(const T of q.modules){const P=document.createElement("span");P.className="example-module",P.style.setProperty("--module-color",ut[T].color),P.textContent=ut[T].label,k.append(P)}i.append(k)}const u=document.querySelector(".back-link");if(u){const k=new URL("../../index.html",location.href);try{const T=sessionStorage.getItem("autark-gallery-browse");if(T){const P=new URL(`index.html${T}`,k);k.search=P.search,k.hash=P.hash}}catch{}u.href=k.href}const n=document.querySelector("main"),f=wn(q);if(f.length){const k=document.createElement("p");k.className="service-notice",k.textContent=`Internet required · This example accesses ${f.join("; ")}. Some resources may already be cached in your browser.`,i?.append(k)}const h=document.createElement("section");h.className="example-learning";const E=document.createElement("h2");E.textContent="API in focus";const S=document.createElement("p");S.textContent="The exact calls for this feature. The minimal runnable example below is a self-contained page and may simplify the live demo.";const _=document.createElement("pre");_.className="task-code";const v=document.createElement("code");_.append(v);const O=document.createElement("details");O.className="example-source";const x=document.createElement("summary");x.textContent="Minimal runnable example";const B=document.createElement("pre"),G=document.createElement("code");B.append(G),O.append(x,B);const X=()=>{const k=Object.fromEntries(new URLSearchParams(location.search));return document.querySelectorAll("input[id], select[id], select[data-variant-parameter]").forEach(T=>{const P=T.dataset.variantParameter||T.id;k[P]=T instanceof HTMLInputElement&&T.type==="checkbox"?String(T.checked):T.value}),k},A=()=>{const k=X();v.innerHTML=Ge(kn(q.id,k)),O.dataset.loaded&&(G.innerHTML=Ge(pt(q.id,k)))};document.addEventListener("change",A),document.addEventListener("input",A),document.addEventListener("example-ready",A),A(),h.append(E,S,_),O.addEventListener("toggle",()=>{O.open&&(O.dataset.loaded="true",G.innerHTML=Ge(pt(q.id,X())))}),h.append(O);const J=ht.filter(k=>k.section===q.section&&k.id!==q.id).slice(0,3);if(J.length){const k=document.createElement("h2");k.textContent="Related examples",h.append(k);const T=document.createElement("ul");for(const P of J){const ae=document.createElement("li"),K=document.createElement("a");K.href=new URL(`../../${P.path}`,location.href).href,K.textContent=P.title,ae.append(K),T.append(ae)}h.append(T)}n.insertBefore(h,n.querySelector(".page-footer"))}function ft(a){document.querySelectorAll("select[data-variant-parameter], fieldset.choice-group button").forEach(i=>{i.disabled=a})}function Rt(){if(!(!Le||Ke)){Ke=!0;for(const a of fe)a();fe.clear(),Pn(Le,Mt).finally(()=>{Ke=!1})}}function Un(a,i,u="variant"){const n=new URL(location.href).searchParams.get(u),f=n&&Object.prototype.hasOwnProperty.call(i,n)?n:Object.keys(i)[0],h=[...document.querySelectorAll("select[data-variant-parameter]")].find(v=>v.dataset.variantParameter===u);if(h)return h.value=f,f;const E=document.createElement("div");E.className="controls";const S=document.createElement("label");S.textContent=a;const _=document.createElement("select");_.setAttribute("aria-label",a),_.dataset.variantParameter=u,_.disabled=Ie;for(const[v,O]of Object.entries(i)){const x=document.createElement("option");x.value=v,x.textContent=O,_.append(x)}return _.value=f,_.addEventListener("change",()=>{const v=new URL(location.href);v.searchParams.set(u,_.value),history.replaceState(null,"",v),Rt()}),S.append(_),E.append(S),document.querySelector(".introduction").after(E),f}function Hn(a,i,u="variant"){const n=new URL(location.href).searchParams.get(u),f=n&&Object.prototype.hasOwnProperty.call(i,n)?n:Object.keys(i)[0],h=document.querySelector(`fieldset.choice-group[data-choice-parameter="${u}"]`);if(h)return h.querySelectorAll("button").forEach(v=>{v.setAttribute("aria-pressed",String(v.dataset.choice===f)),v.disabled=Ie}),f;const E=document.createElement("fieldset");E.className="choice-group",E.dataset.choiceParameter=u;const S=document.createElement("legend");S.textContent=a,E.append(S);const _=document.createElement("div");_.setAttribute("role","group"),_.setAttribute("aria-label",a);for(const[v,O]of Object.entries(i)){const x=document.createElement("button");x.type="button",x.textContent=O,x.dataset.choice=v,x.setAttribute("aria-pressed",String(v===f)),x.addEventListener("click",()=>{if(x.getAttribute("aria-pressed")==="true")return;const B=new URL(location.href);B.searchParams.set(u,v),history.replaceState(null,"",B),Rt()}),_.append(x)}return E.append(_),document.querySelector(".details-body")?.prepend(E),f}function We(a,i){document.querySelectorAll("[data-example-status]").forEach(u=>{u.dataset.state=a,i!==void 0&&(u.textContent=i)}),document.querySelectorAll(".map-stage").forEach(u=>u.setAttribute("aria-busy",String(a==="loading")))}async function Pn(a,i=!1){Le||(Le=a,Mt=i),Ie=!0,ft(!0),We("loading","Loading map and data…");try{await a(),$n(),We("ready",i?void 0:"Interactive map")}catch(u){We("error",`Unable to load this example. ${u instanceof Error?u.message:String(u)}`),console.error("Unable to initialize the gallery example:",u)}finally{Ie=!1,ft(!1),document.dispatchEvent(new Event("example-ready"))}}function $n(){document.querySelectorAll("#plotBody").forEach(a=>{const i=()=>{a.querySelectorAll(":scope > svg").forEach(n=>{const f=Number(n.getAttribute("width")),h=Number(n.getAttribute("height"));f>0&&h>0&&(n.setAttribute("viewBox",`0 0 ${f} ${h}`),n.style.width="100%",n.style.height="auto")})};i();const u=new MutationObserver(i);u.observe(a,{childList:!0,subtree:!0}),On(()=>u.disconnect())})}export{yt as R,Hn as a,Un as e,On as o,Pn as r};
