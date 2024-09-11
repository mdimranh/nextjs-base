"use client";
import setGlobalColorTheme from "@/lib/theme-colors";
import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  themeColor: "Slate", // Default value
  setThemeColor: () => {}, // Default empty function
});

export function ThemeDataProvider({ children }) {
  const getSavedThemeColor = () => {
    try {
      return localStorage.getItem("themeColor") || "Slate";
    } catch (error) {
      return "Slate";
    }
  };

  const [themeColor, setThemeColor] = useState(getSavedThemeColor());
  const [isMounted, setIsMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);

    setGlobalColorTheme(resolvedTheme, themeColor);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, [themeColor, theme, resolvedTheme, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
