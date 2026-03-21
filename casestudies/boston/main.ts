import { SpatialDb } from 'autk-db'
import { AutkMap, LayerType } from 'autk-map'

async function main() {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
  const statusEl = document.getElementById('loading-status')
  const loadingText = document.getElementById('loading-text')

  const setStatus = (msg: string) => {
    if (loadingText) loadingText.textContent = msg
    if (statusEl) statusEl.style.display = 'flex'
  }

  const hideStatus = () => {
    if (statusEl) statusEl.style.display = 'none'
  }

  try {
    if (!canvas) {
      throw new Error('Canvas element not found.')
    }

    setStatus('Initializing spatial database...')
    const db = new SpatialDb()
    await db.init()

    setStatus('Loading Boston street network...')
    await db.loadCustomLayer({
      geojsonFileUrl: '/data/boston_streets.geojson',
      outputTableName: 'boston_streets',
      coordinateFormat: 'EPSG:3395',
    })

    setStatus('Loading Boston charging stations...')
    await db.loadCustomLayer({
      geojsonFileUrl: '/data/boston_charging_stations.geojson',
      outputTableName: 'boston_charging_stations',
      coordinateFormat: 'EPSG:3395',
    })

    setStatus('Preparing map...')
    const streets = await db.getLayer('boston_streets')
    const stations = await db.getLayer('boston_charging_stations')

    const map = new AutkMap(canvas)
    await map.init()

    map.loadGeoJsonLayer(
      'boston_streets',
      streets,
      LayerType.AUTK_GEO_POLYLINES
    )

    map.loadGeoJsonLayer(
      'boston_charging_stations',
      stations,
      LayerType.AUTK_GEO_POINTS
    )

    map.draw()
    hideStatus()
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'An unexpected error occurred'
    if (loadingText) loadingText.textContent = `Error: ${msg}`
    if (statusEl) {
      statusEl.style.background = 'rgba(127, 29, 29, 0.92)'
    }
    console.error(err)
  }
}

main()