[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / TerrainTileSource

# Interface: TerrainTileSource

Defined in: [autk-map/src/terrain-tile-source.ts:12](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/terrain-tile-source.ts#L12)

An elevation tile source as written by an application.

## Extends

- [`TileSource`](TileSource.md)

## Properties

### attribution

> **attribution**: [`TileAttribution`](../type-aliases/TileAttribution.md)

Defined in: [autk-map/src/tile-source.ts:31](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L31)

Credit shown on the map. Required: providers' terms ask for it. Give a
string, a `{ text, url }` entry that links to the provider's page, or a
list of either. Links must be `http` or `https` URLs.

#### Inherited from

[`TileSource`](TileSource.md).[`attribution`](TileSource.md#attribution)

***

### encoding

> **encoding**: [`DemEncoding`](../type-aliases/DemEncoding.md)

Defined in: [autk-map/src/terrain-tile-source.ts:14](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/terrain-tile-source.ts#L14)

How heights are packed into the tile colors.

***

### maxZoom?

> `optional` **maxZoom?**: `number`

Defined in: [autk-map/src/tile-source.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L35)

Largest zoom level the source serves. Defaults to 19.

#### Inherited from

[`TileSource`](TileSource.md).[`maxZoom`](TileSource.md#maxzoom)

***

### minZoom?

> `optional` **minZoom?**: `number`

Defined in: [autk-map/src/tile-source.ts:33](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L33)

Smallest zoom level the source serves. Defaults to 0.

#### Inherited from

[`TileSource`](TileSource.md).[`minZoom`](TileSource.md#minzoom)

***

### subdomains?

> `optional` **subdomains?**: `string` \| readonly `string`[]

Defined in: [autk-map/src/tile-source.ts:42](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L42)

Subdomains substituted for `{s}`, as a string of one-letter names or an
array. Required when the template uses `{s}`.

#### Inherited from

[`TileSource`](TileSource.md).[`subdomains`](TileSource.md#subdomains)

***

### theme?

> `optional` **theme?**: [`TileTheme`](../type-aliases/TileTheme.md)

Defined in: [autk-map/src/tile-source.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L25)

Client-side image treatment. Changes colors and contrast; retains baked-in labels and geometry.

#### Inherited from

[`TileSource`](TileSource.md).[`theme`](TileSource.md#theme)

***

### tileSize?

> `optional` **tileSize?**: `number`

Defined in: [autk-map/src/tile-source.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L37)

Tile edge in pixels. Defaults to 256.

#### Inherited from

[`TileSource`](TileSource.md).[`tileSize`](TileSource.md#tilesize)

***

### urlTemplate

> **urlTemplate**: `string`

Defined in: [autk-map/src/tile-source.ts:23](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/tile-source.ts#L23)

URL with `{z}`, `{x}` and `{y}` (or `{reverseY}`) placeholders, and
optionally `{s}` for a subdomain.

#### Inherited from

[`TileSource`](TileSource.md).[`urlTemplate`](TileSource.md#urltemplate)
