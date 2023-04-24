import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Similar = ({ types, pokemonDetails }) => {
  const [similar, setSimilar] = useState([]);
  const { pokemonName } = useSelector((state) => state.pokemonList);

  // console.log(pokemonDetails);
  // console.log(types[0].type.name);
  const pokemonType = types[0].type.name;
  const getSimilarPokemonFunc = () => {
    const similarPokemon = pokemonDetails.filter((pokemon) => {
      return pokemon.types[0].type.name === pokemonType;
    });
    setSimilar(similarPokemon);
  };

  useEffect(() => {
    getSimilarPokemonFunc();
  }, [pokemonName, pokemonDetails]);

  if (similar.length === 0) {
    return <h1>Loading...</h1>;
  }
  const similarFiltered = similar.slice(0, 2);
  console.log(similarFiltered);

  return (
    <>
      {similarFiltered.map((pokemon) => {
        const { name, sprites } = pokemon;
        return (
          <article className="side-pokemon-card">
            <figure className="side-pokemon-icon">
              <img src={sprites.other.dream_world.front_default} alt={name} />
            </figure>
            <div className="side-pokemon-details">
              <h1 className="pokemon-name">{name}</h1>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Similar;
