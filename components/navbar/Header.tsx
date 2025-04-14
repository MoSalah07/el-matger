import React from "react";
import Container from "../shared/Container";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Header() {
  return (
    <header className="bg-gray-900 h-[25vh] sm:h-[20vh] lg:h-[10vh] w-full">
      <Container className="flex items-center">
        <NavbarDesktop />
        <NavbarMobile />
      </Container>
    </header>
  );
}
