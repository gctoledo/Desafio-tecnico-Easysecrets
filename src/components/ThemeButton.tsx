import { useTheme } from "../hooks/useTheme";
import Button from "./Button";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <Button onClick={toggleTheme} className="py-2 px-3 rounded-full">
      {theme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
};

export default ThemeButton;
