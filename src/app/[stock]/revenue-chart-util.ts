import { GROSS_PROFIT_KEY, NET_PROFIT_KEY, QUARTER_FOUR, REVENUE_KEY } from "@/lib/constants/stock-info-constants";
import { StockInfo, StockInfoData } from "@/lib/validations/stock-info";

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

  const revenueDataForQuarterFourOnly = revenueData?.data.filter(sid => QUARTER_FOUR === sid.quarter) as StockInfoData[]

  const grossProfitDataForQuarterFourOnly = grossProfitData?.data.filter(sid => QUARTER_FOUR === sid.quarter) as StockInfoData[]

  const netProfitDataForQuarterFourOnly = netProfitData?.data.filter(sid => QUARTER_FOUR === sid.quarter) as StockInfoData[]

  return mergeArrays(revenueDataForQuarterFourOnly, grossProfitDataForQuarterFourOnly, netProfitDataForQuarterFourOnly)
}

function mergeArrays(revenues: StockInfoData[], grossProfits: StockInfoData[], netProfits: StockInfoData[]): RevenueChartItem[] {
  return revenues.map<RevenueChartItem>(revenue => {
    let grossProfit = grossProfits.find(gp => gp.year === revenue.year);
    let netProfit = netProfits.find(np => np.year === revenue.year);

    const newRevenueChartItem: RevenueChartItem = { 
      year: revenue.year,
      revenue: revenue.value,
      grossProfit: grossProfit && grossProfit.value,
      netProfit: netProfit && netProfit.value
    }

    return newRevenueChartItem;
  })
}