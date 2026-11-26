<template>
  <!-- Only vendored tutorial HTML is passed to this component. -->
  <div ref="notebookEl" class="tutorial-notebook tutorial-doc" v-html="content"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import '../../../../tutorial/notebook.css'

const props = defineProps<{ source: string; chapter: string }>()
const notebookEl = ref<HTMLElement | null>(null)
const assets = withBase('/tutorial/apps/')

// Keep the notebook source shared with the standalone build. VitePress owns the
// header, outline and chapter navigation; the original section IDs stay linkable.
const body = props.source.match(/<main class="tutorial-notebook">([\s\S]+)<\/main>/)?.[1]
if (!body) throw new Error(`Missing notebook content for ${props.chapter}`)
const defs = props.source.match(/<svg[^>]*>\s*<defs>[\s\S]*?<\/defs>\s*<\/svg>/)?.[0] ?? ''
const content = defs + body
  .replace(/<section id="intro">[\s\S]*?<h1>[^<]*<\/h1>/, '<section>')
  .replace(/<div class="next-page">[^\n]*<\/div>/, '')
  .replace(/<section id="([\w-]+)">\s*<h2>([\s\S]*?)<\/h2>/g, (_, id, heading) =>
    `<section><h2 id="${id}">${heading.replace(/<span class="num">(\d+)<\/span>/, '$1. ')}<a class="header-anchor" href="#${id}" aria-label="Permalink" tabindex="-1"></a></h2>`)
  .replace(/src="data\//g, `src="${assets}data/`)
  .replace(/href="index\.html#authors"/g, `href="${withBase('/tutorial/')}#credits"`)
  .replace(/href="index\.html#run"/g, `href="${withBase('/tutorial/')}#what-you-need"`)

let dispose: (() => void) | undefined
onMounted(async () => {
  const root = notebookEl.value!
  const { mountNotebook } = await import('../../../../tutorial/notebook.js')
  if (notebookEl.value === root) dispose = mountNotebook(root, props.chapter, new URL(assets, location.href))
})
onUnmounted(() => dispose?.())
</script>

<style>
.tutorial-doc {
  --ink: var(--vp-c-text-1);
  --ink-2: var(--vp-c-text-2);
  --muted: var(--vp-c-text-2);
  --paper: var(--vp-c-bg);
  --paper-2: var(--vp-c-bg-soft);
  --rule: var(--vp-c-divider);
  --accent: var(--vp-c-brand-1);
  --accent-soft: var(--vp-c-brand-soft);
  --code-bg: var(--vp-code-block-bg);
  --success: var(--vp-c-green-1);
  --danger: var(--vp-c-danger-1);
  --shadow: var(--vp-shadow-1);
  --mono: var(--vp-font-family-mono);
}

.vp-doc .tutorial-doc pre:has(> code) {
  margin: 16px 0;
  padding: 16px 20px;
  overflow: auto;
  background: var(--vp-code-block-bg);
}

.vp-doc .tutorial-doc pre > code {
  padding: 0;
  color: inherit;
  background: none;
}
</style>
