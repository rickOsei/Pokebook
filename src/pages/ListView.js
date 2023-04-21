import "../styling/listview.css";
import React from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../svg/Logo";

const ListView = () => {
  const { pokemonList, searchState, isLoading } = useSelector(
    (state) => state.pokemonList
  );
  const filteredList = pokemonList.filter((pokemon) => {
    if (searchState) {
      return pokemon.includes(searchState);
    } else {
      return pokemon;
    }
  });

  // console.log(searchState, isLoading);
  return (
    <>
      <Navbar />
      <section className="pokemon-list-section">
        <div className="pokemon-list-container"></div>
      </section>
    </>
  );
};

export default ListView;
