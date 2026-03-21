import { SpatialDb } from 'autk-db'
import { AutkMap, LayerType } from 'autk-map'
import { Feature, FeatureCollection, GeoJsonProperties } from 'geojson'

type CountRow = {
  neighborhood_id: string
  noise_count: number
}

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

    setStatus('Loading neighborhood polygons...')
    await db.loadCustomLayer({
      geojsonFileUrl: '/data/mnt_neighs.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    })

    setStatus('Loading point dataset...')
    await db.loadCustomLayer({
      geojsonFileUrl: '/data/noise.geojson',
      outputTableName: 'noise',
      coordinateFormat: 'EPSG:3395',
    })

    setStatus('Running spatial join in the browser...')
    const counts = await db.rawQuery({
      query: `
        SELECT
          struct_extract(neighborhoods.properties, 'nta2020') AS neighborhood_id,
          COUNT(noise.geometry) AS noise_count
        FROM neighborhoods
        LEFT JOIN noise
          ON ST_Intersects(neighborhoods.geometry, noise.geometry)
        GROUP BY 1
      `,
      output: {
        type: 'RETURN_OBJECT',
      },
    }) as CountRow[]

    const countsByNeighborhood = new Map<string, number>()
    for (const row of counts) {
      countsByNeighborhood.set(String(row.neighborhood_id), Number(row.noise_count || 0))
    }

    setStatus('Preparing joined GeoJSON...')
    const neighborhoodsGeojson = await db.getLayer('neighborhoods')
    const noiseGeojson = await db.getLayer('noise')

    const themedNeighborhoods: FeatureCollection = {
      ...neighborhoodsGeojson,
      features: neighborhoodsGeojson.features.map((feature: Feature) => {
        const properties = (feature.properties ?? {}) as Record<string, any>
        const neighborhoodId = String(properties.nta2020 || '')
        const noiseCount = countsByNeighborhood.get(neighborhoodId) || 0

        return {
          ...feature,
          properties: {
            ...properties,
            sjoin: {
              count: {
                noise: noiseCount,
              },
            },
          },
        }
      }),
    }

    setStatus('Rendering joined layers...')
    const map = new AutkMap(canvas)
    await map.init()

    map.loadGeoJsonLayer(
      'neighborhoods',
      themedNeighborhoods,
      LayerType.AUTK_GEO_POLYGONS
    )

    map.loadGeoJsonLayer(
      'noise',
      noiseGeojson,
      LayerType.AUTK_GEO_POINTS
    )

    const getJoinCount = (feature: Feature) => {
      const properties = feature.properties as GeoJsonProperties
      return properties?.sjoin?.count?.noise || 0
    }

    map.updateGeoJsonLayerThematic('neighborhoods', themedNeighborhoods, getJoinCount)

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