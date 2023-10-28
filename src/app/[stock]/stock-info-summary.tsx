'use client'

import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

import { api } from "@/trpc/react"
import Image from 'next/image'

export default function StockInfoSummary({ stock }: { stock: string }) {
  const { data, isLoading } = api.company.getOne.useQuery({ ticker: stock })

  if (isLoading) {
    return <p className="text-xl">Sabar ya boss, ngopi dulu aja...</p>
  }

  const { name, businessActivities, address, logo, website } = data!

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl tracking-widest font-bold">{stock}</h1>
        <Image
          className="w-[50px]"
          src={`https://www.idx.co.id${logo}`}
          alt={logo}
          height={50}
          width={50}
        />
      </div>
      <Separator className="my-4" />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Name</span>
            </TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Business</span>
            </TableCell>
            <TableCell>{businessActivities}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Address</span>
            </TableCell>
            <TableCell>{address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Website</span>
            </TableCell>
            <TableCell>
              <a
                className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
                href={`https://${website}`}
                target="_blank"
              >
                {website}
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
