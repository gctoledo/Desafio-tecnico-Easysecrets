export type ChartType = "line" | "bar" | "area";

export interface ApexChartData {
  name: string;
  data: number[];
}

export interface ChartState {
  type: ChartType;
  months: string[];
  data: ApexChartData[];
  selectedProducts: string[];
  selectedMonths: string[];
  setChartType: (type: ChartType) => void;
  setSelectedProducts: (products: string[]) => void;
  setSelectedMonths: (months: string[]) => void;
}
