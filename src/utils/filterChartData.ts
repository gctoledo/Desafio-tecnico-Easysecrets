import type { ApexChartData } from "../interfaces/chart";

export function filterChartData(
  rawData: ApexChartData[],
  allMonths: string[],
  selectedProducts: string[],
  selectedMonths: string[]
): ApexChartData[] {
  return rawData
    .filter((product) => selectedProducts.includes(product.name))
    .map((product) => {
      const filteredSeries: number[] = [];

      allMonths.forEach((mes, index) => {
        if (selectedMonths.includes(mes)) {
          filteredSeries.push(product.data[index]);
        }
      });

      return {
        name: product.name,
        data: filteredSeries,
      };
    });
}
