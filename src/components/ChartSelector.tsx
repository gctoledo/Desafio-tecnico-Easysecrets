import { useChartStore } from "../store/chart";
import Button from "./Button";

const ChartSelector = () => {
  const setType = useChartStore((state) => state.setChartType);

  return (
    <div className="flex gap-2">
      <Button onClick={() => setType("bar")} className="px-4 py-2">
        Gráfico de barra
      </Button>

      <Button onClick={() => setType("line")} className="px-4 py-2">
        Gráfico de linha
      </Button>
    </div>
  );
};

export default ChartSelector;
