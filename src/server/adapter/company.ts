import { env } from "@/env.mjs";
import { Company, companyResponseSchema, companyResponseToCompany } from "@/lib/validations/company";

export const getCompanyByTicker = async (ticker: string): Promise<Company> => {
  const parsed = await fetch(`${env.SAHAM_BACKEND_BASE_URL}/v1/companies/${ticker}`).then((res) => res.json());

  const validatedData = companyResponseSchema.parse(parsed);

  const company = companyResponseToCompany(validatedData);

  return company;
}
