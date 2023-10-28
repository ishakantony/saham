import { GROSS_PROFIT_KEY, NET_PROFIT_KEY, QUARTER_FOUR, REVENUE_KEY } from "@/lib/constants/stock-info-constants";
import type { StockInfo, StockInfoData } from "@/lib/validations/stock-info";

type RevenueChartItem = {
  year: number;
  revenue: number;
  grossProfit: number | undefined;
  netProfit: number | undefined;
}

export function generateChartData(data: StockInfo[]): RevenueChartItem[] {
  const revenueData = data?.find(si => REVENUE_KEY === si.title)
  
  const grossProfitData = data?.find(si => GROSS_PROFIT_KEY === si.title)

  const netProfitData = data?.find(si => NET_PROFIT_KEY === si.title)

  const revenueDataForQuarterFourOnly = revenueData?.data.filter(sid => QUARTER_FOUR === sid.quarter) 

  const grossProfitDataForQuarterFourOnly = grossProfitData?.data.filter(sid => QUARTER_FOUR === sid.quarter)

  const netProfitDataForQuarterFourOnly = netProfitData?.data.filter(sid => QUARTER_FOUR === sid.quarter)

  return mergeArrays(revenueDataForQuarterFourOnly, grossProfitDataForQuarterFourOnly, netProfitDataForQuarterFourOnly)
}

function mergeArrays(revenues: StockInfoData[] | undefined, grossProfits: StockInfoData[] | undefined, netProfits: StockInfoData[] | undefined): RevenueChartItem[] {
  return (revenues ?? []).map<RevenueChartItem>(revenue => {
    const grossProfit = (grossProfits ?? []).find(gp => gp.year === revenue.year);
    const netProfit = (netProfits ?? []).find(np => np.year === revenue.year);

    const newRevenueChartItem: RevenueChartItem = { 
      year: revenue.year,
      revenue: revenue.value,
      grossProfit: grossProfit?.value,
      netProfit: netProfit?.value
    }

    return newRevenueChartItem;
  })
}