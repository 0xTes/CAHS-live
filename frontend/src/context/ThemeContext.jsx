import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null); // ✅ Fix 3: explicit null default

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // ✅ Fix 2: guard against SSR / environments without localStorage
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ Fix 1: stable toggle function so consumers don't need setDarkMode internals
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Fix 3: guard prevents silent undefined bugs when used outside provider
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};