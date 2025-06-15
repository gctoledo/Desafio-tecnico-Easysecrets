import { useChartStore } from "../store/chart";
import { filterData } from "../utils/filterData";
import { calculateBestSellingMonth } from "../utils/calculateBestSellingMonth";
import { calculateBestSellingProduct } from "../utils/calculateBestSellingProduct";
import { calculateTotalSales } from "../utils/calculateTotalSales";
import type { ApexChartData } from "../interfaces/chart";

export function useSalesData() {
  const months = useChartStore((state) => state.months);
  const rawData = useChartStore((state) => state.data);
  const selectedProducts = useChartStore((state) => state.selectedProducts);
  const selectedMonths = useChartStore((state) => state.selectedMonths);

  const filteredData: ApexChartData[] = filterData(
    rawData,
    months,
    selectedProducts,
    selectedMonths
  );

  return {
    months,
    filteredData,
    selectedMonths,
    selectedProducts,
    calculateBestSellingMonth: () =>
      calculateBestSellingMonth(filteredData, selectedMonths),
    calculateBestSellingProduct: () =>
      calculateBestSellingProduct(filteredData),
    calculateTotalSales: () => calculateTotalSales(filteredData),
  };
}
