export type ThemeColors =
  | "Zinc"
  | "Red"
  | "Blue"
  | "Green"
  | "Orange"
  | "Yellow";
export interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
