<template>
  <div class="live-example-frame">
    <iframe
      :id="frameId"
      :src="src"
      :style="frameStyle"
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  id?: string
  height?: string
}>(), {
  id: 'live-example-frame',
  height: '540px',
})

const frameId = computed(() => props.id)
const frameStyle = computed(
  () => `width:100%; height:${props.height}; border:0; display:block;`
)

let cleanup: (() => void) | null = null

onMounted(() => {
  const iframe = document.getElementById(frameId.value) as HTMLIFrameElement | null
  if (!iframe) return

  let savedScrollY = 0

  const saveScroll = () => {
    savedScrollY = window.scrollY
  }

  const restoreScroll = () => {
    requestAnimationFrame(() => {
      window.scrollTo(0, savedScrollY)
    })
  }

  const onPointerDown = () => saveScroll()
  const onFocus = () => restoreScroll()

  iframe.addEventListener('pointerdown', onPointerDown, true)
  iframe.addEventListener('mousedown', onPointerDown, true)
  iframe.addEventListener('focus', onFocus, true)

  const attachFrameGuards = () => {
    try {
      const frameWindow = iframe.contentWindow
      const frameDocument = iframe.contentDocument
      if (!frameWindow || !frameDocument) return

      frameDocument.addEventListener('pointerdown', saveScroll, true)
      frameDocument.addEventListener('mousedown', saveScroll, true)
      frameDocument.addEventListener('focusin', restoreScroll, true)
      frameDocument.addEventListener('click', restoreScroll, true)
      frameWindow.addEventListener('focus', restoreScroll, true)

      cleanup = () => {
        iframe.removeEventListener('pointerdown', onPointerDown, true)
        iframe.removeEventListener('mousedown', onPointerDown, true)
        iframe.removeEventListener('focus', onFocus, true)

        frameDocument.removeEventListener('pointerdown', saveScroll, true)
        frameDocument.removeEventListener('mousedown', saveScroll, true)
        frameDocument.removeEventListener('focusin', restoreScroll, true)
        frameDocument.removeEventListener('click', restoreScroll, true)
        frameWindow.removeEventListener('focus', restoreScroll, true)

        iframe.removeEventListener('load', attachFrameGuards)
      }
    } catch (_) {
      cleanup = () => {
        iframe.removeEventListener('pointerdown', onPointerDown, true)
        iframe.removeEventListener('mousedown', onPointerDown, true)
        iframe.removeEventListener('focus', onFocus, true)
        iframe.removeEventListener('load', attachFrameGuards)
      }
    }
  }

  iframe.addEventListener('load', attachFrameGuards)
  attachFrameGuards()
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<style scoped>
.live-example-frame {
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
</style>