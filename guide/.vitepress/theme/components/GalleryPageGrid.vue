<template>
  <div class="gallery-page vp-raw">
    <h2 class="gallery-page-section-title">Filter by package</h2>
    <div class="gallery-page-filters">
      <label
        v-for="pkg in packages"
        :key="pkg.id"
        class="gallery-page-filter"
        :class="{ 'gallery-page-filter--active': selected.has(pkg.id) }"
      >
        <input
          type="checkbox"
          :value="pkg.id"
          :checked="selected.has(pkg.id)"
          @change="toggle(pkg.id)"
        />
        <span class="gallery-page-filter-dot" :class="pkg.className"></span>
        <span class="gallery-page-filter-label">{{ pkg.id }}</span>
      </label>
    </div>

    <h2 class="gallery-page-section-title">Examples</h2>
    <div class="gallery-page-grid">
      <a
        v-for="example in visibleExamples"
        :key="example.href"
        :href="example.href"
        class="gallery-page-card"
        :title="example.title"
      >
        <div class="gallery-page-image">
          <img :src="example.img" :alt="example.title" />
          <div class="gallery-page-dots">
            <span
              v-for="tag in example.tags"
              :key="tag"
              class="gallery-page-dot"
              :class="classForTag(tag)"
            ></span>
          </div>
        </div>

        <div class="gallery-page-footer">
          <span class="gallery-page-title">{{ example.title }}</span>
          <span class="gallery-page-open">Open →</span>
        </div>
      </a>
    </div>

    <p v-if="visibleExamples.length === 0" class="gallery-page-empty">
      No examples match the selected filters.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const packages = [
  { id: 'autk-map', className: 'case-tag--map' },
  { id: 'autk-db', className: 'case-tag--db' },
  { id: 'autk-plot', className: 'case-tag--plot' },
  { id: 'autk-compute', className: 'case-tag--compute' },
]

const examples = [
  {
    href: '/gallery/ex1',
    img: '/imgs/ex1.png',
    title: 'Geojson Layer',
    description: 'Render a projected GeoJSON layer with the smallest possible Autark map workflow.',
    tags: ['autk-map'],
  },
  {
    href: '/gallery/ex2',
    img: '/imgs/ex2.png',
    title: 'Categorical Data',
    description: 'Render categorized roads with a stable categorical palette and explicit class ordering.',
    tags: ['autk-map'],
  },
  {
    href: '/gallery/ex3',
    img: '/imgs/ex3.png',
    title: 'OSM Layers',
    description: 'Build a layered 3D scene from OpenStreetMap with surface, parks, water, roads, and buildings.',
    tags: ['autk-db', 'autk-map'],
  },
  {
    href: '/gallery/ex4',
    img: '/imgs/ex4.png',
    title: 'Linked Views',
    description: 'Link a neighborhood map and bar chart for coordinated picking and highlighting.',
    tags: ['autk-map', 'autk-plot'],
  },
  {
    href: '/gallery/ex5',
    img: '/imgs/ex5.png',
    title: 'GPU Computation',
    description: 'Compute a derived compactness score and render it as a thematic neighborhood map.',
    tags: ['autk-db', 'autk-map', 'autk-compute'],
  },
  {
    href: '/gallery/ex6',
    img: '/imgs/ex6.png',
    title: 'Layer Overlay',
    description: 'Overlay projected point and polygon layers in one standalone map scene.',
    tags: ['autk-map'],
  },
  {
    href: '/gallery/ex7',
    img: '/imgs/ex7.png',
    title: '3D Picking',
    description: 'Pick 3D buildings, inspect their attributes, and adjust building opacity live.',
    tags: ['autk-db', 'autk-map'],
  },
  {
    href: '/gallery/ex8',
    img: '/imgs/ex8.png',
    title: 'Scatterplot',
    description: 'Brush a scatterplot of neighborhood metrics and highlight the matching map features.',
    tags: ['autk-map', 'autk-plot'],
  },
  {
    href: '/gallery/ex9',
    img: '/imgs/ex9.png',
    title: 'Bar chart',
    description: 'Bin neighborhood areas into a histogram and brush the distribution to filter the map.',
    tags: ['autk-map', 'autk-plot'],
  },
  {
    href: '/gallery/ex10',
    img: '/imgs/ex10.png',
    title: 'Spatial Join',
    description: 'Join complaint events to roads and explore the results with a linked time chart.',
    tags: ['autk-db', 'autk-map', 'autk-plot'],
  },
  {
    href: '/gallery/ex11',
    img: '/imgs/ex11.png',
    title: 'Parallel Coords',
    description: 'Compare multiple neighborhood attributes with linked parallel coordinates and map brushing.',
    tags: ['autk-map', 'autk-plot'],
  },
  {
    href: '/gallery/ex15',
    img: '/imgs/ex15.png',
    title: 'Sky Exposure',
    description: 'Compute sky exposure over the road network and render it as a thematic street layer.',
    tags: ['autk-db', 'autk-map', 'autk-compute'],
  },
  {
    href: '/gallery/ex16',
    img: '/imgs/ex16.png',
    title: 'Visibility',
    description: 'Pick a building and compute which surrounding buildings are visible from sampled viewpoints.',
    tags: ['autk-db', 'autk-map', 'autk-compute'],
  },
  {
    href: '/gallery/ex17',
    img: '/imgs/ex17.png',
    title: 'View Score',
    description: 'Render selected-building view metrics in 3D and compare window-level values in linked parallel coordinates.',
    tags: ['autk-db', 'autk-map', 'autk-compute', 'autk-plot'],
  },
]

const selected = ref(new Set<string>())

function toggle(id: string): void {
  const next = new Set(selected.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  selected.value = next
}

const visibleExamples = computed(() => {
  if (selected.value.size === 0) return examples
  return examples.filter((example) =>
    example.tags.some((tag) => selected.value.has(tag)),
  )
})

function classForTag(tag: string): string {
  return `case-tag--${tag.replace('autk-', '')}`
}
</script>

<style scoped>
.gallery-page-section-title {
  margin: 24px 0 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}

.gallery-page-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.gallery-page-filter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.18s ease, color 0.18s ease, background-color 0.18s ease;
}

.gallery-page-filter:hover {
  border-color: var(--vp-c-brand-1);
}

.gallery-page-filter input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.gallery-page-filter-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.gallery-page-filter--active {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.gallery-page-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.gallery-page-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.gallery-page-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.gallery-page-image {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--vp-c-bg-alt);
}

.gallery-page-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.28s ease;
}

.gallery-page-card:hover .gallery-page-image img {
  transform: scale(1.03);
}

.gallery-page-dots {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 6px;
}

.gallery-page-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

.gallery-page-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.gallery-page-title {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--vp-c-text-1);
}

.gallery-page-open {
  flex-shrink: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.gallery-page-empty {
  margin-top: 24px;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media (max-width: 720px) {
  .gallery-page-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 460px) {
  .gallery-page-grid {
    grid-template-columns: 1fr;
  }
}
</style>
