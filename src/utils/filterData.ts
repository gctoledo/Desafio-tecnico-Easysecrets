import type { ApexChartData } from "../interfaces/chart";

export function filterData(
  rawData: ApexChartData[],
  allMonths: string[],
  selectedProducts: string[],
  selectedMonths: string[]
): ApexChartData[] {
  return rawData
    .filter((product) => selectedProducts.includes(product.name))
    .map((product) => {
      const filteredSeries: number[] = selectedMonths.map((month) => {
        const index = allMonths.indexOf(month);
        return product.data[index];
      });

      return {
        name: product.name,
        data: filteredSeries,
      };
    });
}
