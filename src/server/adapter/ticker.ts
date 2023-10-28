import { env } from "@/env.mjs";
import { tickerSchema } from "@/lib/validations/ticker";

export const getAllTickers = async (): Promise<Array<string>> => {
  const parsed = await fetch(`${env.SAHAM_BACKEND_BASE_URL}/v1/list-tickers`).then((res) => res.json());

  const validatedData = tickerSchema.parse(parsed);

  return validatedData;
}
