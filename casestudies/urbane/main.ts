import './main.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App container "#app" was not found.')
}

app.innerHTML = `
  <div class="urbane-shell">
    <div class="urbane-stage">
      <div class="urbane-placeholder">
        <div class="urbane-placeholder-card">
          <h1>Under Construction</h1>
          <p>--</p>
        </div>
      </div>
    </div>
  </div>
`