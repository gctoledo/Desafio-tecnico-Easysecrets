import { useSalesData } from "../hooks/useSalesData";
import Card from "./Card";

const Stats = () => {
  const {
    filteredData,
    selectedMonths,
    calculateBestSellingMonth,
    calculateBestSellingProduct,
    calculateTotalSales,
  } = useSalesData();

  if (!filteredData.length || !selectedMonths.length) return null;

  return (
    <div className="block space-y-6 md:flex md:items-center md:justify-center md:gap-10 md:space-y-0">
      <Card className="flex flex-col justify-center items-center gap-3 p-6">
        <p className="text-4xl font-semibold">{calculateBestSellingMonth()}</p>
        <p className="text-sm">foi o mês com mais vendas</p>
      </Card>

      <Card className="flex flex-col justify-center items-center gap-3 p-6">
        <p className="text-4xl font-semibold">{calculateTotalSales()}</p>
        <p className="text-sm">produtos vendidos nesse período</p>
      </Card>

      <Card className="flex flex-col justify-center items-center gap-3 p-6">
        <p className="text-4xl font-semibold">
          {calculateBestSellingProduct()}
        </p>
        <p className="text-sm">foi o produto mais vendido</p>
      </Card>
    </div>
  );
};

export default Stats;
