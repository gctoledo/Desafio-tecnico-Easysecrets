import { useChartStore } from "../store/chart";
import FilterGroup from "./FilterGroup";

const ProductFilter = () => {
  const data = useChartStore((state) => state.data);
  const selected = useChartStore((state) => state.selectedProducts);
  const setSelected = useChartStore((state) => state.setSelectedProducts);

  const products = data.map((item) => item.name);

  const toggle = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((p) => p !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  return (
    <FilterGroup
      title="Filtrar por produto"
      options={products}
      selected={selected}
      onToggle={toggle}
    />
  );
};

export default ProductFilter;
