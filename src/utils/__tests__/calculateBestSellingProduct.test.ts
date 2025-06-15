import { calculateBestSellingProduct } from "../calculateBestSellingProduct";
import type { ApexChartData } from "../../interfaces/chart";

describe("calculateBestSellingProduct", () => {
  it("returns null if data is empty", () => {
    const result = calculateBestSellingProduct([]);
    expect(result).toBeNull();
  });

  it("returns the product with the highest total sales", () => {
    const data: ApexChartData[] = [
      { name: "Produto A", data: [10, 20, 30] },
      { name: "Produto B", data: [15, 25, 35] },
      { name: "Produto C", data: [5, 5, 5] },
    ];

    const result = calculateBestSellingProduct(data);
    expect(result).toBe("Produto B");
  });

  it("returns the first product in case of tie", () => {
    const data: ApexChartData[] = [
      { name: "Produto A", data: [10, 20] },
      { name: "Produto B", data: [15, 15] },
    ];

    const result = calculateBestSellingProduct(data);
    expect(result).toBe("Produto A");
  });

  it("handles products with empty sales data", () => {
    const data: ApexChartData[] = [
      { name: "Produto A", data: [] },
      { name: "Produto B", data: [10, 20] },
    ];

    const result = calculateBestSellingProduct(data);
    expect(result).toBe("Produto B");
  });
});
