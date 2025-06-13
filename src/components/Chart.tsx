import Chart from "react-apexcharts";
import { useChartStore } from "../store/chart";
import { snapshotOf } from "../utils/snapshotOf";
import { useTheme } from "../hooks/useTheme";
import { getChartOptions } from "../config/chartOptions";

const ImplChart = () => {
  const { theme } = useTheme();

  const months = useChartStore((state) => state.months);
  const data = useChartStore((state) => state.data);
  const type = useChartStore((state) => state.type);

  const options = getChartOptions(months, theme);
  const dataSnapshot = snapshotOf(data);

  return (
    <Chart
      key={type}
      options={options}
      type={type}
      series={dataSnapshot}
      height={400}
    />
  );
};

export default ImplChart;
