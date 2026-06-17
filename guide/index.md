---
layout: home

hero:
  name: Autark
  text: A Serverless Toolkit for Prototyping Urban Visual Analytics Systems
  tagline: 'Load, process, and visualize geospatial data entirely in the browser.'
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/urban-toolkit/autark/

features:
  - title: autk-db
    details: 'Run geospatial queries in the browser. Compatible with OpenStreetMap, GeoJSON, GeoTIFF, and CSV.<br><br><a href="https://www.npmjs.com/package/@urban-toolkit/autk-db"><img alt="autk-db npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-db?logo=npm&labelColor=111827&color=f59e0b"></a>'
    link: /autk-db/
  - title: autk-map
    details: 'Render 2D and 3D maps using WebGPU. Handle map layers directly on the canvas without a tile server.<br><br><a href="https://www.npmjs.com/package/@urban-toolkit/autk-map"><img alt="autk-map npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-map?logo=npm&labelColor=111827&color=0ea5e9"></a>'
    link: /autk-map/
  - title: autk-compute
    details: 'Run custom analytical tasks on GeoJSON datasets. Efficiently process feature sets without a backend.<br><br><a href="https://www.npmjs.com/package/@urban-toolkit/autk-compute"><img alt="autk-compute npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-compute?logo=npm&labelColor=111827&color=10b981"></a>'
    link: /autk-compute/
  - title: autk-plot
    details: 'Render interactive D3.js charts for urban datasets. Directly link charts to map for coordinated views.<br><br><a href="https://www.npmjs.com/package/@urban-toolkit/autk-plot"><img alt="autk-plot npm version" src="https://img.shields.io/npm/v/%40urban-toolkit%2Fautk-plot?logo=npm&labelColor=111827&color=8b5cf6"></a>'
    link: /autk-plot/
---

<div class="home-install-block vp-raw">
  <p class="home-install-label">Install the full toolkit</p>
  <a class="home-install-terminal" href="https://www.npmjs.com/package/@urban-toolkit/autk" aria-label="Install @urban-toolkit/autk from npm">
    <span class="home-install-prompt">$</span>
    <span class="home-install-command" aria-hidden="true">npm install @urban-toolkit/autk</span>
    <span class="sr-only">npm install @urban-toolkit/autk</span>
  </a>
</div>

<style>
.VPHome .home-install-block {
  width: min(100%, 960px);
  margin: 8px auto 0;
  padding: 0 24px 24px;
}

.VPHome .home-install-label {
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}

.VPHome .home-install-terminal {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: #0b1220;
  color: #e5edf8;
  text-decoration: none;
  overflow: hidden;
  box-shadow:
    0 12px 32px rgba(2, 6, 23, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.VPHome .home-install-terminal:hover {
  border-color: rgba(59, 130, 246, 0.36);
}

.VPHome .home-install-prompt,
.VPHome .home-install-command {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
  font-size: 0.98rem;
  line-height: 1.7;
}

.VPHome .home-install-prompt {
  color: #60a5fa;
  font-weight: 700;
  flex: 0 0 auto;
}

.VPHome .home-install-command {
  position: relative;
  display: inline-block;
  max-width: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #f8fafc;
  animation: home-install-type 2.4s steps(32, end) 0.35s forwards;
}

.VPHome .home-install-command::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0.62em;
  height: 100%;
  border-right: 2px solid #38bdf8;
  animation: home-install-caret 0.9s step-end infinite;
}

.VPHome .sr-only {
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

@media (prefers-reduced-motion: reduce) {
  .VPHome .home-install-command {
    max-width: 32ch;
    animation: none;
  }

  .VPHome .home-install-command::after {
    animation: none;
  }
}

@media (max-width: 640px) {
  .VPHome .home-install-block {
    padding: 0 24px 16px;
  }

  .VPHome .home-install-terminal {
    align-items: flex-start;
    padding: 16px 18px;
  }

  .VPHome .home-install-command {
    white-space: normal;
    word-break: break-word;
    animation-name: none;
    max-width: 100%;
  }

  .VPHome .home-install-command::after {
    display: none;
  }
}
</style>

<HomeGallery />

<HomeCaseStudies />
