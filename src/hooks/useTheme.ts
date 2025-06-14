import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("theme");

  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
