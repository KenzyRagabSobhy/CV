import { createContext, useEffect, useState } from "react";

const themes = {
  dark: { backgroundImage: "#020B24", color: "#F5F8F5" },
  light: { backgroundImage: "#F5F8F5", color: "#020B24" },
};
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setISdark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setISdark(!isDark);
  };
  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setISdark(isDark);
  }, []);
  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
