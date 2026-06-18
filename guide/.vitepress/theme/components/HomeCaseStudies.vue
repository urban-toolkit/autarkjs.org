<template>
  <section class="home-case-studies vp-raw">
    <div class="case-shell">
      <div class="case-header">
        <h2 class="section-title">Use Cases</h2>
        <div class="section-divider" aria-hidden="true"></div>
        <p class="section-description">
          End-to-end urban visual analytics applications built with Autark.
        </p>
      </div>

      <div class="case-grid">
        <a
          v-for="item in featuredCaseStudies"
          :key="item.href"
          :href="item.href"
          class="case-card"
        >
          <div class="case-image">
            <div class="case-tags case-tags--overlay">
              <span
                v-for="tag in item.tags"
                :key="tag.label"
                :class="['case-tag', tag.className]"
              >
                {{ tag.label }}
              </span>
            </div>

            <img :src="item.img" :alt="item.title" />
          </div>

          <div class="case-content">
            <h3 class="case-title">{{ item.title }}</h3>
            <p class="case-description">{{ item.description }}</p>
            <span class="case-open">Open Use Case →</span>
          </div>
        </a>
      </div>

      <div class="case-actions">
        <a href="/usecases/" class="case-button">View All Use Cases</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const caseStudies = [
  {
    href: '/usecases/urbane',
    img: '/imgs/urbane.png',
    title: 'Urbane Remake',
    description:
      'Multi-resolution exploration of Manhattan combining OSM data, thematic datasets, choropleth maps, and linked views.',
    tags: [
      { label: 'autk-db', className: 'case-tag--db' },
      { label: 'autk-map', className: 'case-tag--map' },
      { label: 'autk-plot', className: 'case-tag--plot' },
      { label: 'autk-compute', className: 'case-tag--compute' },
    ],
  },
  {
    href: '/usecases/heat',
    img: '/imgs/heat.png',
    title: 'Land Surface Heat Analysis',
    description:
      'Maps land surface temperature trends across Niterói road segments using GPU-computed regressions and linked scatter plots.',
    tags: [
      { label: 'autk-db', className: 'case-tag--db' },
      { label: 'autk-map', className: 'case-tag--map' },
      { label: 'autk-plot', className: 'case-tag--plot' },
      { label: 'autk-compute', className: 'case-tag--compute' },
    ],
  },
  {
    href: '/usecases/shadows',
    img: '/imgs/shadows.png',
    title: 'Urban Shadow Analysis',
    description:
      'Visualizes accumulated building shadows across the Chicago Loop for three seasonal markers, with a linked histogram.',
    tags: [
      { label: 'autk-db', className: 'case-tag--db' },
      { label: 'autk-map', className: 'case-tag--map' },
      { label: 'autk-plot', className: 'case-tag--plot' },
      { label: 'autk-compute', className: 'case-tag--compute' },
    ],
  },
]

const featuredCaseStudies = caseStudies.slice(0, 6)
</script>

<style scoped>
.home-case-studies {
  margin-left: var(--vp-offset, calc(50% - 50vw));
  margin-right: var(--vp-offset, calc(50% - 50vw));
  padding: 64px 24px 24px;
}

.case-shell {
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 24px;
}

.case-header {
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

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.case-card {
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

.case-card:hover {
  border-color: var(--vp-c-brand-1);
}

.case-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.28s ease;
}

.case-card:hover .case-image img {
  transform: scale(1.025);
}

.case-tags--overlay {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1;
}

.case-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
}

.case-title {
  margin: 0 0 8px;
  font-size: 1.1rem;
  line-height: 1.35;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.case-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  flex: 1;
}

.case-open {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.case-card:hover .case-open {
  text-decoration: underline;
}

.case-actions {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.case-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease;
}

.case-button:hover {
  transform: translateY(-1px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
@media (min-width: 640px) {
  .home-case-studies {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (min-width: 960px) {
  .home-case-studies {
    padding-left: 64px;
    padding-right: 64px;
  }
}
</style>