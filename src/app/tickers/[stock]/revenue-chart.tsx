'use client'

import { decimalSchema } from '@/lib/validations/common'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { generateChartData } from './revenue-chart-util'

import { api } from "@/trpc/react"

export default function RevenueChart({ stock }: { stock: string }) {
  const { data, isLoading } = api.stock.getOne.useQuery({ ticker: stock })

  if (isLoading) {
    return (
      <p className="text-2xl mb-10 uppercase tracking-wider font-bold">
        Sabar ye jon, lagi gue gambar nih chart total pendapatannya...
      </p>
    )
  }

  const chartData = generateChartData(data ?? [])

  return (
    <div className='w-full'>
      <h2 className="text-2xl font-bold mb-8 text-center">
        Revenue x Gross Profit x Net Profit
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <XAxis
            dataKey="year"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${decimalSchema.parse(value)}`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#3498db" radius={[4, 4, 0, 0]} name="Revenue" />
          <Bar dataKey="grossProfit" fill="#1abc9c" radius={[4, 4, 0, 0]} name="Gross Profit" />
          <Bar dataKey="netProfit" fill="##9b59b6" radius={[4, 4, 0, 0]} name="Net Profit" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
