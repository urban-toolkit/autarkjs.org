<template>
  <section class="home-gallery vp-raw">
    <div class="gallery-shell">
      <div class="gallery-header">
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
            <!-- ✅ agora usando padrão global -->
            <div class="case-tags case-tags--overlay">
              <span
                v-for="tag in example.tags"
                :key="tag.label"
                :class="['case-tag', tag.className]"
              >
                {{ tag.label }}
              </span>
            </div>

            <img :src="example.img" :alt="example.title" />
          </div>

          <div class="gallery-content">
            <h3 class="gallery-title">{{ example.title }}</h3>
            <p class="gallery-description">{{ example.description }}</p>
            <span class="gallery-open">Open Example →</span>
          </div>
        </a>
      </div>

      <div class="gallery-actions">
        <a href="/gallery/" class="gallery-button">View All Examples</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

  const examples = [
    {
      href: '/gallery/ex1',
      img: '/imgs/ex1.png',
      title: 'Standalone GeoJSON',
      description: 'Render a projected GeoJSON dataset directly in the browser.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex2',
      img: '/imgs/ex2.png',
      title: 'Map and Database',
      description: 'Load spatial data into an in-browser database and visualize it on a map.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex3',
      img: '/imgs/ex3.png',
      title: '3D OSM Map',
      description: 'Query OpenStreetMap data and render a layered 3D urban scene.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex4',
      img: '/imgs/ex4.png',
      title: 'Linked Views',
      description: 'Link map and chart views for coordinated visual analysis.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-plot', className: 'case-tag--plot' },
      ],
    },
    {
      href: '/gallery/ex5',
      img: '/imgs/ex5.png',
      title: 'Compute Engine',
      description: 'Compute derived attributes and render them as a thematic map.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-compute', className: 'case-tag--compute' },
      ],
    },
    {
      href: '/gallery/ex6',
      img: '/imgs/ex6.png',
      title: 'Polygons and Points',
      description: 'Render polygons and point layers together in a single map view.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
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

.case-tags--overlay {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1;
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
</style>