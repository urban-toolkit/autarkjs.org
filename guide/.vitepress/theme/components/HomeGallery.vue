<template>
  <section class="home-gallery vp-raw">
    <div class="container">
      <h2 class="section-title">Gallery</h2>
      <div class="gallery-grid">
        <a
          v-for="example in examples"
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
              >{{ tag.label }}</span>
            </div>
            <img :src="example.img" :alt="example.title" />
          </div>
          <div class="gallery-content">
            <h3>{{ example.title }}</h3>
            <p>{{ example.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const examples = [
  {
    href: '/examples/ex1.html',
    img: '/imgs/ex1.png',
    title: 'Standalone Map',
    description: 'Load and visualize pre-processed GeoJSON data using autk-map.',
    tags: [{ label: 'autk-map', color: '#0ea5e9' }],
  },
  {
    href: '/examples/ex2.html',
    img: '/imgs/ex2.png',
    title: 'Map and Database Integration',
    description: 'Combine autk-db and autk-map to build complex geospatial applications.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-db', color: '#f59e0b' },
    ],
  },
  {
    href: '/examples/ex3.html',
    img: '/imgs/ex3.png',
    title: 'Three-dimensional Maps',
    description: 'Load and visualize OpenStreetMap data from any city in 3D.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-db', color: '#f59e0b' },
    ],
  },
]
</script>

<style scoped>
.home-gallery {
  padding: 64px 24px;
  max-width: 1152px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: var(--vp-c-text-1);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.gallery-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.gallery-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.gallery-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-card:hover .gallery-image img {
  transform: scale(1.03);
}

.gallery-tags {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 6px;
  z-index: 1;
}

.gallery-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.gallery-content {
  padding: 16px 20px 20px;
}

.gallery-content h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--vp-c-text-1);
}

.gallery-content p {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}
</style>
