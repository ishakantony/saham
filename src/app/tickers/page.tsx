import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

import Forbidden from '@/components/forbidden';
import { getServerAuthSession } from '@/server/auth';
import { api } from "@/trpc/server";

export const dynamic = 'force-dynamic';

export default async function Tickers() {
  const session = await getServerAuthSession();

  if (!session) return <Forbidden />

  const data = await api.ticker.getAll.query();

  const cards = data.map((stockName) => (
    <Card
      key={stockName}
      className="w-full my-2 p-4 flex justify-between items-center"
    >
      <h1 className="text-xl">{stockName}</h1>
      <Link href={`/tickers/${stockName}`}>
        <Button>View</Button>
      </Link>
    </Card>
  ))

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-10 uppercase tracking-wider font-bold">
        Pilih Sahammu
      </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:flex-col">
        {cards}
      </div>
    </main>
  )
}
