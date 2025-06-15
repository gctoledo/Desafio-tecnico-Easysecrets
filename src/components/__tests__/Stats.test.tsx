import { render, screen } from "@testing-library/react";
import Stats from "../Stats";
import type { Mock } from "vitest";

vi.mock("../../hooks/useSalesData", () => ({
  useSalesData: vi.fn(),
}));

import { useSalesData } from "../../hooks/useSalesData";

describe("<Stats />", () => {
  it("does not render if filteredData is empty", () => {
    (useSalesData as Mock).mockReturnValue({
      filteredData: [],
      selectedMonths: ["Janeiro"],
      calculateBestSellingMonth: vi.fn(),
      calculateTotalSales: vi.fn(),
      calculateBestSellingProduct: vi.fn(),
    });

    const { container } = render(<Stats />);
    expect(container.firstChild).toBeNull();
  });

  it("does not render if selectedMonths is empty", () => {
    (useSalesData as Mock).mockReturnValue({
      filteredData: [{ name: "Refrigerante", value: 10 }],
      selectedMonths: [],
      calculateBestSellingMonth: vi.fn(),
      calculateTotalSales: vi.fn(),
      calculateBestSellingProduct: vi.fn(),
    });

    const { container } = render(<Stats />);
    expect(container.firstChild).toBeNull();
  });

  it("renders all cards with correct data", () => {
    (useSalesData as Mock).mockReturnValue({
      filteredData: [{ name: "Suco", value: 20 }],
      selectedMonths: ["Janeiro"],
      calculateBestSellingMonth: () => "Janeiro",
      calculateTotalSales: () => 42,
      calculateBestSellingProduct: () => "Suco",
    });

    render(<Stats />);

    expect(screen.getByText("Janeiro")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByText("Suco")).toBeInTheDocument();

    expect(screen.getByText("foi o mês com mais vendas")).toBeInTheDocument();
    expect(
      screen.getByText("produtos vendidos nesse período")
    ).toBeInTheDocument();
    expect(screen.getByText("foi o produto mais vendido")).toBeInTheDocument();
  });
});
