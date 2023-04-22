import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewButton from "./ViewButton";

const PokemonCard = ({ name, types, sprites }) => {
  // const [pokeType, setPokeType] = useState([]);
  // const getPokemonType = (arr) => {
  //   arr.forEach(async (pokemon) => {
  //     const { data } = await axios.get(`${pokemon.type.url}`);

  //     setPokeType((prev) => [...prev, data]);
  //   });
  // };

  // useEffect(() => {
  //   getPokemonType(types);
  // }, []);
  // console.log(pokeType);
  return (
    <article className="pokemon-card">
      <figure className="pokemon-icon">
        <img src={sprites.other.dream_world.front_default} alt="name" />
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
      {/* <ViewButton /> */}
    </article>
  );
};

export default PokemonCard;
