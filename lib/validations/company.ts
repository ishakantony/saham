import { z } from 'zod'

export type Company = {
  name: string
  businessActivities: string
  address: string
  logo: string
  website: string
}

export const companyResponseSchema = z.object({
  NamaEmiten: z.string(),
  KegiatanUsahaUtama: z.string(),
  Alamat: z.string(),
  Logo: z.string(),
  Website: z.string(),
})

export type CompanyResponse = z.infer<typeof companyResponseSchema>

export const companyResponseToCompany = (res: CompanyResponse): Company => {
  return {
    name: res.NamaEmiten,
    businessActivities: res.KegiatanUsahaUtama,
    address: res.Alamat,
    logo: res.Logo,
    website: res.Website
  }
}
