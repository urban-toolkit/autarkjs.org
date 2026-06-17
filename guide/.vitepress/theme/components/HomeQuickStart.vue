<template>
  <section class="home-quickstart vp-raw">
    <div class="home-quickstart-shell">
      <div class="home-quickstart-copy">
        <p class="home-quickstart-kicker">Quick Start</p>
        <h2 class="home-quickstart-title">Install Autark and render your first map.</h2>
        <p class="home-quickstart-description">
          Start with the full toolkit, then use the same minimal example from the introduction to load OpenStreetMap data and draw a 3D scene in the browser.
        </p>
        <div class="home-quickstart-actions">
          <a class="home-quickstart-link" href="/introduction">Open introduction</a>
          <a class="home-quickstart-link home-quickstart-link--alt" href="https://www.npmjs.com/package/@urban-toolkit/autk">View package</a>
        </div>
      </div>

      <div class="home-quickstart-demo">
        <div class="home-terminal">
          <div class="home-terminal-bar">
            <div class="home-terminal-dots" aria-hidden="true">● ● ●</div>
            <div class="home-terminal-tabs" aria-label="Quick start tabs">
              <span class="home-terminal-tab home-terminal-tab--active">install.sh</span>
              <span class="home-terminal-tab">minimal-example.ts</span>
            </div>
          </div>

          <div class="home-terminal-panel home-terminal-panel--install">
            <a class="home-terminal-link" href="https://www.npmjs.com/package/@urban-toolkit/autk" aria-label="Install @urban-toolkit/autk from npm">
              <span class="home-terminal-prompt">$</span>
              <span class="home-terminal-command" aria-hidden="true">npm install @urban-toolkit/autk</span>
              <span class="sr-only">npm install @urban-toolkit/autk</span>
            </a>
          </div>

          <div class="home-terminal-separator"></div>

          <div class="home-terminal-panel home-terminal-panel--example">
            <div class="home-terminal-file">minimal-example.ts</div>
            <pre class="home-terminal-code"><code><span class="token-keyword">import</span> { <span class="token-class">AutkDb</span>, <span class="token-class">AutkMap</span> } <span class="token-keyword">from</span> <span class="token-string">"@urban-toolkit/autk"</span>;

<span class="token-keyword">const</span> db = <span class="token-keyword">new</span> <span class="token-class">AutkDb</span>();
<span class="token-keyword">await</span> db.init();

<span class="token-keyword">await</span> db.loadOsm({
  pbfFileUrl: <span class="token-string">"/data/lower_mnt.osm.pbf"</span>,
  queryArea: {
    geocodeArea: <span class="token-string">"New York"</span>,
    areas: [<span class="token-string">"Battery Park City"</span>, <span class="token-string">"Financial District"</span>]
  }
});

<span class="token-keyword">const</span> map = <span class="token-keyword">new</span> <span class="token-class">AutkMap</span>(canvas);
<span class="token-keyword">await</span> map.init();</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-quickstart {
  padding: 16px 24px 28px;
}

.home-quickstart-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 28px;
  align-items: center;
  max-width: 1152px;
  margin: 0 auto;
}

.home-quickstart-kicker {
  margin: 0 0 10px;
  color: var(--vp-c-brand-1);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-quickstart-title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.home-quickstart-description {
  margin: 16px 0 0;
  max-width: 38rem;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.75;
}

.home-quickstart-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.home-quickstart-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg) !important;
  font-weight: 600;
  text-decoration: none !important;
  transition:
    transform 0.18s ease,
    opacity 0.18s ease,
    border-color 0.18s ease;
}

.home-quickstart-link:hover {
  transform: translateY(-1px);
  opacity: 0.94;
}

.home-quickstart-link--alt {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1) !important;
}

.home-quickstart-demo {
  min-width: 0;
}

.home-terminal {
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  overflow: hidden;
  background: var(--vp-code-block-bg);
  box-shadow:
    0 14px 36px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
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
  color: var(--vp-c-text-2);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
  font-size: 0.85rem;
  line-height: 1;
}

.home-terminal-tab--active {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}

.home-terminal-panel {
  min-height: 0;
  padding: 22px;
}

.home-terminal-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.home-terminal-separator {
  height: 1px;
  background: var(--vp-c-divider);
}

.home-terminal-file {
  margin-bottom: 12px;
  color: var(--vp-c-text-2);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
  font-size: 0.78rem;
}

.home-terminal-prompt,
.home-terminal-command,
.home-terminal-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
}

.home-terminal-prompt {
  color: var(--vp-c-brand-1);
  font-size: 0.98rem;
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
  font-size: 0.98rem;
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
  font-size: 0.9rem;
  line-height: 1.72;
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

@media (prefers-reduced-motion: reduce) {
  .home-terminal-command {
    max-width: 32ch;
    animation: none;
  }

  .home-terminal-command::after {
    animation: none;
  }
}

@media (max-width: 960px) {
  .home-quickstart-shell {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .home-quickstart {
    padding: 12px 24px 20px;
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
