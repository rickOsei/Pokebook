import React from "react";
import Logo from "../svg/Logo";
import "../styling/navbar.css";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <figure className="nav-logo-figure">
          <Logo />
        </figure>
      </div>
      <div className="nav-search-input">
        <input type="text" placeholder="Enter pokemon name" />
        <div className="nav-search-icon">
          <MdOutlineSearch />
        </div>
      </div>
      <div className="nav-color-selector"></div>
    </nav>
  );
};

export default Navbar;
