<template>
  <div class="gallery-example-shell">
    <div class="gallery-example-meta">
      <p class="gallery-example-eyebrow">{{ section }}</p>
      <p class="gallery-example-description">{{ description }}</p>
      <p class="gallery-example-links">
        <span
          v-for="module in modules"
          :key="module.label"
          class="gallery-example-module"
          :style="{ '--module-color': module.color }"
        >{{ module.label }}</span>
        <a :href="standalone" target="_blank" rel="noopener">Open standalone ↗</a>
      </p>
    </div>

    <iframe
      ref="iframeEl"
      class="gallery-example-frame"
      :src="embedSrc"
      :title="title"
      :style="{ height: `${frameHeight}px` }"
      allow="fullscreen"
      loading="eager"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  /** Built example page, relative to the site root. */
  src: string
  title: string
  description: string
  section: string
  modules: { label: string; color: string }[]
}>()

const iframeEl = ref<HTMLIFrameElement | null>(null)
const { isDark } = useData()
const standalone = props.src
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
  if (Number.isFinite(height)) frameHeight.value = Math.min(1200, Math.max(520, Math.ceil(height) + 2))
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
.gallery-example-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 16px;
  padding: 0 0 16px;
}

.gallery-example-eyebrow {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gallery-example-description {
  flex: 1 1 420px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}

.gallery-example-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 0.8rem;
}

.gallery-example-module {
  padding: 1px 8px;
  border: 1px solid color-mix(in srgb, var(--module-color) 55%, transparent);
  border-radius: 999px;
  color: var(--module-color);
  font-weight: 600;
}

.gallery-example-frame {
  display: block;
  width: 100%;
  min-height: 520px;
  max-height: 1200px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}
</style>
