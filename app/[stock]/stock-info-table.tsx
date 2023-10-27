'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetStockInfo } from '@/hooks/query/use-get-stock-info'
import { toDecimal } from '@/lib/utils'

export default function StockInfoTable({ stock }: { stock: string }) {
  const { data, isLoading } = useGetStockInfo(stock)

  if (isLoading) {
    return (
      <p className="text-2xl mb-10 uppercase tracking-wider font-bold">
        SABAR YE JON, LAGI NGAMBIL DETAIL BUAT SAHAM{' '}
        <span className="underline">{stock}</span>...
      </p>
    )
  }

  // TODO - Handle undefined

  const stockDetailsRowOneData = data?.[0].data

  const headers = stockDetailsRowOneData?.map((sdd): string => {
    return `${sdd.year} - Q${sdd.quarter}`
  }) as string[]

  const headerColumns = ['Title', ...headers]

  const bodyRows = data?.map((sd) => {
    return [sd.title, ...sd.data.map((sdd) => sdd.value)]
  })

  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          {headerColumns.map((title, index) => {
            if (index === 0) {
              return (
                <TableHead key={title} className="w-[300px]">
                  {title}
                </TableHead>
              )
            } else {
              return (
                <TableHead key={title} className="w-[150px] text-right">
                  {title}
                </TableHead>
              )
            }
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bodyRows?.map((row, index) => (
          <TableRow key={index}>
            {row.map((value, index) => {
              if (index === 0) {
                return (
                  <TableCell key={index} className="w-[300px]">
                    {value}
                  </TableCell>
                )
              } else {
                return (
                  <TableCell key={index} className="w-[150px] text-right">
                    {toDecimal(value)}
                  </TableCell>
                )
              }
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
