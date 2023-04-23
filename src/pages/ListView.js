import "../styling/listview.css";
import "../styling/pokemonCard.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SideModal from "../components/SideModal";

const ListView = () => {
  const { pokemonList, searchState, isLoading } = useSelector(
    (state) => state.pokemonList
  );

  const [tempPokemonDetails, setTempPokemonDetails] = useState([]);

  const getPokemonDetails = (arr) => {
    arr.forEach(async (pokemon) => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      setTempPokemonDetails((prev) => [...prev, data]);
    });
  };

  useEffect(() => {
    getPokemonDetails(pokemonList);
  }, [pokemonList]);

  const pokemonDetails = tempPokemonDetails.slice(0, 20);

  // react paginate

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pokemonDetails.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pokemonDetails.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemonDetails.length;
    setItemOffset(newOffset);
  };

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
          {currentItems.map((pokemon, index) => {
            return <PokemonCard {...pokemon} key={index} />;
          })}
        </div>
        <div className="pagination-controls">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<BsChevronRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel={<BsChevronLeft />}
            renderOnZeroPageCount={null}
            containerClassName="pokemon-pagination"
            pageLinkClassName="pokemon-page-nav"
            previousLinkClassName="pokemon-page-nav"
            nextLinkClassName="pokemon-page-nav"
            activeLinkClassName="active-num"
          />

          <select
            name="item_num"
            className="item-count"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
          >
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </div>
      </section>
      <SideModal />
    </>
  );
};

export default ListView;
