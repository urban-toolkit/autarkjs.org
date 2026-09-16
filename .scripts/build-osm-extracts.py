#!/usr/bin/env python3
"""Build pre-clipped OSM .pbf extracts for the grammar examples on autarkjs.org.

Same strategy as curio's scripts/build_example_pbfs.py: examples load OSM with
`pbfFileUrl` instead of querying the rate-limited Overpass API at run time.
autk-db clips each layer to a boundary relation whose `name` equals each
`queryArea.areas` entry, so every extract carries those relations.

Usage: python .scripts/build-osm-extracts.py guide/public/data/osm [key ...]
(needs `pip install osmium requests`)
"""
from __future__ import annotations

import os
import sys
import tempfile
import time

import osmium
import requests

NOMINATIM = "https://nominatim.openstreetmap.org/search"
OVERPASS_ENDPOINTS = [
    "https://overpass.private.coffee/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass-api.de/api/interpreter",
    "https://overpass.osm.ch/api/interpreter",
]
UA = {"User-Agent": "autarkjs-org-example-pbf-builder/1.0 (https://github.com/urban-toolkit/autarkjs.org)"}

# key -> (Nominatim queries whose bounding boxes are merged, boundary area names = spec queryArea.areas)
AREAS = {
    "manhattan": (["Manhattan, New York, USA"], ["Manhattan Island"]),
    "chicago_loop": (["Loop, Chicago, Illinois, USA", "Near South Side, Chicago, Illinois, USA"], ["Loop", "Near South Side"]),
    "niteroi_praias_baia": (["Região Praias da Baía, Niterói, Brazil"], ["Região Praias da Baía"]),
    "paris_center": (
        [f"Paris {n} Arrondissement, Paris, France" for n in ["1er", "2e", "3e", "4e", "5e", "6e", "7e", "8e", "9e"]],
        [f"Paris {n} Arrondissement" for n in ["1er", "2e", "3e", "4e", "5e", "6e", "7e", "8e", "9e"]],
    ),
}


def bbox_for(query: str):
    r = requests.get(NOMINATIM, params={"q": query, "format": "json", "limit": 1}, headers=UA, timeout=60)
    r.raise_for_status()
    hits = r.json()
    if not hits:
        raise SystemExit(f"Nominatim found nothing for {query!r}")
    s, n, w, e = (float(x) for x in hits[0]["boundingbox"])
    return s, w, n, e


def overpass_query(bbox, area_names):
    s, w, n, e = bbox
    b = f"{s},{w},{n},{e}"
    selectors = ["highway", "leisure", "landuse", "natural", "waterway", "building", '"building:part"']
    parts = [f"nwr[{k}]({b});" for k in selectors]
    parts += [f'nwr["name"="{nm}"]({b});' for nm in area_names]
    body = "\n  ".join(parts)
    return f"[out:xml][timeout:600];\n(\n  {body}\n);\n(._;>;);\nout body;"


def fetch_osm_xml(query: str) -> bytes:
    last = "no attempt"
    for endpoint in OVERPASS_ENDPOINTS:
        for attempt in range(3):
            try:
                r = requests.post(endpoint, data={"data": query}, headers=UA, timeout=900)
            except requests.RequestException as exc:
                last = f"{endpoint}: {exc}"
                time.sleep(3 * (attempt + 1))
                continue
            if r.status_code == 200 and r.content.lstrip().startswith(b"<?xml"):
                return r.content
            last = f"{endpoint}: HTTP {r.status_code} {r.text[:120]!r}"
            print(f"    retry ({last})", flush=True)
            time.sleep(5 * (attempt + 1))
    raise SystemExit(f"All Overpass endpoints failed. Last: {last}")


def xml_to_pbf(xml_bytes: bytes, out_path: str):
    with tempfile.NamedTemporaryFile(suffix=".osm", delete=False) as tmp:
        tmp.write(xml_bytes)
        xml_path = tmp.name
    counts = [0, 0, 0]
    try:
        if os.path.exists(out_path):
            os.unlink(out_path)
        writer = osmium.SimpleWriter(out_path)
        try:
            for obj in osmium.FileProcessor(xml_path):
                if obj.is_node():
                    writer.add_node(obj); counts[0] += 1
                elif obj.is_way():
                    writer.add_way(obj); counts[1] += 1
                elif obj.is_relation():
                    writer.add_relation(obj); counts[2] += 1
        finally:
            writer.close()
    finally:
        os.unlink(xml_path)
    return counts


def main():
    out_dir = sys.argv[1]
    keys = sys.argv[2:] or list(AREAS)
    os.makedirs(out_dir, exist_ok=True)
    for key in keys:
        queries, names = AREAS[key]
        boxes = []
        for q in queries:
            boxes.append(bbox_for(q))
            time.sleep(1.1)
        bbox = (min(b[0] for b in boxes), min(b[1] for b in boxes), max(b[2] for b in boxes), max(b[3] for b in boxes))
        print(f"=== {key} bbox={bbox}", flush=True)
        xml = fetch_osm_xml(overpass_query(bbox, names))
        out_path = os.path.join(out_dir, f"{key}.osm.pbf")
        n, w, r = xml_to_pbf(xml, out_path)
        print(f"  wrote {out_path} ({os.path.getsize(out_path):,} bytes) nodes={n:,} ways={w:,} rels={r:,}", flush=True)


if __name__ == "__main__":
    main()
