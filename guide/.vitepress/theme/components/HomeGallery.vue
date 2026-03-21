<template>
  <section class="home-gallery vp-raw">
    <div class="gallery-shell">
      <div class="gallery-header">
        <span class="gallery-eyebrow">Examples</span>
        <h2 class="section-title">Gallery</h2>
        <p class="section-description">
          Interactive examples showcasing the core capabilities of Autark.
          Each example runs entirely in the browser.
        </p>
      </div>

      <div class="gallery-grid">
        <a
          v-for="example in featuredExamples"
          :key="example.href"
          :href="example.href"
          class="gallery-card"
        >
          <div class="gallery-image">
            <div class="gallery-tags">
              <span
                v-for="tag in example.tags"
                :key="tag.label"
                class="gallery-tag"
                :style="{ background: tag.color }"
              >
                {{ tag.label.toUpperCase() }}
              </span>
            </div>
            <img :src="example.img" :alt="example.title" />
          </div>

          <div class="gallery-content">
            <h3 class="gallery-title">{{ example.title }}</h3>
            <p class="gallery-description">{{ example.description }}</p>
            <span class="gallery-open">
              {{ example.title === 'Under Construction' ? 'Coming Soon' : 'Open Example →' }}
            </span>
          </div>
        </a>
      </div>

      <div class="gallery-actions">
        <a href="/examples/" class="gallery-button">View All Examples</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const examples = [
    {
    href: '/examples/ex1',
    img: '/imgs/ex1.png',
    title: 'Manhattan Neighborhood GeoJSON Viewer',
    description:
      'A minimal example that loads a projected GeoJSON file of Manhattan neighborhoods and renders it directly in Autark.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex2',
    img: '/imgs/ex2.png',
    title: 'Spatial Join in the Browser',
    description:
      'A browser-side spatial join example that counts noise points inside Manhattan neighborhoods and visualizes the result as a thematic map.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex3',
    img: '/imgs/ex3.png',
    title: '3D Manhattan from OpenStreetMap',
    description:
      'A live example that queries OpenStreetMap through Overpass API and renders a multi-layer 3D scene of Manhattan directly in the browser.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
  {
    href: '/examples/ex4',
    img: '/imgs/ex4.png',
    title: 'Under Construction',
    description: 'This example is currently under development.',
    tags: [{ label: 'coming soon', color: '#6b7280' }],
  },
  {
    href: '/examples/ex5',
    img: '/imgs/ex5.png',
    title: 'Linked Views: Map + Chart',
    description: 'A coordinated multiple views example linking an interactive map with a custom bar chart. Selecting elements in one view highlights them in the other.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-plot', color: '#10b981' },
    ],
  }
]

const featuredExamples = examples.slice(0, 6)

</script>

<style scoped>
.home-gallery {
  padding: 64px 24px 72px;
}

.gallery-shell {
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 24px;
}

.gallery-header {
  text-align: center;
  margin-bottom: 36px;
}

.gallery-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.section-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.9rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}

.section-description {
  margin: 14px auto 0;
  max-width: 720px;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.gallery-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
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

.gallery-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.28);
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.08),
    0 6px 16px rgba(0, 0, 0, 0.06);
}

.gallery-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.28s ease;
}

.gallery-card:hover .gallery-image img {
  transform: scale(1.025);
}

.gallery-tags {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 1;
}

.gallery-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.14);
}

.gallery-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 20px 20px;
}

.gallery-title {
  margin: 0 0 8px;
  font-size: 1.05rem;
  line-height: 1.35;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.gallery-description {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.gallery-open {
  margin-top: auto;
  padding-top: 14px;
  display: inline-block;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.gallery-card:hover .gallery-open {
  text-decoration: underline;
}

.gallery-actions {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.gallery-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.18s ease;
}

.gallery-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .home-gallery {
    padding: 48px 20px 56px;
  }

  .gallery-shell {
    padding-top: 40px;
  }

  .gallery-header {
    margin-bottom: 28px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>