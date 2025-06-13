import { create } from "zustand";
import salesData from "../data/sales.json";
import type { ChartState } from "../interfaces/chart";

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
