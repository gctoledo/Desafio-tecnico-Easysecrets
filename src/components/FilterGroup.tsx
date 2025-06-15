import Card from "./Card";

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
  <Card className="space-y-4 w-full max-w-96 p-4">
    <h2 className="text-center font-semibold">{title}</h2>

    <div className="gap-2 text-center flex flex-col md:grid md:grid-cols-3">
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
  </Card>
);

export default FilterGroup;
