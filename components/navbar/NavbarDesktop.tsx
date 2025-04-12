import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanSwitcher from "./LangSwitcher";
import CounterCart from "./CounterCart";
import SearchBar from "./SearchBar";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-between w-full h-full">
      <div className="">Logo</div>
      <SearchBar />
      <div className="flex items-center justify-between gap-8">
        <LanSwitcher />
        <ThemeSwitcher />
        <CounterCart />
      </div>
    </div>
  );
}
