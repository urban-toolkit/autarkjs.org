<template>
  <iframe
    ref="iframeEl"
    class="gallery-example-frame"
    :src="embedSrc"
    :title="title"
    :style="{ height: `${frameHeight}px` }"
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

/** The example reports its content height, so the frame never shows an empty band. */
const frameHeight = ref(640)
let stopWatching: (() => void) | null = null

function onMessage(event: MessageEvent) {
  if (event.source !== frame()?.contentWindow) return
  if (event.data?.type !== 'autk-gallery-height') return
  const height = Number(event.data.height)
  if (Number.isFinite(height)) frameHeight.value = Math.min(2600, Math.max(520, Math.ceil(height) + 2))
}

onMounted(() => {
  const iframe = frame()
  if (!iframe) return
  const onLoad = () => {
    syncTheme()
    // The example may finish loading before this component listens for messages.
    iframe.contentWindow?.postMessage({ type: 'autk-gallery-measure' }, '*')
  }
  iframe.addEventListener('load', onLoad)
  window.addEventListener('message', onMessage)
  syncTheme()
  stopWatching = watch(isDark, syncTheme, { flush: 'post' }) as unknown as () => void
})

onUnmounted(() => {
  window.removeEventListener('message', onMessage)
  stopWatching?.()
})
</script>

<style scoped>
.gallery-example-frame {
  display: block;
  width: 100%;
  min-height: 520px;
  max-height: 2600px;
  border: 0;
  background: var(--vp-c-bg);
}
</style>
