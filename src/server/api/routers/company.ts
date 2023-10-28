import { z } from "zod";

import { getCompanyByTicker } from "@/server/adapter/company";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";

export const companyRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.object({ ticker: z.string() }))
    .query(async ({ input }) => {
      return await getCompanyByTicker(input.ticker);
    }),
});
