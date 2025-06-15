import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import ChevronIcon from "./ChevronIcon";
import FilterOptions from "./FilterOptions";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-full max-w-96 py-4 h-full">
      <button
        className="w-full flex items-center justify-between font-semibold px-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronIcon rotate={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="filter-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <FilterOptions
              options={options}
              selected={selected}
              onToggle={onToggle}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default FilterGroup;
