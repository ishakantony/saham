import { z } from "zod";

export const tickerSchema = z.array(
  z.string()
    .length(4, "Ticker must have 4 chars")
    .regex(/^[A-Z]+$/, "Ticker must consist only of uppercase letters")
);

export type TickerResponse = z.infer<typeof tickerSchema>;
