import { calculateBestSellingMonth } from "../calculateBestSellingMonth";
import type { ApexChartData } from "../../interfaces/chart";

describe("calculateBestSellingMonth", () => {
  it("returns null for empty data array", () => {
    const result = calculateBestSellingMonth([], ["Jan", "Fev"]);
    expect(result).toBeNull();
  });

  it("returns null for data with empty series", () => {
    const data: ApexChartData[] = [{ name: "Produto A", data: [] }];
    const result = calculateBestSellingMonth(data, []);
    expect(result).toBeNull();
  });

  it("returns the correct month with highest total sales", () => {
    const data: ApexChartData[] = [
      { name: "Produto A", data: [10, 20, 30] },
      { name: "Produto B", data: [15, 25, 10] },
    ];
    const months = ["Jan", "Fev", "Mar"];
    const result = calculateBestSellingMonth(data, months);
    expect(result).toBe("Fev");
  });

  it("returns the first max if there's a tie", () => {
    const data: ApexChartData[] = [
      { name: "Produto A", data: [20, 10] },
      { name: "Produto B", data: [10, 20] },
    ];
    const months = ["Jan", "Fev"];
    const result = calculateBestSellingMonth(data, months);
    expect(result).toBe("Jan");
  });

  it("handles one product only", () => {
    const data: ApexChartData[] = [{ name: "Produto Único", data: [5, 8, 3] }];
    const months = ["Jan", "Fev", "Mar"];
    const result = calculateBestSellingMonth(data, months);
    expect(result).toBe("Fev");
  });
});
