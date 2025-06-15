import type { ApexChartData } from "../interfaces/chart";

export function calculateTotalSales(data: ApexChartData[]): number {
  return data.reduce(
    (sum, product) => sum + product.data.reduce((a, b) => a + b, 0),
    0
  );
}
