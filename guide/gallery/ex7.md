---
title: Building Picker
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkDb } from '@urban-toolkit/autk-db'
import { AutkMap, MapEvent } from '@urban-toolkit/autk-map'

const LAYER = 'table_osm_buildings'

output(` + '"' + `<div style="display:grid; gap:12px;">
  <div style="padding:12px; border:1px solid var(--vp-c-divider); border-radius:10px; background:var(--vp-c-bg-soft);">
    <label for="opacity-control" style="display:flex; justify-content:space-between; gap:12px; align-items:center; font-weight:600;">
      <span>Building opacity</span>
      <span id="opacity-value">0.94</span>
    </label>
    <input id="opacity-control" type="range" min="0.15" max="1" step="0.01" value="0.94" style="width:100%; margin-top:8px;" />
  </div>
  <div style="padding:14px; border:1px solid var(--vp-c-divider); border-radius:10px; background:var(--vp-c-bg-soft); display:grid; gap:8px;">
    <div id="info-title" style="font-weight:700; font-size:1rem;">Click a building</div>
    <div><strong>OSM ID:</strong> <span id="info-osm-id">—</span></div>
    <div><strong>Type:</strong> <span id="info-type">—</span></div>
    <div><strong>Height:</strong> <span id="info-height">—</span></div>
    <div><strong>Levels:</strong> <span id="info-levels">—</span></div>
    <div><strong>Address:</strong> <span id="info-address">—</span></div>
  </div>
</div>` + '"' + `)

const opacityInput = mount.querySelector('#opacity-control')
const opacityValue = mount.querySelector('#opacity-value')

setStatus('Initializing spatial database...')
const db = new AutkDb()
await db.init()

setStatus('Loading OpenStreetMap buildings from the local PBF...')
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: {
    geocodeArea: 'New York',
    areas: ['Battery Park City', 'Financial District'],
  },
  outputTableName: 'table_osm',
  autoLoadLayers: {
    layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
  },
})

const buildings = await db.getLayer(LAYER)

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()

for (const layerData of db.getLayersMetadata()) {
  const geojson = layerData.name === LAYER ? buildings : await db.getLayer(layerData.name)
  map.loadCollection(layerData.name, { collection: geojson, type: layerData.type })
}

const setPanel = (values) => {
  const set = (id, text) => {
    const el = mount.querySelector('#' + id)
    if (el) el.textContent = text
  }
  set('info-title', values.title)
  set('info-osm-id', values.osmId)
  set('info-type', values.type)
  set('info-height', values.height)
  set('info-levels', values.levels)
  set('info-address', values.address)
}

const getValue = (props, ...keys) => {
  for (const key of keys) {
    const value = props?.[key]
    if (value !== undefined && value !== null && String(value).trim() !== '') return String(value)
  }
  return '—'
}

map.updateRenderInfo(LAYER, { isPick: true, opacity: 0.94 })

opacityInput?.addEventListener('input', (event) => {
  const value = Number(event.target.value)
  if (opacityValue) opacityValue.textContent = value.toFixed(2)
  map.updateRenderInfo(LAYER, { opacity: value, isPick: true })
  map.draw()
})

map.events.on(MapEvent.PICKING, ({ selection, layerId }) => {
  if (layerId !== LAYER) return

  if (selection.length === 0) {
    map.setHighlightedIds(LAYER, [])
    setPanel({ title: 'Click a building', osmId: '—', type: '—', height: '—', levels: '—', address: '—' })
    return
  }

  const pickedId = selection[selection.length - 1]
  map.setHighlightedIds(LAYER, [pickedId])

  const feature = buildings.features[pickedId]
  const props = feature?.properties ?? {}
  const levels = getValue(props, 'building:levels', 'levels')
  const rawHeight = getValue(props, 'height')
  const height = rawHeight !== '—' ? rawHeight : levels !== '—' ? '~' + (Number(levels) * 3).toFixed(0) + ' m (est.)' : '—'

  setPanel({
    title: getValue(props, 'name', 'addr:housename') !== '—' ? getValue(props, 'name', 'addr:housename') : 'Building ' + pickedId,
    osmId: getValue(props, 'id', 'osm_id', '@id'),
    type: getValue(props, 'building'),
    height,
    levels,
    address: [getValue(props, 'addr:housenumber'), getValue(props, 'addr:street')].filter((v) => v !== '—').join(' ') || '—',
  })
})

map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Building Picker

Pick 3D buildings, inspect their key attributes, and adjust building opacity to compare the selected feature against the surrounding scene. This example highlights browser-side OSM loading, feature picking, lightweight UI controls, and render updates.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- OSM building layers loaded from a local PBF extract
- live picking with a linked info panel
- interactive opacity control for the buildings layer
- combined map interaction and render styling
