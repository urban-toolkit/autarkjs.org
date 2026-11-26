# Variable: TERRAIN\_TILE\_SOURCES

> `const` **TERRAIN\_TILE\_SOURCES**: `object`

Defined in: [autk-map/src/terrain-tile-source.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/terrain-tile-source.ts#L47)

Ready-made elevation tile sources.

These are conveniences, not licences. Each provider sets its own terms and the
attribution must stay visible; check the wording against the provider's
current terms. A Mapbox terrain-RGB source needs your own access token in the
URL, so it is not bundled: write it as `{ urlTemplate: '…/{z}/{x}/{y}.pngraw?access_token=…',
encoding: 'mapbox', tileSize: 256, attribution: … }`.

## Type Declaration

### awsTerrarium

> `readonly` **awsTerrarium**: `object`

Terrarium tiles of the public "Terrain Tiles on AWS" dataset (Mapzen), zooms 0 to 15.

Zoom 15 is the finest the provider documents for ground resolution (zoom 16 returns 404 on
the Terrarium path). The provider asks for "Mapzen" plus a statement for each data source
used where you are. The preset shows "Mapzen" and a link to the provider's list of sources
and their credits; it cannot know your area, so add the statements that apply there, for
example `attribution: [...TERRAIN_TILE_SOURCES.awsTerrarium.attribution, '3DEP data courtesy of the U.S. Geological Survey']`.
The provider says these S3 endpoints are meant for efficient networking with EC2 and are not
cached by CloudFront, and states no rate limits: put your own CDN in front for production.

#### awsTerrarium.attribution

> `readonly` **attribution**: readonly \[\{ `text`: `"Mapzen"`; `url`: `"https://github.com/tilezen/joerd/blob/master/docs/attribution.md"`; \}\]

#### awsTerrarium.encoding

> `readonly` **encoding**: `"terrarium"` = `'terrarium'`

#### awsTerrarium.maxZoom

> `readonly` **maxZoom**: `15` = `15`

#### awsTerrarium.minZoom

> `readonly` **minZoom**: `0` = `0`

#### awsTerrarium.tileSize

> `readonly` **tileSize**: `256` = `256`

#### awsTerrarium.urlTemplate

> `readonly` **urlTemplate**: `"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"` = `'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'`
