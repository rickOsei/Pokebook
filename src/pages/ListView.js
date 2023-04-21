import React from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";

const ListView = () => {
  const { pokemonList, search } = useSelector((state) => state.pokemonList);
  const filteredList = pokemonList.filter((pokemon) => {
    if (search) {
      return pokemon.includes(search);
    } else {
      return pokemon;
    }
  });

  console.log(search);
  return (
    <>
      <Navbar />
      <div>
        {filteredList.map((pokemon, key) => {
          return <h1 key={key}>{pokemon}</h1>;
        })}
      </div>
    </>
  );
};

export default ListView;
