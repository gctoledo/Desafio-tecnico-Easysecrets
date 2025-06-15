import { calculateTotalSales } from "../calculateTotalSales";
import type { ApexChartData } from "../../interfaces/chart";

describe("calculateTotalSales", () => {
  it("returns 0 for empty data", () => {
    const data: ApexChartData[] = [];
    expect(calculateTotalSales(data)).toBe(0);
  });

  it("returns correct total for single product", () => {
    const data: ApexChartData[] = [
      { name: "Refrigerante", data: [10, 20, 30] },
    ];
    expect(calculateTotalSales(data)).toBe(60);
  });

  it("returns correct total for multiple products", () => {
    const data: ApexChartData[] = [
      { name: "Refrigerante", data: [10, 20] },
      { name: "Suco", data: [5, 5] },
    ];
    expect(calculateTotalSales(data)).toBe(40);
  });

  it("ignores empty data arrays", () => {
    const data: ApexChartData[] = [
      { name: "Água", data: [] },
      { name: "Suco", data: [15, 15] },
    ];
    expect(calculateTotalSales(data)).toBe(30);
  });
});
