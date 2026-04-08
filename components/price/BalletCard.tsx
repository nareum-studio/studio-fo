import { BalletSection } from '@/public/data/price'

type Props = BalletSection

export const BalletCard = ({ label, items }: Props) => {
  return (
    <div className="rounded-2xl border p-6 hover:shadow-md transition">
      <p className="font-medium mb-4">{label}</p>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title}>
            <p className="font-medium">{item.title}</p>
            <p className="text-xl font-bold">₩{item.price}</p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
