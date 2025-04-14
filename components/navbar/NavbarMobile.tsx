import React from "react";
import ModelNavMobile from "./ModelNavMobile";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

export default function NavbarMobile() {
  return (
    <nav className="lg:hidden flex flex-col justify-center gap-y-10 w-full h-full">
      <div className="flex items-center justify-between">
        <Logo />
        <ModelNavMobile />
      </div>
      <SearchBar />
    </nav>
  );
}
