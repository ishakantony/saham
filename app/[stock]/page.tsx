import { Card } from '@/components/ui/card'
import RevenueChart from './revenue-chart'
import StockInfoTable from './stock-info-table'

export default function Stock({ params }: { params: { stock: string } }) {
  const { stock } = params

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <Card className="flex items-center justify-center">
          <h1 className="text-8xl tracking-widest font-bold">{stock}</h1>
        </Card>
        <Card className="p-4 col-span-2">
          <RevenueChart stock={stock} />
        </Card>
        <Card className="p-4 w-full overflow-auto col-span-3 row-span-2">
          <StockInfoTable stock={stock} />
        </Card>
      </div>
    </main>
  )
}
