import type { ChartType } from "../interfaces/chart";
import { useChartStore } from "../store/chart";
import Button from "./Button";

type ChartOptionsProps = {
  name: string;
  type: ChartType;
};

const ChartSelector = () => {
  const setType = useChartStore((state) => state.setChartType);
  const type = useChartStore((state) => state.type);

  const chartOptions: ChartOptionsProps[] = [
    { name: "barra", type: "bar" },
    { name: "linha", type: "line" },
    { name: "área", type: "area" },
  ];

  return (
    <div className="flex gap-2 justify-center">
      {chartOptions.map((option) => (
        <Button
          key={option.type}
          onClick={() => setType(option.type)}
          className={`px-4 py-2 text-sm md:text-base disabled:bg-primary/70 disabled:cursor-default`}
          disabled={option.type === type}
        >
          Gráfico de {option.name}
        </Button>
      ))}
    </div>
  );
};

export default ChartSelector;
