"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, Link } from "@/i18n/routing";
import { i18n } from "@/i18n-confige";
import { useLocale } from "next-intl";

export default function LanSwitcher() {
  const { locales } = i18n;
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="switch language">
        <div className="flex items-center gap-1 text-black dark:text-white lg:text-white">
          <span className="text-xl">
            {locales.find((l) => l.code === locale)?.icon}
          </span>
          {locale.toUpperCase().slice(0, 2)}
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={locale}>
          {locales.map((c) => (
            <DropdownMenuRadioItem key={c.name} value={c.code}>
              <Link
                className="w-full flex items-center gap-1"
                href={pathname}
                locale={c.code}
              >
                <span className="text-lg">{c.icon}</span> {c.name}
              </Link>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
