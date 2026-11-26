import type { ModuleId } from '../../../../gallery/catalog'

const modules: ModuleId[] = ['autk-db', 'autk-map', 'autk-plot', 'autk-compute']

export const demoApps = [
  {
    href: '/usecases/live/urbane.html',
    img: '/imgs/urbane.png',
    title: 'Urbane Remake',
    description: 'Explore Manhattan at multiple scales with thematic maps and linked charts.',
    modules,
  },
  {
    href: '/usecases/live/heat.html',
    img: '/imgs/heat.png',
    title: 'Land Surface Heat Analysis',
    description: 'Compare land surface temperature trends across road segments in Niterói.',
    modules,
  },
  {
    href: '/usecases/live/shadows.html',
    img: '/imgs/shadows.png',
    title: 'Urban Shadow Analysis',
    description: 'Explore how accumulated building shadows change across the Chicago Loop.',
    modules,
  },
]
