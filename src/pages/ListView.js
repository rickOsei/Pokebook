import "../styling/listview.css";
import "../styling/pokemonCard.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { setSearchItem } from "../Features/listSlice";
import SideModal from "../components/SideModal";
import ColorModal from "../components/ColorModal";

const ListView = () => {
  const { pokemonList, searchState, isLoading, isModalOpen } = useSelector(
    (state) => state.pokemonList
  );
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(searchState);

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
  }, [itemOffset, itemsPerPage, tempPokemonDetails]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemonDetails.length;
    setItemOffset(newOffset);
  };

  // search logic

  const dispatchSearchItem = () => {
    if (searchTerm) {
      dispatch(setSearchItem(searchTerm));
    }
  };
  useEffect(() => {
    dispatchSearchItem();
  }, [searchTerm]);

  const filteredList = currentItems.filter((pokemon) => {
    if (searchState && searchTerm) {
      return pokemon.name.includes(searchState);
    } else {
      return pokemon;
    }
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="list-search-input">
        <input
          type="text"
          placeholder="Enter pokemon name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="list-search-icon">
          <MdOutlineSearch />
        </div>
      </div>
      <section className="pokemon-list-section">
        <div className="pokemon-list-container">
          {filteredList.map((pokemon, index) => {
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
      <ColorModal />
      <SideModal pokemonDetails={pokemonDetails} />
    </>
  );
};

export default ListView;
