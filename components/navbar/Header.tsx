import React from "react";
import Container from "../shared/Container";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export function Header() {
  return (
    <header className="bg-gray-950 h-[25vh] sm:h-[20vh] lg:h-[10vh] w-full">
      <Container className="flex items-center">
        <NavbarDesktop />
        <NavbarMobile />
      </Container>
    </header>
  );
}
export default React.memo(Header);
