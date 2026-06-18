<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const status = ref('Initializing…')
const error = ref('')
const activeTab = ref<'install' | 'example'>('install')

const phaseLabels: Record<string, string> = {
  'querying-osm-server': 'Scanning PBF data…',
  'downloading-osm-data': 'Reading OSM features…',
  'querying-osm-boundaries': 'Resolving boundaries…',
  'downloading-boundaries': 'Reading boundary geometry…',
  'processing-osm-data': 'Processing OSM features…',
  'processing-boundaries': 'Processing boundary geometry…',
}

onMounted(async () => {
  if (!canvas.value) return

  try {
    const { AutkDb } = await import('@urban-toolkit/autk-db')
    const { AutkMap, MapStyle } = await import('@urban-toolkit/autk-map')

    const db = new AutkDb()
    status.value = 'Initializing database…'
    await db.init()

    await db.loadOsm({
      pbfFileUrl: '/data/lower_mnt.osm.pbf',
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Battery Park City', 'Financial District'],
      },
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
      },
      onProgress: (phase: string) => {
        status.value = phaseLabels[phase] ?? 'Loading…'
      },
    })

    MapStyle.setPredefinedStyle('apple')

    const map = new AutkMap(canvas.value)
    status.value = 'Initializing map…'
    await map.init()

    for (const layerData of db.getLayersMetadata()) {
      const geojson = await db.getLayer(layerData.name)
      map.loadCollection(layerData.name, { collection: geojson, type: layerData.type })
    }

    map.camera.zoom(-3, 0.45, 0.45)
    map.camera.update()
    map.draw()
    status.value = ''
  } catch (e: any) {
    error.value = e?.message ?? String(e)
    status.value = ''
  }
})
</script>

<template>
  <section class="home-quickstart vp-raw">
    <div class="quickstart-shell">
      <div class="quickstart-header">
        <h2 class="section-title">Quick Start</h2>
        <div class="section-divider" aria-hidden="true"></div>
        <p class="section-description">
          Install the full toolkit, copy the minimal example, and see the result directly in the browser.
        </p>
      </div>

      <div class="quickstart-grid">
        <div class="quickstart-card quickstart-card--terminal">
          <div class="home-terminal">
            <div class="home-terminal-bar">
              <div class="home-terminal-dots" aria-hidden="true">● ● ●</div>
              <div class="home-terminal-tabs" role="tablist" aria-label="Quick start code examples">
                <button
                  type="button"
                  class="home-terminal-tab"
                  :class="{ 'home-terminal-tab--active': activeTab === 'install' }"
                  :aria-selected="activeTab === 'install'"
                  @click="activeTab = 'install'"
                >
                  install.sh
                </button>
                <button
                  type="button"
                  class="home-terminal-tab"
                  :class="{ 'home-terminal-tab--active': activeTab === 'example' }"
                  :aria-selected="activeTab === 'example'"
                  @click="activeTab = 'example'"
                >
                  minimal-example.ts
                </button>
              </div>
            </div>

            <div v-show="activeTab === 'install'" class="home-terminal-panel home-terminal-panel--install">
              <a class="home-terminal-link" href="https://www.npmjs.com/package/@urban-toolkit/autk" aria-label="Install @urban-toolkit/autk from npm">
                <span class="home-terminal-prompt">$</span>
                <span class="home-terminal-command" aria-hidden="true">npm install @urban-toolkit/autk</span>
                <span class="sr-only">npm install @urban-toolkit/autk</span>
              </a>
            </div>

            <div v-show="activeTab === 'example'" class="home-terminal-panel home-terminal-panel--example">
              <pre class="home-terminal-code"><code><span class="token-keyword">import</span> { <span class="token-class">AutkDb</span>, <span class="token-class">AutkMap</span>, <span class="token-class">MapStyle</span> } <span class="token-keyword">from</span> <span class="token-string">"@urban-toolkit/autk"</span>;

<span class="token-keyword">const</span> db = <span class="token-keyword">new</span> <span class="token-class">AutkDb</span>();
<span class="token-keyword">await</span> db.init();

<span class="token-keyword">await</span> db.loadOsm({
  pbfFileUrl: <span class="token-string">"/data/lower_mnt.osm.pbf"</span>,
  queryArea: {
    geocodeArea: <span class="token-string">"New York"</span>,
    areas: [<span class="token-string">"Battery Park City"</span>, <span class="token-string">"Financial District"</span>],
  },
  autoLoadLayers: {
    layers: [<span class="token-string">"surface"</span>, <span class="token-string">"parks"</span>, <span class="token-string">"water"</span>, <span class="token-string">"roads"</span>, <span class="token-string">"buildings"</span>],
  },
});

<span class="token-class">MapStyle</span>.setPredefinedStyle(<span class="token-string">"apple"</span>);

<span class="token-keyword">const</span> map = <span class="token-keyword">new</span> <span class="token-class">AutkMap</span>(canvas);
<span class="token-keyword">await</span> map.init();
map.draw();</code></pre>
            </div>
          </div>

          <div class="quickstart-card-header quickstart-card-header--footer">
            <h3 class="quickstart-card-title">Install and code</h3>
            <a class="quickstart-card-link" href="/introduction">Open introduction →</a>
          </div>
        </div>

        <div class="quickstart-card quickstart-card--preview">
          <div class="quickstart-preview">
            <canvas ref="canvas" class="quickstart-preview-canvas" />

            <div v-if="status || error" class="quickstart-preview-overlay">
              <div v-if="error" class="quickstart-preview-error">{{ error }}</div>
              <div v-else class="quickstart-preview-status">
                <div class="quickstart-preview-spinner" />
                {{ status }}
              </div>
            </div>

            <div v-if="!status && !error" class="quickstart-preview-hints">
              <span><strong>click & drag</strong> → pan</span>
              <span><strong>wheel</strong> → zoom</span>
              <span><strong>shift + click & drag</strong> → rotate</span>
            </div>
          </div>

          <div class="quickstart-card-header quickstart-card-header--footer">
            <h3 class="quickstart-card-title">Live result</h3>
            <a class="quickstart-card-link" href="/introduction#minimal-example">See full example →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-quickstart {
  --quickstart-panel-height: 560px;
  margin-left: var(--vp-offset, calc(50% - 50vw));
  margin-right: var(--vp-offset, calc(50% - 50vw));
  padding: 64px 24px 24px;
}

.quickstart-shell {
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 24px;
}

.quickstart-header {
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

.quickstart-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.quickstart-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.quickstart-card:hover {
  border-color: var(--vp-c-brand-1);
}

.quickstart-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
}

.quickstart-card-header--footer {
  border-top: 1px solid var(--vp-c-divider);
}

.quickstart-card-title {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.35;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.quickstart-card-link {
  color: var(--vp-c-brand-1);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.quickstart-card-link:hover {
  text-decoration: underline;
}

.home-terminal {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: var(--quickstart-panel-height);
  background: var(--vp-code-block-bg);
}

.home-terminal-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-code-block-bg) 88%, var(--vp-c-bg-soft));
}

.home-terminal-dots {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  opacity: 0.7;
}

.home-terminal-tabs {
  display: flex;
  gap: 8px;
  min-width: 0;
  flex-wrap: wrap;
}

.home-terminal-tab {
  padding: 7px 12px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
  font-size: 0.85rem;
  line-height: 1;
  cursor: pointer;
}

.home-terminal-tab--active {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}

.home-terminal-panel {
  flex: 1;
  overflow: auto;
  padding: 22px;
}

.home-terminal-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.home-terminal-prompt,
.home-terminal-command,
.home-terminal-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
}

.home-terminal-prompt {
  color: var(--vp-c-brand-1);
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.7;
}

.home-terminal-command {
  position: relative;
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: var(--vp-c-text-1);
  font-size: 0.92rem;
  line-height: 1.7;
  animation: home-install-type 2.4s steps(32, end) 0.35s forwards;
}

.home-terminal-command::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0.62em;
  height: 100%;
  border-right: 2px solid var(--vp-c-brand-1);
  animation: home-install-caret 0.9s step-end infinite;
}

.home-terminal-code {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 0.84rem;
  line-height: 1.68;
  white-space: pre-wrap;
  word-break: break-word;
}

.home-terminal-code .token-keyword {
  color: #c586c0;
}

.home-terminal-code .token-class {
  color: #4fc1ff;
}

.home-terminal-code .token-string {
  color: #ce9178;
}

:global(.dark) .home-terminal-code .token-keyword {
  color: #c792ea;
}

:global(.dark) .home-terminal-code .token-class {
  color: #82aaff;
}

:global(.dark) .home-terminal-code .token-string {
  color: #ecc48d;
}

.quickstart-preview {
  position: relative;
  flex: 1;
  height: var(--quickstart-panel-height);
  background: var(--vp-c-bg-alt);
}

.quickstart-preview-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.quickstart-preview-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.quickstart-preview-status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-family: monospace;
  background: color-mix(in srgb, var(--vp-c-bg) 82%, transparent);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 10px 14px;
}

.quickstart-preview-spinner {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 2px solid color-mix(in srgb, var(--vp-c-text-2) 25%, transparent);
  border-top-color: var(--vp-c-text-1);
  border-radius: 50%;
  animation: autk-spin 0.8s linear infinite;
}

.quickstart-preview-error {
  color: var(--vp-c-danger-1);
  font-family: monospace;
  font-size: 0.85rem;
  text-align: center;
  max-width: 90%;
  white-space: pre-wrap;
}

.quickstart-preview-hints {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 16px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  background: color-mix(in srgb, var(--vp-c-bg) 78%, transparent);
  border: 1px solid var(--vp-c-divider);
  backdrop-filter: blur(4px);
}

.quickstart-preview-hints span {
  white-space: nowrap;
}

.quickstart-preview-hints strong {
  color: var(--vp-c-brand-1);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes home-install-type {
  from {
    max-width: 0;
  }
  to {
    max-width: 32ch;
  }
}

@keyframes home-install-caret {
  50% {
    border-color: transparent;
  }
}

@keyframes autk-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-terminal-command {
    max-width: 32ch;
    animation: none;
  }

  .home-terminal-command::after {
    animation: none;
  }
}

@media (min-width: 640px) {
  .home-quickstart {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (max-width: 960px) {
  .home-quickstart {
    --quickstart-panel-height: 420px;
  }

  .quickstart-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 960px) {
  .home-quickstart {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media (max-width: 640px) {
  .home-quickstart {
    --quickstart-panel-height: 360px;
    padding: 64px 24px 16px;
  }

  .quickstart-card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .home-terminal-panel {
    padding: 18px;
  }

  .home-terminal-link {
    align-items: flex-start;
  }

  .home-terminal-command {
    max-width: 100%;
    white-space: normal;
    word-break: break-word;
    animation: none;
  }

  .home-terminal-command::after {
    display: none;
  }

}
</style>
