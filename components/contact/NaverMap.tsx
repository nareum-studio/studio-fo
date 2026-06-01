'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID

const STUDIO_ADDRESS = '나름다움스튜디오'
const DEFAULT_CENTER = { lat: 37.477952, lng: 127.037186 }
const NAVER_MAP_PLACE_URL = `https://map.naver.com/v5/search/${encodeURIComponent(STUDIO_ADDRESS)}`

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
    const marker = new naver.maps.Marker({
      position: center,
      map,
      title: '네이버 지도에서 위치 보기',
    })
    const listener = naver.maps.Event.addListener(marker, 'click', () => {
      window.open(NAVER_MAP_PLACE_URL, '_blank', 'noopener,noreferrer')
    })

    return () => {
      naver.maps.Event.removeListener(listener)
    }
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
