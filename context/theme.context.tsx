"use client";
import setGlobalColorTheme from "@/lib/theme.colors";
import { ThemeColors, ThemeColorStateParams } from "@/interfaces/theme.types";
import { useTheme, ThemeProviderProps } from "next-themes";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams
);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc";
    } catch (error: unknown) {
      if (error instanceof Error) {
        return "Zinc" as ThemeColors;
      }
      return "Zinc" as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>("Zinc");
  const { theme } = useTheme();

  useEffect(() => {
    const saved = getSavedThemeColor();
    setThemeColor(saved);
  }, []);

  useEffect(() => {
    if (!theme) return;
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(theme as "light" | "dark", themeColor);
  }, [themeColor, theme]);

  console.log(themeColor);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
