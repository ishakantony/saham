import { z } from 'zod'
import { decimalSchema } from './common'

export const stockInfoData = z.object({
  year: z.number(),
  quarter: z.number(),
  value: decimalSchema,
})

export const stockInfoSchema = z.object({
  title: z.string(),
  type: z.string(),
  data: z.array(stockInfoData),
})

export type StockInfoData = z.infer<typeof stockInfoData>

export type StockInfo = z.infer<typeof stockInfoSchema>
