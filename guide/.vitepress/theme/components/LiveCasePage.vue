<template>
  <div class="live-case-shell">
    <iframe
      class="live-case-frame"
      :src="src"
      :title="title"
      frameborder="0"
      allow="fullscreen"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  title: string
}>()
</script>

<style scoped>
.live-case-shell {
  width: 100%;
  height: calc(100svh - var(--vp-nav-height));
  min-height: calc(100svh - var(--vp-nav-height));
  background: #0b0f17;
  overflow: hidden;
}

.live-case-frame {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
  background: #fff;
}

/* remove elementos textuais da página de documentação */
:global(.live-case-page .vp-doc > h1),
:global(.live-case-page .vp-doc .meta),
:global(.live-case-page .header-anchor),
:global(.live-case-page .prev-next),
:global(.live-case-page .VPDocFooter),
:global(.live-case-page .VPFooter) {
  display: none !important;
}

/* conteúdo full width */
:global(.live-case-page .VPDoc),
:global(.live-case-page .VPDoc .container),
:global(.live-case-page .VPDoc .content),
:global(.live-case-page .VPDoc .content-container),
:global(.live-case-page .vp-doc) {
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* remove espaços extras do layout de docs */
:global(.live-case-page .VPDoc) {
  padding-top: 0 !important;
}

:global(.live-case-page .VPContent) {
  overflow-x: hidden !important;
}

:global(html),
:global(body),
:global(.live-case-page) {
  overflow-x: hidden !important;
}
</style>