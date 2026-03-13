<script setup lang="ts">
defineProps<{
  title: string
  description: string
  iframeSrc?: string
  tags?: string[]
  code?: string
  objective?: string
  comingSoon?: boolean
  comingSoonMessage?: string
}>()
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
        </div>
        <div class="code-shell">
          <pre><code class="language-ts">{{ code }}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: white;
}

.example-tag.autk-map {
  background: linear-gradient(135deg, #0ea5e9, #3b82f6);
  box-shadow: 0 4px 10px rgba(59,130,246,0.25);
}

.example-tag.autk-db {
  background: linear-gradient(135deg, #f59e0b, #ea580c);
  box-shadow: 0 4px 10px rgba(234,88,12,0.25);
}

.example-tag.autk-compute {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 4px 10px rgba(5,150,105,0.22);
}

.example-tag.autk-plot {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 4px 10px rgba(124,58,237,0.22);
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
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.example-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 18px 40px rgba(0,0,0,0.12),
    0 6px 18px rgba(0,0,0,0.08);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.iframe-shell {
  padding: 16px;
}

.iframe-shell iframe {
  width: 100%;
  height: 680px;
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

.coming-soon-content p {
  margin: 16px 0 0;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  max-width: 760px;
}

.objective-content {
  padding: 22px 24px;
}

.objective-content p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.code-shell {
  overflow: auto;
  max-height: 560px;
}

.example-code pre {
  margin: 0;
  padding: 20px 22px;
  overflow: auto;
  font-size: 0.9rem;
  line-height: 1.7;
  background: #0b1020;
  color: #e5e7eb;
}

.example-code code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  white-space: pre;
  display: block;
}

@media (max-width: 960px) {
  .iframe-shell iframe {
    height: 460px;
  }
}
</style>