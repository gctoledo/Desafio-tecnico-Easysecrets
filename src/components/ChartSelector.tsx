import { useChartStore, type ChartType } from "../store/chart";
import Button from "./Button";

type ChartOptionsProps = {
  name: string;
  type: ChartType;
};

const ChartSelector = () => {
  const setType = useChartStore((state) => state.setChartType);

  const chartOptions: ChartOptionsProps[] = [
    { name: "barra", type: "bar" },
    { name: "linha", type: "line" },
    { name: "área", type: "area" },
  ];

  return (
    <div className="flex gap-2">
      {chartOptions.map((option) => (
        <Button
          key={option.type}
          onClick={() => setType(option.type)}
          className="px-4 py-2 text-sm md:text-base"
        >
          Gráfico de {option.name}
        </Button>
      ))}
    </div>
  );
};

export default ChartSelector;
