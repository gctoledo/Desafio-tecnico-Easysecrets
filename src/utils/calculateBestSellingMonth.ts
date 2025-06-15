import type { ApexChartData } from "../interfaces/chart";

export const calculateBestSellingMonth = (
  data: ApexChartData[],
  selectedMonths: string[]
) => {
  if (!data.length || !data[0].data.length) return null;

  const totalPerMonth = data[0].data.map((_, index) => {
    return data.reduce((sum, product) => sum + product.data[index], 0);
  });

  const maxValue = Math.max(...totalPerMonth);
  const maxMonthIndex = totalPerMonth.indexOf(maxValue);

  return selectedMonths[maxMonthIndex];
};
