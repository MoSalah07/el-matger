export type ThemeColors =
  | "Zinc"
  | "Rose"
  | "Blue"
  | "Green"
  | "Orange"
  | "Yellow";
export interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
