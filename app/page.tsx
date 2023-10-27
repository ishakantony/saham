"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGetTickers } from '@/hooks/query/use-get-tickers';
import Link from 'next/link';

export default function Home() {
  const { data, isLoading } = useGetTickers();

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-10 uppercase tracking-wider font-bold">
        TUNGGU JON, LAGI NGAMBIL SAHAMNYA...
      </h1>
    </main>
    )
  }

  // TODO - Handle undefined

  const cards = data?.map((stockName) => (
    <Card
      key={stockName}
      className="w-full my-2 p-4 flex justify-between items-center"
    >
      <h1 className="text-xl">{stockName}</h1>
      <Link href={stockName}>
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
