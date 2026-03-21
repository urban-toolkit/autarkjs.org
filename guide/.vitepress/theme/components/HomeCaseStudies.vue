<template>
  <section class="home-case-studies vp-raw">
    <div class="case-shell">
      <div class="case-header">
        <span class="case-eyebrow">Case Studies</span>
        <h2 class="section-title">Case Studies</h2>
        <p class="section-description">
          End-to-end urban visual analytics applications built with Autark.
          These cases combine multiple modules into full interactive experiences.
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
            <div class="case-tags">
              <span
                v-for="tag in item.tags"
                :key="tag.label"
                class="case-tag"
                :style="{ background: tag.color }"
              >
                {{ tag.label.toUpperCase() }}
              </span>
            </div>
            <img :src="item.img" :alt="item.title" />
          </div>

          <div class="case-content">
            <h3 class="case-title">{{ item.title }}</h3>
            <p class="case-description">{{ item.description }}</p>
            <span class="case-open">
              {{ item.title === 'Under Construction' ? 'Coming Soon' : 'Open Case Study →' }}
            </span>
          </div>
        </a>
      </div>

      <div class="case-actions">
        <a href="/casestudies/" class="case-button">View All Case Studies</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const caseStudies = [
  {
    href: '/casestudies/case1',
    img: '/imgs/case1.png',
    title: 'Urbane - 3D NYC Neighborhood Explorer',
    description:
      'Explore Manhattan in 3D with neighborhoods, thematic layers, parallel coordinates, and linked tables powered by Autark.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-plot', color: '#8b5cf6' },
      { label: 'autk-compute', color: '#10b981' },
    ],
  },
  {
    href: '/casestudies/case2',
    img: '/imgs/case2.png',
    title: 'Boston - Streets and EV Charging Stations',
    description:
      'Explore the Boston street network and electric vehicle charging stations in an interactive map.',
    tags: [
      { label: 'autk-db', color: '#f59e0b' },
      { label: 'autk-map', color: '#0ea5e9' },
    ],
  },
]

const featuredCaseStudies = caseStudies.slice(0, 6)
</script>

<style scoped>
.home-case-studies {
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

.case-eyebrow {
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

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.case-card {
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

.case-card:hover {
  transform: translateY(-4px);
  border-color: rgba(16, 185, 129, 0.28);
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.08),
    0 6px 16px rgba(0, 0, 0, 0.06);
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

.case-tags {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 1;
}

.case-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.14);
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
</style>