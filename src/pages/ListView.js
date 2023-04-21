import "../styling/listview.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const ListView = () => {
  const { pokemonList, searchState, isLoading } = useSelector(
    (state) => state.pokemonList
  );
  const [pokemonDetails, setPokemonDetails] = useState([]);

  console.log(pokemonList);

  const getPokemonDetails = (arr) => {
    arr.forEach(async (pokemon) => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      setPokemonDetails((prev) => [...prev, data]);
    });
  };

  useEffect(() => {
    getPokemonDetails(pokemonList);
  }, []);

  console.log(pokemonDetails.slice(0, 5));

  // const filteredList = pokemonList.filter((pokemon) => {
  //   if (searchState) {
  //     return pokemon.includes(searchState);
  //   } else {
  //     return pokemon;
  //   }
  // });

  // console.log(searchState, isLoading);
  return (
    <>
      <Navbar />
      <section className="pokemon-list-section">
        <div className="pokemon-list-container">
          {pokemonDetails.map((pokemon, index) => {
            return <PokemonCard {...pokemon} key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ListView;
