export default function About() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* 타이틀 */}
        <h1 className="text-4xl font-bold mb-12">About</h1>

        {/* 브랜드 소개 */}
        <p className="mb-16 leading-relaxed text-lg">
          <span className="font-bold text-2xl block mb-3">
            NAREUMDAUMM [나름다움]
          </span>
          <span className="text-gray-600">
            : 나다운 아름다움을 담아드립니다.
          </span>
        </p>

        {/* ABOUT */}
        <section className="text-left space-y-6 mb-20">
          <p className="text-sm tracking-widest text-gray-400">
            ABOUT NAREUMDAUMM
          </p>

          <p className="leading-relaxed text-gray-800">
            나름다움 스튜디오는 인위적인 장치보다는 쏟아지는 햇살 아래에서
            <br /> 가장 선명해지는 나의 아름다운 본질을 기록하는 기록
            공간입니다.
          </p>

          <p className="font-medium">
            우리가 &apos;자연광&apos;을 고집하는 이유는 무엇일까요?
          </p>

          <p className="leading-relaxed text-gray-700">
            조명은 인물을 돋보이게 할 수 있지만, 자연광은 인물의 분위기를
            담아내기 때문입니다.
            <br />
            창을 통해 들어오는 부드러운 빛은 피부의 질감을 투명하게 표현하고,
            <br />
            눈동자에 인위적인 생기가 아닌 따스한 온기를 채워줍니다.
            <br className="mb-2" />
            나름다움 스튜디오는 이 빛의 결을 따라 당신이 가진 가장 무해하고
            편안한 순간을 포착합니다.
          </p>
        </section>

        {/* OUR APPROACH */}
        <section className="text-left space-y-8 mb-20">
          <p className="text-sm tracking-widest text-gray-400">OUR APPROACH</p>

          <p className="font-medium text-lg">
            나름다움은 가장 나다운 농도를 찾아가는 섬세한 과정입니다.
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <p className="font-medium">
                - 계절과 시간의 흐름을 사진에 담습니다.
              </p>
              <p>
                매시간 다른 각도로 들어오는 햇살을 활용해, 정형화되지 않은 오직
                당신만을 위한 빛의 설계를 시작합니다.
              </p>
            </div>

            <div>
              <p className="font-medium">
                - &apos;찍히는 것&apos;이 아닌 &apos;머무는 것&apos;에
                집중합니다.
              </p>
              <p>
                공간이 주는 아늑함과 부드러운 음악 속에서 긴장이 자연스럽게
                녹아내릴 수 있도록 돕습니다.
              </p>
            </div>

            <div>
              <p className="font-medium">
                - &apos;결과물&apos;보다 &apos;과정&apos;을 중요하게 생각합니다.
              </p>
              <p>
                실시간 모니터링을 통해 만족스러운 각도와 무드를 함께 조율합니다.
              </p>
            </div>

            <div>
              <p className="font-medium">
                - 결을 살리는 투명한 리터칭을 지향합니다.
              </p>
              <p>
                자연광의 질감을 극대화하여 시간이 지나도 촌스럽지 않은
                클래식함을 남깁니다.
              </p>
            </div>
          </div>
        </section>

        {/* 마무리 문구 */}
        <section className="text-gray-700 leading-relaxed space-y-6 mb-16">
          <p>
            아름다움의 기준은 타인에게 있지 않습니다. 당신이 이미 가지고 있는,
            그러나 미처 발견하지 못했던
            <br />
            &apos;나다운 결&apos;을 빛으로 현상해 내는 조력자가 되고 싶습니다.
          </p>

          <p>
            햇살이 머무는 자리는 언제나 따뜻하고 부드럽습니다.
            <br />
            나름다움 스튜디오에서의 시간이 당신의 삶에서 가장 편안한 기록으로
            남기를 바랍니다.
          </p>

          <p>
            억지로 꾸며내지 않아도 충분히 근사한, 당신만의 아름다움을
            보여주세요.
          </p>

          <p>당신의 고유한 빛을 기록합니다.</p>
        </section>

        {/* 엔딩 */}
        <div className="text-center space-y-3">
          <p className="font-bold text-2xl">NAREUMDAUMM [나름다움]</p>
        </div>
      </div>
    </div>
  )
}
