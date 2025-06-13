import { create } from "zustand";
import salesData from "../data/sales.json";

export type ChartType = "line" | "bar" | "area";

export interface ApexChartData {
  name: string;
  data: number[];
}

interface ChartState {
  type: ChartType;
  months: string[];
  data: ApexChartData[];
  selectedProducts: string[];
  selectedMonths: string[];
  setChartType: (type: ChartType) => void;
  setSelectedProducts: (products: string[]) => void;
  setSelectedMonths: (months: string[]) => void;
}

export const useChartStore = create<ChartState>((set) => {
  const months = salesData[0]?.vendas.map((sale) => sale.mes) || [];

  const data = salesData.map((product) => ({
    name: product.produto,
    data: product.vendas.map((sale) => sale.quantidade),
  }));

  const allProducts = salesData.map((p) => p.produto);

  return {
    months,
    data,
    type: "bar",
    selectedProducts: allProducts,
    selectedMonths: months,
    setChartType: (type) => set({ type }),
    setSelectedProducts: (products) => set({ selectedProducts: products }),
    setSelectedMonths: (months) => set({ selectedMonths: months }),
  };
});
