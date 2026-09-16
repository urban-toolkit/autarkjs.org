<template>
  <div class="hero-links">
    <p class="hero-links-title">Other ways to use Autark</p>
    <div class="hero-links-items">
      <span class="hero-link hero-link-soon">
        <span class="hero-link-desc">Within a Python-based interactive notebook</span>
        <span class="hero-link-name">pyautark (soon)</span>
      </span>
      <span class="hero-link-separator" aria-hidden="true"></span>
      <a class="hero-link" href="https://github.com/urban-toolkit/autk-grammar" target="_blank" rel="noreferrer">
        <span class="hero-link-desc">Through a grammar</span>
        <span class="hero-link-name">autk-grammar &#8599;</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.hero-links {
  margin-top: 24px;
  width: 100%;
  text-align: center;
}

.hero-links-title {
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.hero-links-items {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.hero-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-decoration: none;
}

.hero-link-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.hero-link-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

a.hero-link:hover .hero-link-name {
  text-decoration: underline;
}

.hero-link-soon {
  user-select: none;
}

.hero-link-soon .hero-link-desc,
.hero-link-soon .hero-link-name {
  color: var(--vp-c-text-3);
}

.hero-link-separator {
  width: 1px;
  background: var(--vp-c-divider);
}

@media (max-width: 480px) {
  .hero-link-separator {
    display: none;
  }
}
</style>
