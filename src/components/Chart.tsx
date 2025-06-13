import Chart from "react-apexcharts";
import { useChartStore } from "../store/chart";
import { snapshotOf } from "../utils/snapshotOf";
import { useTheme } from "../hooks/useTheme";
import { getChartOptions } from "../config/chartOptions";
import { filterChartData } from "../utils/filterChartData";

const ImplChart = () => {
  const { theme } = useTheme();

  /**
   * Utilizei seletores individuas para garantir que
   * apenas o campo que foi alterado seja re-renderizado
   */
  const months = useChartStore((state) => state.months);
  const rawData = useChartStore((state) => state.data);
  const type = useChartStore((state) => state.type);
  const selectedProducts = useChartStore((state) => state.selectedProducts);
  const selectedMonths = useChartStore((state) => state.selectedMonths);

  const options = getChartOptions(selectedMonths, theme);

  const filteredData = filterChartData(
    rawData,
    months,
    selectedProducts,
    selectedMonths
  );

  const dataSnapshot = snapshotOf(filteredData);

  return (
    <Chart
      key={type + selectedProducts.join() + selectedMonths.join()}
      options={options}
      type={type}
      series={dataSnapshot}
      height={400}
      width="100%"
    />
  );
};

export default ImplChart;
