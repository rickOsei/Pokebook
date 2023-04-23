import React, { useState, useEffect } from "react";
import "../styling/sidemodal.css";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { closeSideModal } from "../Features/listSlice";

const SideModal = ({ pokemonDetails }) => {
  const [activeButton, setActiveButton] = useState("about");
  const { pokemonName, isModalOpen } = useSelector(
    (state) => state.pokemonList
  );
  const { generalColor } = useSelector((state) => state.generalColor);

  const dispatch = useDispatch();

  const singlePokemonDetails = pokemonDetails.filter(
    (pokemon) => pokemon.name === pokemonName
  );

  console.log(isModalOpen);

  console.log(singlePokemonDetails);
  const { sprites, name, types, abilities, height, weight, stats } =
    singlePokemonDetails[0];
  return (
    <aside
      className="side-modal-container"
      style={{
        right: isModalOpen ? 0 : "-50%",
      }}
    >
      <section className="pokemon-desc">
        <figure className="side-modal-icon">
          <button
            className="side-modal-close-btn"
            onClick={() => dispatch(closeSideModal())}
          >
            <FaArrowLeft />
          </button>

          <img src={sprites.other.dream_world.front_default} alt={name} />
        </figure>
        <div className="pokemon-details">
          <h1 className="side-modal-pokemon-name">{name}</h1>
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
      </section>
      <section
        className="about-pokemon"
        style={{ display: activeButton === "about" ? "flex" : "none" }}
      >
        <div className="about-container">
          <h1 className="side-modal-title">About</h1>
          <div className="details-container">
            <div className="about-details">
              <h3 className="detail-name">Height</h3>
              <h1 className="detail-value">{height}</h1>
            </div>
            <div className="about-details">
              <h3 className="detail-name">Weight</h3>
              <h1 className="detail-value">{weight}</h1>
            </div>{" "}
            <div className="about-details">
              <h3 className="detail-name">Abilities</h3>
              <h1 className="detail-value">
                {abilities.map((ability) => {
                  return <li>{ability.ability.name}</li>;
                })}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pokemon-stats"
        style={{ display: activeButton === "stats" ? "flex" : "none" }}
      >
        <h1 className="side-modal-title">Stats</h1>

        {stats.map((pokemonStat) => {
          const { base_stat, stat } = pokemonStat;
          return (
            <div className="stat-details-container">
              <div className="about-details">
                <h3 className="stat-detail-name">{stat.name}</h3>
                <div className="bar-container">
                  <div className="stat-bar">
                    <div
                      className="stat-progress"
                      style={{
                        width: `${base_stat}%`,
                        height: "8px",
                        background: generalColor,
                      }}
                    ></div>
                  </div>
                </div>

                <h1 className="stat-detail-value">{base_stat}</h1>
              </div>
            </div>
          );
        })}
      </section>
      <section className="side-modal-buttons">
        <div className="button-container">
          <button
            className="side-btn"
            onClick={() => setActiveButton("about")}
            style={{
              background: activeButton === "about" ? "white" : "transparent",
            }}
          >
            About
          </button>
          <button
            className="side-btn"
            onClick={() => setActiveButton("stats")}
            style={{
              background: activeButton === "stats" ? "white" : "transparent",
            }}
          >
            Stats
          </button>
          <button
            className="side-btn"
            onClick={() => setActiveButton("similar")}
            style={{
              background: activeButton === "similar" ? "white" : "transparent",
            }}
          >
            Similar
          </button>
        </div>
      </section>{" "}
    </aside>
  );
};

export default SideModal;
