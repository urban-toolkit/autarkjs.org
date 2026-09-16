<template>
  <p class="hero-links">
    Other ways to use Autark:
    <span class="hero-link-soon" title="Within a Python-based interactive notebook">pyautark (soon)</span>,
    <a href="/grammar/" title="Through a grammar">autk-grammar</a>
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

.hero-link-soon {
  font-weight: 600;
  color: var(--vp-c-text-3);
}
</style>
