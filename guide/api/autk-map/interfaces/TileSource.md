# Interface: TileSource

Defined in: [autk-map/src/tile-source.ts:18](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L18)

A web map tile source as written by an application.

## Extended by

- [`TerrainTileSource`](TerrainTileSource.md)

## Properties

### attribution

> **attribution**: [`TileAttribution`](../type-aliases/TileAttribution.md)

Defined in: [autk-map/src/tile-source.ts:31](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L31)

Credit shown on the map. Required: providers' terms ask for it. Give a
string, a `{ text, url }` entry that links to the provider's page, or a
list of either. Links must be `http` or `https` URLs.

***

### maxZoom?

> `optional` **maxZoom?**: `number`

Defined in: [autk-map/src/tile-source.ts:35](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L35)

Largest zoom level the source serves. Defaults to 19.

***

### minZoom?

> `optional` **minZoom?**: `number`

Defined in: [autk-map/src/tile-source.ts:33](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L33)

Smallest zoom level the source serves. Defaults to 0.

***

### subdomains?

> `optional` **subdomains?**: `string` \| readonly `string`[]

Defined in: [autk-map/src/tile-source.ts:42](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L42)

Subdomains substituted for `{s}`, as a string of one-letter names or an
array. Required when the template uses `{s}`.

***

### theme?

> `optional` **theme?**: [`TileTheme`](../type-aliases/TileTheme.md)

Defined in: [autk-map/src/tile-source.ts:25](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L25)

Client-side image treatment. Changes colors and contrast; retains baked-in labels and geometry.

***

### tileSize?

> `optional` **tileSize?**: `number`

Defined in: [autk-map/src/tile-source.ts:37](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L37)

Tile edge in pixels. Defaults to 256.

***

### urlTemplate

> **urlTemplate**: `string`

Defined in: [autk-map/src/tile-source.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/tile-source.ts#L23)

URL with `{z}`, `{x}` and `{y}` (or `{reverseY}`) placeholders, and
optionally `{s}` for a subdomain.
