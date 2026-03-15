<template>
  <section class="examples-index vp-raw">
    <div class="examples-shell">
      <div class="examples-header">
        <span class="examples-eyebrow">Gallery</span>
        <h1 class="examples-title">All Examples</h1>
        <p class="examples-description">
          Browse the complete set of Autark examples, from introductory demos to
          more advanced workflows combining database, mapping, compute, and plotting modules.
        </p>
      </div>

      <div class="examples-grid">
        <a
          v-for="example in examples"
          :key="example.href"
          :href="example.href"
          class="example-card"
        >
          <div class="example-image">
            <div class="example-tags">
              <span
                v-for="tag in example.tags"
                :key="tag.label"
                class="example-tag"
                :style="{ background: tag.color }"
              >
                {{ tag.label.toUpperCase() }}
              </span>
            </div>
            <img :src="example.img" :alt="example.title" />
          </div>

          <div class="example-content">
            <h2 class="example-title">{{ example.title }}</h2>
            <p class="example-description">{{ example.description }}</p>
            <span class="example-open">Open Example →</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const examples = [
  {
    href: '/examples/ex1',
    img: '/imgs/ex1.png',
    title: 'Standalone GeoJSON Viewer',
    description: 'Render GeoJSON layers directly in the browser with a minimal setup.',
    tags: [{ label: 'autk-map', color: '#0ea5e9' }],
  },
  {
    href: '/examples/ex2',
    img: '/imgs/ex2.png',
    title: 'Spatial Join in the Browser',
    description: 'Combine spatial datasets in the browser and visualize the results instantly.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex3',
    img: '/imgs/ex3.png',
    title: '3D OSM City Explorer',
    description: 'Load urban layers from OpenStreetMap and explore city scenes in 3D.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex4',
    img: '/imgs/ex4.png',
    title: 'GPU Property Compute',
    description: 'Run GPU-accelerated computations on feature properties and map the results in real time.',
    tags: [
      { label: 'autk-compute', color: '#10b981' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex5',
    img: '/imgs/ex5.png',
    title: 'Linked Views for Urban Analysis',
    description: 'Link maps and charts to build coordinated urban visual analytics workflows.',
    tags: [
      { label: 'autk-plot', color: '#8b5cf6' },
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-db', color: '#f59e0b' },
    ],
  },
  {
    href: '/examples/ex6',
    img: '/imgs/ex5.png',
    title: 'Network Accessibility Explorer',
    description: 'Prototype example page reserved for future multi-layer urban accessibility analysis.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex7',
    img: '/imgs/ex5.png',
    title: 'Temporal Change Viewer',
    description: 'Placeholder example for future time-aware urban comparison workflows.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-plot', color: '#8b5cf6' },
    ],
  },
  {
    href: '/examples/ex8',
    img: '/imgs/ex5.png',
    title: 'Scenario Comparison Dashboard',
    description: 'Placeholder example for side-by-side scenario analysis and coordinated views.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-compute', color: '#10b981' },
      { label: 'autk-plot', color: '#8b5cf6' },
    ],
  },
]
</script>

<style scoped>
.examples-index {
  padding: 28px 24px 72px;
}

.examples-shell {
  max-width: 1152px;
  margin: 0 auto;
}

.examples-header {
  margin-bottom: 32px;
}

.examples-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.examples-title {
  margin: 0;
  font-size: clamp(2.1rem, 4.5vw, 3rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}

.examples-description {
  margin: 14px 0 0;
  max-width: 780px;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.example-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: var(--vp-c-bg-soft);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.04),
    0 1px 4px rgba(0, 0, 0, 0.05);
}

.example-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.28);
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.08),
    0 6px 16px rgba(0, 0, 0, 0.06);
}

.example-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.example-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.example-tags {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 1;
}

.example-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  letter-spacing: 0.04em;
}

.example-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 20px 20px;
}

.example-title {
  margin: 0 0 8px;
  font-size: 1.05rem;
  line-height: 1.35;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.example-description {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.example-open {
  margin-top: auto;
  padding-top: 14px;
  display: inline-block;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .examples-index {
    padding: 24px 20px 56px;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>