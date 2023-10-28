import { env } from "@/env.mjs";
import { StockInfo, stockInfoSchema } from "@/lib/validations/stock-info";
import { z } from "zod";

const stockInfoResponseSchema = z.array(stockInfoSchema)

export const getStockDetailsByTicker = async (ticker: string): Promise<Array<StockInfo>> => {
  const tenYearsAgo = (new Date).getFullYear() - 10

  const parsed = await fetch(`${env.SAHAM_BACKEND_BASE_URL}/v1/stock-info/${ticker}?year_gt=${tenYearsAgo}`).then((res) => res.json());

  const validatedData = stockInfoResponseSchema.parse(parsed);

  return validatedData;
}
