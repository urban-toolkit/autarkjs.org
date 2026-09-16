<template>
  <div class="hero-links">
    <span class="hero-link hero-link-soon">pyautark (soon)</span>
    <span class="hero-link-separator" aria-hidden="true"></span>
    <a class="hero-link" href="https://github.com/urban-toolkit/autk-grammar" target="_blank" rel="noreferrer">autk-grammar</a>
  </div>
</template>

<style scoped>
.hero-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-top: 16px;
  font-size: 0.9rem;
  font-weight: 600;
}

.hero-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  white-space: nowrap;
}

.hero-link:hover {
  text-decoration: underline;
}

.hero-link-soon {
  color: var(--vp-c-text-3);
  opacity: 0.75;
  user-select: none;
}

.hero-link-soon:hover {
  text-decoration: none;
}

.hero-link-separator {
  width: 1px;
  height: 16px;
  background: var(--vp-c-divider);
}
</style>
