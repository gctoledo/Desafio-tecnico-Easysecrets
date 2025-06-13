import { filterChartData } from "../filterChartData";

describe("filterChartData", () => {
  const rawData = [
    {
      name: "Refrigerante",
      data: [120, 150, 130, 170, 160, 140],
    },
    {
      name: "Suco",
      data: [80, 95, 100, 90, 110, 105],
    },
    {
      name: "Salgadinho",
      data: [60, 75, 70, 95, 85, 90],
    },
  ];

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

  it("should return all data if no products or months are selected", () => {
    const result = filterChartData(
      rawData,
      months,
      ["Refrigerante", "Suco", "Salgadinho"],
      months
    );
    expect(result).toEqual(rawData);
  });

  it("should return only selected products", () => {
    const selectedProducts = ["Suco"];

    const result = filterChartData(rawData, months, selectedProducts, months);

    expect(result).toEqual([
      {
        name: "Suco",
        data: [80, 95, 100, 90, 110, 105],
      },
    ]);
  });

  it("should return only selected months", () => {
    const selectedMonths = ["Fevereiro", "Abril"];

    const result = filterChartData(
      rawData,
      months,
      ["Refrigerante"],
      selectedMonths
    );

    expect(result).toEqual([
      {
        name: "Refrigerante",
        data: [150, 170],
      },
    ]);
  });

  it("should return empty array if no products are selected", () => {
    const result = filterChartData(rawData, months, [], months);

    expect(result).toEqual([]);
  });

  it("should return empty array if no months are selected", () => {
    const result = filterChartData(rawData, months, ["Suco"], []);

    expect(result).toEqual([
      {
        name: "Suco",
        data: [],
      },
    ]);
  });
});
