'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID

// 주소 → 좌표는 Geocoder로 찾거나, 미리 구한 lat/lng를 상수로 둠
const DEFAULT_CENTER = { lat: 37.477952, lng: 127.037186 }

export const NaverMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    if (!scriptReady || !mapRef.current || !window.naver?.maps) return

    const center = new naver.maps.LatLng(DEFAULT_CENTER.lat, DEFAULT_CENTER.lng)
    const map = new naver.maps.Map(mapRef.current, {
      center,
      zoom: 16,
    })
    new naver.maps.Marker({ position: center, map })
  }, [scriptReady])

  if (!CLIENT_ID) {
    return <p>지도 설정이 필요합니다.</p>
  }

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${CLIENT_ID}`}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div
        ref={mapRef}
        className="mx-auto h-[320px] w-full max-w-2xl rounded-lg border mt-5"
        role="region"
        aria-label="스튜디오 위치 지도"
      />
    </>
  )
}
