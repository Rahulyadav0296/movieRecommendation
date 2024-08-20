import React from "react";
import "./Navbar.css"; // Import the CSS file
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import NavbarButton from "./NavbarButton/NavbarButton";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

function Navbar() {
  return (
    <nav className="navbar">
      <NavbarBrand />
      {/* Toggle Button */}
      <NavbarButton />
      {/* Navbar Menu */}
      <NavbarMenu />
    </nav>
  );
}

export default Navbar;
