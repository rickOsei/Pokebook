import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewButton from "./ViewButton";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonName, openSideModal } from "../Features/listSlice";

const PokemonCard = ({ name, types, sprites }) => {
  const { isModalOpen, pokemonName } = useSelector(
    (state) => state.pokemonList
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPokemonName(name));
    dispatch(openSideModal());
  };

  // const typeUnicode = {
  //   Flying: "🦋",
  //   Normal: "🐻",
  //   Fire: "🔥",
  //   Water: "🌊",
  //   Grass: "🌿",
  //   Fighting: "💪",
  //   Poison: "☠️",
  //   Electric: "⚡",
  //   Ground: "🌱",
  //   Rock: "🪨",
  //   Psychic: "֎",
  //   Ice: "🧊",
  //   Bug: "🐞",
  //   Ghost: "👻",
  //   Steel: "🦾",
  //   Dragon: "🐉",
  //   Dark: "🖤",
  // };

  // const typeUnicode = [
  //   { name: "Flying", unicode: "🦋" },
  //   { name: "Normal", unicode: "🐻" },
  //   { name: "Fire", unicode: "🔥" },
  //   { name: "Water", unicode: "🌊" },
  //   { name: "Grass", unicode: "🌿" },
  //   { name: "Fighting", unicode: "💪" },
  //   { name: "Poison", unicode: "☠️" },
  //   { name: "Electric", unicode: "⚡" },
  //   { name: "Ground", unicode: "🌱" },
  //   { name: "Rock", unicode: "🪨" },
  //   { name: "Psychic", unicode: "֎" },
  //   { name: "Ice", unicode: "🧊" },
  //   { name: "Bug", unicode: "🐞" },
  //   { name: "Ghost", unicode: "👻" },
  //   { name: "Steel", unicode: "🦾" },
  //   { name: "Dragon", unicode: "🐉" },
  //   { name: "Dark", unicode: "🖤" },
  // ];

  return (
    <>
      <article className="pokemon-card">
        <figure className="pokemon-icon">
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
        <ViewButton handleClick={handleClick} />
      </article>
    </>
  );
};

export default PokemonCard;
