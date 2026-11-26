<template>
  <div class="gallery-catalog vp-raw">
    <section v-for="section in catalog" :key="section.id" class="gallery-catalog-section">
      <h2 v-if="section.title" :id="section.id">{{ section.title }}</h2>
      <p v-if="section.description" class="gallery-catalog-description">{{ section.description }}</p>

      <div class="gallery-catalog-grid">
        <a
          v-for="example in section.cards"
          :key="example.href"
          :href="example.href"
          class="gallery-catalog-card"
          :title="example.title"
        >
          <span class="gallery-catalog-image">
            <img
              :src="example.img"
              :alt="example.title"
              loading="lazy"
              @error="hideImage"
            />
          </span>

          <span class="gallery-catalog-body">
            <span class="gallery-catalog-title">{{ example.title }}</span>
            <span class="gallery-catalog-text">{{ example.description }}</span>
            <span class="gallery-catalog-tags">
              <span
                v-for="module in example.modules"
                :key="module"
                class="gallery-catalog-tag"
                :style="{ '--module-color': modules[module].color }"
              >{{ module }}</span>
            </span>
          </span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { examples, modules, sections } from '../../../../gallery/catalog'
import { demoApps } from '../data/demoApps'

const props = defineProps<{ demoApps?: boolean }>()
const gallery = sections.map(section => ({
  ...section,
  cards: examples.filter(example => example.section === section.id).map(example => ({
    ...example,
    href: `/gallery/examples/${example.id.toLowerCase()}`,
    img: `/imgs/gallery/${example.id}.png`,
  })),
}))
const catalog = computed(() => props.demoApps
  ? [{ id: 'demo-apps', title: '', description: '', cards: demoApps }]
  : gallery)

/** A missing screenshot leaves the card's accent panel instead of a broken icon. */
function hideImage(event: Event) {
  (event.target as HTMLImageElement).style.display = 'none'
}
</script>

<style scoped>
.gallery-catalog-section + .gallery-catalog-section {
  margin-top: 56px;
}

.gallery-catalog-section h2 {
  margin: 0;
  padding-top: 0;
  border-top: 0;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
}

.gallery-catalog-description {
  margin: 6px 0 20px;
  color: var(--vp-c-text-2);
}

.gallery-catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 20px;
}

.gallery-catalog-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.gallery-catalog-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.gallery-catalog-image {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  background:
    radial-gradient(120% 120% at 15% 15%, color-mix(in srgb, var(--vp-c-brand-1) 22%, transparent), transparent 60%),
    var(--vp-c-bg-alt);
}

.gallery-catalog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.gallery-catalog-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px 16px;
}

.gallery-catalog-title {
  font-weight: 700;
  line-height: 1.3;
}

.gallery-catalog-text {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

.gallery-catalog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.gallery-catalog-tag {
  padding: 1px 8px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--module-color) 55%, transparent);
  color: var(--module-color);
  font-size: 0.72rem;
  font-weight: 600;
}
</style>
