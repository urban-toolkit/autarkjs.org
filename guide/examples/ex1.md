---
title: Standalone GeoJSON Viewer
aside: false
outline: false
---

<script setup>
const ex1Code = `import { AutkMap } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;
    const statusEl = document.getElementById('loading-status');
    const loadingText = document.getElementById('loading-text');

    const setStatus = (msg: string) => {
        if (loadingText) loadingText.textContent = msg;
        if (statusEl) statusEl.style.display = 'flex';
    };

    const hideStatus = () => {
        if (statusEl) statusEl.style.display = 'none';
    };

    try {
        const map = new AutkMap(canvas);
        await map.init();

        setStatus('Loading GeoJSON data...');
        const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json());

        map.loadGeoJsonLayer('neighborhoods', geojson);
        map.draw();
        hideStatus();
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'An unexpected error occurred';
        if (loadingText) loadingText.textContent = \`Error: \${msg}\`;
        if (statusEl) {
            statusEl.style.background = 'rgba(254,242,242,0.95)';
            const spinner = statusEl.querySelector('.autk-spinner');
            if (spinner) spinner.style.display = 'none';
        }
        console.error(err);
    }
}

main();`
</script>

<ExamplePage
  title="Standalone GeoJSON Viewer"
  description="Render GeoJSON layers directly in the browser with a minimal setup. This example shows how to initialize autk-map, load a GeoJSON dataset, and render it directly on a canvas-based map."
  objective="Show the simplest possible Autark workflow: open a preprocessed GeoJSON file and visualize it on the map. This is the hello world example of Autark."
  iframe-src="/examples/raw/ex1.html"
  :tags="['autk-map']"
  :code="ex1Code"
/>