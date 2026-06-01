/**
 * Naver Maps JavaScript API v3 (maps.js) — minimal types for this project.
 * @see https://navermaps.github.io/maps.js.ncp/docs/
 */
export {}

declare global {
  namespace naver {
    namespace maps {
      class LatLng {
        constructor(lat: number, lng: number)
        lat(): number
        lng(): number
      }

      interface MapOptions {
        center: LatLng
        zoom?: number
      }

      class Map {
        constructor(element: HTMLElement, options: MapOptions)
      }

      interface MarkerOptions {
        position: LatLng
        map?: Map
        title?: string
      }

      class Marker {
        constructor(options: MarkerOptions)
      }

      namespace Event {
        function addListener(
          target: Marker,
          eventName: 'click',
          listener: () => void,
        ): unknown
        function removeListener(listener: unknown): void
      }
    }
  }

  interface Window {
    naver?: typeof naver
  }
}
