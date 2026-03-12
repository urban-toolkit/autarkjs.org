<template>
  <div class="institutions-footer">
    <span class="institutions-label">Developed at</span>
    <div class="institutions-logos">
      <img src="/imgs/uff-icon.png" alt="UFF" class="institution-logo" />
      <img src="/imgs/nyu-icon.png" alt="NYU" class="institution-logo" />
      <img src="/imgs/chicago_icon.png" alt="University of Chicago" class="institution-logo" />
    </div>
  </div>
</template>

<style scoped>
.institutions-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.institutions-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.institutions-logos {
  display: flex;
  align-items: center;
  gap: 12px;
}

.institution-logo {
  height: 60px;
  width: auto;
  object-fit: contain;
  border-radius: 4px;
  /* white background pill so logos always render correctly in dark mode */
  background: white;
  padding: 3px 6px;
}

/* In dark mode, subtle shadow so the white pill doesn't look harsh */
.dark .institution-logo {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
}
</style>
