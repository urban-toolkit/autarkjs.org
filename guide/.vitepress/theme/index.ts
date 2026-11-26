import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import AutkMapExample from './components/AutkMapExample.vue'
import HomeCaseStudies from './components/HomeCaseStudies.vue'
import HomeGallery from './components/HomeGallery.vue'
import HomeQuickStart from './components/HomeQuickStart.vue'
import GalleryPageGrid from './components/GalleryPageGrid.vue'
import GalleryCatalog from './components/GalleryCatalog.vue'
import GalleryExample from './components/GalleryExample.vue'
import TutorialChapter from './components/TutorialChapter.vue'
import HomeHeroLinks from './components/HomeHeroLinks.vue'
import InstitutionsFooter from './components/InstitutionsFooter.vue'
import ExamplePage from './components/ExamplePage.vue'
import LiveCasePage from './components/LiveCasePage.vue'
import LiveExampleFrame from './components/LiveExampleFrame.vue'
import TablesConsoleExample from './components/TablesConsoleExample.vue'
import CodePlayground from './components/CodePlayground.vue'
import JsonTree from './components/JsonTree.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => frontmatter.value.layout !== 'home' ? h(InstitutionsFooter) : null,
      'home-hero-info-before': () => h('img', {
        src: '/favicon.svg',
        alt: '',
        class: 'home-hero-mark',
        width: 72,
        height: 72,
        'aria-hidden': 'true',
      }),
      'home-hero-actions-after': () => h(HomeHeroLinks),
      'home-features-after': () => [h(HomeQuickStart), h(InstitutionsFooter)],
    })
  },
  enhanceApp({ app }) {
    app.component('AutkMapExample', AutkMapExample)
    app.component('HomeGallery', HomeGallery)
    app.component('GalleryPageGrid', GalleryPageGrid)
    app.component('GalleryCatalog', GalleryCatalog)
    app.component('GalleryExample', GalleryExample)
    app.component('TutorialChapter', TutorialChapter)
    app.component('HomeCaseStudies', HomeCaseStudies)
    app.component('ExamplePage', ExamplePage)
    app.component('LiveCasePage', LiveCasePage)
    app.component('LiveExampleFrame', LiveExampleFrame)
    app.component('TablesConsoleExample', TablesConsoleExample)
    app.component('CodePlayground', CodePlayground)
    app.component('JsonTree', JsonTree)
  },
} satisfies Theme