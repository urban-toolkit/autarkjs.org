# Variable: TILE\_SOURCES

> `const` **TILE\_SOURCES**: `object`

Defined in: [autk-map/src/tile-source.ts:194](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L194)

Ready-made tile sources.

These are conveniences, not licences. Each provider sets its own terms, and
the attribution must stay visible.

- `esriWorldImagery`: Esri World Imagery satellite and aerial imagery.
  Provider access and usage terms apply.
- `openStreetMap`: the public OpenStreetMap tile server. Its usage policy
  forbids heavy use and bulk downloading; use a suitable hosted provider
  or your own server for heavier traffic.
- `osmLight`, `osmDark`: the same OSM raster tiles with muted
  client-side color treatments. Labels and geometry remain in the image.

## Type Declaration

### esriWorldImagery

> `readonly` **esriWorldImagery**: `object`

#### esriWorldImagery.attribution

> `readonly` **attribution**: `"Esri, Vantor, Earthstar Geographics, GIS User Community"` = `'Esri, Vantor, Earthstar Geographics, GIS User Community'`

#### esriWorldImagery.maxZoom

> `readonly` **maxZoom**: `19` = `19`

#### esriWorldImagery.urlTemplate

> `readonly` **urlTemplate**: `"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"` = `'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'`

### openStreetMap

> `readonly` **openStreetMap**: `object` = `OSM_SOURCE`

#### openStreetMap.attribution

> `readonly` **attribution**: `object`

#### openStreetMap.attribution.text

> `readonly` **text**: `"© OpenStreetMap"` = `'© OpenStreetMap'`

#### openStreetMap.attribution.url

> `readonly` **url**: `"https://www.openstreetmap.org/copyright"` = `OSM_COPYRIGHT_URL`

#### openStreetMap.maxZoom

> `readonly` **maxZoom**: `19` = `19`

#### openStreetMap.urlTemplate

> `readonly` **urlTemplate**: `"https://tile.openstreetmap.org/{z}/{x}/{y}.png"` = `'https://tile.openstreetmap.org/{z}/{x}/{y}.png'`

### osmDark

> `readonly` **osmDark**: `object`

#### osmDark.attribution

> `readonly` **attribution**: `object`

#### osmDark.attribution.text

> `readonly` **text**: `"© OpenStreetMap"` = `'© OpenStreetMap'`

#### osmDark.attribution.url

> `readonly` **url**: `"https://www.openstreetmap.org/copyright"` = `OSM_COPYRIGHT_URL`

#### osmDark.maxZoom

> `readonly` **maxZoom**: `19` = `19`

#### osmDark.theme

> `readonly` **theme**: `"dark"` = `'dark'`

#### osmDark.urlTemplate

> `readonly` **urlTemplate**: `"https://tile.openstreetmap.org/{z}/{x}/{y}.png"` = `'https://tile.openstreetmap.org/{z}/{x}/{y}.png'`

### osmLight

> `readonly` **osmLight**: `object`

#### osmLight.attribution

> `readonly` **attribution**: `object`

#### osmLight.attribution.text

> `readonly` **text**: `"© OpenStreetMap"` = `'© OpenStreetMap'`

#### osmLight.attribution.url

> `readonly` **url**: `"https://www.openstreetmap.org/copyright"` = `OSM_COPYRIGHT_URL`

#### osmLight.maxZoom

> `readonly` **maxZoom**: `19` = `19`

#### osmLight.theme

> `readonly` **theme**: `"light"` = `'light'`

#### osmLight.urlTemplate

> `readonly` **urlTemplate**: `"https://tile.openstreetmap.org/{z}/{x}/{y}.png"` = `'https://tile.openstreetmap.org/{z}/{x}/{y}.png'`
