import React, { useState, useEffect } from "react";
import "../styling/sidemodal.css";
import axios from "axios";
import { useSelector } from "react-redux";

const SideModal = () => {
  const { pokemonName } = useSelector((state) => state.pokemonList);

  const [singlePokemonDetails, setSinglePokemonDetails] = useState({});
  const getPokemonDetails = async (arr) => {
    // if (pokemonName) {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    console.log(data);
    setSinglePokemonDetails(data);
    // }
  };

  useEffect(() => {
    getPokemonDetails();
  }, [pokemonName]);

  console.log(singlePokemonDetails);
  const { sprites, name, types, abilities, height, weight, stats } =
    singlePokemonDetails;
  return (
    <aside className="side-modal-container">
      <figure className="side-modal-icon">
        <img src={sprites.other.dream_world.front_default} alt={name} />
      </figure>
      <div className="pokemon-details">
        <h1 className="pokemon-name">{name}</h1>
        <div className="pokemon-types">
          {types.map((pokemon, index) => {
            return (
              <h4 className="pokemon-type" key={index}>
                {pokemon.type.name}
              </h4>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SideModal;
