import { useChartStore } from "../store/chart";
import { calculateBestSellingMonth } from "../utils/calculateBestSellingMonth";
import { calculateBestSellingProduct } from "../utils/calculateBestSellingProduct";
import { calculateTotalSales } from "../utils/calculateTotalSales";
import { filterData } from "../utils/filterData";
import Card from "./Card";

const Stats = () => {
  const months = useChartStore((state) => state.months);
  const rawData = useChartStore((state) => state.data);
  const selectedProducts = useChartStore((state) => state.selectedProducts);
  const selectedMonths = useChartStore((state) => state.selectedMonths);

  const filteredData = filterData(
    rawData,
    months,
    selectedProducts,
    selectedMonths
  );

  if (!filteredData.length || !selectedMonths.length) return null;

  return (
    <div className="block space-y-6 md:flex md:items-center md:justify-center md:gap-10 md:space-y-0">
      <Card className="flex flex-col justify-center items-center gap-3 p-6">
        <p className="text-4xl font-semibold">
          {calculateBestSellingMonth(filteredData, selectedMonths)}
        </p>
        <p className="text-sm">foi o mês com mais vendas</p>
      </Card>

      <Card className="flex flex-col justify-center items-center gap-3 p-6">
        <p className="text-4xl font-semibold">
          {calculateTotalSales(filteredData)}
        </p>
        <p className="text-sm">produtos vendidos nesse período</p>
      </Card>

      <Card className="flex flex-col justify-center items-center gap-3 p-6">
        <>
          <p className="text-4xl font-semibold">
            {calculateBestSellingProduct(filteredData)}
          </p>
          <p className="text-sm">foi o produto mais vendido</p>
        </>
      </Card>
    </div>
  );
};

export default Stats;
