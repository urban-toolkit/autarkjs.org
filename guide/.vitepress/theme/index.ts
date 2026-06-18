import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import AutkMapExample from './components/AutkMapExample.vue'
import HomeCaseStudies from './components/HomeCaseStudies.vue'
import HomeGallery from './components/HomeGallery.vue'
import HomeQuickStart from './components/HomeQuickStart.vue'
import GalleryPageGrid from './components/GalleryPageGrid.vue'
import PyautarkBadge from './components/PyautarkBadge.vue'
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
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(InstitutionsFooter),
      'nav-bar-content-after': () => h(PyautarkBadge),
    })
  },
  enhanceApp({ app }) {
    app.component('AutkMapExample', AutkMapExample)
    app.component('HomeGallery', HomeGallery)
    app.component('HomeQuickStart', HomeQuickStart)
    app.component('GalleryPageGrid', GalleryPageGrid)
    app.component('PyautarkBadge', PyautarkBadge)
    app.component('HomeCaseStudies', HomeCaseStudies)
    app.component('ExamplePage', ExamplePage)
    app.component('LiveCasePage', LiveCasePage)
    app.component('LiveExampleFrame', LiveExampleFrame)
    app.component('TablesConsoleExample', TablesConsoleExample)
    app.component('CodePlayground', CodePlayground)
    app.component('JsonTree', JsonTree)
  },
} satisfies Theme