import React, { useState } from "react";
import Logo from "../svg/Logo";
import "../styling/homeview.css";
import { MdOutlineSearch } from "react-icons/md";
import Title from "../components/Title";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchItem } from "../Features/listSlice";

const HomeView = ({ color }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { search } = useSelector((state) => state.pokemonList);
  const dispatch = useDispatch();

  const dispatchSearchItem = () => {
    dispatch(setSearchItem(searchTerm));
    navigate("/pokemon-list");
  };

  console.log(search);

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
