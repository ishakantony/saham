import { z } from "zod";

import { getStockDetailsByTicker } from "@/server/adapter/stock";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";

export const stockRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.object({ ticker: z.string() }))
    .query(async ({ input }) => {
      return await getStockDetailsByTicker(input.ticker);
    }),
});
