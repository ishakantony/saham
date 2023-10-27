import { z } from "zod"

export const stockInfoSchema = z.object({
  title: z.string(),
  type: z.string(),
  data: z.array(
    z.object({
      year: z.number(),
      quarter: z.number(),
      value: z.number()
    })
  )
})

export type StockInfo = z.infer<typeof stockInfoSchema>
