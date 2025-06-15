import { renderHook } from "@testing-library/react";
import { useSalesData } from "../useSalesData";
import type { Mock } from "vitest";

vi.mock("../../store/chart", () => ({
  useChartStore: vi.fn(),
}));

vi.mock("../../utils/filterData", () => ({
  filterData: vi.fn(),
}));

vi.mock("../../utils/calculateBestSellingMonth", () => ({
  calculateBestSellingMonth: vi.fn(),
}));

vi.mock("../../utils/calculateBestSellingProduct", () => ({
  calculateBestSellingProduct: vi.fn(),
}));

vi.mock("../../utils/calculateTotalSales", () => ({
  calculateTotalSales: vi.fn(),
}));

import { useChartStore } from "../../store/chart";
import { filterData } from "../../utils/filterData";
import { calculateBestSellingMonth } from "../../utils/calculateBestSellingMonth";
import { calculateBestSellingProduct } from "../../utils/calculateBestSellingProduct";
import { calculateTotalSales } from "../../utils/calculateTotalSales";

describe("useSalesData", () => {
  beforeEach(() => {
    (useChartStore as unknown as Mock).mockImplementation((selector) =>
      selector({
        months: ["Janeiro", "Fevereiro"],
        data: [{ name: "Refrigerante", data: [100, 120] }],
        selectedProducts: ["Refrigerante"],
        selectedMonths: ["Janeiro", "Fevereiro"],
      })
    );

    (filterData as Mock).mockReturnValue([
      { name: "Refrigerante", data: [100, 120] },
    ]);

    (calculateBestSellingMonth as Mock).mockReturnValue("Fevereiro");
    (calculateBestSellingProduct as Mock).mockReturnValue("Refrigerante");
    (calculateTotalSales as Mock).mockReturnValue(220);
  });

  it("returns correct values from store and utils", () => {
    const { result } = renderHook(() => useSalesData());

    expect(result.current.months).toEqual(["Janeiro", "Fevereiro"]);
    expect(result.current.filteredData).toEqual([
      { name: "Refrigerante", data: [100, 120] },
    ]);
    expect(result.current.selectedProducts).toEqual(["Refrigerante"]);
    expect(result.current.selectedMonths).toEqual(["Janeiro", "Fevereiro"]);
    expect(result.current.calculateBestSellingMonth()).toBe("Fevereiro");
    expect(result.current.calculateBestSellingProduct()).toBe("Refrigerante");
    expect(result.current.calculateTotalSales()).toBe(220);
  });
});
