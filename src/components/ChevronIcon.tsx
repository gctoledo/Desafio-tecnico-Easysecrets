interface ChevronIconProps {
  rotate?: boolean;
}

const ChevronIcon = ({ rotate = false }: ChevronIconProps) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${
      rotate ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default ChevronIcon;
