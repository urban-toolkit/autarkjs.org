<template>
  <iframe
    ref="iframeEl"
    class="tutorial-chapter"
    :src="embedSrc"
    :title="title"
    loading="eager"
  ></iframe>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  /** Built chapter page, relative to the site root. */
  src: string
  title: string
}>()

const iframeEl = ref<HTMLIFrameElement | null>(null)
const { isDark } = useData()
// Only the first load needs the theme in the URL; later toggles are class updates,
// so switching the site theme never reloads a chapter and loses edited cells.
const initialTheme = isDark.value ? 'dark' : 'light'
const embedSrc = computed(() => `${props.src}?embed=1&theme=${initialTheme}`)

/** The chapter is same-origin, so its palette follows the site's theme. */
function syncTheme() {
  const root = iframeEl.value?.contentDocument?.documentElement
  if (!root) return
  root.classList.toggle('dark', isDark.value)
  root.style.colorScheme = isDark.value ? 'dark' : 'light'
}

let stopWatching: (() => void) | null = null

onMounted(() => {
  const iframe = iframeEl.value
  if (!iframe) return
  const onLoad = () => syncTheme()
  iframe.addEventListener('load', onLoad)
  syncTheme()
  stopWatching = watch(isDark, syncTheme, { flush: 'post' }) as unknown as () => void
})

onUnmounted(() => stopWatching?.())
</script>

<style scoped>
.tutorial-chapter {
  display: block;
  width: 100%;
  height: calc(100svh - var(--vp-nav-height));
  min-height: 560px;
  border: 0;
  background: var(--vp-c-bg);
}
</style>
