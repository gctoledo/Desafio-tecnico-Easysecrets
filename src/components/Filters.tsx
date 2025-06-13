import MonthFilter from "./MonthFilter";
import ProductFilter from "./ProductFilter";

const Filters = () => {
  return (
    <div className="flex gap-10 w-full justify-center items-start">
      <MonthFilter />

      <ProductFilter />
    </div>
  );
};

export default Filters;
