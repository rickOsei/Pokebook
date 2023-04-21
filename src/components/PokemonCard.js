import React from "react";

const PokemonCard = ({ name, types, sprites }) => {
  return (
    <article className="pokemon-card">
      <figure className="pokemon-icon">
        <img src={sprites.other.dream_world.front_default} alt="name" />
      </figure>
      <h4 className="pokemon-name">{name}</h4>
      <div className="pokemon-type">
        {types.map((pokemon) => {
          return <h4 className="pokemon-type">{pokemon.type.name}</h4>;
        })}
      </div>
    </article>
  );
};

export default PokemonCard;
