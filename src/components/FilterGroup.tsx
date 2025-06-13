interface FilterGroupProps {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}

const FilterGroup = ({
  title,
  options,
  selected,
  onToggle,
}: FilterGroupProps) => (
  <div className="w-full max-w-sm p-4 space-y-4 rounded shadow-md bg-secondary text-secondary-foreground">
    <h2 className="text-center font-semibold">{title}</h2>

    <div className="gap-2 text-center flex flex-col md:grid md:grid-cols-3">
      {options.map((item) => {
        const isSelected = selected.includes(item);

        return (
          <label
            key={item}
            className={`px-3 py-1 text-sm rounded-full border cursor-pointer transition-all
              ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-muted text-muted-foreground hover:bg-muted/30"
              }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={isSelected}
              onChange={() => onToggle(item)}
            />
            {item}
          </label>
        );
      })}
    </div>
  </div>
);

export default FilterGroup;
