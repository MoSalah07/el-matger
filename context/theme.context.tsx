// theme.context.tsx
"use client";
import setGlobalColorTheme from "@/lib/theme.colors";
import { ThemeColors, ThemeColorStateParams } from "@/interfaces/theme.types";
import { useTheme, ThemeProviderProps } from "next-themes";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams
);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const [themeColor, setThemeColor] = useState<ThemeColors>("Yellow");
  const { resolvedTheme } = useTheme(); // لاحظ resolvedTheme

  // First Load Theme
  useEffect(() => {
    const saved = localStorage.getItem("themeColor") as ThemeColors | null;
    if (saved) {
      setThemeColor(saved);
    }
  }, []);

  // Second When Theme Or Color Change
  useEffect(() => {
    if (!resolvedTheme) return;
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(resolvedTheme as "light" | "dark", themeColor);
  }, [themeColor, resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
