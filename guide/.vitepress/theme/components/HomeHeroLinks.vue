<template>
  <p class="hero-links">
    Other ways to use Autark:
    <span class="hero-link-soon" title="Within a Python-based interactive notebook">pyautark (soon)</span>,
    <a href="/grammar/" title="Through a grammar">autk-grammar</a>
    <a class="hero-link-badge" href="https://www.npmjs.com/package/@urban-toolkit/autk-grammar" title="autk-grammar on npm">
      <img alt="autk-grammar npm version" src="https://img.shields.io/npm/v/@urban-toolkit/autk-grammar?color=f43f5e&logo=npm&labelColor=111827" />
    </a>
  </p>
</template>

<style scoped>
.hero-links {
  margin: 20px 0 0;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.hero-links a,
.hero-link-soon {
  white-space: nowrap;
}

.hero-links a {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.hero-links a:hover {
  text-decoration: underline;
}

.hero-links .hero-link-badge {
  display: inline-block;
  margin-left: 6px;
  vertical-align: middle;
  line-height: 0;
}

.hero-link-badge img {
  height: 20px;
}

.hero-link-soon {
  font-weight: 600;
  color: var(--vp-c-text-3);
}
</style>
