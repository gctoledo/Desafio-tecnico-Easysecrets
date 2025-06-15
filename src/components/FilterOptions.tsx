interface FilterOptionsProps {
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}

const FilterOptions = ({ options, selected, onToggle }: FilterOptionsProps) => {
  return (
    <div className="gap-2 text-center flex flex-col px-4 mt-4 md:grid md:grid-cols-3">
      {options.map((item) => {
        const isSelected = selected.includes(item);

        return (
          <label
            key={item}
            htmlFor={item}
            className={`px-3 py-1 text-sm rounded-full border cursor-pointer transition-all duration-300
              ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary hover:bg-accent"
                  : "bg-transparent border-muted text-muted-foreground hover:bg-muted/30"
              }`}
          >
            <input
              type="checkbox"
              id={item}
              className="hidden"
              checked={isSelected}
              onChange={() => onToggle(item)}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default FilterOptions;
