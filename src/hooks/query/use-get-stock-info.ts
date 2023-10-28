import { StockInfo, stockInfoSchema } from "@/lib/validations/stock-info";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const stockInfoResponseSchema = z.array(stockInfoSchema)

const fetchStockInfo = async (ticker: string): Promise<StockInfo[]> => {
  const tenYearsAgo = (new Date).getFullYear() - 10

  const parsed = await fetch(`/api/v1/stock-info/${ticker}?year_gt=${tenYearsAgo}`).then((res) => res.json());

  const validatedData = stockInfoResponseSchema.parse(parsed);

  return validatedData;
};

const useGetStockInfo = (ticker: string) => {
  return useQuery({
    queryKey: ["stock-info", ticker],
    queryFn: () => fetchStockInfo(ticker),
  });
};

export { useGetStockInfo };
