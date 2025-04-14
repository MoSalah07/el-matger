"use client";
import { useTheme } from "next-themes";
import { ChevronDownIcon, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeContext } from "@/context/theme.context";
import { ThemeColors } from "@/interfaces/theme.types";
import useIsMounted from "@/hooks/use.is.mounted";

const availableThemeColors = [
  { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
  { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
  { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
  { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
  { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
  { name: "Yellow", light: "bg-yellow-500", dark: "bg-yellow-700" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const { themeColor, setThemeColor } = useThemeContext();

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  const isMounted = useIsMounted();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {theme === "dark" && isMounted ? (
          <div className="flex items-center gap-x-2">
            <Moon className="size-4" /> Dark <ChevronDownIcon />
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <Sun className="size-4" /> Light <ChevronDownIcon />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-mode">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={changeTheme}>
          <DropdownMenuRadioItem value="dark">
            <Moon className="size-4" /> Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">
            <Sun className="size-4" /> Light
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={themeColor}
          onValueChange={(value) => setThemeColor(value as ThemeColors)}
        >
          {availableThemeColors.map((c) => (
            <DropdownMenuRadioItem key={c.name} value={c.name}>
              <div
                style={{
                  backgroundColor:
                    c.name === "Rose"
                      ? "red"
                      : c.name === "Zinc"
                      ? "gray"
                      : c.name,
                }}
                className="h-4 w-4 mr-1 rounded-full"
              ></div>

              {c.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
