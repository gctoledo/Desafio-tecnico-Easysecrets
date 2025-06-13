import { useChartStore } from "../store/chart";
import FilterGroup from "./FilterGroup";

const MonthFilter = () => {
  const months = useChartStore((state) => state.months);
  const selected = useChartStore((state) => state.selectedMonths);
  const setSelected = useChartStore((state) => state.setSelectedMonths);

  const toggle = (month: string) => {
    if (selected.includes(month)) {
      setSelected(selected.filter((m) => m !== month));
    } else {
      setSelected([...selected, month]);
    }
  };

  return (
    <FilterGroup
      title="Filtrar por mês"
      options={months}
      selected={selected}
      onToggle={toggle}
    />
  );
};

export default MonthFilter;
