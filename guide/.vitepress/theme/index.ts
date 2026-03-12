import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AutkMapExample from './components/AutkMapExample.vue'
import HomeGallery from './components/HomeGallery.vue'
import InstitutionsFooter from './components/InstitutionsFooter.vue'
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
    app.component('HomeGallery', HomeGallery)
  },
} satisfies Theme
