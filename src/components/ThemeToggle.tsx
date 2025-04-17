import { useCallback, useEffect, useState } from "react";
import Sun from "@/components/Icons/Sun"
import Moon from "@/components/Icons/Moon"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="text-center" onClick={toggleTheme}>
      {theme === "dark"
        ? <Sun className="m-auto cursor-pointer text-burlywood" />
        : <Moon className="m-auto cursor-pointer text-blue-gray" />
      }
    </div>
  );
};
