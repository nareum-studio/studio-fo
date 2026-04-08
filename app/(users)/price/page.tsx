import { balletSections, kidsPrices, naturalProfilePrices } from '@/public/data/price'
import { BalletCard } from '@/components/price/BalletCard'
import { PriceCard } from '@/components/price/PriceCard'

export default function Price() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Price</h1>

        {/* 자연광 프로필 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">자연광 프로필</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {naturalProfilePrices.map((item) => (
              <PriceCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* 키즈 프로필 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">키즈 프로필</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {kidsPrices.map((item) => (
              <PriceCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* 발레 프로필 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">발레 프로필</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {balletSections.map((section) => (
              <BalletCard key={section.label} {...section} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
