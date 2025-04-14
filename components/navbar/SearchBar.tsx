import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getAllCategories } from "@/actions/product.action";
import { getTranslations } from "next-intl/server";

export default async function SearchBar() {
  const categories = await getAllCategories();

  const t = await getTranslations();

  return (
    <form
      action="/search"
      method="GET"
      className="flex items-center lg:mb-0 lg:basis-[45%] h-10 "
    >
      <Select name="category">
        <SelectTrigger
          style={{ color: "black", backgroundColor: "#f3f4f6" }}
          className="rounded-none rounded-br-md rounded-tr-md dark:border-gray-200 bg-gray-100 text-black py-[19px]"
        >
          <SelectValue placeholder={t("Header.All")} />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">{t("Header.All")}</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        style={{ backgroundColor: "#f3f4f6" }}
        className="flex-1 placeholder:text-gray-600 placeholder:capitalize rounded-none dark:border-gray-200 text-black text-base h-full"
        placeholder={t("Header.Search Site", { name: "el-matger" })}
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="bg-primary  text-black rounded-s-none rounded-e-md h-full px-3 py-2 "
      >
        <SearchIcon className="w-6 h-6 text-white" />
      </button>
    </form>
  );
}
