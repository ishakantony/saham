import { createTRPCRouter } from "@/server/api/trpc";
import { companyRouter } from "./routers/company";
import { stockRouter } from "./routers/stock";
import { tickerRouter } from "./routers/ticker";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  company: companyRouter,
  ticker: tickerRouter,
  stock: stockRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
