import { z } from 'zod'

export const stockInfoData = z.object({
  year: z.number(),
  quarter: z.number(),
  value: z.number(),
})

export const stockInfoSchema = z.object({
  title: z.string(),
  type: z.string(),
  data: z.array(stockInfoData),
})

export type StockInfoData = z.infer<typeof stockInfoData>

export type StockInfo = z.infer<typeof stockInfoSchema>
