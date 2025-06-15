import type { ApexChartData } from "../interfaces/chart";

export const calculateTotalSales = (data: ApexChartData[]) => {
  const totalSales = data.reduce(
    (sum, product) => sum + product.data.reduce((a, b) => a + b, 0),
    0
  );

  return totalSales;
};
