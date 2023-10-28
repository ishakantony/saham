import { getAllTickers } from "@/server/adapter/ticker";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";

export const tickerRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      return await getAllTickers();
    }),
});
