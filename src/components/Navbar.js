import React, { useEffect, useState } from "react";
import Logo from "../svg/Logo";
import "../styling/navbar.css";
import { MdOutlineSearch } from "react-icons/md";
import ColorSelector from "./ColorSelector";
import Title from "./Title";
import NavLogo from "../svg/NavLogo";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../Features/listSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useSelector((state) => state.pokemonList);
  const dispatch = useDispatch();

  const dispatchSearchItem = () => {
    dispatch(setSearchItem(searchTerm));
  };
  // useEffect(() => {
  //   dispatchSearchItem();
  // }, [searchTerm]);

  console.log(searchTerm, search);

  return (
    <nav>
      <div className="dummy-blend"></div>
      <NavLink to={"/"} className="nav-logo">
        <figure className="nav-logo-figure">
          <NavLogo />

          {/* <Logo /> */}
        </figure>
        <Title margin="14px 0 0 15px" />
      </NavLink>
      <div className="nav-search-input">
        <input
          type="text"
          placeholder="Enter pokemon name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="nav-search-icon">
          <MdOutlineSearch />
        </div>
      </div>
      <section className="nav-color-selector">
        <ColorSelector />
      </section>
    </nav>
  );
};

export default Navbar;
