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
}: FilterGroupProps) => {
  return (
    <div>
      <h2 className="font-semibold mb-3 text-center">{title}</h2>
      <div className="block md:grid md:grid-cols-3 md:gap-4">
        {options.map((item) => (
          <label
            key={item}
            className="flex items-center justify-start md:justify-center gap-2 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              className="accent-primary w-3 h-3"
              checked={selected.includes(item)}
              onChange={() => onToggle(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
