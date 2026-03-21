import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AutkMapExample from './components/AutkMapExample.vue'
import HomeCaseStudies from './components/HomeCaseStudies.vue'
import HomeGallery from './components/HomeGallery.vue'
import InstitutionsFooter from './components/InstitutionsFooter.vue'
import ExamplePage from './components/ExamplePage.vue'
import ExamplesIndex from './components/ExamplesIndex.vue'
import LiveCasePage from './components/LiveCasePage.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(InstitutionsFooter),
    })
  },
  enhanceApp({ app }) {
    app.component('AutkMapExample', AutkMapExample)
    app.component('HomeCaseStudies', HomeCaseStudies)
    app.component('HomeGallery', HomeGallery)
    app.component('ExamplePage', ExamplePage)
    app.component('ExamplesIndex', ExamplesIndex)
    app.component('LiveCasePage', LiveCasePage)
  },
} satisfies Theme