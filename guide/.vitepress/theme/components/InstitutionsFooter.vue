<template>
  <div class="institutions-footer">
    <span class="institutions-label">Developed at</span>
    <div class="institutions-logos">
      <a class="institution-link" href="https://www.uff.br/" aria-label="UFF">
        <img src="/imgs/uff-light.svg" alt="UFF" class="institution-logo institution-logo--light" />
        <img src="/imgs/uff-dark.svg" alt="UFF" class="institution-logo institution-logo--dark" />
      </a>
      <a class="institution-link" href="https://www.nyu.edu/" aria-label="NYU">
        <img src="/imgs/nyu-light.svg" alt="NYU" class="institution-logo institution-logo--light" />
        <img src="/imgs/nyu-dark.svg" alt="NYU" class="institution-logo institution-logo--dark" />
      </a>
      <a class="institution-link" href="https://www.uic.edu/" aria-label="University of Illinois Chicago">
        <img src="/imgs/uic-light.svg" alt="University of Illinois Chicago" class="institution-logo institution-logo--light" />
        <img src="/imgs/uic-dark.svg" alt="University of Illinois Chicago" class="institution-logo institution-logo--dark" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.institutions-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.institutions-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.institutions-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.institution-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 48px;
}

.institution-logo {
  width: 100%;
  max-width: 64px;
  max-height: 42px;
  object-fit: contain;
}

.institution-link[aria-label="NYU"] .institution-logo {
  max-width: 44px;
}

.institution-link[aria-label="University of Illinois Chicago"] .institution-logo {
  max-width: 44px;
}

.institution-logo--dark,
.dark .institution-logo--light {
  display: none;
}

.dark .institution-logo--dark {
  display: block;
}
</style>
