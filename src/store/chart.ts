import { create } from "zustand";
import salesData from "../data/sales.json";

type ChartType = "line" | "bar";

interface ApexChartData {
  name: string;
  data: number[];
}

interface ChartState {
  type: ChartType;
  months: string[];
  data: ApexChartData[];
  setChartType: (type: ChartType) => void;
}

export const useChartStore = create<ChartState>((set) => {
  const months = salesData[0]?.vendas.map((sale) => sale.mes) || [];

  const data = salesData.map((product) => ({
    name: product.produto,
    data: product.vendas.map((sale) => sale.quantidade),
  }));

  return {
    months,
    data,
    type: "bar",
    setChartType: (type) => set({ type }),
  };
});
