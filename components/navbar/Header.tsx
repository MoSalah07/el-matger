import React from "react";
import Container from "../shared/Container";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Header() {
  return (
    <header className="dark:bg-gray-900 bg-red-950 h-[20vh] lg:h-[10vh] w-full">
      <Container className="flex items-center ">
        <NavbarDesktop />
        <NavbarMobile />
      </Container>
    </header>
  );
}
