<template>
  <iframe
    ref="iframeEl"
    class="gallery-example-frame"
    :src="embedSrc"
    :title="title"
    allow="fullscreen"
    loading="eager"
  ></iframe>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  /** Built example page, relative to the site root. */
  src: string
  title: string
}>()

const iframeEl = ref<HTMLIFrameElement | null>(null)
const { isDark } = useData()
const embedSrc = computed(() => `${props.src}?embed=1`)

function frame() {
  return iframeEl.value
}

/** The example is same-origin, so its palette follows the site's theme. */
function syncTheme() {
  const doc = frame()?.contentDocument
  if (!doc) return
  const site = getComputedStyle(document.documentElement)
  const root = doc.documentElement
  for (const token of ['--vp-c-bg', '--vp-c-bg-alt', '--vp-c-bg-soft', '--vp-c-text-1', '--vp-c-text-2', '--vp-c-divider', '--vp-c-brand-1']) {
    root.style.setProperty(token, site.getPropertyValue(token).trim())
  }
  root.classList.toggle('dark', isDark.value)
  root.style.colorScheme = isDark.value ? 'dark' : 'light'
}

let stopWatching: (() => void) | null = null

onMounted(() => {
  const iframe = frame()
  if (!iframe) return
  const onLoad = () => syncTheme()
  iframe.addEventListener('load', onLoad)
  syncTheme()
  stopWatching = watch(isDark, syncTheme, { flush: 'post' }) as unknown as () => void
})

onUnmounted(() => {
  stopWatching?.()
})
</script>

<style scoped>
.gallery-example-frame {
  display: block;
  width: 100%;
  min-height: 0;
  border: 0;
  background: var(--vp-c-bg);
}
</style>
