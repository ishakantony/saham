import Forbidden from '@/components/forbidden';
import { Card } from '@/components/ui/card';
import { getServerAuthSession } from '@/server/auth';
import RevenueChart from './revenue-chart';
import StockInfoSummary from './stock-info-summary';
import StockInfoTable from './stock-info-table';

export default async function Stock({ params }: { params: { stock: string } }) {
  const session = await getServerAuthSession();

  if (!session) return <Forbidden />
  
  const { stock } = params

  return (
    <main className="flex min-h-screen flex-col items-center p-4 container">
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <Card className="p-4">
          <StockInfoSummary stock={stock} />
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
