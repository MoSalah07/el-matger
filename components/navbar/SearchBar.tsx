import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { getDirection } from "@/i18n-confige";
import { Button } from "../ui/button";

const listSearch = ["Jeans", "Shoes", "T-Shirts", "Wrist Watches"];

export default function SearchBar() {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <div
      className="flex items-center lg:basis-[50%] h-[6vh]"
      dir={getDirection(locale) === "rtl" ? "rtl" : "ltr"}
    >
      {/* Button */}
      <Button variant={"outline"} className="h-full ">
        <Search size={25} />
      </Button>
      {/* Search Input */}
      <div className="w-full h-full">
        <Input
          className="h-full"
          type="search"
          placeholder={t("Header.Search Site", { name: "store" })}
        />
      </div>
      <div className="h-full">
        <Select>
          <SelectTrigger
            style={{ height: "100%" }}
            className="lg:w-[100px] h-full cursor-pointer"
          >
            <SelectValue placeholder={t("Header.All")} />
          </SelectTrigger>
          <SelectContent className="h-full">
            <SelectGroup>
              <SelectLabel>{t("Header.All")}</SelectLabel>
              {listSearch.map((item, key) => (
                <SelectItem key={key} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
