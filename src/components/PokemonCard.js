import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewButton from "./ViewButton";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonName, openModal } from "../Features/listSlice";

const PokemonCard = ({ name, types, sprites }) => {
  const { isModalOpen, pokemonName } = useSelector(
    (state) => state.pokemonList
  );

  // console.log(isModalOpen, pokemonName);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPokemonName(name));
    dispatch(openModal());
  };

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
