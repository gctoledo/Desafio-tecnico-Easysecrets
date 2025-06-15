import Chart from "react-apexcharts";
import { getChartOptions } from "../config/chartOptions";
import { useChartStore } from "../store/chart";
import { snapshotOf } from "../utils/snapshotOf";
import { useSalesData } from "../hooks/useSalesData";

const SalesChart = () => {
  const type = useChartStore((state) => state.type);
  const { filteredData, selectedMonths, selectedProducts } = useSalesData();

  const options = getChartOptions(selectedMonths);
  const dataSnapshot = snapshotOf(filteredData);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Chart
        key={type + selectedProducts.join() + selectedMonths.join()}
        options={options}
        type={type}
        series={dataSnapshot}
        height={400}
        width="100%"
      />
    </div>
  );
};

export default SalesChart;
