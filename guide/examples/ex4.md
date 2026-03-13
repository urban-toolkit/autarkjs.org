---
title: GPU Property Compute
aside: false
outline: false
---

<script setup>
const ex4Code = `import { GeojsonCompute } from 'autk-compute';
import { AutkMap } from 'autk-map';

async function main() {
    // Load a GeoJSON layer
    const geojson = await fetch('/data/some-layer.geojson').then(r => r.json());

    // Initialize the GPU compute engine
    const compute = new GeojsonCompute();

    // Apply a compute function to generate a derived property
    const result = await compute.compute({
        geojson,
        property: 'computed_value',
        wgsl: \`
            @group(0) @binding(0) var<storage, read> inputValues: array<f32>;
            @group(0) @binding(1) var<storage, read_write> outputValues: array<f32>;

            @compute @workgroup_size(64)
            fn main(@builtin(global_invocation_id) id: vec3<u32>) {
                let i = id.x;
                outputValues[i] = inputValues[i] * 2.0;
            }
        \`,
    });

    // Render the computed result on the map
    const map = new AutkMap(document.querySelector('canvas')!);
    await map.init();
    map.loadGeoJsonLayer('computed-layer', result);
    map.updateGeoJsonLayerThematic('computed-layer', result, f => f.properties?.computed_value || 0);
    map.draw();
}

main();`
</script>

<ExamplePage
  title="GPU Property Compute"
  description="Run GPU-accelerated computations on feature properties and map the results in real time. This example will demonstrate how Autark derives new feature attributes with autk-compute and immediately feeds them into autk-map."
  objective="Apply a WGSL function to feature attributes and use the computed output to theme the map. This example is designed to communicate one of Autark’s most distinctive technical capabilities: browser-side GPU compute integrated directly into geospatial visualization."
  coming-soon
  coming-soon-message="This live example depends on autk-compute, which is not yet published in a way that can be consumed by the current documentation build pipeline."
  :tags="['autk-compute', 'autk-map']"
  :code="ex4Code"
/>