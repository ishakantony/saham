import { QUARTER_FOUR } from '@/lib/constants/stock-info-constants'
import type { StockInfo, StockInfoData } from '@/lib/validations/stock-info'

export type BodyRow = Array<string | number>

export const removeQuartersBasedOnRule = (data: StockInfo[]): StockInfo[] => {
  // Remove Q1 - Q3 for years past 3 years
  // Example: if today is 2023, we will remove 2020 and onwards

  const yearToRemoveQuarters = new Date().getFullYear() - 3

  return data.map((si: StockInfo) => {
    const filteredDataAfterQuartersRemoved = si.data?.filter(
      (sid: StockInfoData) => {
        const isRemoveQuarter = yearToRemoveQuarters >= sid.year

        if (!isRemoveQuarter) {
          return true
        }

        const isFourthQuarter = QUARTER_FOUR === sid.quarter

        return isFourthQuarter
      }
    )

    return {
      title: si.title,
      type: si.type,
      data: filteredDataAfterQuartersRemoved,
    }
  })
}

export const convertToTableColumnHeaders = (data: StockInfo[]): string[] => {
  if (data[0] === undefined) {
    throw new Error("Cannot figure out column headers due to empty data");
  }

  const stockDetailsRowOneData = data[0].data

  const headers = stockDetailsRowOneData?.map((sdd): string => {
    return `${sdd.year} Q${sdd.quarter}`
  }) 

  const headerColumns = ['Title', ...headers]

  return headerColumns
}

export const convertToTableColumnBody = (data: StockInfo[]): Array<BodyRow> => {
  const bodyRows = data.map<Array<string | number>>((sd) => {
    return [sd.title, ...sd.data.map((sdd) => sdd.value)]
  })

  return bodyRows
}
