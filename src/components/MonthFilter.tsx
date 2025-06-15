import { useChartStore } from "../store/chart";
import FilterGroup from "./FilterGroup";

const MonthFilter = () => {
  const months = useChartStore((state) => state.months);
  const selected = useChartStore((state) => state.selectedMonths);
  const setSelected = useChartStore((state) => state.setSelectedMonths);

  const toggle = (month: string) => {
    let updated: string[];

    if (selected.includes(month)) {
      updated = selected.filter((m) => m !== month);
    } else {
      updated = months.filter((m) => selected.includes(m) || m === month);
    }

    setSelected(updated);
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
