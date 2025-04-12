import React from "react";
import ModelNavMobile from "./ModelNavMobile";
import SearchBar from "./SearchBar";

export default function NavbarMobile() {
  return (
    <nav className="lg:hidden flex flex-col justify-center gap-y-6 w-full h-full">
      <div className="flex items-center justify-between">
        <div>logo</div>
        <ModelNavMobile />
      </div>
      <SearchBar />
    </nav>
  );
}
