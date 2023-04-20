import React from "react";
import Logo from "../svg/Logo";
import "../styling/homeview.css";

const HomeView = ({ color }) => {
  console.log(color);
  return (
    <main>
      <div className="home-main-container">
        <section className="logo-name-description">
          <figure className="home-logo">
            <Logo />
          </figure>
          <h2 className="home-main-title">
            Poké<span style={{ color: color }}>book</span>
          </h2>
          <p className="home-main-description">
            Largest Pokémon index with information <br />
            about every Pokemon you can think of.
          </p>
        </section>

        <section className="search-view">
          <input
            type="text"
            placeholder="Enter pokemon name"
            style={{ borderColor: color }}
          />
          <h4 className="view-list-link">View all</h4>
        </section>
      </div>
    </main>
  );
};

export default HomeView;
