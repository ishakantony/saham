'use client'

import { useGetStockInfo } from '@/hooks/query/use-get-stock-info'
import { decimalSchema } from '@/lib/validations/common'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { generateChartData } from './revenue-chart-util'

export default function RevenueChart({ stock }: { stock: string }) {
  const { data, isLoading } = useGetStockInfo(stock)

  if (isLoading) {
    return (
      <p className="text-2xl mb-10 uppercase tracking-wider font-bold">
        Sabar ye jon, lagi gue gambar nih chart total pendapatannya...
      </p>
    )
  }

  const chartData = generateChartData(data)

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
          <Bar dataKey="revenue" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          <Bar dataKey="grossProfit" fill="#706955" radius={[4, 4, 0, 0]} />
          <Bar dataKey="netProfit" fill="##552cdb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
