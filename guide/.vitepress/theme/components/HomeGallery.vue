<template>
  <section class="home-gallery vp-raw">
    <div class="gallery-shell">
      <div class="gallery-header">
        <h2 class="section-title">Gallery</h2>
        <div class="section-divider" aria-hidden="true"></div>
        <p class="section-description">
          Interactive examples showcasing the core capabilities of Autark.
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
      title: 'Neighborhood Explorer',
      description: 'Render a projected GeoJSON layer with the smallest possible Autark map workflow.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex2',
      img: '/imgs/ex2.png',
      title: 'Road Classes',
      description: 'Render categorized roads with a stable categorical palette and explicit class ordering.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex3',
      img: '/imgs/ex3.png',
      title: 'City Stack',
      description: 'Build a layered 3D scene from OpenStreetMap with surface, parks, water, roads, and buildings.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex4',
      img: '/imgs/ex4.png',
      title: 'Neighborhood Bars',
      description: 'Link a neighborhood map and bar chart for coordinated picking and highlighting.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-plot', className: 'case-tag--plot' },
      ],
    },
    {
      href: '/gallery/ex5',
      img: '/imgs/ex5.png',
      title: 'Computed Neighborhoods',
      description: 'Compute a derived compactness score and render it as a thematic neighborhood map.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-compute', className: 'case-tag--compute' },
      ],
    },
    {
      href: '/gallery/ex6',
      img: '/imgs/ex6.png',
      title: 'Points over Polygons',
      description: 'Overlay projected point and polygon layers in one standalone map scene.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex7',
      img: '/imgs/ex3.png',
      title: 'Building Picker',
      description: 'Pick 3D buildings, inspect their attributes, and adjust building opacity live.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
      ],
    },
    {
      href: '/gallery/ex8',
      img: '/imgs/ex4.png',
      title: 'Area Scatter',
      description: 'Brush a scatterplot of neighborhood metrics and highlight the matching map features.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-plot', className: 'case-tag--plot' },
      ],
    },
    {
      href: '/gallery/ex9',
      img: '/imgs/ex5.png',
      title: 'Neighborhood Histogram',
      description: 'Bin neighborhood areas into a histogram and brush the distribution to filter the map.',
      tags: [
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-plot', className: 'case-tag--plot' },
      ],
    },
    {
      href: '/gallery/ex10',
      img: '/imgs/ex2.png',
      title: 'Road Event Timeline',
      description: 'Join complaint events to roads and explore the results with a linked time chart.',
      tags: [
        { label: 'autk-db', className: 'case-tag--db' },
        { label: 'autk-map', className: 'case-tag--map' },
        { label: 'autk-plot', className: 'case-tag--plot' },
      ],
    }
  ]

  const featuredExamples = examples.slice(0, 10)

</script>

<style scoped>
.home-gallery {
  margin-left: var(--vp-offset, calc(50% - 50vw));
  margin-right: var(--vp-offset, calc(50% - 50vw));
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
  padding-top: 0;
  border-top: 0;
  color: var(--vp-c-brand-1);
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.section-divider {
  width: 96px;
  height: 3px;
  margin: 16px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--vp-c-brand-2), var(--vp-c-brand-1));
}

.section-description {
  margin: 16px auto 0;
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
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.gallery-card:hover {
  border-color: var(--vp-c-brand-1);
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
@media (min-width: 640px) {
  .home-gallery {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (min-width: 960px) {
  .home-gallery {
    padding-left: 64px;
    padding-right: 64px;
  }
}
</style>