import type { ApexChartData } from "../interfaces/chart";

export function calculateBestSellingProduct(
  data: ApexChartData[]
): string | null {
  if (data.length === 0) return null;

  const totalPerProduct = data.map((product) =>
    product.data.reduce((sum, quantity) => sum + quantity, 0)
  );

  const maxValue = Math.max(...totalPerProduct);
  const maxProductIndex = totalPerProduct.indexOf(maxValue);

  return data[maxProductIndex].name;
}
