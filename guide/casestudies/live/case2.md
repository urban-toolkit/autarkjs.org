---
layout: false
title: Boston Live Case Study
---

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.documentElement.classList.add('case-live-page')
  document.body.classList.add('case-live-page')
})

onUnmounted(() => {
  document.documentElement.classList.remove('case-live-page')
  document.body.classList.remove('case-live-page')
})
</script>

<div class="case-live-shell">
  <div class="case-live-topbar">
    <a class="case-live-back" href="/casestudies/case2">← Back to Case Study</a>
    <div class="case-live-title">Boston Streets and EV Charging Stations — Live Case Study</div>
  </div>

  <div class="case-live-frame-wrap">
    <iframe
      class="case-live-frame"
      src="/casestudies/boston/main.html"
      title="Boston Live Case Study"
      frameborder="0"
      allow="fullscreen"
    ></iframe>
  </div>
</div>

<style>
html.case-live-page,
body.case-live-page {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #0b0f17;
}

.case-live-shell {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #0b0f17;
}

.case-live-topbar {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(11, 15, 23, 0.92);
  backdrop-filter: blur(8px);
  z-index: 10;
}

.case-live-back {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  color: #e5e7eb;
}

.case-live-back:hover {
  color: #ffffff;
}

.case-live-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f3f4f6;
}

.case-live-frame-wrap {
  flex: 1;
  min-height: 0;
}

.case-live-frame {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  background: white;
}
</style>