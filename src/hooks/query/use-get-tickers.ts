import { tickerSchema } from "@/lib/validations/ticker";
import { useQuery } from "@tanstack/react-query";

const fetchTickers = async () => {
  const parsed = await fetch("/api/v1/list-tickers").then((res) => res.json());

  const validatedData = tickerSchema.parse(parsed);

  return validatedData;
};

const useGetTickers = () => {
  return useQuery({
    queryKey: ["tickers"],
    queryFn: () => fetchTickers(),
  });
};

export { useGetTickers };
