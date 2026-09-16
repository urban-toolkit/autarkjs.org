// Metadata for the grammar examples migrated to autarkjs.org/grammar/examples.
// layout: map | map+plot | multi-map | data
// output: code appended after grammar.run() for data-only examples.

export const GROUPS = [
  'Using the Grammar',
  'Loading Data',
  'Map Layers',
  'OpenStreetMap',
  'Joins and Heatmaps',
  'Compute',
  'Plots',
  'Multiple Views',
]

const pickTip = 'Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.'

export const EXAMPLES = [
  // ── Using the Grammar ─────────────────────────────────────────
  {
    slug: 'embed-spec', group: 'Using the Grammar', layout: 'map+plot', javascript: true, source: 'barchart-click',
    title: 'Embedding a Spec',
    description: 'Every other example shows only its spec. This one shows the whole JavaScript file: import `AutkGrammar`, describe the application as a spec, point the grammar at a canvas and a div, and run it.',
    highlights: ['`new AutkGrammar({ map, plot })` takes the ids of a `<canvas>` and a `<div>`', '`await grammar.run(spec)` loads the data and draws the views', 'the page only needs `<canvas id="map"></canvas>` and `<div id="plot"></div>`'],
    tip: pickTip,
  },
  // ── Loading Data ──────────────────────────────────────────────
  {
    slug: 'load-csv', group: 'Loading Data', layout: 'data',
    title: 'Load CSV',
    description: 'Load a CSV of noise complaints and turn its latitude and longitude columns into point geometry. With no map or plot in the spec, the playground prints the loaded table.',
    highlights: ['`csv` data source with `csvFileUrl`', '`geometryColumns` to build points from latitude and longitude'],
  },
  {
    slug: 'load-multiple', group: 'Loading Data', layout: 'data', dbTarget: true,
    title: 'Load CSV and JSON',
    description: 'Load a CSV and a JSON file into the same spec, creating two tables side by side in the in-browser database.',
    highlights: ['several entries in the `data` array', '`csv` and `json` sources in one spec', 'every table listed as it is loaded'],
  },
  // ── Map Layers ────────────────────────────────────────────────
  {
    slug: 'geojson-vis', group: 'Map Layers', layout: 'map',
    title: 'GeoJSON Polygons',
    description: 'The smallest map spec: load Manhattan neighborhoods from GeoJSON and draw them as a map layer.',
    highlights: ['`geojson` data source in WGS84 (`EPSG:4326`)', 'one `map.layerRefs` entry per layer', 'no plotting or compute sections'],
  },
  {
    slug: 'geojson-lines-vis', group: 'Map Layers', layout: 'map',
    title: 'GeoJSON Lines',
    description: 'Draw the Manhattan road network from a GeoJSON file of line features with a partially transparent layer.',
    highlights: ['line geometry loaded from GeoJSON', 'layer `opacity` set in the spec'],
  },
  {
    slug: 'standalone-points-geojson-vis', group: 'Map Layers', layout: 'map',
    title: 'Points and Boundaries',
    description: 'Overlay a point layer on neighborhood boundaries, both stored in a projected coordinate system.',
    highlights: ['projected input declared with `coordinateFormat: \'EPSG:3395\'`', 'polygon and point layers in one map', 'layers drawn in `layerRefs` order'],
  },
  {
    slug: 'colormap-categorical', group: 'Map Layers', layout: 'map',
    title: 'Categorical Colormap',
    description: 'Color roads by their OpenStreetMap highway class, keeping primary and secondary roads and grouping the rest as other.',
    highlights: ['`getFnv` reads the value to color by', 'categorical `colorMapInterpolator`', '`colorMapDomain` and `catchAllCategory` to limit the categories'],
  },
  {
    slug: 'colormap-diverging', group: 'Map Layers', layout: 'map',
    title: 'Diverging Colormap',
    description: 'Map neighborhood area with a diverging Spectral colormap, normalized by percentiles so outliers do not wash out the scale.',
    highlights: ['diverging `colorMapInterpolator`', 'percentile `normalization`'],
  },
  {
    slug: 'colormap-normalization', group: 'Map Layers', layout: 'map',
    title: 'Percentile Normalization',
    description: 'Clamp a sequential colormap to the 5th and 95th percentiles of neighborhood area.',
    highlights: ['`getFnvType: \'quantitative\'`', '`lowerPercentile` and `upperPercentile` bounds', 'sequential Reds colormap'],
  },
  {
    slug: 'layer-opacity', group: 'Map Layers', layout: 'map',
    title: 'Layer Opacity',
    description: 'Combine OpenStreetMap layers for Manhattan with a semi-transparent GeoJSON layer of neighborhood boundaries on top.',
    highlights: ['OSM and GeoJSON sources in one spec', 'per-layer `opacity`'],
  },
  // ── OpenStreetMap ─────────────────────────────────────────────
  {
    slug: 'osm-layers-api', group: 'OpenStreetMap', layout: 'map',
    title: 'OSM: Lower Manhattan',
    description: 'Load OpenStreetMap data for Battery Park City and the Financial District and render surface, parks, water, roads, and 3D buildings.',
    highlights: ['`osm` data source with a `queryArea`', '`pbfFileUrl` reads a local extract instead of querying Overpass', '`autoLoadLayers` creates one table per layer, named `<outputTableName>_<layer>`'],
  },
  {
    slug: 'osm-layers-api-manhattan', group: 'OpenStreetMap', layout: 'map',
    title: 'OSM: Manhattan',
    description: 'Load every OpenStreetMap layer for all of Manhattan Island, the largest OSM area in the gallery.',
    highlights: ['a whole borough as the `queryArea`', 'surface, parks, water, roads, and buildings layers'],
  },
  {
    slug: 'osm-layers-api-chicago', group: 'OpenStreetMap', layout: 'map',
    title: 'OSM: Chicago Loop',
    description: 'The same OpenStreetMap spec pointed at Chicago: the Loop and the Near South Side.',
    highlights: ['only `queryArea` and the extract change between cities'],
  },
  {
    slug: 'osm-layers-api-niteroi', group: 'OpenStreetMap', layout: 'map',
    title: 'OSM: Niterói',
    description: 'Load OpenStreetMap layers for the Praias da Baía region of Niterói, Brazil.',
    highlights: ['non-ASCII area names in `queryArea`'],
  },
  {
    slug: 'osm-layers-api-paris', group: 'OpenStreetMap', layout: 'map',
    title: 'OSM: Paris',
    description: 'Combine nine arrondissements of central Paris into one OpenStreetMap source.',
    highlights: ['several `areas` in one `queryArea`'],
  },
  // ── Joins and Heatmaps ────────────────────────────────────────
  {
    slug: 'spatial-join', group: 'Joins and Heatmaps', layout: 'map',
    title: 'Spatial Join',
    description: 'Count the noise complaints that fall inside each Manhattan neighborhood and color the neighborhoods by that count.',
    highlights: ['`join` data source with `tableRootName` and `tableJoinName`', '`groupBy` with a `count` aggregate', 'results read with `getFnv: \'sjoin.count.noise\'`'],
  },
  {
    slug: 'spatial-join-multi', group: 'Joins and Heatmaps', layout: 'map',
    title: 'Multiple Joins',
    description: 'Join both noise complaints and parking violations to neighborhoods in one spec.',
    highlights: ['two `join` sources on the same root table', 'each join adds its own `sjoin.*` columns'],
  },
  {
    slug: 'spatial-join-buildings', group: 'Joins and Heatmaps', layout: 'map',
    title: 'Join: Buildings and Noise',
    description: 'Count noise complaints within 1000 meters of each OpenStreetMap building and color the buildings by the result.',
    highlights: ['`near` join with a `distance`', 'joining onto an OSM layer table'],
  },
  {
    slug: 'spatial-join-near', group: 'Joins and Heatmaps', layout: 'map',
    title: 'Join: Roads near Noise',
    description: 'Count noise complaints near each road segment in Lower Manhattan.',
    highlights: ['`near` join onto line geometry', 'thematic road layer with `getFnv`'],
  },
  {
    slug: 'heatmap-vis', group: 'Joins and Heatmaps', layout: 'map',
    title: 'Heatmap over OSM',
    description: 'Aggregate noise complaints into a 20 by 20 grid and draw it as a translucent heatmap over OpenStreetMap layers.',
    highlights: ['`heatmap` data source with a `grid`', '`near` distance for each grid cell', 'heatmap values read with `getFnv: \'count.noise\'`'],
  },
  {
    slug: 'heatmap-vis-geojson', group: 'Joins and Heatmaps', layout: 'map',
    title: 'Heatmap over GeoJSON',
    description: 'A finer 30 by 30 noise heatmap drawn over neighborhood boundaries loaded from GeoJSON.',
    highlights: ['higher grid resolution', 'heatmap layered over a GeoJSON base'],
  },
  // ── Compute ───────────────────────────────────────────────────
  {
    slug: 'compute-function', group: 'Compute', layout: 'map',
    title: 'GPU Compute',
    description: 'Compute a compactness score for each neighborhood on the GPU and map the result.',
    highlights: ['`compute` section with a WGSL `wglsFunction`', '`attributes` bind feature properties to WGSL variables', 'results read with `getFnv: \'compute.result\'`'],
  },
  {
    slug: 'compute-osm-function', group: 'Compute', layout: 'map',
    title: 'Compute on OSM Roads',
    description: 'Run a WGSL function over OpenStreetMap road segments to fill in missing lane counts, then color roads by lanes.',
    highlights: ['multi-line WGSL with a conditional', 'compute over an OSM layer table'],
  },
  {
    slug: 'property-func-map', group: 'Compute', layout: 'map',
    title: 'Building Height Squared',
    description: 'Square the height of every OpenStreetMap building on the GPU and color the 3D buildings by the result.',
    highlights: ['compute output written to `outputColumnName`', 'diverging colormap on 3D buildings'],
  },
  {
    slug: 'property-array-func', group: 'Compute', layout: 'data',
    title: 'Array Attributes',
    description: 'Average an array property per feature on the GPU, using features defined inline in the spec.',
    highlights: ['`geojsonObject` instead of a file', '`attributeArrays` declares the array length', 'WGSL loop over `values_length`'],
  },
  {
    slug: 'property-linear-regression', group: 'Compute', layout: 'data',
    title: 'Linear Regression',
    description: 'Fit a least-squares line to each feature\'s training arrays on the GPU and predict a value.',
    highlights: ['several array attributes in one function', 'scalar and array inputs mixed', 'one prediction per feature'],
  },
  // ── Plots ─────────────────────────────────────────────────────
  {
    slug: 'barchart-click', group: 'Plots', layout: 'map+plot',
    title: 'Bar Chart',
    description: 'A bar chart of neighborhood areas linked to the map: click bars to highlight neighborhoods.',
    highlights: ['`plot` section with `mark: \'bar\'`', '`events: [\'click\']`', '`mapRef` links the plot to a map layer'],
    tip: pickTip,
  },
  {
    slug: 'scatterplot-click', group: 'Plots', layout: 'map+plot',
    title: 'Scatterplot Click',
    description: 'Plot neighborhood area against perimeter and click points to select the matching neighborhoods.',
    highlights: ['`mark: \'scatter\'`', 'click selection shared with the map'],
    tip: pickTip,
  },
  {
    slug: 'scatterplot-brush', group: 'Plots', layout: 'map+plot',
    title: 'Scatterplot Brush',
    description: 'Brush a region of the scatterplot to select every neighborhood inside it.',
    highlights: ['`events: [\'brush\']`', '2D brushing linked to map picking'],
    tip: pickTip,
  },
  {
    slug: 'histogram-brush', group: 'Plots', layout: 'map+plot',
    title: 'Histogram',
    description: 'Bin neighborhood areas into a histogram and brush along the x axis to select neighborhoods.',
    highlights: ['`transform: { preset: \'binning-1d\' }`', '`@transform` as an axis', '`events: [\'brushX\']`'],
  },
  {
    slug: 'histogram-brush-landuse', group: 'Plots', layout: 'map+plot',
    title: 'Land Use Histogram',
    description: 'Count neighborhoods by their main land use and brush categories to find them on the map.',
    highlights: ['binning a categorical column', 'brushing categories'],
  },
  {
    slug: 'parallel-coordinates', group: 'Plots', layout: 'map+plot',
    title: 'Parallel Coordinates',
    description: 'Compare several neighborhood attributes at once and brush any axis to filter.',
    highlights: ['`mark: \'parallel-coordinates\'`', '`events: [\'brushY\']` on each axis'],
    tip: pickTip,
  },
  {
    slug: 'table-click', group: 'Plots', layout: 'map+plot',
    title: 'Table',
    description: 'Show neighborhoods as a sorted table and click rows to highlight them on the map.',
    highlights: ['`mark: \'table\'`', '`transform: { preset: \'sort\' }`'],
    tip: pickTip,
  },
  {
    slug: 'heatmatrix-click', group: 'Plots', layout: 'map+plot',
    title: 'Heat Matrix',
    description: 'Cross neighborhood area bins with land use in a heat matrix and click cells to select neighborhoods.',
    highlights: ['`mark: \'heatmatrix\'`', '`binning-2d` transform with `color: \'@transform\'`'],
    tip: pickTip,
  },
  {
    slug: 'temporal-events-click', group: 'Plots', layout: 'map+plot',
    title: 'Temporal Events',
    description: 'Join noise complaints to nearby roads, collect their dates, and brush a daily time series to find the roads involved.',
    highlights: ['`collect` aggregate keeps every joined date', '`mark: \'linechart\'` with the `binning-events` transform', 'time brushing linked to the road layer'],
    tip: pickTip,
  },
  // ── Multiple Views ────────────────────────────────────────────
  {
    slug: 'multi-map', group: 'Multiple Views', layout: 'multi-map',
    title: 'Two Maps',
    description: 'Give `map` an array to draw two maps from one spec, each with its own colormap and attribute.',
    highlights: ['`map` as an array of map specs', 'one colormap and attribute per map'],
  },
  {
    slug: 'osm-layers-api-multi', group: 'Multiple Views', layout: 'multi-map',
    title: 'OSM: Two Neighborhoods',
    description: 'Load Battery Park City and the Financial District as separate sources and show each in its own map.',
    highlights: ['two `osm` sources with different `outputTableName`s', 'one map per source'],
  },
  {
    slug: 'interaction-external', group: 'Using the Grammar', layout: 'map+plot', events: true, javascript: true,
    title: 'External Interactions',
    description: 'Listen to grammar selection events from your own code, and drive map highlights and plot selections from outside the spec.',
    highlights: ['`grammar.interactions.on(\'map:picking\' | \'plot:selection\')`', '`highlightOnMap` and `setPlotSelection`', '`clearHighlightOnMap` and `clearHighlightOnPlot`'],
    tip: pickTip,
    output: `// Listen: grammar events reach your code
const log = document.createElement('pre')
log.style.cssText = 'height:160px;overflow:auto;margin:0;font-size:12px'
const format = (ids) => ids.length > 5 ? \`[\${ids.slice(0, 5).join(', ')}, +\${ids.length - 5}]\` : \`[\${ids.join(', ')}]\`
const write = (line) => { log.textContent = line + '\\n' + log.textContent }

grammar.interactions.on('map:picking', ({ layerId, selection }) => {
  write(\`map:picking layer=\${layerId} selection=\${format(selection)}\`)
})
grammar.interactions.on('plot:selection', ({ plotId, event, selection }) => {
  write(\`plot:selection plot=\${plotId} event=\${event} selection=\${format(selection)}\`)
})

// Trigger: your code drives the grammar
const actions = {
  'highlightOnMap [0, 1, 2]': () => grammar.highlightOnMap('neighborhoods', [0, 1, 2]),
  'setPlotSelection [0, 1, 2]': () => grammar.setPlotSelection('neighborhoods', [0, 1, 2]),
  'clearHighlightOnMap': () => grammar.clearHighlightOnMap('neighborhoods'),
  'clearHighlightOnPlot': () => grammar.clearHighlightOnPlot('neighborhoods'),
}
const buttons = document.createElement('div')
for (const [label, run] of Object.entries(actions)) {
  const button = document.createElement('button')
  button.textContent = label
  button.style.cssText = 'margin:0 8px 8px 0;padding:4px 10px;border:1px solid var(--vp-c-divider);border-radius:6px;font-size:12px'
  button.onclick = () => { run(); write(\`call \${label}\`) }
  buttons.append(button)
}
events.replaceChildren(buttons, log)`,
  },
]
