import type { ApexOptions } from "apexcharts";

export function getChartOptions(months: string[]): ApexOptions {
  return {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
      background: "var(--color-background)",
      foreColor: "var(--color-foreground)",
      fontFamily: "var(--font-display)",
    },
    title: {
      text: "Vendas por mês",
      align: "center",
      style: {
        color: "var(--color-foreground)",
      },
    },
    xaxis: {
      categories: months,
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      theme: "dark",
    },
  };
}
