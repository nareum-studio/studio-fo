import Link from 'next/link'

export default function Contact() {
  return (
    <div className="text-center mt-20 space-y-10">
      <h1 className="text-3xl font-bold">CONTACTS</h1>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl">LOCATION</span>
        <span className="mt-4">서울 서초구 바우뫼로33길 7-8 4층</span>
      </div>
      <p>-</p>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl">CONTACT</span>
        <div className="mt-4 flex flex-col items-center justify-center">
          <span>jin0322h@naver.com</span>
          <Link
            href="https://www.instagram.com/nareumdaumm_studio"
            target="_blank"
          >
            https://www.instagram.com/nareumdaumm_studio
          </Link>
        </div>
      </div>
      <p>-</p>
      <div>
        촬영 문의는 인스타 DM 혹은 카카오톡 채널로 문의 부탁드립니다. <br />
        <Link
          href="http://pf.kakao.com/_wnfxbn"
          target="_blank"
          className="inline-block mt-4"
        >
          http://pf.kakao.com/_wnfxbn
        </Link>
      </div>
    </div>
  )
}
