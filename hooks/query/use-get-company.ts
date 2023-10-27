import { Company, companyResponseSchema, companyResponseToCompany } from "@/lib/validations/company";
import { useQuery } from "@tanstack/react-query";

const fetchCompany = async (ticker: string): Promise<Company> => {
  const parsed = await fetch(`/api/v1/companies/${ticker}?year_gt=2013`).then((res) => res.json());

  const validatedData = companyResponseSchema.parse(parsed);

  const company = companyResponseToCompany(validatedData);

  return company;
};

const useGetCompany = (ticker: string) => {
  return useQuery({
    queryKey: ["company", ticker],
    queryFn: () => fetchCompany(ticker),
  });
};

export { useGetCompany };
