import "../styling/homeview.css";

import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../svg/Logo";
import Title from "../components/Title";
import { setSearchItem } from "../Features/listSlice";

const HomeView = ({ color }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { searchState } = useSelector((state) => state.pokemonList);
  const dispatch = useDispatch();

  const dispatchSearchItem = () => {
    dispatch(setSearchItem(searchInput));
    navigate("/pokemon-list");
  };

  return (
    <main>
      <div className="home-main-container">
        <section className="logo-name-description">
          <figure className="home-logo">
            <Logo />
          </figure>
          <Title fontSize="48px" margin="0 0 15px 0" />
          <p className="home-main-description">
            Largest Pokémon index with information <br />
            about every Pokemon you can think of.
          </p>
        </section>

        <section className="search-view">
          <input
            type="text"
            placeholder="Enter pokemon name"
            style={{ borderColor: color }}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div
            className="search-icon"
            style={{ background: color }}
            onClick={dispatchSearchItem}
          >
            <MdOutlineSearch />
          </div>
          <NavLink to={"/pokemon-list"}>
            <h4 className="view-list-link">View all</h4>
          </NavLink>
        </section>
      </div>
    </main>
  );
};

export default HomeView;
