import DefaultTheme from 'vitepress/theme'
import AutkMapExample from './components/AutkMapExample.vue'
import HomeGallery from './components/HomeGallery.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AutkMapExample', AutkMapExample)
    app.component('HomeGallery', HomeGallery)
  },
} satisfies Theme
