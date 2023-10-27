"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { useGetStockInfo } from '@/hooks/query/use-get-stock-info';

export default function Stock({ params }: { params: { stock: string } }) {
  const { stock } = params
  const { data, isLoading } = useGetStockInfo(stock)

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-10 uppercase tracking-wider font-bold">
        SABAR YE JON, LAGI NGAMBIL DETAIL BUAT SAHAM <span className='underline'>{stock}</span>...
      </h1>
    </main>
    )
  }

  // TODO - Handle undefined

  const stockDetailsRowOneData = data?.[0].data;

  const headers = stockDetailsRowOneData?.map((sdd): string => {
    return `${sdd.year} - Q${sdd.quarter}`
  }) as string[]

  const headerColumns = ["Title", ...headers]

  const bodyRows = data?.map(sd => {

    return [sd.title, ...(sd.data.map(sdd => sdd.value))]

  })

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-4xl mb-10 uppercase tracking-wider font-bold'>Nih boss, Detailnya {stock}</h1>
      <Table className='table-fixed'>
        <TableHeader>
          <TableRow>

            { headerColumns.map((title, index) => {

              if (index === 0) {
                return <TableHead key={title} className='w-[300px]'>{title}</TableHead>;
              } else {
                return <TableHead key={title} className="w-[150px] text-right">{title}</TableHead>;
              }

            }) }

          </TableRow>
        </TableHeader>
        <TableBody>
          {bodyRows?.map((row, index) => (
            <TableRow key={index}>

              { row.map((value, index) => {

                if (index === 0) {
                return <TableCell key={value} className="w-[300px]">{value}</TableCell>;
              } else {
                return <TableCell key={value} className="w-[150px] text-right">{value}</TableCell>;
              }

              }) }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
