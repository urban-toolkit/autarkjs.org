import DefaultTheme from 'vitepress/theme'
import AutkMapExample from './components/AutkMapExample.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AutkMapExample', AutkMapExample)
  },
} satisfies Theme
