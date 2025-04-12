import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical } from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { getDirection } from "@/i18n-confige";
import CounterCart from "./CounterCart";

export default function ModelNavMobile() {
  const locale = useLocale();
  const t = useTranslations("Header");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <EllipsisVertical size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        dir={getDirection(locale) === "rtl" ? "rtl" : "ltr"}
        side={locale === "ar" ? "right" : "left"}
        className="p-4"
      >
        <SheetHeader className="flex items-center">
          <SheetTitle>{t("Site Menu")}</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* Content */}
        <div className="flex flex-col gap-y-8">
          <ThemeSwitcher />
          <LangSwitcher />
          <CounterCart />
        </div>
      </SheetContent>
    </Sheet>
  );
}
