---
layout: home

hero:
  name: Autark
  text: Browser-native urban visual analytics
  tagline: 'Load, query, compute, and visualize geospatial data entirely in the browser.<br><span class="home-umbrella-badge"><span>Install the full toolkit:</span> <a href="https://www.npmjs.com/package/@urban-toolkit/autk"><img alt="@urban-toolkit/autk npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk?logo=npm&labelColor=111827&color=2563eb"></a></span>'
  image:
    src: /imgs/ex5.png
    alt: Autark example
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: View Gallery
      link: /gallery/
    - theme: alt
      text: GitHub
      link: https://github.com/urban-toolkit/autark/
---

<style>
.VPHome .home-umbrella-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 600;
}

.VPHome .home-umbrella-badge a {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  vertical-align: middle;
}

.home-landing {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.home-section {
  padding: 24px 0 40px;
}

.home-section + .home-section {
  padding-top: 12px;
}

.home-section-header {
  margin-bottom: 24px;
}

.home-section-kicker {
  margin: 0 0 8px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.home-section-title {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}

.home-section-description {
  margin: 12px 0 0;
  max-width: 760px;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.pipeline-grid,
.why-grid,
.featured-grid,
.quickstart-grid {
  display: grid;
  gap: 20px;
}

.pipeline-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.why-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.featured-grid {
  grid-template-columns: 1.45fr 1fr;
}

.quickstart-grid {
  grid-template-columns: 1.1fr 0.9fr;
}

.module-card,
.why-card,
.featured-card,
.quickstart-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.module-card,
.why-card,
.quickstart-card {
  padding: 22px;
}

.module-card {
  position: relative;
  overflow: hidden;
}

.module-card::after {
  content: "";
  position: absolute;
  inset: auto 18px 0 18px;
  height: 3px;
  border-radius: 999px;
  background: var(--module-accent, var(--vp-c-brand-1));
}

.module-card h3,
.why-card h3,
.featured-copy h3,
.quickstart-card h3 {
  margin: 0 0 10px;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
}

.module-card p,
.why-card p,
.featured-copy p,
.quickstart-card p,
.quickstart-links {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.module-card .module-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.module-chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 2px;
  font-family: Verdana, Geneva, DejaVu Sans, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
}

.module-chip.db { background: #f59e0b; }
.module-chip.map { background: #0ea5e9; }
.module-chip.compute { background: #10b981; }
.module-chip.plot { background: #8b5cf6; }

.module-card.db { --module-accent: #f59e0b; }
.module-card.map { --module-accent: #0ea5e9; }
.module-card.compute { --module-accent: #10b981; }
.module-card.plot { --module-accent: #8b5cf6; }

.why-card {
  min-height: 100%;
}

.why-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-bottom: 14px;
  border-radius: 12px;
  background: var(--vp-c-bg);
  font-size: 1.2rem;
}

.featured-card {
  overflow: hidden;
}

.featured-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-card-large {
  min-height: 420px;
}

.featured-card-large .featured-visual {
  height: 250px;
}

.featured-card-large .featured-copy {
  padding: 22px;
}

.featured-stack {
  display: grid;
  gap: 20px;
}

.featured-card-small {
  display: grid;
  grid-template-columns: 180px 1fr;
  min-height: 200px;
}

.featured-card-small .featured-visual {
  min-height: 100%;
}

.featured-card-small .featured-copy {
  padding: 20px;
}

.featured-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 12px;
}

.featured-links,
.quickstart-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 16px;
}

.featured-links a,
.quickstart-links a {
  font-weight: 700;
  text-decoration: none;
}

.quickstart-card pre {
  margin: 12px 0 0;
}

.quickstart-card code {
  white-space: pre-wrap;
}

.quickstart-list {
  margin: 0;
  padding-left: 18px;
  color: var(--vp-c-text-2);
}

.quickstart-list li + li {
  margin-top: 10px;
}

@media (max-width: 1100px) {
  .pipeline-grid,
  .why-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .featured-grid,
  .quickstart-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .pipeline-grid,
  .why-grid {
    grid-template-columns: 1fr;
  }

  .featured-card-small {
    grid-template-columns: 1fr;
  }

  .featured-card-small .featured-visual {
    height: 180px;
  }
}
</style>

<div class="home-landing">
  <section class="home-section">
    <div class="home-section-header">
      <p class="home-section-kicker">Modular toolkit</p>
      <h2 class="home-section-title">A complete browser-native pipeline for urban data</h2>
      <p class="home-section-description">
        Autark is built as four focused libraries that work independently or together. Load and transform urban data with <code>autk-db</code>, compute new metrics with <code>autk-compute</code>, render maps with <code>autk-map</code>, and connect charts with <code>autk-plot</code>.
      </p>
    </div>

    <div class="pipeline-grid">
      <article class="module-card db">
        <div class="module-top">
          <span class="module-chip db">autk-db</span>
          <a href="https://www.npmjs.com/package/@urban-toolkit/autk-db"><img alt="autk-db npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-db?logo=npm&labelColor=111827&color=f59e0b"></a>
        </div>
        <h3>Load, query, and transform urban data</h3>
        <p>Use DuckDB in the browser for OpenStreetMap, GeoJSON, CSV, JSON, and GeoTIFF workflows, including joins, filtering, and spatial operations.</p>
      </article>

      <article class="module-card compute">
        <div class="module-top">
          <span class="module-chip compute">autk-compute</span>
          <a href="https://www.npmjs.com/package/@urban-toolkit/autk-compute"><img alt="autk-compute npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-compute?logo=npm&labelColor=111827&color=10b981"></a>
        </div>
        <h3>Run GPU analysis in the browser</h3>
        <p>Compute feature properties with WGSL or derive visibility-style metrics from sampled viewpoints using WebGPU render-analysis pipelines.</p>
      </article>

      <article class="module-card map">
        <div class="module-top">
          <span class="module-chip map">autk-map</span>
          <a href="https://www.npmjs.com/package/@urban-toolkit/autk-map"><img alt="autk-map npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-map?logo=npm&labelColor=111827&color=0ea5e9"></a>
        </div>
        <h3>Render 2D and 3D geospatial scenes</h3>
        <p>Display physical and thematic layers directly from projected GeoJSON or OSM-derived collections, with interaction and WebGPU rendering built in.</p>
      </article>

      <article class="module-card plot">
        <div class="module-top">
          <span class="module-chip plot">autk-plot</span>
          <a href="https://www.npmjs.com/package/@urban-toolkit/autk-plot"><img alt="autk-plot npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-plot?logo=npm&labelColor=111827&color=8b5cf6"></a>
        </div>
        <h3>Build linked analytical views</h3>
        <p>Create D3-based charts that consume GeoJSON properties and coordinate with map selections for dashboard-style urban exploration.</p>
      </article>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-header">
      <p class="home-section-kicker">Why Autark</p>
      <h2 class="home-section-title">Designed for geospatial analytics, not just map display</h2>
      <p class="home-section-description">
        Autark focuses on the full interactive workflow: loading data, deriving metrics, rendering maps, and linking spatial and statistical views without depending on a custom backend stack.
      </p>
    </div>

    <div class="why-grid">
      <article class="why-card">
        <div class="why-card-icon">🌐</div>
        <h3>Browser-native workflows</h3>
        <p>Prototype and share urban visual analytics systems entirely in the browser, with client-side loading, querying, computing, and rendering.</p>
      </article>
      <article class="why-card">
        <div class="why-card-icon">🗺️</div>
        <h3>Geospatial formats first</h3>
        <p>Work directly with OpenStreetMap, GeoJSON, CSV point data, JSON tables, and GeoTIFF raster workflows in one toolkit.</p>
      </article>
      <article class="why-card">
        <div class="why-card-icon">⚡</div>
        <h3>GPU map and compute stack</h3>
        <p>Use WebGPU not only for rendering but also for analytical pipelines such as attribute computation, sky exposure, and visibility metrics.</p>
      </article>
      <article class="why-card">
        <div class="why-card-icon">🔗</div>
        <h3>Composable modules</h3>
        <p>Adopt a single package for a focused task or combine all four libraries into linked dashboards, thematic maps, and exploratory interfaces.</p>
      </article>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-header">
      <p class="home-section-kicker">Featured experiences</p>
      <h2 class="home-section-title">From raw urban data to interactive analytical views</h2>
      <p class="home-section-description">
        The toolkit is meant to support complete visual-analytics stories: spatial joins, thematic mapping, render analysis, linked charts, and custom compute workflows.
      </p>
    </div>

    <div class="featured-grid">
      <article class="featured-card featured-card-large">
        <div class="featured-visual"><img src="/imgs/ex5.png" alt="Compute engine example"></div>
        <div class="featured-copy">
          <div class="featured-meta">
            <span class="module-chip db">autk-db</span>
            <span class="module-chip map">autk-map</span>
            <span class="module-chip compute">autk-compute</span>
          </div>
          <h3>GPU compute + thematic rendering</h3>
          <p>Load urban layers, derive a custom metric on the GPU, and push the results back into a thematic map without leaving the browser runtime.</p>
          <div class="featured-links">
            <a href="/gallery/ex5">Open example →</a>
            <a href="/autk-compute/">Explore compute docs →</a>
          </div>
        </div>
      </article>

      <div class="featured-stack">
        <article class="featured-card featured-card-small">
          <div class="featured-visual"><img src="/imgs/ex3.png" alt="3D OSM example"></div>
          <div class="featured-copy">
            <div class="featured-meta">
              <span class="module-chip db">autk-db</span>
              <span class="module-chip map">autk-map</span>
            </div>
            <h3>3D OSM city scenes</h3>
            <p>Query OSM data and render layered urban environments directly on the canvas.</p>
          </div>
        </article>

        <article class="featured-card featured-card-small">
          <div class="featured-visual"><img src="/imgs/ex4.png" alt="Linked views example"></div>
          <div class="featured-copy">
            <div class="featured-meta">
              <span class="module-chip map">autk-map</span>
              <span class="module-chip plot">autk-plot</span>
            </div>
            <h3>Linked map and chart views</h3>
            <p>Coordinate selections between spatial layers and charts for dashboard-style urban analysis.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-header">
      <p class="home-section-kicker">Quick start</p>
      <h2 class="home-section-title">Start with the full toolkit or adopt one module at a time</h2>
    </div>

    <div class="quickstart-grid">
      <article class="quickstart-card">
        <h3>Install everything</h3>
        <p>Use the umbrella package when you want the complete browser-native workflow from data loading to linked visual exploration.</p>
        <pre><code>npm install @urban-toolkit/autk</code></pre>
        <div class="quickstart-links">
          <a href="/introduction">Read the introduction →</a>
          <a href="/gallery/">Browse all examples →</a>
          <a href="/api/autk-map/globals">Open the API docs →</a>
        </div>
      </article>

      <article class="quickstart-card">
        <h3>Typical workflow</h3>
        <ol class="quickstart-list">
          <li>Load OSM, GeoJSON, CSV, or raster data with <code>autk-db</code>.</li>
          <li>Compute new metrics with <code>autk-compute</code> when needed.</li>
          <li>Render interactive 2D/3D layers with <code>autk-map</code>.</li>
          <li>Connect charts and linked views with <code>autk-plot</code>.</li>
        </ol>
      </article>
    </div>
  </section>
</div>

<HomeGallery />

<HomeCaseStudies />
