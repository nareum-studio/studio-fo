import { PriceItem } from '@/public/data/price'

type Props = PriceItem

export const PriceCard = ({ title, price, desc, extra }: Props) => {
  return (
    <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
      <p className="text-lg font-medium mb-2">{title}</p>
      <p className="text-2xl font-bold mb-4">₩{price}</p>
      <ul className="text-gray-600 space-y-1">
        {desc.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      {extra && <p className="text-sm text-gray-400 mt-3">{extra}</p>}
    </div>
  )
}
