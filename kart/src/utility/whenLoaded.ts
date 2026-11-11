import type * as maplibregl from "maplibre-gl";

/** Maps whose one-time `load` event has fired. */
const loadedMaps = new WeakSet<maplibregl.Map>();

/**
 * Start tracking `map`'s initial load, so {@link whenLoaded} knows when it
 * has happened. Call right after constructing the map.
 */
export function trackLoad(map: maplibregl.Map): void {
  map.once("load", () => loadedMaps.add(map));
}

/**
 * Run `fn` now if the map has finished its initial load, otherwise on `load`.
 * Returns a cleanup that cancels the pending call.
 *
 * Not `map.loaded()`: that is also `false` whenever tiles are loading — e.g.
 * right after a layer is switched on — and `load` never fires again, so a
 * change made in that window would wait forever and be lost.
 */
export function whenLoaded(map: maplibregl.Map, fn: () => void): () => void {
  if (loadedMaps.has(map)) {
    fn();
    return () => {};
  }
  map.once("load", fn);
  return () => {
    map.off("load", fn);
  };
}
