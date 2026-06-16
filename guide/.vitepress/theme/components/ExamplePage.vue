<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  title: string
  description: string
  iframeSrc?: string
  tags?: string[]
  code?: string
  codePreview?: string
  codeFull?: string
  objective?: string
  comingSoon?: boolean
  comingSoonMessage?: string
}>()

const isCodeOpen = ref(false)

const displayedCode = computed(() => props.codePreview || props.code || '')
const fullCode = computed(() => props.codeFull || props.code || '')
</script>

<template>
  <section class="example-doc">
    <div class="example-header">
      <div class="example-tags" v-if="tags?.length">
        <span
          v-for="tag in tags"
          :key="tag"
          class="example-tag"
          :class="tag.toLowerCase()"
        >
          {{ tag.toUpperCase() }}
        </span>
      </div>

      <h1 class="example-title">{{ title }}</h1>
      <p class="example-description">{{ description }}</p>
    </div>

    <div class="example-grid">
      <div v-if="iframeSrc" class="example-card example-preview">
        <div class="card-head">
          <h2>Live Example</h2>
        </div>
        <div class="iframe-shell">
          <iframe
            :src="iframeSrc"
            :title="title"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
        </div>
      </div>

      <div v-else-if="comingSoon" class="example-card example-coming-soon">
        <div class="card-head">
          <h2>Live Example</h2>
        </div>
        <div class="coming-soon-content">
          <span class="coming-soon-badge">Coming soon</span>
          <p>
            {{ comingSoonMessage || 'This live example will be published soon.' }}
          </p>
        </div>
      </div>

      <div v-if="objective" class="example-card example-objective">
        <div class="card-head">
          <h2>Objective</h2>
        </div>
        <div class="objective-content">
          <p>{{ objective }}</p>
        </div>
      </div>

      <div class="example-card example-code">
        <div class="card-head">
          <h2>Source Code</h2>
          <button
            v-if="fullCode"
            class="code-link"
            type="button"
            @click="isCodeOpen = true"
          >
            Full source code
          </button>
        </div>

        <div class="code-shell" v-if="displayedCode">
          <pre><code class="language-ts">{{ displayedCode }}</code></pre>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isCodeOpen"
        class="code-modal-backdrop"
        @click.self="isCodeOpen = false"
      >
        <div class="code-modal">
          <div class="code-modal-head">
            <h2>Full Source Code</h2>
            <button class="code-close" type="button" @click="isCodeOpen = false">
              Close
            </button>
          </div>

          <div class="code-modal-body">
            <pre><code class="language-ts">{{ fullCode }}</code></pre>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.example-tag.coming-soon {
  background: linear-gradient(135deg, #64748b, #475569);
  box-shadow: 0 4px 10px rgba(71, 85, 105, 0.22);
}

.example-doc {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 72px;
}

.example-header {
  margin-bottom: 28px;
}

.example-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.example-tag {
  display: inline-flex;
  align-items: center;
  padding: 5px 11px;
  border-radius: 5px;
  font-family: Verdana, Geneva, DejaVu Sans, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
  box-shadow: none;
}

.example-tag.autk-map {
  background: #0ea5e9;
}

.example-tag.autk-db {
  background: #f59e0b;
}

.example-tag.autk-compute {
  background: #10b981;
}

.example-tag.autk-plot {
  background: #8b5cf6;
}

.example-title {
  font-size: clamp(2.2rem, 4.5vw, 3.1rem);
  line-height: 1.08;
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.example-description {
  margin: 16px 0 0;
  max-width: 760px;
  font-size: 1.08rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.example-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;
}

.example-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 92%, transparent);
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow:
    0 10px 30px rgba(0,0,0,0.08),
    0 2px 8px rgba(0,0,0,0.04);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.04),
    rgba(255,255,255,0.01)
  );
}

.card-head h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.code-link {
  border: 0;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.code-link:hover {
  text-decoration: underline;
}

.iframe-shell {
  padding: 16px;
}

.iframe-shell iframe {
  width: 100%;
  height: 720px;
  border: 0;
  border-radius: 14px;
  background: var(--vp-c-bg);
}

.coming-soon-content {
  padding: 28px 24px 30px;
}

.coming-soon-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(135deg, #64748b, #475569);
  box-shadow: 0 6px 14px rgba(71,85,105,0.22);
}

.coming-soon-content p,
.objective-content p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.objective-content {
  padding: 22px 24px;
}

.code-shell {
  overflow: auto;
  max-height: 340px;
}

.example-code pre,
.code-modal-body pre {
  margin: 0;
  padding: 20px 22px;
  overflow: auto;
  font-size: 0.9rem;
  line-height: 1.7;
  background: #0b1020;
  color: #e5e7eb;
}

.example-code code,
.code-modal-body code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  white-space: pre;
  display: block;
}

.code-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(2, 6, 23, 0.68);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.code-modal {
  width: min(1100px, 100%);
  max-height: 85vh;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  box-shadow: 0 24px 80px rgba(0,0,0,0.35);
}

.code-modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-modal-head h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.code-close {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.9rem;
  cursor: pointer;
}

.code-modal-body {
  max-height: calc(85vh - 70px);
  overflow: auto;
}

@media (max-width: 960px) {
  .iframe-shell iframe {
    height: 540px;
  }
}

@media (max-width: 640px) {
  .example-doc {
    padding: 24px 20px 56px;
  }

  .iframe-shell iframe {
    height: 460px;
  }
}
</style>