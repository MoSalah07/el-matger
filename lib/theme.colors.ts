import { ThemeColors } from "@/interfaces/theme.types";

const themes = {
  Red: {
    light: {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      "card-foreground": "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      "popover-foreground": "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.637 0.237 25.331)",
      "primary-foreground": "oklch(0.971 0.013 17.38)",
      secondary: "oklch(0.967 0.001 286.375)",
      "secondary-foreground": "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      "muted-foreground": "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      "accent-foreground": "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.637 0.237 25.331)",
      "chart-1": "oklch(0.646 0.222 41.116)",
      "chart-2": "oklch(0.6 0.118 184.704)",
      "chart-3": "oklch(0.398 0.07 227.392)",
      "chart-4": "oklch(0.828 0.189 84.429)",
      "chart-5": "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      "sidebar-foreground": "oklch(0.141 0.005 285.823)",
      "sidebar-primary": "oklch(0.637 0.237 25.331)",
      "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)",
      "sidebar-accent": "oklch(0.967 0.001 286.375)",
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)",
      "sidebar-border": "oklch(0.92 0.004 286.32)",
      "sidebar-ring": "oklch(0.637 0.237 25.331)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      "card-foreground": "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      "popover-foreground": "oklch(0.985 0 0)",
      primary: "oklch(0.637 0.237 25.331)",
      "primary-foreground": "oklch(0.971 0.013 17.38)",
      secondary: "oklch(0.274 0.006 286.033)",
      "secondary-foreground": "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      "muted-foreground": "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      "accent-foreground": "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.637 0.237 25.331)",
      "chart-1": "oklch(0.488 0.243 264.376)",
      "chart-2": "oklch(0.696 0.17 162.48)",
      "chart-3": "oklch(0.769 0.188 70.08)",
      "chart-4": "oklch(0.627 0.265 303.9)",
      "chart-5": "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      "sidebar-foreground": "oklch(0.985 0 0)",
      "sidebar-primary": "oklch(0.637 0.237 25.331)",
      "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)",
      "sidebar-accent": "oklch(0.274 0.006 286.033)",
      "sidebar-accent-foreground": "oklch(0.985 0 0)",
      "sidebar-border": "oklch(1 0 0 / 10%)",
      "sidebar-ring": "oklch(0.637 0.237 25.331)",
    },
  },
  Orange: {
    light: {
      radius: "0.3rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.705 0.213 47.604)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      secondary: "oklch(0.967 0.001 286.375)",
      secondaryForeground: "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      mutedForeground: "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      accentForeground: "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.705 0.213 47.604)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.141 0.005 285.823)",
      sidebarPrimary: "oklch(0.705 0.213 47.604)",
      sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
      sidebarAccent: "oklch(0.967 0.001 286.375)",
      sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
      sidebarBorder: "oklch(0.92 0.004 286.32)",
      sidebarRing: "oklch(0.705 0.213 47.604)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.705 0.213 47.604)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      secondary: "oklch(0.274 0.006 286.033)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      mutedForeground: "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.705 0.213 47.604)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.705 0.213 47.604)",
      sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
      sidebarAccent: "oklch(0.274 0.006 286.033)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.705 0.213 47.604)",
    },
  },
  Green: {
    light: {
      radius: "0.3rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.335 0.283 122.25)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      secondary: "oklch(0.967 0.001 286.375)",
      secondaryForeground: "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      mutedForeground: "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      accentForeground: "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.335 0.283 122.25)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.141 0.005 285.823)",
      sidebarPrimary: "oklch(0.335 0.283 122.25)",
      sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
      sidebarAccent: "oklch(0.967 0.001 286.375)",
      sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
      sidebarBorder: "oklch(0.92 0.004 286.32)",
      sidebarRing: "oklch(0.335 0.283 122.25)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.335 0.283 122.25)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      secondary: "oklch(0.274 0.006 286.033)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      mutedForeground: "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.335 0.283 122.25)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.335 0.283 122.25)",
      sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
      sidebarAccent: "oklch(0.274 0.006 286.033)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.335 0.283 122.25)",
    },
  },
  Blue: {
    light: {
      radius: "0.3rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.256 0.15 223.109)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      secondary: "oklch(0.967 0.001 286.375)",
      secondaryForeground: "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      mutedForeground: "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      accentForeground: "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.256 0.15 223.109)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.141 0.005 285.823)",
      sidebarPrimary: "oklch(0.256 0.15 223.109)",
      sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
      sidebarAccent: "oklch(0.967 0.001 286.375)",
      sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
      sidebarBorder: "oklch(0.92 0 0)",
      sidebarRing: "oklch(0.256 0.15 223.109)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.256 0.15 223.109)",
      primaryForeground: "oklch(0.98 0.016 73.684)",
      secondary: "oklch(0.274 0.006 286.033)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      mutedForeground: "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.256 0.15 223.109)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.256 0.15 223.109)",
      sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
      sidebarAccent: "oklch(0.274 0.006 286.033)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.256 0.15 223.109)",
    },
  },
  Yellow: {
    light: {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.795 0.184 86.047)",
      primaryForeground: "oklch(0.421 0.095 57.708)",
      secondary: "oklch(0.967 0.001 286.375)",
      secondaryForeground: "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      mutedForeground: "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      accentForeground: "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.795 0.184 86.047)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.141 0.005 285.823)",
      sidebarPrimary: "oklch(0.795 0.184 86.047)",
      sidebarPrimaryForeground: "oklch(0.421 0.095 57.708)",
      sidebarAccent: "oklch(0.967 0.001 286.375)",
      sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
      sidebarBorder: "oklch(0.92 0.004 286.32)",
      sidebarRing: "oklch(0.795 0.184 86.047)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.795 0.184 86.047)",
      primaryForeground: "oklch(0.421 0.095 57.708)",
      secondary: "oklch(0.274 0.006 286.033)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      mutedForeground: "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.554 0.135 66.442)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.795 0.184 86.047)",
      sidebarPrimaryForeground: "oklch(0.421 0.095 57.708)",
      sidebarAccent: "oklch(0.274 0.006 286.033)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.554 0.135 66.442)",
    },
  },
  Zinc: {
    light: {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.21 0.006 285.885)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.967 0.001 286.375)",
      secondaryForeground: "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      mutedForeground: "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      accentForeground: "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.705 0.015 286.067)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.141 0.005 285.823)",
      sidebarPrimary: "oklch(0.21 0.006 285.885)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.967 0.001 286.375)",
      sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
      sidebarBorder: "oklch(0.92 0.004 286.32)",
      sidebarRing: "oklch(0.705 0.015 286.067)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.92 0.004 286.32)",
      primaryForeground: "oklch(0.21 0.006 285.885)",
      secondary: "oklch(0.274 0.006 286.033)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      mutedForeground: "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.645 0.246 16.439)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.645 0.246 16.439)",
      sidebarPrimaryForeground: "oklch(0.969 0.015 12.422)",
      sidebarAccent: "oklch(0.274 0.006 286.033)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.645 0.246 16.439)",
    },
  },
};

export default function setGlobalColorTheme(
  mode: "light" | "dark",
  color: ThemeColors
) {
  const root = document.documentElement;
  const theme = themes[color]?.[mode];

  if (!theme) return;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}
